import { EyeOutlined, FacebookFilled, InstagramFilled, TwitterOutlined, YoutubeFilled } from '@ant-design/icons'
import { Input, Rate } from 'antd'
import ItemRecentBlog from '../../../components/blog/ItemRecentBlog'
import { dataBlogs } from '../../../data'
import ItemFilterMenu from '../../../components/blog/ItemFilterMenu'

const INSTAGRAM_GALLERY = [
    '/images/footer/ins-gallery_1.png',
    '/images/footer/ins-gallery_2.png',
    '/images/footer/ins-gallery_3.png',
    '/images/footer/ins-gallery_4.png',
    '/images/footer/ins-gallery_5.png',
    '/images/footer/ins-gallery_6.png', 
]
const listProductTags : Array<string> = [
    'Services', 'Our Menu', "Pizza", 'Cupcake', 'Burger', 'Cookies', 'Our Shop', 'Tandooori Chicken'
]

const dataFilterMenu = [
    {
        title: 'Chicken Fry',
        qty: 26,
        image: '/images/blog/filter_1.png', 
    },
    {
        title: 'Burger Food',
        qty: 46,
        image: '/images/blog/filter_2.png', 
    },
    {
        title: 'Pizza',
        qty: 16,
        image: '/images/blog/filter_3.png', 
    },
    {
        title: 'Fresh Fruits',
        qty: 36,
        image: '/images/blog/filter_4.png', 
    },
    {
        title: 'Vegetables',
        qty: 16,
        image: '/images/blog/filter_5.png', 
    },
]
  
const BlogSidebar = () => {
  return (
    <>
        <Input.Search placeholder="Search Product" onSearch={() => {}} size='large'
            className='overide-blog-search h-[70px]'
            height={70}
        />

        <div className='border border-1 border-[#E0E0E0] mt-6 p-8 flex flex-col items-center' >
            <img src={'/images/blog/avatar-creator.png'} alt='Avatar' className='rounded-full w-[115px] h-[115px] object-cover'/>   
            <p className='font-bold text-xl text-[#333] mt-6'>Prince Miyako</p> 
            <p className='text-base text-[#828282] mt-2'>Blogger/Photographer</p>
            <div className='flex text-sm text-[#828282] mt-2 items-center gap-x-2'>
                <Rate className='text-sm text-primary' disabled defaultValue={100}/>
                <p>(1 Review)</p>
            </div>
            <p className='text-base text-[#828282] w-[300px] text-center mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis distinctio, odio eligendi suscipit reprehenderit atque</p>        
            <p className="text-lg text-[#333] items-center mt-6 flex gap-x-4">
                <YoutubeFilled/> 
                <FacebookFilled/> 
                <TwitterOutlined/> 
                <InstagramFilled/> 
            </p>
        </div>


        <div className='border border-1 border-[#E0E0E0] mt-8 pt-8 pb-4 px-12' >
            <p className='font-bold text-[#333] text-xl mb-8'>Recent Post</p>
            <ItemRecentBlog image={dataBlogs[0].image} date={dataBlogs[0].date} title={dataBlogs[0].title}/>
            <ItemRecentBlog image={dataBlogs[1].image} date={dataBlogs[0].date} title={dataBlogs[0].title}/>
            <ItemRecentBlog image={dataBlogs[2].image} date={dataBlogs[0].date} title={dataBlogs[0].title}/>
            <ItemRecentBlog image={dataBlogs[3].image} date={dataBlogs[0].date} title={dataBlogs[0].title}/>
        </div>


        <div className='border border-1 border-[#E0E0E0] mt-8 pt-8 pb-4 px-12' >
            <p className='font-bold text-[#333] text-xl mb-8'>Filter By Menu</p>

            <div>
                {
                    dataFilterMenu.map((item, index) => {
                        return (
                            <ItemFilterMenu image={item.image} key={index} name={item.title} qty={item.qty}/>
                        )
                    })
                }
            </div>
        </div>


        <div className='border border-1 border-[#E0E0E0] mt-8 pt-8 pb-4 px-12 flex-grow-0' >
            <p className='font-bold text-[#333] text-xl mb-8'>Popular Tags</p>
            <div className='flex flex-row flex-wrap gap-4 grow-0'>
                {
                    listProductTags.map((item, index) => {
                        return (
                            <div key={index} className='px-6 py-2 border border-1 border-[#E0E0E0] inline-block'>
                                {item}
                            </div>
                        )
                    })
                }
            </div>

        </div>


        <div className='border border-1 border-[#E0E0E0] mt-8 pt-8 pb-4 px-12' >
            <p className='font-bold text-[#333] text-xl mb-6'>Photo Gallery</p>
            <div className='grid grid-cols-3 grid-rows-2 gap-4'>
                {INSTAGRAM_GALLERY.map((item, index) => (
                    <div className='relative group' key={index}>
                        <img src={item}  alt='image' className='w-full' />
                        <div className='w-full h-full absolute bg-[rgba(0,0,0,.6)] top-0 hidden group-hover:flex justify-center'><EyeOutlined className='text-4xl text-white'/></div>
                    </div>
                ))}
            </div>

        </div>


        <div className='border border-1 border-[#E0E0E0] mt-8 pt-8 pb-4 px-12' >
            <p className='font-bold text-[#333] text-xl mb-5'>Follow Us</p>
            <div className='flex gap-x-3 justify-center pb-5' >
                <YoutubeFilled className='p-3 bg-disabledGreen hover:bg-primary hover:text-white text-2xl'/> 
                <FacebookFilled className='p-3 bg-disabledGreen hover:bg-primary hover:text-white text-2xl'/> 
                <TwitterOutlined className='p-3 bg-disabledGreen hover:bg-primary hover:text-white text-2xl'/> 
                <InstagramFilled className='p-3 bg-disabledGreen hover:bg-primary hover:text-white text-2xl'/> 
            </div>
        </div>
    </>
  )
}

export default BlogSidebar