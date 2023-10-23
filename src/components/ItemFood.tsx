import { HeartOutlined, LinkOutlined, ShoppingOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../state/cart/cartSlice";
import { toast } from "react-toastify";
import { dataFoods } from "../data";

const ItemFood = ({id} : {id: string}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    
    const handleAddToCart = (e : any) => {
        e.stopPropagation();
        toast.success(`Add 01 ${dataFoods[id].name} to cart successfully`)
        dispatch(addProduct({id: id, qty: 1, price: dataFoods[id].salePrice || dataFoods[id].price}))
    }
    return (
    <div className="group w-full">
        <div className={`relative w-full h-[267px] bg-[url('${dataFoods[id].images[0]}')] bg-cover`}
            style={{backgroundImage: 'url(' + dataFoods[id].images[0] + ')'}}
        >
            <div className="w-full h-full absolute bg-[rgba(0,0,0,0.6)] hidden group-hover:block" />
            <div className="w-full h-full  items-center justify-center gap-x-6 hidden group-hover:flex group-hover:brightness-150 z-10 cursor-pointer" onClick={() => navigate('/detail-product/' + id)} >
                <Button className='bg-white text-primary hover:!bg-primary hover:text-white' type="primary" size="large" icon={<LinkOutlined />} 
                    onClick={() => navigate('/detail-product/' + id)}
                />
                <Button className='bg-white text-primary hover:!bg-primary hover:text-white' type="primary" size="large" icon={<ShoppingOutlined />} 
                    onClick={handleAddToCart}
                />
                <Button className='bg-white text-primary hover:!bg-primary hover:text-white' type="primary" size="large" icon={<HeartOutlined />} />
            </div>
        </div>

        <p className="text-[#333] font-bold text-lg">{dataFoods[id].name}</p>
        <div>
            <span className="text-primary mr-2">${dataFoods[id].salePrice}</span>
            <span className="text-[#828282] line-through">${dataFoods[id].price}</span>
        </div>
    </div>
  )
}

export default ItemFood