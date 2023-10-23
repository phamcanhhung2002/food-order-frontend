const dataPartners = [
    {
        image: "./images/home/partner_1.png"
    },
    {
        image: "./images/home/partner_2.png"
    },
    {
        image: "./images/home/partner_3.png"
    },
    {
        image: "./images/home/partner_4.png"
    },
    {
        image: "./images/home/partner_5.png"
    },
    {
        image: "./images/home/partner_6.png"
    },
]

const HomePartner = () => {
  return (
    <section className='mt-24 flex flex-col items-center relative mb-12'>
        <p className="relative font-attractive lg:mb-2 mb-1 text-lg text-primary">
            Partner & Clients
        </p>
        <p className="inline-block font-bold lg:text-5xl text-3xl text-text font-sans lg:mb-8 mb-0 relative text-center
            after:content-limb  after:absolute after:-top-20 after:right-64 after:scale-75">
          We work with the best pepole
        </p>

        <div className='flex gap-x-16 mt-16  flex-wrap lg:flex-nowrap justify-evenly'>
            {
                dataPartners.map((item, index:number) => { 
                    return (
                        <img src={item.image} alt="" key={index} loading="lazy" className="lg:w-auto w-20" />
                    )
                })
            }
        </div>
    </section>
  )
}

export default HomePartner