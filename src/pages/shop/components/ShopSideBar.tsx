import { useEffect, useState } from "react";
import { RightCircleOutlined } from "@ant-design/icons";
import { Checkbox, Input } from "antd";
import { Slider } from "antd";
import ItemLastestProduct from "../../../components/shop/ItemLastestProduct";
import { FilterType } from "../../../types/filterType";
import { Category } from "../../../types/listType";
import { appApi } from "../../../api/appApi";
import { useNavigate } from "react-router-dom";

const listProductTags: Array<string> = [
  "Services",
  "Our Menu",
  "Pizza",
  "Cupcake",
  "Burger",
  "Cookies",
  "Our Shop",
  "Tandooori Chicken",
];
const ShopSideBar = ({
  handleFilters,
  setError,
}: {
  handleFilters: (filterValue: FilterType) => void;
  setError: (error: boolean) => void;
}) => {
  const [categories, setCategories] = useState<Array<Category>>([]);

  const [productTags, setProductTags] = useState<Array<string>>([
    "Services",
    "Pizza",
  ]);

  const [bestSellers, setBestSellers] = useState([])
  const navigate = useNavigate()
  const handleClickTag = (item: string) => {
    if (productTags.includes(item)) {
      setProductTags(
        productTags.filter((tag) => productTags.includes(tag) && tag !== item)
      );
    } else {
      setProductTags([...productTags, item]);
    }
    // Call API
  };

  useEffect(() => {
    try {
      const getCategories = async () => {
        try {
          const res = await appApi.allCategories();
          const { categories } = res.data;
          setCategories(categories);
          const {data} = await appApi.bestSeller(4)
          setBestSellers(data.data)
        } catch (err) {
          setError(true);
        }
      };
      getCategories();
    } catch (err) {
      setError(true);
    }
  }, []);
  return (
    <aside className="py-6 px-9 shadow-inner">
      <Input.Search
        placeholder="Search Product"
        onSearch={(value: string) => {
          if (value.length !== 0) {
            handleFilters({
              name: value,
            });
          } else {
            handleFilters({
              name: undefined,
            });
          }
        }}
        size="large"
        className="overide-shop-search"
      />

      <div>
        <p className="font-bold text-[#333] text-xl my-6">Category</p>
        <Checkbox.Group
          onChange={(checkValue) => {
            if (checkValue.length === 0) {
              handleFilters({ cat: undefined });
            } else {
              handleFilters({
                cat: checkValue.map((val) => val.toString()),
              });
            }
          }}
        >
          <div className="flex flex-col gap-y-4">
            {categories.map((item, index) => (
              <Checkbox
                key={index}
                value={item.id}
                className="overide-shop-checkbox !font-sans text-[#333] text-lg"
              >
                {item.name}
              </Checkbox>
            ))}
          </div>
        </Checkbox.Group>
      </div>

      <div>
        <p className="font-bold text-[#333] text-xl my-6">Filter By Price</p>
        <Slider
          range
          defaultValue={[0, 100]}
          className="overide-shop-slider"
          onAfterChange={(value) =>
            handleFilters({
              minPrice: value[0],
              maxPrice: value[1],
            })
          }
        />
        <p className="flex justify-between text-[#0D0D0D]">
          <span>From $0 to $100</span>
          <span>Filter</span>
        </p>
      </div>

      <div className="relative mt-6">
        <img
          src="./images/shop/ads_perfect-taste.png"
          alt="Ads"
          className="w-full"
        />
        <div className="absolute top-0 text-white py-7 px-6 h-full">
          <p className="font-bold mb-1">Perfect Taste</p>
          <p className="font-bold text-xl mb-3">Classic Restaurant</p>
          <p className="font-bold text-primary">45.00$</p>
          <p className="mt-auto flex items-center gap-x-2 bottom-10 absolute">
            Shop now <RightCircleOutlined />
          </p>
        </div>
      </div>

      <div>
        <p className="font-bold text-[#333] text-xl my-6">Best Sellers</p>
        <div className="flex flex-col gap-4">
          {
            bestSellers.map((item: any) => <ItemLastestProduct 
              image={item.featuredImageId}
              name = {item.name}
              point = {item.rating}
              price = {item.currentPrice}
              onClick={() => navigate(`/detail-product/${item.id}`)}
            />)
          }
        </div>
      </div>

      <div>
        <p className="font-bold text-[#333] text-xl my-6">Product Tags</p>
        <div className="flex flex-wrap">
          {listProductTags.map((item, index) => (
            <span
              className={`mr-5 text-base text-[#4f4f4f] mb-4 border-b-2 border-[#F2F2F2]
                        cursor-pointer hover:border-primary 
                        ${
                          productTags.includes(item) &&
                          " border-primary text-primary"
                        }`}
              key={index}
              onClick={() => handleClickTag(item)}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ShopSideBar;
