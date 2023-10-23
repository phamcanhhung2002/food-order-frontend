import ItemMember from "../../../components/home/ItemMember"


const HomeTeam = () => {
  return (
    <section className="mt-24 flex flex-col items-center overflow-x-hidden">
        <div className="absolute w-full">
            <img src='/textures/cabbage.png' alt='team' loading="lazy" className="absolute right-0 z-10 -top-[380px] max-lg:hidden"/>
            <img src='/images/background/bg-team.png' alt='bg-team' loading="lazy" className="w-screen absolute max-lg:min-h-[150px] bg-cover"/>
        </div>
        
        <div className="relative mt-40 max-lg:mt-4">
            <p className="font-bold text-5xl text-white font-san mb-2 text-center max-lg:text-2xl 
            after:block after:content-limb after:bottom-10 after:right-32 after:absolute">
            Team member
            </p>
            <p className="text-white text-center mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className="max-lg:hidden"/>
            Varius sed pharetra dictum neque massa congue</p>
        </div>

        <div className="grid grid-cols-4 gap-x-10 max-lg:grid-cols-2 max-lg:gap-x-4">
            <ItemMember image="./images/home/member_1.png" name="Mark Henry" role="Owner" />
            <ItemMember image="./images/home/member_2.png" name="Mark Henry" role="Chef" />
            <ItemMember image="./images/home/member_3.png" name="Mark Henry" role="Chef" />
            <ItemMember image="./images/home/member_4.png" name="Mark Henry" role="Chef" />
        </div>
    </section>
  )
}

export default HomeTeam