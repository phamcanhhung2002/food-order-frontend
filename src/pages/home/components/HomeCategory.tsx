import { useEffect, useState } from "react";
import ItemCategory from "../../../components/home/ItemCategory";
import Slider from "react-slick";
import { appApi } from "../../../api/appApi";

const HomeCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await appApi.allCategories();
      setCategories(data.categories);
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="mt-24 flex flex-col items-center">
        <div className="relative">
          <p
            className="font-bold text-5xl text-text font-san mb-8 text-center max-lg:text-3xl
          after:block after:content-limb after:bottom-10 after:right-32 after:absolute
          ">
            Food category
          </p>
          <p className="text-[#828282] text-center mb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className="max-lg:hidden" />
            Varius sed pharetra dictum neque massa congue
          </p>
        </div>

        <div className="flex items-center">
          {/* <Button icon={<LeftOutlined className="!text-xl"/>} className="mr-9 bg-primary text-white !w-14 !h-14"/> */}
        </div>
        <div className="w-9/12">
          <Slider
            dots
            slidesToShow={4}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
            autoplay={true}
            autoplaySpeed={1000}>
            {categories.map((item: any, index) => (
              <div key={index}>
                <ItemCategory name={item.name} amountRemain={item.quantity} image={item.imageId} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HomeCategory;
