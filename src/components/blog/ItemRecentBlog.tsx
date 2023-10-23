import { Divider } from "antd"

const ItemRecentBlog = ({image, date, title} : {
    image: string,
    date: string,
    title: string
}) => {
  return (
    <>
      <div className="flex gap-x-4">
          <img src={image} alt={title} className="w-[100px] h-[100px] object-cover rounded-md"/>
          <div>
              <p className="mb-2 text-[#828282] text-sm">{date}</p>
              <p className="text-[#4f4f4f] text-base">{title}</p>
          </div>
      </div>
      <Divider />
    </>
  )
}

export default ItemRecentBlog