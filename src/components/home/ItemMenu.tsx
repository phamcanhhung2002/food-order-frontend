const ItemMenu = ({
  title,
  price,
  description,
  energy,
}: {
  title: string;
  price: number;
  image: string;
  description: string;
  energy: number;
}) => {
  return (
    <div className="flex flex-row w-full justify-between lg:mb-6 mb-2 border-b-[1px] border-[#E0E0E0] border-dashed">
      <div>
        <p className="text-[#333] lg:text-2xl text-lg font-bold lg:pb-2 pb-1">{title}</p>
        <p className="text-[#4f4f4f] pb-2 ">{description}</p>
        <p className="text-[#828282] pb-4">{energy} CAL</p>
      </div>

      <p className="font-bold lg:text-2xl text-lg text-primary">{price}$</p>
    </div>
  );
};

export default ItemMenu;
