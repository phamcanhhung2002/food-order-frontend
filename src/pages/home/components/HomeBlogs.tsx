import ItemBlogHome from '../../../components/home/ItemBlogHome'
import { dataBlogs } from '../../../data'

const HomeBlogs = () => {
  return (
    <section className='mt-24 flex flex-col items-center'>
      <div className='relative'>
        <p className="inline-block font-bold text-5xl text-text font-sans mb-8 text-center
         after:block after:content-limb after:bottom-10 after:right-32 after:absolute max-lg:text-3xl max-lg:block
        ">
          Latest news & Blog
        </p>
        <p className="text-[#828282] text-center mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className='max-lg:hidden'/>
          Varius sed pharetra dictum neque massa congue
        </p>
      </div>
      
      <div className='grid grid-cols-4 gap-x-10 max-lg:grid-cols-1'>
        {
          dataBlogs.slice(0,4).map((item, index : number) => (
            <ItemBlogHome key={index} image={item.image} title={item.title} desc={item.desc} date={item.date} qtyComment={item.qtyComments} />
          ))
        }
      </div>
    </section>
    )
}

export default HomeBlogs