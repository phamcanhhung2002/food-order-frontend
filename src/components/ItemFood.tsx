import {
  HeartOutlined,
  LinkOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Food } from "../types/listType";
import { appApi } from "../api/appApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { logOut, setNumOfFoodsInOrder } from "../state/user/userSlide";
import { AxiosError } from "axios";

const ItemFood = ({ food }: { food: Food }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const handleAddToCart = async (e: any) => {
    e.stopPropagation();

    try {
      const { data } = await appApi.addFoodToOrder(user.id, food.id);
      const newNumOfFoodsInOrder = data.order.total;
      if (newNumOfFoodsInOrder !== user.numOfFoodsInOrder) {
        dispatch(setNumOfFoodsInOrder(newNumOfFoodsInOrder));
      }
      toast.success(`Add 01 ${food.name} to cart successfully!`);
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
    <div className="group w-full">
      <div className={`relative w-full h-[267px] bg-cover`}>
        <img
          src={food.featuredImageId}
          className="w-full h-[267px] object-cover absolute"
        />
        <div className="w-full h-full absolute bg-[rgba(0,0,0,0.6)] hidden group-hover:block" />
        <div
          className="w-full h-full  items-center justify-center gap-x-6 hidden group-hover:flex group-hover:brightness-150 z-10 cursor-pointer"
          onClick={() => navigate("/detail-product/" + food.id)}
        >
          <Button
            className="bg-white text-primary hover:!bg-primary hover:text-white"
            type="primary"
            size="large"
            icon={<LinkOutlined />}
            onClick={() => navigate("/detail-product/" + food.id)}
          />
          <Button
            className="bg-white text-primary hover:!bg-primary hover:text-white"
            type="primary"
            size="large"
            icon={<ShoppingOutlined />}
            onClick={handleAddToCart}
          />
          <Button
            className="bg-white text-primary hover:!bg-primary hover:text-white"
            type="primary"
            size="large"
            icon={<HeartOutlined />}
          />
        </div>
      </div>

      <p className="text-[#333] font-bold text-lg">{food.name}</p>
      <div>
        <span className="text-primary mr-2">${food.currentPrice}</span>
        {food.currentPrice < food.price && (
          <span className="text-[#828282] line-through">${food.price}</span>
        )}
      </div>
    </div>
  );
};

export default ItemFood;
