import { Select, Spin } from "antd";
import ShopSideBar from "./components/ShopSideBar";
import ShopPagination from "./components/ShopPagination";
import CoverPage from "../../components/CoverPage";
import ItemFood from "../../components/ItemFood";
import { useEffect, useState } from "react";
import axios from "axios";
import { Food } from "../../types/listType";
import { FilterType } from "../../types/filterType";
import { ReturnFoodType } from "../../types/returnFoodType";
import { serverSubUrl } from "../../constant/domain";

const size = 9;

const Shop = () => {
  const [filters, setFilters] = useState<FilterType>({});
  const [sort, setSort] = useState("price");

  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [error, setError] = useState(false);

  const [foods, setFoods] = useState<Array<Food>>([]);
  const [loading, setLoading] = useState(false);

  const getFoods = async (currentPage: number = 1) => {
    setLoading(true);
    try {
      const { cat } = filters;

      const res = await axios.get<ReturnFoodType>(`${serverSubUrl}/foods`, {
        params: {
          page: currentPage,
          size,
          ...filters,
          cat: cat ? cat.join(",") : undefined,
          sort,
        },
      });

      const { data, metaData } = res.data;
      const { total } = metaData;

      const numPages = Math.ceil(total / size);
      setFoods(data);
      setNumPages(numPages);
      setCurrentPage(currentPage);
      setLoading(false);

      if (error) setError(false);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    setFoods([])
    getFoods();
  }, [filters]);

  useEffect(() => {
    getFoods(currentPage);
  }, [currentPage, sort]);

  const handleFilters = (filterValue: FilterType) => {
    setFilters({
      ...filters,
      ...filterValue,
    });
  };
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
            onChange={(e) => setSort(e)}
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
            onChange={(e) => handleFilters({ show: e })}
          />
        </div>
      </section>

      <section className="flex gap-x-10">
        <div className="basis-9/12 flex flex-col items-center max-lg:basis-full max-lg:w-full ">
          {<div className="flex justify-center absolute w-full h-full">{loading && <Spin size="large" />}</div>}

          <div className="grid sm:grid-cols-1 lg:grid-cols-2  2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 gap-10 w-full max-lg:gap-0 max-lg:gap-y-6">
            {error ? "Something went wrong" : foods.map((food, index) => <ItemFood key={index} food={food} />)}
          </div>
          <ShopPagination qtyPage={numPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>

        <div className="basis-3/12 bg-65 max-lg:hidden">
          <ShopSideBar handleFilters={handleFilters} setError={setError} />
        </div>
      </section>
    </article>
  );
};

export default Shop;
