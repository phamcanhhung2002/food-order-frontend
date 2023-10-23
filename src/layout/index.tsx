import Header from './components/Header'
import Footer from './components/Footer'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const DefaultLayout = ({children} : {children : React.ReactNode}) => {
  const { pathname } = useLocation();

  useEffect(() => { window.scrollTo({top: 0, behavior:'smooth'}) }, [pathname]);

  return (
    <>
      <Header />
      <main className='px-[10vw] overflow-x-hidden'>
      {children}
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout