import { Rate } from 'antd'
const ItemLastestProduct = ({image, name, point, price} : {
    image: string,
    name: string,
    point: number,
    price: number
}) => {
  return (
    <div className='flex'>
        <img src={image} alt={name}/>
        <div className='ml-6'>
            <p className='text-[#4f4f4f]'>{name}</p>
            <Rate defaultValue={point} disabled className='!text-xs text-primary'/>
            <p className='text-[#4f4f4f] text-sm'>${price}</p>
        </div>
    </div>
  )
}

export default ItemLastestProduct