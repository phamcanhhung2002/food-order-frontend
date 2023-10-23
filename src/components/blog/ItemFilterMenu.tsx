
const ItemFilterMenu = ({image, name, qty} : {
    image: string,
    name: string,
    qty: number,
}) => {
  return (
    <div className='flex gap-x-4 items-center mb-4'>
        <img src={image} alt={name} className='h-[70px] w-[70px] rounded-md'/>

        <p className='text-[#333] font-bold text-base'>{name}</p>

        <p className='text-[#333] text-base ml-auto'>{qty}</p>
    </div>
  )
}

export default ItemFilterMenu