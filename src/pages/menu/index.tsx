import CoverPage from "../../components/CoverPage"
import MenuCategory from "../../components/menu/MenuCategory"
import MenuStatistics from "../../components/menu/MenuStatistics"
import HomePartner from "../home/components/HomePartner"

const Menu = () => {
  return (
    <div className='min-h-screen'>
        
        <CoverPage title='Our Menu' currentPage='Menu' listPath={[{title: "Home", path: '/'}]} />
        
        <MenuCategory 
            title='Starter Menu'
            image='./images/menu/menu_1.png'
            listFood={[
                {
                title: 'Chicken Burger',
                price: 12,
                image: './images/menu/food_1.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'
                },
                {
                    title: 'Chicken Burger',
                    price: 12,
                    image: './images/menu/food_1.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'
                },
                {
                    title: 'Chicken Burger',
                    price: 12,
                    image: './images/menu/food_1.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'
                },
                {
                    title: 'Chicken Burger',
                    price: 12,
                    image: './images/menu/food_1.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'
                },
            ]}
            isImageLeft
        />

        <MenuCategory 
            title='Main Course'
            image='./images/menu/menu_2.png'
            listFood={[
                {
                title: 'Chicken Burger',
                price: 12,
                image: './images/menu/food_1.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'
                },
                {
                    title: 'Chicken Burger',
                    price: 12,
                    image: './images/menu/food_1.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'
                },
                {
                    title: 'Chicken Burger',
                    price: 12,
                    image: './images/menu/food_1.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'
                },
                {
                    title: 'Chicken Burger',
                    price: 12,
                    image: './images/menu/food_1.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'
                },
            ]}
            isImageLeft={false}
        />

        <MenuStatistics />
        
        <div className='mb-40'/>
        
        <MenuCategory 
            title='Starter Menu'
            image='./images/menu/menu_1.png'
            listFood={[
                {
                title: 'Chicken Burger',
                price: 12,
                image: './images/menu/food_1.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'
                },
                {
                    title: 'Chicken Burger',
                    price: 12,
                    image: './images/menu/food_1.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'
                },
                {
                    title: 'Chicken Burger',
                    price: 12,
                    image: './images/menu/food_1.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'
                },
                {
                    title: 'Chicken Burger',
                    price: 12,
                    image: './images/menu/food_1.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'
                },
            ]}
            isImageLeft
        />

        <MenuCategory 
            title='Main Course'
            image='./images/menu/menu_2.png'
            listFood={[
                {
                title: 'Chicken Burger',
                price: 12,
                image: './images/menu/food_1.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'
                },
                {
                    title: 'Chicken Burger',
                    price: 12,
                    image: './images/menu/food_1.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'
                },
                {
                    title: 'Chicken Burger',
                    price: 12,
                    image: './images/menu/food_1.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'
                },
                {
                    title: 'Chicken Burger',
                    price: 12,
                    image: './images/menu/food_1.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'
                },
            ]}
            isImageLeft={false}
        />

        <HomePartner />
    </div>
  )
}

export default Menu