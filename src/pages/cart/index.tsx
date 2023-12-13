import TableCart from "./components/TableCart";
import CoverPage from "../../components/CoverPage";
import { Button, Divider, Input } from "antd";
import { SelectOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { appApi } from "../../api/appApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { logOut } from "../../state/user/userSlide";
import { ICart } from "../../types/cartType";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<ICart | null>(null);
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

  return (
    <div>
      <CoverPage
        title="Shopping Cart"
        currentPage="Shopping Cart"
        listPath={[{ path: "/", title: "Home" }]}
      />
      {cart ? (
        <>
          <TableCart cart={cart} setCart={setCart} />

          <div className="flex gap-x-10 mt-24 max-lg:flex-col">
            <div className="basis-1/2">
              <p className="font-bold text-[#333] text-3xl mb-6">Coupon Code</p>
              <div className="p-6 border border-[#e0e0e0] rounded-md">
                <p className="mb-6 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non
                </p>
                <Input
                  addonAfter={
                    <p className="h-14 flex items-center justify-center w-[90px] text-lg">
                      Apply
                    </p>
                  }
                  placeholder="Enter Code Here"
                  className="overide-input--cart w-full rounded-none h-14"
                />
              </div>
            </div>

            <div className="basis-1/2">
              <p className="font-bold text-[#333] text-3xl mb-6">Total Bill</p>
              <div className="border border-[#E0E0E0] p-6 rounded-md">
                <p className="flex justify-between mb-4 font-bold text-xl text-[#333]">
                  Cart Subtotal <span>${Number(cart.subTotal).toFixed(2)}</span>
                </p>
                <p className="flex justify-between text-[#4F4F4F] text-lg">
                  Shipping Charge <span>$0.00</span>
                </p>
                <Divider />
                <p className="flex justify-between font-bold text-xl text-[#333]">
                  Total Amount <span>${cart.subTotal}</span>
                </p>
              </div>
              <Button
                className="flex mt-6 items-center justify-center rounded-none h-14 text-base w-full
            text-white bg-primary hover:!bg-[#248001]"
                type="primary"
                onClick={() => navigate("./checkout")}
              >
                Proceed to Checkout
                <SelectOutlined />
              </Button>
            </div>
          </div>
        </>
      ) : (
        <p>There is currently no order.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
