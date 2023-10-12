import lin from "../assets/lin.svg";
import ins from "../assets/ins.svg";
import tou from "../assets/tou.svg";
import twi from "../assets/twi.svg";
import vector from "../assets/vector.png";

const Footer = () => {
  return (
    <footer className="mt-[120px]">
      <div className="flex justify-center items-center gap-[16px]">
        <span className="pl-[10px] text-[#707272] font-light text-[15px] relative bottom-[3.61px] leading-[22.5px]">
          تابعونا
        </span>
        <img
          src={twi}
          alt="Twitter icon"
          className="object-fit cursor-pointer hover:scale-110 duration-200"
        />
        <img
          src={tou}
          alt="Youtube icon"
          className="object-fit cursor-pointer hover:scale-110 duration-200"
        />
        <img
          src={ins}
          alt="Instgram icon"
          className="object-fit cursor-pointer hover:scale-110 duration-200"
        />
        <img
          src={lin}
          alt="LinkidIn icon"
          className="object-fit cursor-pointer hover:scale-110 duration-200 relative bottom-[1.5px]"
        />
      </div>
      <div className="bg-black w-full md:h-[53px] h-[90px] text-[#d9d9d9e6] flex flex-col md:flex-row md:justify-between justify-center items-center md:items-baseline md:px-[84px] px-[4%] mt-[20px] z-10 relative">
        <span className="text-[13px] font-bold">
          2023 جميع الحقوق محفوظة لشركة Details Digital للتقنيات ©
        </span>
        <div className="felx justify-center items-center">
          <a href="#" className="text-[13px] font-bold">
            سياسة الاستخدام والخصوصية
          </a>
          <a href="#" className="text-[13px] font-bold md:pr-[36px] pr-[16px]">
            الوظائف
          </a>
        </div>
      </div>
      <img
        src={vector}
        alt="Vector Image"
        className="absolute bottom-0 left-0 z-0 hidden lg:block"
      />
    </footer>
  );
};

export default Footer;
