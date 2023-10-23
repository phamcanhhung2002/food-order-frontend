import HomeAboutUs from "./components/HomeAboutUs"
import HomeBlogs from "./components/HomeBlogs"
import HomeCategory from "./components/HomeCategory"
import HomeIntroduce from "./components/HomeIntroduce"
import HomeMenu from "./components/HomeMenu"
import HomePartner from "./components/HomePartner"
import HomeReview from "./components/HomeReview"
import HomeTeam from "./components/HomeTeam"
import HomeWhyChoose from "./components/HomeWhyChoose"


const Home = () => {
  return (
    <div className='pb-24'>
      <img src={'/images/background/bg_home-1.png'} alt='Foodtuck' className='absolute -z-10 top-0 right-0 w-[900px] max-lg:w-[250px]'/>
      
      <HomeIntroduce />
      <HomeAboutUs />
      <HomeCategory />
      <HomeWhyChoose />
      <HomeMenu />
      <HomeTeam />
      <HomeReview />
      <HomeBlogs />
      <HomePartner />
    </div>
  )
}

export default Home