
const ItemWhyChoose = ({title, icon, isActive} : {
    title: string,
    icon: string,
    isActive: boolean
}) => {
  return (
    <div className={`flex h-20 max-w-full bg-white items-center justify-evenly text-[#4f4f4f] relative max-lg:h-14
        rounded-md border`}>
        <div className={`w-2 bg-primary h-full left-0 absolute rounded-s-sm max-lg:w-1 ${isActive ? 'block' : 'hidden'}`}/>
        <img src={icon} alt={title} className="w-12 h-12 max-lg:w-6 max-lg:h-6"/>
        <p className="font-bold text-xl max-lg:text-base text-center">{title}</p>
    </div>
  )
}

export default ItemWhyChoose