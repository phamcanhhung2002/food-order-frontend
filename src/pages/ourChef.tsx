import CoverPage from "../components/CoverPage"
import ItemMember from "../components/home/ItemMember"
import { dataMembers } from "../data"



const OurChef = () => {
  return (
    <div>
        <CoverPage title="Our Chef" currentPage="Chef" listPath={[{title: "Home", path:"/"}]}/>
          
        <div className="grid grid-cols-5 gap-10 ">
        {
            dataMembers.map((item, index) => {
                return (
                    <ItemMember key={index} image={'/images/home/member_1.png'} role={item.role} name={item.name}/>
                )
            })
        }
        </div>

        <div>

        </div>
    </div>
  )
}

export default OurChef