import { FacebookFilled, InstagramFilled, TwitterOutlined, YoutubeFilled } from '@ant-design/icons'

import CoverPage from '../../components/CoverPage'
import { dataBlogs } from '../../data'
import ItemBlog from '../../components/blog/ItemBlog'
import ItemComment from '../../components/ItemComment'
import { Button, Divider, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import BlogSidebar from '../blog/components/BlogSidebar'


const DetailBlog = () => {
    const dataBlog = dataBlogs[0]
    return (
    <article>
        <CoverPage currentPage='Blog' title='Blog List' listPath={[{title: 'Home', path:'/'}]}/>

        <div className='flex justify-between gap-10 mb-32'>
            <section className='w-8/12 flex flex-col gap-y-14 grow-0 text-[#4f4f4f] text-base'>
                <ItemBlog image={dataBlog.image} title={dataBlog.title} desc={dataBlog.desc} 
                    date={dataBlog.date} qtyComments={dataBlog.qtyComments}  creator={dataBlog.creator}
                />
                <div className='bg-primary text-white pl-20 pr-5 py-6 relative'>
                    <p className='font-bold text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                    <img src='/textures/quotes-white.svg' alt='quotes' className='absolute top-5 left-4'/>
                </div>

                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
                ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>

                <div className='flex'>
                    <div>
                        <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
                        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        </p>
                        <p className='mt-4'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
                        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit 
                        amet, consetetur sadipscing
                        </p>
                    </div>
                    
                    <img src={'/images/home/dish_1.png'} className='w-[600px]'/>
                </div>

                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
                ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                <p className='mt-4'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit 
                amet, consetetur sadipscing
                </p>

                <div className='flex border border-1 p-4 justify-between'>
                    <p className='text-[#828282] '>
                        <span className='font-bold text-base text-[#333333]'>Tags: </span>
                        Restaurant, Dinner, Pizza, Yummy,
                    </p>
                    <div className='flex items-center gap-x-4 text-[#333] font-bold'>
                        Share: 
                        <p className='flex gap-x-3 text-[#4f4f4f]'>
                            <FacebookFilled/> 
                            <YoutubeFilled/> 
                            <TwitterOutlined/> 
                            <InstagramFilled/> 
                        </p>
                    </div>
                </div>

                <div>
                    <p className='font-bold text-3xl text-[#333] mb-8'>Comments - 03</p>

                    <div className='flex flex-col gap-5'>
                        <ItemComment />
                        <ItemComment />
                        <ItemComment />
                    </div>
                </div>
                
                <div>
                    <p className='font-bold text-3xl text-[#333] mb-8'>Post a comment</p>

                    <Divider />

                    <div className='flex mb-6 gap-x-6'>
                        <Input className='rounded-none h-[56px]' placeholder='Name(*)'/>
                        <Input className='rounded-none h-[56px]' placeholder='Email(*)'/>
                    </div>
                    
                    <TextArea placeholder="Autosize height based on content lines" autoSize className='rounded-none !min-h-[240px]' />
                    
                    <Button className='bg-primary text-white h-[56px] w-[210px] rounded-none mt-6'>Post a comment</Button>
                </div>
            </section>

            <aside className='w-4/12 grow-0'>
                <BlogSidebar />
            </aside>
        </div>

    </article>
  )
}

export default DetailBlog