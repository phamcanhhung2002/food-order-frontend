import { Button, Checkbox, Divider, Form, Input, Select } from "antd";
import CoverPage from "../../components/CoverPage";
import ItemFoodCheckout from "../../components/ItemFoodCheckout";
import {
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ICart, ICartProduct, IShippingAddress } from "../../types/cartType";
import { appApi } from "../../api/appApi";
import { logOut, setNumOfFoodsInOrder } from "../../state/user/userSlide";
import { RootState } from "../../state/store";
import { toast } from "react-toastify";

const listFieldCheckout = [
  { name: "First name", type: "text", inputName: "firstName" },
  { name: "Last name", type: "text", inputName: "lastName" },
  { name: "Email address", type: "email", inputName: "email" },
  { name: "Phone number", type: "number", inputName: "phone" },
  { name: "Company", type: "text", inputName: "company" },
  { name: "Country", type: "select", inputName: "country" },
  { name: "City", type: "select", inputName: "city" },
  { name: "Zip Code", type: "number", inputName: "zipCode" },
  { name: "Address 1", type: "text", inputName: "address1" },
  { name: "Address 2", type: "text", inputName: "address2" },
];

const Checkout = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<ICart>({
    foods: [],
    subTotal: 0,
    deliveryFee: 0,
    tax: 0,
    total: 0,
  });
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const getCart = async () => {
      try {
        const { data } = await appApi.getCart(user.id);

        setCart(data.order);
      } catch (err) {
        dispatch(logOut());
      }
    };

    getCart();
  }, []);

  const onFinish = async (values: IShippingAddress) => {
    try {
      const { data } = await appApi.checkout(user.id, values);

      toast.success(data.message);
      dispatch(setNumOfFoodsInOrder(0));
      navigate("/shop");
    } catch (error) {
      dispatch(logOut());
    }
  };

  return cart ? (
    <div>
      <CoverPage
        title="Checkout Page"
        currentPage="Checkout"
        listPath={[{ title: "Home", path: "/" }]}
      />

      <div className="flex gap-x-10 max-lg:flex-col">
        <article className="basis-8/12 text-[#333]">
          <p className="font-bold text-xl mb-6">Shipping Address</p>
          <Form
            onFinish={onFinish}
            initialValues={{
              remember: true,
            }}
          >
            <div className="grid grid-cols-2 gap-5 mb-8 max-lg:grid-cols-1 max-lg:mb-10">
              {listFieldCheckout.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="text-base mb-2">{item.name}</p>
                    <Form.Item
                      initialValue={""}
                      name={item.inputName}
                      rules={
                        item.inputName !== "address2"
                          ? [
                              {
                                required: true,
                                message: `Please input your ${item.name}!`,
                              },
                              item.inputName === "email"
                                ? {
                                    required: true,
                                    type: "email",
                                    message: "The input is not valid E-mail!",
                                  }
                                : {},
                            ]
                          : undefined
                      }
                    >
                      {item.type === "select" ? (
                        <Select
                          style={{ width: 120 }}
                          onChange={() => {}}
                          options={[
                            { value: "Vietnam", label: "Vietnam" },
                            { value: "Laos", label: "Laos" },
                            { value: "Campuchia", label: "Campuchia" },
                            {
                              value: "China",
                              label: "China",
                            },
                          ]}
                          className="overide-select--checkout !w-full rounded-none"
                        />
                      ) : (
                        <Input className="rounded-none h-14" />
                      )}
                    </Form.Item>
                  </div>
                );
              })}
            </div>
            <div>
              <p className="font-bold text-xl mb-2">Billing Address</p>
              <Checkbox className="overide-shop-checkbox" onChange={() => {}}>
                Same as shipping address
              </Checkbox>
              ;
            </div>
            <div className="mt-6 grid grid-cols-2 gap-5">
              <Button
                className="flex items-center justify-center rounded-none h-14 text-base text-[#4F4F4F]
                          hover:!text-primary hover:!border-primary"
                onClick={() => navigate("/cart")}
              >
                <LeftOutlined />
                Back to cart
              </Button>
              <Form.Item>
                <Button
                  className="flex items-center bg-primary text-white w-full h-[58px] justify-center text-lg font-bold"
                  htmlType="submit"
                >
                  Place an order <ArrowRightOutlined />{" "}
                </Button>
              </Form.Item>
            </div>
          </Form>
        </article>

        <aside className="basis-4/12 p-6 border border-1 border-[#e0e0e0] h-full">
          <div>
            {cart?.foods.map((item: ICartProduct, index: number) => (
              <ItemFoodCheckout key={index} item={item.food} />
            ))}
          </div>

          <div className="flex flex-col gap-2 text-[#4F4F4F] mb-6">
            <p className="text-base flex justify-between">
              Sub-total
              <span className="text-[#333]">{cart.subTotal}$</span>
            </p>
            <p className="text-base flex justify-between">
              Shipping
              <span className="text-[#333]">{cart.deliveryFee}</span>
            </p>
            <p className="text-base flex justify-between">
              Discount
              <span className="text-[#333]">{cart.voucher?.discount ?? 0}</span>
            </p>
            <p className="text-base flex justify-between">
              Tax
              <span className="text-[#333]">{cart.tax}</span>
            </p>
            <Divider className="m-0" />
            <p className="text-base flex justify-between font-lg text-[#333]">
              Total{" "}
              <span className="font-bold">
                {Number(
                  cart.subTotal * (1 - (cart.voucher?.discount ?? 0)) +
                    cart.subTotal * cart.tax +
                    cart.deliveryFee
                ).toFixed(2)}
                $
              </span>
            </p>
          </div>

          <Button
            type="primary"
            className="flex items-center justify-center rounded-none h-14 text-base text-white
                          bg-primary
                      "
          >
            Proceed to shipping
            <RightOutlined />
          </Button>
        </aside>
      </div>
    </div>
  ) : (
    <Navigate to="/shop" replace />
  );
};

export default Checkout;
