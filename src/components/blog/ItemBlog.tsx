import { CalendarOutlined, CommentOutlined, FullscreenOutlined, UserAddOutlined } from '@ant-design/icons'
import { Button, Divider } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'

const ItemBlog = ({image, date, qtyComments, creator,  title, desc} : {
    image: string,
    date: string,
    qtyComments: number,
    creator: string,
    title: string,
    desc: string
}) => {
    const navigate = useNavigate()
    const {id} = useParams()
    
    return (
        <div className={` w-full relative ${id === undefined && 'cursor-pointer'} `}
        >
            <img src={image} alt="blog" className="lg:h-[520px] h-[240px] w-[100%] object-cover"/>
            <div className='rounded-md bg-primary absolute top-5 left-5 px-6 py-3 flex items-center flex-col'>
                <p className='font-bold text-lg text-white'>14</p>
                <p className='text-white'>Feb</p>
            </div>
            
            <div className='mt-4'>
                <div className='flex gap-x-4 mb-4 lg:justify-start justify-between text-sm'>
                    <p className='text-[#333] max-lg:flex max-lg:flex-col max-lg:items-center'>
                        <CalendarOutlined className='text-primary mr-2 text-xl'/> 
                        {date}
                    </p>
                    <p className='text-[#333] cursor-pointer hover:underline max-lg:flex max-lg:flex-col max-lg:items-center'>
                        <CommentOutlined className='text-primary mr-2 text-xl'/> 
                        Comments ({qtyComments < 10 ? `0${qtyComments}` : qtyComments})
                    </p>
                    <p className='text-[#333] cursor-pointer hover:underline max-lg:flex max-lg:flex-col max-lg:items-center'>
                        <UserAddOutlined className='text-primary mr-2 text-xl'/> 
                        {creator}
                    </p>
                </div>  

                <p className='font-bold text-2xl'>{title}</p>
                <Divider className='px-7 w-[60%] max-lg:my-3' />
                <p className='text-[#4f4f4f] mb-6'>{desc}</p>
                {
                    id === undefined &&                    
                    <Button className='border-primary text-primary w-44 h-12' onClick={() => id === undefined && navigate('/blog/1')}>Read more <FullscreenOutlined /> </Button>    
                }
            </div>
        </div>
  )
}

export default ItemBlog