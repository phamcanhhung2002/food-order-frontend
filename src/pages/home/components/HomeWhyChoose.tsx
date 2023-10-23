import { useEffect, useState } from 'react'
import ItemWhyChoose from '../../../components/home/ItemWhyChoose'

const dataWhyChoose = [
  {
    title: 'Fast Delivery',
    icon: '/images/home/truck.svg' ,
    desc: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
  },
  {
    title: '24/7 services',
    icon: '/images/home/timer.svg' ,
    desc: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
  },
  {
    title: 'Fresh food',
    icon: '/images/home/Hamburger.svg',
    desc: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
  },
  {
    title: 'Quality maintain',
    icon: '/images/home/Factory.svg',
    desc: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
  }
]

const HomeWhyChoose = () => {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  
  useEffect(() => {
    setAnimating(true)
    setTimeout(() => {
      setAnimating(false)
    }, 500)
  }, [active])
  
  return (
    <section className='flex mt-24 justify-between items-center max-lg:flex-col-reverse'>
        <div className='min-w-[700px] flex relative max-sm:min-w-full max-lg:mb-4'>
            <img src='/textures/veget_1.png' alt='veget_1' loading="lazy" className='absolute -z-20 -top-12 right-12'/> 

            <img src='/images/home/whychoose_1.png' alt='why-choose_1' loading="lazy"
              className='pb-40 max-sm:w-9/12'/>
            
            <img src='/images/home/whychoose_2.png' alt='why-choose_2' loading="lazy"
                className='absolute -bottom-0 -right-4 max-sm:w-9/12 max-sm:-right-0  '/>
        </div>

        <div className='w-[538px] max-lg:w-full max-lg:mb-5'>
            <span className="relative font-attractive text-lg text-primary
            after:block after:w-9 after:h-[1px] after:bg-primary 
            after:-right-14 after:bottom-2 after:absolute">
            Why Choose us
            </span>
            <p className="font-bold text-5xl text-text font-san mb-8 max-lg:text-4xl">Why We are the best?</p>
            <div className={`relative right-0 ${animating && 'animate-fadeout'}`}>
              <p className='text-[#828282] mb-4'>{dataWhyChoose[active].desc}</p>
              <p className='text-[#828282] mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue</p>
            </div>

            <div className='gap-x-4 gap-y-4 grid grid-cols-2 max-lg:gap-x-2'> {
                dataWhyChoose.map((item, index) => (
                  <div onClick={() => setActive(index)} className='cursor-pointer'>
                    <ItemWhyChoose title={item.title} icon={item.icon} isActive={index === active}/>
                  </div>
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default HomeWhyChoose