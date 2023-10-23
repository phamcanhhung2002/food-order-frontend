
const STATISTICS = [
    {
        image: './images/menu/statistics_1.svg',
        title: 'Professional Chefs',
        amount: "420",
    },
    {
        image: './images/menu/statistics_2.svg',
        title: 'Items Of Food',
        amount: "320",
    },
    {
        image: './images/menu/statistics_3.svg',
        title: 'Years Of Experienced',
        amount: "30+",
    },
    {
        image: './images/menu/statistics_4.svg',
        title: 'Happy Customers',
        amount: "200"
    }
]

const MenuStatistics = () => {
  return (
    <section>
        <div className="relative w-screen left-[-10vw] bg-[url('./images/menu/bg-statictis.png')] lg:h-[500px] h-[300px] bg-cover ">
            <div className="h-full w-full bg-[rgba(0,0,0,.8)] flex justify-evenly px-0 items-center flex-wrap">
                {
                    STATISTICS.map((item, index) => (
                        <div key={index}>
                            <img src={item.image} alt={item.title} className="lg:w-24 w-16 mx-auto" />
                            <p className="text-white text-center lg:mt-10 mt-2 lg:text-4xl text-2xl font-bold">{item.amount}</p>
                            <p className="text-white text-center lg:text-2xl text-lg font-bold lg:mt-5 mt-1">{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default MenuStatistics