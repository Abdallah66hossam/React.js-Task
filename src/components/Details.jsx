import avatar from "../assets/avatar.png";
import Separator from "../assets/Separator.png";

const Details = () => {
  return (
    <article className="bg-linear h-auto flex lg:flex-row flex-col-reverse justify-start items-center lg:pl-[8%] xl:gap-[88.84px] gap-[7%] pb-[96px] md:pt-[111px] pt-[41px]">
      <img
        src={avatar}
        alt=""
        className="object-contain w-full md:w-[40%] lg:w-[31%]"
      />
      <div className="px-[16px]">
        <h2 className="font-bold text-[45px] pb-[16px] lg:pb-0">
          صناعة مستقبلك الرقمي
        </h2>
        <img src={Separator} alt="Separator" />
        <p className=" text-black opacity-[0.8] text-[18px] leading-[178.571%] mt-[24px] font-light w-full">
          شغفنا و إلتزامنا تجاه الشركات لتمكينهم من إستخدام قوة التكنولوجيا و
          تحقيق الازدهار في العصر الرقمي من خلال تقديم حلول تكنولوجيا المعلومات
          المبتكرة وتوجيهات خبرائنا التي تساعدهم علي الظهور بشكل إستثنائي في
          المشهد الرقمي المتقدم.
          <br />
          <br />
          نحن نؤمن بأننا عبر خدماتنا الشاملة ونهجنا في التفكير المستقبلي سنساعد
          المؤسسات علي الاستفادة من كل فرص النمو و تحقيق الإمكانيات الشاملة في
          رحلة التحول الرقمي والقيادة نحو النجاح في المستقبل الرقمي.
        </p>
        <button className="mt-[27px]">
          <a href="#" className="text-[#fd5d63] text-[19px]">
            تعرّف أكثر
          </a>
        </button>
      </div>
    </article>
  );
};

export default Details;
