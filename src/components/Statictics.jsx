import { useState } from "react";
import Separator from "../assets/Separator.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Statictics = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section className="w-full bg-white pb-[138px] pt-[113px]">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-[45px] font-bold">الإحصائيات</h1>
        <img src={Separator} alt="Separator" />
        <p className="font-light text-[18px] leading-[31px] pt-[26px] pb-[43px] px-[40px] md:px-[100px] xl:px-[295px] text-center opacity-[0.8]">
          نحن لا نقدم خدمات فقط بل نطور أيضا منتجات برمجية متطورة لتلبية
          إحتياجات عملك، يقوم فريقنا من المُطورين والمهندسين الأكفاء بإنشاء حلول
          برمجية قوية وسهلة الإستخدام تُعزز الكفاءة وتبسط العمليات وتحفز
          الابتكار.
        </p>
      </div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <section className="mt-[43px] flex items-center justify-center flex-wrap gap-[110px]">
          <div className="text-center">
            <h4 className="text-[#FD5D63] text-[45px] font-bold leading-[48px]">
              +
              {counterOn && (
                <CountUp start={0} end={50} duration={2} delay={0} />
              )}{" "}
              ألف
            </h4>
            <p className="text-[#6B7280] text-[20px] font-light leading-[30px] xl:w-[194px]">
              ساعة عمل من اجل الجودة و المنتجات
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-[#FD5D63] text-[45px] font-bold leading-[48px]">
              {counterOn && (
                <CountUp start={0} end={80} duration={2} delay={0} />
              )}
              %
            </h4>
            <p className="text-[#6B7280] text-[20px] font-light leading-[30px] xl:w-[194px]">
              ساعة عمل من اجل الجودة و المنتجات
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-[#FD5D63] text-[45px] font-bold leading-[48px]">
              +
              {counterOn && (
                <CountUp start={0} end={100} duration={2} delay={0} />
              )}
            </h4>
            <p className="text-[#6B7280] text-[20px] font-light leading-[30px] xl:w-[194px]">
              ساعة عمل من اجل الجودة و المنتجات
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-[#FD5D63] text-[45px] font-bold leading-[48px]">
              +
              {counterOn && (
                <CountUp start={0} end={6} duration={2} delay={0.5} />
              )}
            </h4>
            <p className="text-[#6B7280] text-[20px] font-light leading-[30px] xl:w-[194px]">
              ساعة عمل من اجل الجودة و المنتجات
            </p>
          </div>
        </section>
      </ScrollTrigger>
    </section>
  );
};

export default Statictics;
