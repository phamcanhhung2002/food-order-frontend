import CoverPage from '../../components/CoverPage'
import BlogList from './components/BlogList'
import BlogSidebar from './components/BlogSidebar'
const Blog = () => {  
  return (
    <div>
      <CoverPage currentPage='Blog' title='Blog List' listPath={[{title: 'Home', path:'/'}]}/>

      <div className='flex justify-between gap-10 lg:flex-row flex-col'>
        
        <section className='lg:w-8/12 w-full  flex flex-col gap-y-14 grow-0'>
          <BlogList />
        </section>

        <aside className='lg:w-4/12 w-full grow-0'>
          <BlogSidebar />
        </aside>
      </div>
    </div>
  )
}

export default Blog