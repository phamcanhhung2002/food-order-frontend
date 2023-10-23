import React from 'react'
import ItemMenu from '../../../components/home/ItemMenu'
import { Button } from 'antd'

const typeMenu : Array<string> = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"]


const HomeMenu = () => {
  const [activeTypeMenu, setActiveTypeMenu] = React.useState<number>(0)

  return (
    <section className='mt-24  flex flex-col items-center'>
      <div className='relative'>
        <p className="font-bold text-5xl text-text font-sans mb-8  max-lg:text-3xl max-lg:text-center
         after:block after:content-limb after:bottom-10 after:right-32 after:absolute max-lg:after:right-20 
        ">
          Our Food Menu
        </p>
        <p className="text-[#828282] text-center mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className='max-lg:hidden'/> 
          Varius sed pharetra dictum neque massa congue
        </p>
      </div>
      <div className='flex gap-x-10 border-b-[1px] border-[#E0E0E0] w-full justify-center max-lg:overflow-x-scroll'>
        {
          typeMenu.map((item, index : number) => (
            <div key={index} onClick={() => setActiveTypeMenu(index)} 
            className={`text-[#4f4f4f] text-xl cursor-pointer pb-5
              ${index === activeTypeMenu ? "text-primary border-b-2 border-primary" : ""}
            `}>
              {item}
            </div>
          ))
        }


      </div>
      <div className='flex justify-between flex-wrap w-full pt-14 mb-14'>
        <div className='basis-[calc(50%-20px)] max-lg:basis-full'>
          <ItemMenu />
        </div>
        <div className='basis-[calc(50%-20px)] max-lg:basis-full'>
          <ItemMenu />
        </div>
        <div className='basis-[calc(50%-20px)] max-lg:basis-full'>
          <ItemMenu />
        </div>
        <div className='basis-[calc(50%-20px)] max-lg:basis-full'>
          <ItemMenu />
        </div>
        <div className='basis-[calc(50%-20px)] max-lg:basis-full'>
          <ItemMenu />
        </div>
        <div className='basis-[calc(50%-20px)] max-lg:basis-full'>
          <ItemMenu />
        </div>
      </div> 

      <Button type="default" className="border-primary  text-primary font-bold h-14 w-56 text-lg ml-auto mr-auto">View menu</Button>
    </section>
  )
}

export default HomeMenu