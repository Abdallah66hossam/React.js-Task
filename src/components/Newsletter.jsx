const Newsletter = () => {
  return (
    <section
      className="xl:px-[142px] md:px-[8%] px-[4%] mt-[94.73px] relative w-full"
      id="down"
    >
      <h2 className="text-[23px] leading-[28px] font-bold pt-[31px]">
        اشترك في نشرة Details Digital
      </h2>
      <div className="py-[16px] flex flex-col md:flex-row items-center justify-start xl:gap-[59px] lg:gap-[25px] gap-[20px]">
        <input
          type="email"
          placeholder="Example@example.com"
          className="md:w-[366.87px] h-[46px] text-[24px] text-[#9CA3AF] py-[1px] px-[16.66px] border border-[#DCDEDE] bg-[#ffffffe6] focus:outline-none segoe w-full"
        />
        <button className="block w-full md:w-auto">
          <a
            href="#"
            className="leading-[20px] text-[20px] font-bold bg-[#FD5D63] py-[12px] md:pl-[36.33px] md:pr-[37.44px] text-white segoe border-2 border-transparent hover:border-[#FD5D63] hover:bg-transparent duration-300 hover:text-[#717579] block"
          >
            اشترك
          </a>
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
