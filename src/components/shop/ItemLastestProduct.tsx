import { Rate } from 'antd'
import { useNavigate } from 'react-router-dom'
const ItemLastestProduct = ({image, name, point, price, onClick} : {
    image: string,
    name: string,
    point: number,
    price: number
    onClick: () => void
}) => {
  return (
    <div className='flex cursor-pointer hover:opacity-70' onClick={onClick}>
        <img src={image} alt={name} className='w-20 h-20 object-cover'/>
        <div className='ml-6'>
            <p className='text-[#4f4f4f]'>{name}</p>
            <Rate defaultValue={point} disabled className='!text-xs text-primary'/>
            <p className='text-[#4f4f4f] text-sm'>${price}</p>
        </div>
    </div>
  )
}

export default ItemLastestProduct