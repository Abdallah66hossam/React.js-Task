import Separator from "../assets/Separator.png";
import arrow from "../assets/left-arrow.svg";
import { productsData } from "../data/products.data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="w-full bg-[#F7F7F7] pb-[141px] pt-[86px]">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-[45px] font-bold">منتجاتنا</h1>
        <img src={Separator} alt="Separator" />
      </div>
      <section>
        <div className=" flex justify-center items-center flex-wrap mt-[82px] gap-x-[32px] md:gap-y-[26.49px] gap-y-[16px] w-full px-[4%] md:px-[6%] xl:px-[103px]">
          {/* getting products data from data folder and map through the array and render every object indivisually */}
          {productsData.map((card) => {
            const { id, icon, title, description } = card;
            return (
              <div
                className="w-[382.5px] h-[400px] md:h-[376px] pb-[20px] pt-[40px] pr-[37px] pl-[16px] bg-white relative"
                key={id}
                data-aos="fade-up"
              >
                <img
                  src={icon}
                  alt="Service Icon"
                  className="mb-[22.72px] w-[152px] h-[61px] text-[#111827]"
                />
                <h3 className="my-[22px] text-[24px] font-bold leading-[36px]">
                  {title}
                </h3>
                <p className="text-[#6B7280] text-[20px] font-light">
                  {description}
                </p>
                <button className="absolute bottom-[24.67px] right-[37.46px]">
                  <a
                    href="#"
                    className="text-[#FD5D63] flex justify-center items-center gap-1 text-[19px]"
                  >
                    اعرف المزيد
                    <img
                      src={arrow}
                      alt="Left Arrow"
                      className="relative top-[2px] right-[4px]"
                    />
                  </a>
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Products;
