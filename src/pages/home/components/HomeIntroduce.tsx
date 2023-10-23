import { Button } from "antd"
import React, { useEffect } from "react"
import '../../animation.css'
import { useNavigate } from "react-router-dom"
const demoDish = ['/images/home/dish_1.png', '/images/home/dish_2.png', '/images/home/dish_3.png', '/images/home/dish_4.png']

const circleCss = [
  {
    angle: 'rotate-0',
    tsl: 'translate-x-[15%] -translate-y-[48%]',
    width: 'w-[700px] max-sm:w-[210px] max-lg:w-[350px]',
    lgWidth: ''
  },
  {
    angle: 'rotate-[140deg]',
    tsl: 'translate-x-1/2 -translate-y-1/2',
    width: 'w-16 max-sm:w-10 max-lg:w-14',
  },
  {
    angle: 'rotate-[180deg]',
    tsl: 'translate-x-1/2 -translate-y-1/2',
    width: 'w-24 max-sm:w-14 max-lg:w-20',
  },
  {
    angle: 'rotate-[220deg]',
    tsl: 'translate-x-1/2 -translate-y-1/2',
    width: 'w-32 max-sm:w-20 max-lg:w-28',
  }
]


const HomeIntroduce = () => {
  const navigate = useNavigate()
  // index: image static, value: image position 
  const [itemsPosition, setItemsPosition] = React.useState<Array<number>>([3,0,1,2])

  // index: image static, value: image angle
  const [itemsAngle, setItemsAngle] = React.useState<Array<number>>([220, 0, 140,180])

  const handleClickDish = (index: number) => {
    if (itemsPosition[index] === 0) return;
    let next : Array<number> = [], angles : number[] = [];
    
    if (index === 3) next = [1,2,3,0]
    else if (index === 2) next = [2,3,0,1]
    else if (index === 1) next = [3,0,1,2]
    else if (index === 0) next = [0,1,2,3]

    angles = next.map((item, index) => 
      itemsAngle[index] > itemsAngle[itemsPosition.indexOf(item)] ? 
        itemsAngle[itemsPosition.indexOf(item)] + 360 : itemsAngle[itemsPosition.indexOf(item)]
    )

    setItemsAngle(angles)
    setItemsPosition(next)
  }


  useEffect(() => {
    const myTimeout = setTimeout(() => {
      handleClickDish(0)
    }, 1000)

    return () => {
      clearTimeout(myTimeout)
    }
  }, [])


  return (
    <section className="h-[calc(100vh-42px)] flex flex-col justify-center max-lg:h-auto ">
      <div className="flex items-center justify-between pb-24 max-lg:flex-col-reverse" >
        <div className="w-[525px] max-lg:w-full max-lg:mt-10">
            <span className="relative font-attractive mb-2 text-lg text-primary
              after:block after:w-7 after:h-[1px] after:bg-primary 
              after:-right-14 after:bottom-2 after:absolute">
              Healthy & Testy Food
            </span>
            
            <p className="font-bold text-6xl text-text font-sans mb-8 max-lg:text-3xl max-lg:mb-2 
              after:inline-block after:content-star after:relative after:-bottom-8 after:max-lg:hidden">
              Enjoy Healthy Life & Testy Food.
            </p>
            
            <p className="text-base text-content mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
            Varius sed pharetra dictum neque massa congue </p>
            
            <Button type="primary" onClick={() => navigate('/menu')}className="bg-primary font-bold mr-4 h-14 w-52 text-lg max-xl:w-32">Show more</Button>
            <Button type="default" onClick={() => navigate('/shop')}className="border-primary  text-primary font-bold h-14 w-56 text-lg max-lg:w-36">Place an order</Button>
        </div>

        <div className="relative w-[600px] h-[600px] border-2 border-text rounded-full z-0 mr-24 max-lg:w-[60vw] max-lg:h-[60vw] max-lg:ml-auto max-lg:mr-auto max-lg:mt-10 max-lg:scale-100">
          <img src='/images/background/bg-dish.png' alt="bg-dish" className="absolute -bottom-40 -right-64 w-[800px] rotate -z-10 "/>
          <div>
            <div className={`absolute top-[calc(50%-2px)] left-0 w-full h-1 transition-all duration-[2.2s] ease-in-out ${itemsPosition[0] === 0 && 'z-[-5]'}`}
              style={{transform: `rotate(${itemsAngle[0]}deg)`}}
            > 
              <img src={demoDish[0]} alt="dish0" className={`absolute right-0 bg-cover cursor-pointer transition-all duration-[2.2s] ease-in-out ${circleCss[itemsPosition[0]].tsl} ${circleCss[itemsPosition[0]].width} ${circleCss[itemsPosition[0]].lgWidth} ${itemsPosition[0] === 0 && 'cursor-default'}`}
                onClick={() => handleClickDish(0)}
              />
            </div>

            <div className={`absolute top-[calc(50%-2px)] left-0 w-full h-1 transition-all duration-[2.2s] ease-in-out ${itemsPosition[1] === 0 && 'z-[-5]'} `}
              style={{transform: `rotate(${itemsAngle[1]}deg)`}}
            > 
              <img src={demoDish[1]} alt="dish0" className={`absolute right-0 bg-cover cursor-pointer transition-all duration-[2.2s] ease-in-out  ${itemsPosition[1] === 0 && 'cursor-default '} ${circleCss[itemsPosition[1]].tsl} ${circleCss[itemsPosition[1]].width} ${circleCss[itemsPosition[1]].lgWidth} `}
                onClick={() => handleClickDish(1)}
              />
            </div>

            <div className={`absolute top-[calc(50%-2px)] left-0 w-full h-1 transition-all duration-[2.2s] ease-in-out ${itemsPosition[2] === 0 && 'z-[-5]'} `}
              style={{transform: `rotate(${itemsAngle[2]}deg)`}}
            > 
              <img src={demoDish[2]} alt="dish0" className={`absolute right-0 bg-cover cursor-pointer transition-all duration-[2.2s] ease-in-out  ${itemsPosition[2] === 0 && 'cursor-default '} ${circleCss[itemsPosition[2]].tsl} ${circleCss[itemsPosition[2]].width} ${circleCss[itemsPosition[2]].lgWidth}`}
                onClick={() => handleClickDish(2)}
              />
            </div>

            <div className={`absolute top-[calc(50%-2px)] left-0 w-full h-1 transition-all duration-[2.2s] ease-in-out ${itemsPosition[3] === 0 && 'z-[-5]'} roate`}
              style={{transform: `rotate(${itemsAngle[3]}deg)`}}
           
           > 
              <img src={demoDish[3]} alt="dish0" className={`absolute right-0 bg-cover cursor-pointer transition-all duration-[2.2s] ease-in-out  ${itemsPosition[3] === 0 && 'cursor-default '} ${circleCss[itemsPosition[3]].tsl} ${circleCss[itemsPosition[3]].width} ${circleCss[itemsPosition[3]].lgWidth}`}
                onClick={() => handleClickDish(3)}
             />
            </div>

            <div className={`absolute top-[calc(50%-2px)] left-0 w-full h-1 rotate-[-20deg] -z-20`}> 
              <img src={'/textures/leaf.png'} alt="leaf" className="-translate-x-1/2 "/>
            </div>

          </div>
        </div>
    </div>



    <div className="self-center flex flex-col items-center absolute bottom-10 animate-bounce cursor-pointer max-lg:hidden"
      onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}         
    >
        <p>Scrolldown</p>
        <div className="w-[1px] h-20 bg-black"></div>
    </div>

    </section>
  )
}

export default HomeIntroduce