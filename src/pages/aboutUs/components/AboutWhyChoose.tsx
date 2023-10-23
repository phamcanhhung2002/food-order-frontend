const AboutWhyChoose = () => {
  return (
    <section className='flex flex-col items-center'>
      <div className='relative flex flex-col items-center'>
        <p className="inline-block font-bold text-5xl text-text font-sans mb-8 text-center
         after:block after:content-limb after:bottom-10 after:right-32 after:absolute
        ">
          Why Choose us
        </p>
        <p className="text-[#828282] text-center mb-14">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br />
        pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>
    </div>

    <img src='/images/about/bg-whychoose.png' alt="whychoose" loading="lazy" className="w-full" />

    <div className="flex justify-between mt-14 w-full">
        <div className="w-[360px] flex flex-col items-center">
            <img src='/images/about/chef.svg' alt="chef" />
            <p className="font-bold text-2xl text-[#333] mt-6">Best Chef</p>
            <p className="text-[#4f4f4f] mt-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque diam pellentesque bibendum non dui volutpat</p>
        </div>

        <div className="w-[360px] flex flex-col items-center">
            <img src='/images/about/coffee.svg' alt="chef" />
            <p className="font-bold text-2xl text-[#333] mt-6">120 Item food</p>
            <p className="text-[#4f4f4f] mt-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque diam pellentesque bibendum non dui volutpat</p>
        </div>

        <div className="w-[360px] flex flex-col items-center">
            <img src='/images/about/person.svg' alt="chef" />
            <p className="font-bold text-2xl text-[#333] mt-6">Clean Environment</p>
            <p className="text-[#4f4f4f] mt-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque diam pellentesque bibendum non dui volutpat</p>
        </div>
    </div>
        
    </section>
  )
}

export default AboutWhyChoose