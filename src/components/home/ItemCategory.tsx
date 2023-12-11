const CLOUD_NAME = "dtkyjtgbg";

const ItemCategory = ({name, amountRemain, image} : {name: string, amountRemain: number, image?: string}) => {
  return (
    <div className="max-w-[300px] w-full ml-auto mr-auto px-5">
        <img src={image?.includes('https://') ? image :` https://res.cloudinary.com/${CLOUD_NAME}/image/upload/dishes/${image}.jpg`} alt="ItemCategory" className="w-full  object-cover !h-[180px]"/>
        <p className="text-center font-bold text-xl text-[#4f4f4f] mt-4">{name}</p>
        <p className="text-center text-[#828282] my-2">{amountRemain} items</p>
    </div>
  )
}

export default ItemCategory