import group from "../assets/Group.png";
import frame1 from "../assets/Frame1.png";
import frame2 from "../assets/Frame2.png";
import arrow from "../assets/arrow.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <section className=" z-30 xl:pt-[80px] lg:pr-[13%] pl-[2%] pr-[4%] w-full bg-white md:h-[130px] xl:h-[550px] relative md:bottom-[170px] bottom-[195px] xl:static">
      <h1
        className="xl:text-[56px] text-[42px] font-bold xl:leading-[128.571%] mb-3 xl:mb-0 leading-[48px]"
        data-aos="fade-left"
      >
        مرحبا بك في Details Digital
      </h1>
      <p
        className="text-black opacity-[0.8] text-[20px] xl:leading-[178.571%] xl:mt-[18px] font-light xl:w-[60%] w-[95%]"
        data-aos="fade-up"
      >
        شريكك الموثوق لجميع حلول تكنولوجيا المعلومات و خدمات التحول الرقمي ،
        شركتنا رائدة في كل الخدمات التكنولوجيه المصممة خصيصاً لتطوير أعمالك
        ومساعدتك على الازدهار في العصر الرقمي. يتكون فريق خبرائنا من المحترفين
        القادرين علي تقديم كل الخبرات والخدمات المخصصة لتلبية احتياجاتك مما يضمن
        أن التكنولوجيا الخاصة بك تعمل بقوة وفعالية.
      </p>
      <img
        src={frame1}
        alt="frame"
        className="absolute right-[9%] top-[190px] hidden xl:block animate-pulse"
      />
      <img
        src={frame2}
        alt="frame"
        className="absolute top-[480px] right-[27%] hidden xl:block animate-pulse"
      />
      <img
        src={group}
        alt="frame"
        className="absolute top-[40px] hidden xl:block animate-pulse animate"
      />
      <a href="#down" className="w-full flex justify-center absolute right-0">
        <img
          src={arrow}
          alt="down arrow"
          className="relative xl:top-[125px] lg:top-[80px] top-[70px] cursor-pointer animate-bounce"
        />
      </a>
    </section>
  );
};

export default Banner;
