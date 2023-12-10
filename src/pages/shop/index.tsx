import { Select } from "antd";
import ShopSideBar from "./components/ShopSideBar";
import ShopPagination from "./components/ShopPagination";
import CoverPage from "../../components/CoverPage";
import ItemFood from "../../components/ItemFood";
import { useEffect, useState } from "react";
import { appApi } from "../../api/appApi";

const Shop = () => {
  const [foods, setFoods] = useState([]);
  const [filters, setFilters] = useState<{
    name: string,
    sort: "price";
    currentPage: number;
    minPrice: number;
    maxPrice: number;
    category: number | undefined;
  }>({
    name: "",
    sort: "price",
    currentPage: 0,
    minPrice: 0,
    maxPrice: 2000,
    category: undefined,
  });
  const [metaData, setMetaData] = useState({
    numPage: 0,
    numItem: 0
  })

  useEffect(() => {
    const fetchData = async () => {
      console.log(filters.category)
      const { data } = await appApi.filterFoods({
        name: filters.name,
        page: filters.currentPage,
        size: 9,
        categoryId: filters.category,
        minPrice: filters.minPrice,
        maxPrice: filters.maxPrice
      });
      setFoods(data.data);
      setMetaData({numItem: data.metaData.total, numPage:  Math.floor(data.metaData.total / data.metaData.size)})
    }

    fetchData()
  }, [filters]);

  return (
    <article>
      <CoverPage title="Shop" currentPage="Shop" listPath={[{ title: "Home", path: "/" }]} />

      <section className="flex gap-x-8 items-center pt-10 mb-6 max-lg:flex-col max-lg:items-start max-lg:gap-y-3 max-lg:pt-0">
        <div className="flex items-center gap-x-2">
          <p>Sort By</p>
          <Select
            defaultValue="price"
            style={{ width: 120 }}
            options={[
              { value: "price", label: "Price" },
              { value: "fvr", label: "Favourites" },
            ]}
            // onChange={(e) => setSort(e)}
          />
        </div>

        <div className="flex items-center gap-x-2">
          <p>Show</p>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
            // onChange={(e) => handleFilters({ show: e })}
          />
        </div>
      </section>

      <section className="flex gap-x-10">
        <div className="basis-9/12 flex flex-col items-center max-lg:basis-full max-lg:w-full ">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2  2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 gap-10 w-full max-lg:gap-0 max-lg:gap-y-6">
            {foods.map((food, index) => <ItemFood key={index} food={food} />)}
          </div>
          <ShopPagination qtyPage={metaData.numPage} currentPage={filters.currentPage} setCurrentPage={() => {}} />
        </div>

        <div className="basis-3/12 bg-65 max-lg:hidden">
          <ShopSideBar handleFilters={setFilters} />
        </div>
      </section>
    </article>
  );
};

export default Shop;
