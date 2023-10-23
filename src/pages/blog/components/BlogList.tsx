import ItemBlog from '../../../components/blog/ItemBlog'
import { dataBlogs } from '../../../data'
const BlogList = () => {
    return (
    <>
        {
            dataBlogs.map((item, index) => (
                <ItemBlog image={item.image} date={item.date} qtyComments={item.qtyComments} creator={item.creator} title={item.title} desc={item.desc} key={index}/>
            ))
        }
    </>
    )
}

export default BlogList