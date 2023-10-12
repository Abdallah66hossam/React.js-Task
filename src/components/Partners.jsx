import Marquee from "react-fast-marquee";
import Dotelogo from "../assets/Dotelogo-1.png";
import Health from "../assets/health.png";
import Aramco from "../assets/Saudi-Aramco-logo1.png";
import Govsa from "../assets/ds-nd-logo-en1.png";
import Algharbywa from "../assets/image0.png";
import Lead from "../assets/all-option-021.png";

const Partners = () => {
  return (
    <section className="px-[4%] xl:px-[139px]">
      <h1 className="text-[45px] font-bold text-center mb-[56px]">
        شركاء النجاح
      </h1>

      <Marquee
        className="flex items-center justify-center"
        gradient={true}
        autoFill={true}
        direction="right"
        pauseOnHover={true}
        speed={40}
      >
        <img
          src={Aramco}
          alt="company profile"
          className="md:ml-[111px] ml-[50px] object-fit hover:scale-110 duration-300 cursor-pointer"
        />
        <img
          src={Govsa}
          alt="company profile"
          className="md:ml-[111px] ml-[50px] object-fit hover:scale-110 duration-300 cursor-pointer"
        />
        <img
          src={Lead}
          alt="company profile"
          className="md:ml-[111px] ml-[50px] object-fit hover:scale-110 duration-300 cursor-pointer"
        />
        <img
          src={Algharbywa}
          alt="company profile"
          className="md:ml-[111px] ml-[50px] object-fit hover:scale-110 duration-300 cursor-pointer"
        />
        <img
          src={Health}
          alt="company profile"
          className="md:ml-[111px] ml-[50px] object-fit hover:scale-110 duration-300 cursor-pointer"
        />
        <img
          src={Dotelogo}
          alt="company profile"
          className="md:ml-[111px] ml-[50px] object-fit hover:scale-110 duration-300 cursor-pointer"
        />
        <img
          src={Aramco}
          alt="company profile"
          className="md:ml-[111px] ml-[50px] object-fit hover:scale-110 duration-300 cursor-pointer"
        />
        <img
          src={Govsa}
          alt="company profile"
          className="md:ml-[111px] ml-[50px] object-fit hover:scale-110 duration-300 cursor-pointer"
        />
        <img
          src={Lead}
          alt="company profile"
          className="md:ml-[111px] ml-[50px] object-fit hover:scale-110 duration-300 cursor-pointer"
        />
        <img
          src={Algharbywa}
          alt="company profile"
          className="md:ml-[111px] ml-[50px] object-fit hover:scale-110 duration-300 cursor-pointer"
        />
        <img
          src={Health}
          alt="company profile"
          className="md:ml-[111px] ml-[50px] object-fit hover:scale-110 duration-300 cursor-pointer"
        />
        <img
          src={Dotelogo}
          alt="company profile"
          className="md:ml-[111px] ml-[50px] object-fit hover:scale-110 duration-300 cursor-pointer"
        />
      </Marquee>
    </section>
  );
};

export default Partners;
