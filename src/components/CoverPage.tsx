import { RightOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import bgImage from '/images/background/bg-cover.png'


const CoverPage = ({title, currentPage, listPath} : {
    title: string,
    currentPage: string,
    listPath: Array<{title: string, path: string}>
}) => {
  return (
    <div >
        <img src={bgImage} alt='bg-team' loading="lazy" 
            className="w-screen absolute left-0 top-0 -z-10 lg:h-[400px] h-[170px]"/>

        <p className="font-bold lg:text-5xl text-2xl text-white font-san lg:mb-8 text-center lg:pt-28 pt-0 mb-0 ">
          {title}
        </p>

        <Breadcrumb
          items={
              [
                  ...listPath.map((item) => ({title: <Link to={item.path} className='!text-white text-xl'>{item.title}</Link>})),
                  {title: <p className='!text-primary font-bold text-xl drop-shadow-md'>{currentPage}</p>}
              ]
          }
          separator={<p className='text-white'><RightOutlined className='relative -bottom-1' /></p>}
          className='!justify-center flex !text-white lg:mb-40 mb-20 max-lg:items-center'
        />
    </div>
  )
}

export default CoverPage