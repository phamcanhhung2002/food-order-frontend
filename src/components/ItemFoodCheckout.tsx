import { dataFoods } from "../data"

const ItemFoodCheckout = ({id} : {id: string}) => {
    const itemData = dataFoods[id]
    return (
    <div className="flex pb-4 border-b-[1px] border-[#E0E0E0] mb-6">
        <img src={itemData.images[0]} alt={itemData.name} className="w-20 h-20 object-cover mr-4"/>

        <div>
            <p className="text-[#333] font-bold text-base mb-2">{itemData.name}</p>
            <p className="text-[#4f4f4f] mb-1">150 gm net</p>
            <p className="text-[#4f4f4f]">{Number(itemData.price).toFixed(2)}$</p>  
        </div> 
    </div>
  )
}

export default ItemFoodCheckout