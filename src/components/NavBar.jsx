import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`xl:border-b xl:border-[#EAEAEA] ${
        isOpen ? "fixed z-50" : "relative"
      }  xl:bg-white font-light z-20 xl:relative`}
    >
      <section className="flex justify-start items-center w-full xl:relative xl:px-[127px] xl:h-[103px] bg-white">
        <img
          src={logo}
          alt="Details Digital logo"
          className="absolute right-[4%] top-5 w-[95px] xl:w-[120px] xl:relative xl:right-0 xl:top-0"
        />
        <div
          className={`${
            isOpen
              ? "left-[0] h-screen mt-28 gap-5 bg-white"
              : "left-[800px] absolute"
          } relative duration-300 flex flex-col items-start w-screen z-20 xl:z-auto xl:flex-row xl:items-center xl:h-auto xl:w-auto xl:left-0 xl:right-0 xl:mt-0 xl:absolute`}
        >
          <ul className="flex flex-col items-start xl:items-baseline justify-center gap-[25px] xl:gap-[66px] pr-10 xl:flex-row xl:absolute xl:right-[18%] sm:mt-[-40px] lg:mt-[-60px] xl:mt-[-10px]">
            <li>
              <a
                href="/"
                className="hover:text-[#fd5d63] duration-150 text-[15px]"
              >
                من نحن
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-[#fd5d63] duration-150 text-[15px]"
              >
                المنتجات
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-[#fd5d63] duration-150 text-[15px]"
              >
                الخدمات
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-[#fd5d63] duration-150 text-[15px]"
              >
                الأخبار
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-[#fd5d63] duration-150 text-[15px]"
              >
                انضم إلينا
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-[#fd5d63] duration-150 text-[15px]"
              >
                تواصل معنا
              </a>
            </li>
          </ul>
          <button className="pr-12 static xl:mt-[4.5px] xl:absolute xl:left-[127px] text-[15px] font-normal segoe">
            English
          </button>
        </div>
      </section>
      <div>
        {isOpen ? (
          <AiOutlineCloseCircle
            size={26}
            className="absolute left-[4%] top-[26px] text-zinc-700 xl:hidden"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <FaBars
            size={24}
            className="absolute left-[4%] top-[26px] text-zinc-700 xl:hidden"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
