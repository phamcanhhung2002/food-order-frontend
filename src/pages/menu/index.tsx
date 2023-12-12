import { useEffect, useState } from "react";
import CoverPage from "../../components/CoverPage";
import MenuCategory from "../../components/menu/MenuCategory";
import HomePartner from "../home/components/HomePartner";
import { appApi } from "../../api/appApi";
import { Spin } from "antd";

const Menu = () => {
  const [dataMenu, setDataMenu] = useState([]);
  useEffect(() => {
    const fetchMenus = async () => {
      const { data } = await appApi.allMenus();
      setDataMenu(data);
    };
    fetchMenus();
  }, []);

  return (
    <div className="min-h-screen">
      <CoverPage title="Our Menu" currentPage="Menu" listPath={[{ title: "Home", path: "/" }]} />

      <div className="flex justify-center w-full">{dataMenu.length === 0 && <Spin size="large" />}</div>
      {dataMenu.map((menu: any, index: number) => (
        <MenuCategory
          title={menu.name}
          image={`./images/menu/menu_${index % 2 === 0 ? "1" : "2"}.png`}
          listFood={menu.foods.map((food: any) => {
            return {
              title: food.name,
              price: food.currentPrice,
              image: food.featuredImageId,
              description: food.introduction,
              energy: food.energy,
            };
          })}
          isImageLeft={index % 2 === 0}
        />
      ))}

      <HomePartner />
    </div>
  );
};

export default Menu;
