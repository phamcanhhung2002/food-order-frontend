import CoverPage from '../../components/CoverPage'
import { PlusOutlined } from '@ant-design/icons'

const dataFAQ = [
    {title: 'How we serve food?', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"},
    {title: 'How can we get in touch with you?', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?'},
    {title: 'How is our food quality?', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?'},
    {title: 'What will be delivered? And When?', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?'},
    {title: 'How do we give home delivery?', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?'},
    {title: 'Is this restaurant 24 hours open?', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?'},
]


const ItemFAQ = ({title, content} : {title: string, content: string}) => {
    return (
        <div className='bg-[#FAF7F2] p-6 rounded-lg'>
            <div className='flex justify-between items-center mb-6'>
                <p className='text-[#333] font-bold text-lg'>{title}</p>
                <PlusOutlined />
            </div>
            <p className='text-[#4F4F4F] text-base'>{content}</p>
        </div>
    )
}

const FAQ = () => {
  return (
    <div>
        <CoverPage title="FAQ Page" listPath={[{path:'/', title:'Home'}]} currentPage='FAQ'/>
        
        <div className='text-[#333] flex flex-col items-center justify-center'>
            <p className='font-bold text-5xl mb-2'>Question Looks Here</p>
            <p className='text-[#4f4f4f] text-base mb-14'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
        </div>
        <div className='grid grid-cols-2 gap-10'>
            {
                dataFAQ.map((item, index) => {
                    return (
                        <ItemFAQ key={index} title={item.title} content={item.content}/>
                    )
                })
            }        

        </div>


    </div>
  )
}

export default FAQ