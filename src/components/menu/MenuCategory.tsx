import { CoffeeOutlined } from "@ant-design/icons"
import ItemMenu from "../home/ItemMenu"

const MenuCategory = ({title, image, listFood, isImageLeft} : {
    title: string,
    image: string,
    listFood: Array<{
        title: string,
        price: number,
        image: string,
        description: string
    }>,
    isImageLeft: boolean
}) => {
  return (
    <section className={`max-w-full lg:flex block lg:mb-40 mb-10 justify-between ${!isImageLeft ? ' flex-row-reverse' : ''}`}>
        <img src={image} alt={title} className={`lg:h-[662px] h-[250px] ml-auto mr-auto ${isImageLeft ? "lg:mr-20" : "lg:ml-20"}`}/>
        
        <div className="lg:min-w-[720px] flex-grow lg:mt-0 mt-4">
            <CoffeeOutlined className="text-primary lg:text-2xl text-lg lg:mb-2 mb-0" />
            <p className="lg:text-5xl text-xl font-bold mb-6">{title}</p>
            {
                listFood.map((item, index: number) => (
                    <ItemMenu {...item} key={index} />
                ))
            }
        </div>
    
    </section>
  )
}

export default MenuCategory