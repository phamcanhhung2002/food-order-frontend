import { Button, Checkbox, Divider, Input, Select } from 'antd'
import CoverPage from '../../components/CoverPage'
import ItemFoodCheckout from '../../components/ItemFoodCheckout'
import { ArrowRightOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const listFieldCheckout = [
    { name: "First name", type: "text"},
    { name: "Last name", type: "text"},
    { name: "Email address", type: "email"},
    { name: "Phone number", type: "number"},
    { name: "Company", type: "text"},
    { name: "Country", type: "select"},
    { name: "City", type: "select"},
    { name: "Zip Code", type: "number"},
    { name: "Address 1", type: "text"},
    { name: "Address 2", type: "text"}
]

const Checkout = () => {
    const navigate = useNavigate();
    const { cart } = useSelector((state : any) => state)
    
    return (
    <div >
        <CoverPage title='Checkout Page' currentPage='Checkout' listPath={[{title: "Home", path: '/'}]}/>

        <div className='flex gap-x-10 max-lg:flex-col'>
            <article className='basis-8/12 text-[#333]'>
                <p className='font-bold text-xl mb-6'>Shipping Address</p>
                <div className='grid grid-cols-2 gap-5 mb-8 max-lg:grid-cols-1 max-lg:mb-10'>
                    {
                        listFieldCheckout.map((item, index) => { return (
                            <div key={index}>
                                <p className='text-base mb-2'>{item.name}</p>
                                {
                                    item.type === 'select' ? (
                                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={() => {}} options={[
                                          { value: 'jack', label: 'Jack' },
                                          { value: 'lucy', label: 'Lucy' },
                                          { value: 'Yiminghe', label: 'yiminghe' },
                                          { value: 'disabled', label: 'Disabled', disabled: true },
                                        ]}
                                        className='overide-select--checkout !w-full rounded-none'
                                      />
                                    ) : (
                                        <Input className='rounded-none h-14'/>
                                    )
                                }
                            </div>
                        )})
                    }
                </div>
                <div>
                    <p className='font-bold text-xl mb-2'>Billing Address</p>
                    <Checkbox className='overide-shop-checkbox' onChange={() => {}}>Same as shipping address</Checkbox>;
                </div>

                <div className='mt-6 grid grid-cols-2 gap-5'>
                    <Button className='flex items-center justify-center rounded-none h-14 text-base text-[#4F4F4F]
                        hover:!text-primary hover:!border-primary'
                        onClick={() => navigate('/cart')}    
                    >
                        <LeftOutlined /> 
                        Back to cart
                    </Button>

                    <Button type="primary" className='flex items-center justify-center rounded-none h-14 text-base text-white
                        bg-primary 
                    '>
                        Proceed to shipping 
                        <RightOutlined /> 
                    </Button>
                </div>
            </article>


            <aside className='basis-4/12 p-6 border border-1 border-[#e0e0e0] h-full'>
                <div>
                    {
                        cart.listProducts.map((item : any, index : number) => <ItemFoodCheckout key={index} id={item.id} />)
                    }
                </div>
                
                <div className='flex flex-col gap-2 text-[#4F4F4F] mb-6'>
                    <p className='text-base flex justify-between'>
                        Sub-total 
                        <span className='text-[#333]'>{cart.total}$</span>
                    </p>
                    <p className='text-base flex justify-between'>
                        Shipping 
                        <span className='text-[#333]'>Free</span>
                    </p>
                    <p className='text-base flex justify-between'>
                        Discount 
                        <span className='text-[#333]'>25%</span>
                    </p>
                    <p className='text-base flex justify-between'>
                        Tax 
                        <span className='text-[#333]'>10%</span>
                    </p>
                    <Divider className='m-0'/>
                    <p className='text-base flex justify-between font-lg text-[#333]'>Total <span className='font-bold'>{Number(cart.total*0.75 + cart.total*0.1).toFixed(2)}$</span></p>
                </div>

                <Button className='flex items-center bg-primary text-white w-full h-[58px] justify-center text-lg font-bold'>Place an order <ArrowRightOutlined /> </Button>
            </aside>
        </div>
    </div>
  )
}

export default Checkout