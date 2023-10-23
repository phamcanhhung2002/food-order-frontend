import { ContentReview, UserInfoReview } from '../../../components/home/ItemReview'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useEffect, useState } from 'react'


const dataReviews = [
    {
        avatar: '/images/home/avatar-review_1.png',
        name: 'Abdur Rahman',
        role: 'Customer',
        
        image: '/images/home/review-dish_1.png',
        title: 'Order now',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum fringilla bibendum. Urna, elit augue urna,',
        price: 10,
        point: 5

    },
    {
        avatar: '/images/home/avatar-review_1.png',
        name: 'Phi name',
        role: 'Customer',
        
        image: '/images/home/item-category_1.png',
        title: 'Order now',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum fringilla bibendum. Urna, elit augue urna,',
        price: 10,
        point: 4

    }
]


const HomeReview = () => {
    const [indexData, setIndexData] = useState(0);
    const [animating, setAnimating] = useState(false)
    useEffect(() => {
        setAnimating(true)
        const myTimeout = setTimeout(() => {
            setAnimating(false)
        }, 500)
      return () => {
        clearTimeout(myTimeout)
      }
    }, [indexData])
    
    
    return (
    <section className='mt-24 flex max-lg:flex-col justify-between'>
        <div className='w-[536px] max-lg:w-full'>
            <span className="relative font-attractive mb-2 text-lg text-primary
            after:block after:w-7 after:h-[1px] after:bg-primary 
            after:-right-14 after:bottom-2 after:absolute">
            Testimonials
            </span>
            
            <p className="font-bold text-6xl text-text font-sans mb-2 max-lg:text-3xl">
                Customer Review
            </p>

            <img src='/textures/quotes.png' alt='quotes' className='mb-8 max-lg:scale-75 max-lg:mb-2' />

            <p className="text-base text-content mb-12 max-lg:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

            <div className={`flex justify-between items-center max-lg:mb-4`}>
                <UserInfoReview avatar={dataReviews[indexData].avatar} name={dataReviews[indexData].name} role={dataReviews[indexData].role}/>
                <div>
                    <Button size='large' icon={<ArrowLeftOutlined />} disabled={indexData === 0} onClick={() => setIndexData(prv => prv - 1)} className="bg-white"/>
                    <Button size='large' icon={<ArrowRightOutlined />} disabled={indexData === dataReviews.length - 1}  onClick={() => setIndexData(prv => prv + 1)}  className="bg-white ml-4"/>
                </div>
            </div>
        </div>
        <div className={animating ? 'animate-fadeout relative' : "relative"}>
            <ContentReview image={dataReviews[indexData].image} title={dataReviews[indexData].title} desc={dataReviews[indexData].desc} price={dataReviews[indexData].price} point={dataReviews[indexData].point} />
        </div>
    </section>
  )
}

export default HomeReview