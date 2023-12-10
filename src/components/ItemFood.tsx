import {
  HeartOutlined,
  LinkOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../state/cart/cartSlice";
import { toast } from "react-toastify";
import { Food } from "../types/listType";


const ItemFood = ({ food }: { food: Food }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (e: any) => {
    e.stopPropagation();
    toast.success(`Add 01 ${food.name} to cart successfully`);
    dispatch(addProduct({ id: food.id, qty: 1, price: food.currentPrice }));
  };

  return (
    <div className="group w-full">
      <div
        className={`relative w-full h-[267px]  bg-cover`}
        style={{
          backgroundImage: "url(" + food.featuredImageId + ")",
        }}
      >
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
