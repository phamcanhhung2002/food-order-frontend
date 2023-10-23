import { Select } from "antd"
import ShopSideBar from "./components/ShopSideBar"
import ShopPagination from "./components/ShopPagination"
import CoverPage from "../../components/CoverPage"
import ItemFood from "../../components/ItemFood"

const Shop = () => {
  return (
    <article >
        <CoverPage title='Shop' currentPage='Shop' listPath={[{title: "Home", path: '/'}]} />

        <section className='flex gap-x-8 items-center pt-10 mb-6 max-lg:flex-col max-lg:items-start max-lg:gap-y-3 max-lg:pt-0'>
            <div className='flex items-center gap-x-2'>
                <p>Sort By</p>
                <Select
                defaultValue="price"
                style={{ width: 120 }}
                options={[
                    { value: 'price', label: 'Price' },
                    { value: 'fvr', label: 'Favourites' },
                ]}
                />
            </div>

            <div className='flex items-center gap-x-2'>
                <p>Show</p>
                <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
                />
            </div>
        </section>

        <section className='flex gap-x-10 '>
            <div className='basis-9/12 flex flex-col items-center max-lg:basis-full max-lg:w-full '>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2  2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 gap-10 w-full max-lg:gap-0 max-lg:gap-y-6'>
                    <ItemFood id="1"/>
                    <ItemFood id="2"/>
                    <ItemFood id="3"/>
                    <ItemFood id="4"/>
                    <ItemFood id="5"/>
                    <ItemFood id="6"/>
                    <ItemFood id="7"/>
                    <ItemFood id="8"/>
                    <ItemFood id="9"/>
                    <ItemFood id="2"/>
                    <ItemFood id="3"/>
                    <ItemFood id="4"/>
                    <ItemFood id="5"/>
                    <ItemFood id="6"/>
                    <ItemFood id="8"/>
                </div>
                <ShopPagination qtyPage={5} currentPage={1}/>
            </div>

            <div className='basis-3/12 h-5 bg-65 max-lg:hidden'>
                <ShopSideBar />
            </div>
        </section>
        

    </article>
  )
}

export default Shop