import { InputNumber, Rate } from "antd";
import { CloseOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { appApi } from "../../../api/appApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { logOut, setNumOfFoodsInOrder } from "../../../state/user/userSlide";
import { ICart, ICartProduct } from "../../../types/cartType";

const labelColTable = [
  { title: "Product", size: "!w-[100%]", center: false },
  { title: "Price", size: "w-[15%]", center: true },
  { title: "Quantity", size: "w-[20%]", center: true },
  { title: "Total", size: "w-[15%]", center: true },
  { title: "Remove", size: "w-[20%]", center: true },
];

const TableCart = ({
  cart,
  setCart,
}: {
  cart: ICart;
  setCart: (cart: ICart) => void;
}) => {
  return (
    <table className="w-full border-separate border-spacing-y-8 max-lg:max-w-[calc(100vw-20vw)]">
      <thead>
        <tr>
          {labelColTable.map((label, index) => (
            <th
              key={index}
              className={`w-[${
                label.size
              }%] text-left font-bold text-lg text-[#333] ${
                label.center && "text-center"
              }`}
            >
              {label.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cart.foods.map((item, index) => (
          <CellTableCart key={index} cartProduct={item} setCart={setCart} />
        ))}
      </tbody>
    </table>
  );
};

const CellTableCart = ({
  cartProduct,
  setCart,
}: {
  cartProduct: ICartProduct;
  setCart: (cart: ICart) => void;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const dataItemFood = cartProduct.food;

  const handleRemoveProduct = async () => {
    try {
      const { data } = await appApi.removeFoodFromOrder(
        user.id,
        dataItemFood.id
      );
      setCart(data.order);
      {
        dispatch(setNumOfFoodsInOrder(data.order?.total ?? 0));
      }
      toast.success(`Remove ${dataItemFood.name} from cart succesfully!`);
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.status === 401) {
        navigate("/login", {
          state: { from: location.pathname },
          replace: true,
        });
      } else {
        dispatch(logOut());
      }
    }
  };

  const handleUpdateProduct = async (quantity: number) => {
    try {
      const { data } = await appApi.updateProduct(
        user.id,
        dataItemFood.id,
        quantity
      );
      setCart(data.order);
      const mewNumOfFoodsInOrder = data.order?.total ?? 0;
      if (mewNumOfFoodsInOrder !== user.numOfFoodsInOrder) {
        dispatch(setNumOfFoodsInOrder(mewNumOfFoodsInOrder));
      }
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.status === 401) {
        navigate("/login", {
          state: { from: location.pathname },
          replace: true,
        });
      } else {
        dispatch(logOut());
      }
    }
  };

  return (
    <tr className="border border-slate-600">
      <td
        className={`${labelColTable[0].size} flex gap-3 h-[120px] border-b border-[#E0E0E0]`}
      >
        <img
          src={dataItemFood.featuredImageId}
          alt="food"
          className="w-[100px] h-[100px] object-cover "
        />
        <div className="w-full">
          <p className="font-bold text-base">{dataItemFood.name}</p>
          <Rate
            disabled
            defaultValue={cartProduct.food.rating}
            className="text-primary text-base max-lg:hidden"
          />
        </div>
      </td>

      <td
        className={`${labelColTable[1].size} text-base text-[#333] border-b border-[#E0E0E0] text-center`}
      >
        {Number(dataItemFood.currentPrice).toFixed(2)}$
      </td>

      <td
        className={`${labelColTable[2].size} text-left font-bold text-lg text-[#333] border-b border-[#E0E0E0]`}
      >
        <div className="flex justify-center">
          <InputNumber
            addonBefore={
              <div
                className={
                  "w-[20px] h-[20px] flex items-center justify-center :"
                }
                onClick={() => handleUpdateProduct(cartProduct.quantity - 1)}
              >
                <MinusOutlined
                  className={
                    "w-full h-full p-0 text-xs" +
                    (cartProduct.quantity === 1 ? " !text-[#ccc]" : "")
                  }
                />
              </div>
            }
            addonAfter={
              <div
                className=" w-[20px] h-[20px] flex items-center justify-center"
                onClick={() => handleUpdateProduct(cartProduct.quantity + 1)}
              >
                <PlusOutlined className="text-xs" />
              </div>
            }
            min={1}
            value={cartProduct.quantity}
            controls={false}
            className="overide-input--qty-cart mr-4 !max-w-[110px] "
          />
        </div>
      </td>

      <td
        className={`${labelColTable[3].size} font-bold text-base text-[#333] border-b border-[#E0E0E0] text-center`}
      >
        {Number(dataItemFood.currentPrice * cartProduct.quantity).toFixed(2)}$
      </td>

      <td
        className={`${labelColTable[4].size} font-bold text-lg text-[#333] border-b border-[#E0E0E0] max-lg:hidden`}
      >
        <div
          className="flex justify-center cursor-pointer hover:text-primary hover:text-xl"
          onClick={handleRemoveProduct}
        >
          <CloseOutlined />
        </div>
      </td>
    </tr>
  );
};

export default TableCart;
