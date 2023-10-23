const ItemMenu = () => {
  return (
    <div className='flex flex-row w-full justify-between lg:mb-6 mb-2 border-b-[1px] border-[#E0E0E0] border-dashed'>
        <div>
            <p className='text-[#333] lg:text-2xl text-lg font-bold lg:pb-2 pb-1'>Alder Grilled Chinook Salmon</p>
            <p className='text-[#4f4f4f] pb-2'>Toasted French bread topped with romano, cheddar</p>
            <p className='text-[#828282] pb-4'>560 CAL</p>
        </div>

        <p className='font-bold lg:text-2xl text-lg text-primary'>32$</p>
    </div>
  )
}

export default ItemMenu