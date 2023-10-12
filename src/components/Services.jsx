import { useEffect } from "react";
import Separator from "../assets/Separator.png";
import { serviceData } from "../data/services.data";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="w-full bg-white pb-[141px] pt-[86px]">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-[45px] font-bold pb-[16px] lg:pb-0">
          خدمات الشركة
        </h1>
        <img src={Separator} alt="Separator" />
      </div>
      <section>
        <div className=" flex justify-center items-center flex-wrap mt-[49px] gap-x-[42px] md:gap-y-[49px] gap-y-[16px] w-full px-[4%] md:px-[6%] xl:px-[103px]">
          {/* getting service data from data folder and map through the array and render every object indivisually */}
          {serviceData.map((card) => {
            const { id, icon, title, description } = card;
            return (
              <div
                className="w-[383px] h-auto md:h-[335px] pb-[39px] pt-[47px] pr-[25.95px] pl-[41px] bg-[#F5F5F5]"
                key={id}
                data-aos="fade-up"
              >
                <img src={icon} alt="Service Icon" className="mb-[22.72px]" />
                <h3 className="mb-[26.28px] text-[24px] font-bold leading-[36px]">
                  {title}
                </h3>
                <p className="text-[#6B7280] text-[19px] font-light">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Services;
