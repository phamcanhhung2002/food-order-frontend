import CoverPage from '../../components/CoverPage'
import { Button } from 'antd'

const NotFound = () => {
  return (
    <div className='max-h-screen'>
      <CoverPage title='404 Error' currentPage='404' listPath={[{title: "Home", path: '/'}]}/>

      <div className='pt-16 pb-28 flex flex-col items-center max-lg:pt-0 max-lg:-mt-10'>
        <p className='font-bold text-8xl text-primary mb-8'>404</p>
        <p className='font-bold text-3xl text-[#333] mb-6 text-center'>Oops! Look likes something going wrong</p>
        <p className='text-[#4f4f4f] text-lg mb-8 text-center'>Page Cannot be found! we’ll have it figured out in no time. <br className='max-lg:hidden'/> Menwhile, cheek out these fresh ideas</p>

        <Button type="primary" className="bg-primary font-bold mr-4 h-14 w-52 text-lg">Go to home</Button>
      </div>
    </div>
  )
}

export default NotFound