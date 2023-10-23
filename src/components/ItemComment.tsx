import { CalendarOutlined, RollbackOutlined } from '@ant-design/icons'

const ItemComment = () => {
  return (
    <div className='flex gap-x-4 w-full'>
        <img src='/images/blog/avatar-creator.png' alt='Avatar' 
            className='w-[70px] h-[70px] rounded-full mb-6'
        />
        <div>
            <div className='flex gap-x-4'>
                <p className='font-bold text-[#333]'>MD Sojib Khan</p>
                <p className='text-[#333]'>
                    <RollbackOutlined className='mr-2' />
                    Reply
                </p>
            </div>

            <p className='text-[#828282] flex items-center'>
                <CalendarOutlined className='text-primary mr-2 text-xl'/> 
                June 22, 2020
            </p>
            <p className='text-[#4f4f4f]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc orci tellus, fermentum nec imperdiet sed, pulvinar 
            et sem, Fusce hendrerit faucibus sollicitudin.
            </p>
        </div>
    </div>
  )
}

export default ItemComment