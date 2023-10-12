import { useEffect } from "react";
import Separator from "../assets/Separator.png";
import { newsData } from "../data/news.data";
import AOS from "aos";
import "aos/dist/aos.css";

const News = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="w-full bg-white pb-[141px] pt-[86px]">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-[45px] font-bold">أخر الأخبار</h1>
        <img src={Separator} alt="Separator" />
      </div>
      <section>
        <div className=" flex justify-center items-center flex-wrap mt-[82px] gap-x-[32px] md:gap-y-[26.49px] gap-y-[16px] w-full px-[4%] md:px-[6%] xl:px-[103px]">
          {/* getting products data from data folder and map through the array and render every object indivisually */}
          {newsData.map((card) => {
            const { id, img, title, description } = card;
            return (
              <div
                className="w-[382.51px] h-[400px] md:h-[376px] md:pb-[24.67px] pb-[16px] pt-[16px] md:pt-[26px] px-[16px] md:px-[38px] bg-[#F5F5F5] relative group hover:bg-[#FD5D63] duration-500 cursor-pointer"
                key={id}
                data-aos="fade-up"
              >
                <img
                  src={img}
                  alt="Service Icon"
                  className="mb-[22.72px] rounded-md text-[#111827] w-full"
                />
                <h3 className="my-[22px] text-[24px] font-bold leading-[36px] group-hover:text-white duration-300">
                  {title}
                </h3>
                <p className="text-[#6B7280] text-[20px] font-light group-hover:text-white duration-300">
                  {description}
                </p>
                <button className="absolute md:bottom-[24.67px] bottom-[28.67px] right-[37.46px]">
                  <a
                    href="#"
                    className="text-[#FD5D63] text-[19px] group-hover:text-white duration-300"
                  >
                    اعرف المزيد ←
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

export default News;
