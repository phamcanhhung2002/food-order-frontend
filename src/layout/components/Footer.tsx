import { Link } from "react-router-dom"
import { FOOTER_SITEMAP } from "../../constant/sitemap"
import { SendOutlined } from "@ant-design/icons"
import { Input } from "antd"

const INSTAGRAM_GALLERY = [
  '/images/footer/ins-gallery_1.png',
  '/images/footer/ins-gallery_2.png',
  '/images/footer/ins-gallery_3.png',
  '/images/footer/ins-gallery_4.png',
  '/images/footer/ins-gallery_5.png',
  '/images/footer/ins-gallery_6.png', 
]
 
const Footer = () => {
  return (
    <footer className='w-full mt-10'>
      <div className="bg-disabledGreen lg:pt-32 pt-10 relative px-[10vw]">
        <img src='/textures/limb_big.png' alt="limb" className="absolute -top-56 left-0 z-[-5]" />
        <img src='/textures/cauliflower.png' alt='cauliflower' className="right-0 absolute -bottom-16" />
        <div className="lg:flex lg:justify-between lg:flex-row flex flex-col gap-y-6">
          <div className="w-64">
            <p className="font-sans text-2xl font-bold mr-16 mb-6">F
              <span className="text-primary">oo</span>
              dtuck
            </p>
            <p className="mb-6">Subscribe our newsletter and get discount 25% off</p>
            <Input
              addonAfter={<SendOutlined />}
              placeholder="Enter Your Email"
              className="overide_input w-60 h-10"
              size="large"
            />
          </div>
          
          <div className="flex flex-col gap-y-4">
            <p className="font-bold text-[#333] text-xl mb-2">Contact us</p>
            <p className="text-[#333] text-lg">Kolkata India , 3rd Floor, Office 45</p>
            <p className="text-[#333] text-lg">00965 - 96659986</p>
            <p className="text-[#333] text-lg">M.Alyaqout@4house.Co</p>
            <p className="text-[#333] text-lg">Sun - Sat / 10:00 AM - 8:00 PM</p>
          </div>

          <div className="flex flex-col gap-y-4 max-lg:flex-row max-lg:flex-wrap max-lg:gap-x-20">
            <p className="font-bold text-[#333] text-xl mb-2 max-lg: w-full">Links</p>
            {
              FOOTER_SITEMAP.map((item,index) => (
                <Link to={item.path} key={index}>
                  {item.title}
                </Link>
              ))
            }
          </div>

          <div className="pb-24">
            <p className="font-bold text-[#333] text-xl mb-6">Instagram Gallery</p>
            <div className="grid grid-cols-3 gap-2 min-w-[336px]">
              {
                INSTAGRAM_GALLERY.map((item,index) => (
                  <img src={item} key={index} alt="Dish" />
                ))
              }
            </div>
          </div>
        </div>
      </div>
      

      <div className='bg-primary px-[10vw]  block w-full min-h-[64px] items-center text-white'>
        <p>Copyright © 2000-2020.logo.com. All rights reserved</p>

        <div className="flex ml-auto gap-x-6">
          <p>Privacy Policy</p>
          <p>Term of Use</p>
          <p>Partner</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer