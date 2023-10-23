import { Rate } from 'antd';

const UserInfoReview = ({avatar, name, role}: {
    avatar: string,
    name: string, 
    role: string,
}) => {
  return (
    <div className='flex items-center'>
        <img src={avatar} alt={name} className='mr-4 rounded-full max-lg:mr-2'/>
        <div>
            <p className='font-bold text-[#4f4f4f] '>{name}</p>
            <p className='text[#828282] mt-2'>{role}</p>
        </div>
    </div>
  )
}

const ContentReview = ({image, title, desc, price, point} : {
    image: string,
    title: string,
    desc: string,
    price: number,
    point: number,
}) => {
    return (
        <div className='relative'>
            <img src={image} alt={title} className=' bg-content bg-repeat h-[500px] w-[750px] bg-cover max-lg:w-full max-lg:h-auto'/>
            <div className='w-[400px] max-lg:w-full flex flex-col absolute p-5 -left-10 -bottom-8 max-lg:relative max-lg:left-0 max-lg:bottom-10 bg-white rounded-md shadow-md shadow-cyan-500/50'>
                <div className='flex justify-between'>
                    <div>
                        <p className='font-bold text-xl text-[#333]' >{title}</p>
                        <Rate defaultValue={point} className='!text-primary'/>
                    </div>
                    <p className='text-[#4f4f4f] font-bold mt-2'>{price}.00$</p>
                </div>
                <p className='text-[#828282] mt-4'>{desc}</p>
            </div>
        </div>
    )
}

export {UserInfoReview, ContentReview}