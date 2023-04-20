import React from "react";
import { SiFirefoxbrowser } from "react-icons/si";
import { IoMdColorFill } from "react-icons/io";
import { FaRegKeyboard } from "react-icons/fa";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { GiFamilyHouse } from "react-icons/gi";
import { BsInstagram } from "react-icons/bs";
import { FaCrow } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { AiFillMobile } from "react-icons/ai";
import { FaFileVideo } from "react-icons/fa";
import { GiSpeaker } from "react-icons/gi";
import { Link } from "react-router-dom";

const ServicesHomePage = () => {
  return (
    <div className="container px-48 max-xl:px-24 max-lg:px-20 max-md:px-10 max-sm:px-2 mx-auto">
      <div>
        <img src="https://nahalit.com/wp-content/uploads/2022/12/Untitled-1.jpg" className="w-[12rem] max-lg:w-[10rem] max-sm:w-[8rem]" alt="image_ServicesHomePage" />
      </div>
      <div className="flex items-center justify-center flex-wrap gap-x-5 gap-y-10 max-lg:gap-y-3">
        <div className="flex flex-col gap-y-4 items-center justify-center w-[22rem]">
          <Link className="flex items-center justify-center">
            <SiFirefoxbrowser className="text-[#818a91] text-6xl" />
          </Link>
          <Link to={"/"} className="flex items-center justify-center font-[shabnamBold] font-black tracking-tighter text-lg">
            فروش سایت اختصاصی و اقتصادی
          </Link>
          <p className="text-center leading-7 text-lg">
            در این بخش از خدمات، سایت های آماده فروشگاهی و سازمانی و شرکتی و مدیریتی و اداری و خبری و اختصاصی، آماده به فروش می
            باشد که با زبان ها و فریم ورک های مختلف مانند جنگو و لاراول و وردپرس و php ارائه می شود.
          </p>
          <Link
            to={"/"}
            className="bg-[#1ac648] hover:bg-[#23d051] transition-all duration-200 text-white px-20 py-2 text-center rounded-lg shadow-[1px_1px_10px_rgba(0,0,0,.5)] -tracking-[1.3px]"
          >
            ادامه مطلب و مشاهده کامل جزییات
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 items-center justify-center w-[22rem]">
          <Link className="flex items-center justify-center">
            <IoMdColorFill className="text-[#818a91] text-6xl" />
          </Link>
          <Link to={"/"} className="flex items-center justify-center font-[shabnamBold] font-black tracking-tighter text-lg">
            فروش قالب سایت
          </Link>
          <p className="text-center leading-7 text-lg">
            در این بخش، قالب های html ، css ، جاوا اسکریپت (Java Script) ، ری اکت (React) ، ویو جی اس (vue js) ، نود جی اس (node
            js) ، وردپرس و غیره و ماژول های وردپرس، به فروش می رسد.
          </p>
          <Link
            to={"/"}
            className="bg-[#1ac648] hover:bg-[#23d051] transition-all duration-200 text-white px-20 py-2 text-center rounded-lg shadow-[1px_1px_10px_rgba(0,0,0,.5)] -tracking-[1.3px]"
          >
            ادامه مطلب و مشاهده کامل جزییات
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 items-center justify-center w-[22rem]">
          <Link className="flex items-center justify-center">
            <FaRegKeyboard className="text-[#818a91] text-6xl" />
          </Link>
          <Link to={"/"} className="flex items-center justify-center font-[shabnamBold] font-black tracking-tighter text-lg">
            طراحی وبسایت اختصاصی
          </Link>
          <p className="text-center leading-7 text-lg">
            طراحی وب سایت اختصاصی یکی از انواع طراحی وب است که توسط شرکت های طراح و توسعه دهنده وب حرفه ای انجام می شود که با توجه
            به نیاز مشتری ، وب سایت به صورت اختصاصی برای آنان طراحی می کنیم.
          </p>
          <Link
            to={"/"}
            className="bg-[#1ac648] hover:bg-[#23d051] transition-all duration-200 text-white px-20 py-2 text-center rounded-lg shadow-[1px_1px_10px_rgba(0,0,0,.5)] -tracking-[1.3px]"
          >
            ادامه مطلب و مشاهده کامل جزییات
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 items-center justify-center w-[22rem]">
          <Link className="flex items-center justify-center">
            <HiWrenchScrewdriver className="text-[#818a91] text-6xl" />
          </Link>
          <Link to={"/"} className="flex items-center justify-center font-[shabnamBold] font-black tracking-tighter text-lg">
            خدمات وبسایت و سئو وب سایت
          </Link>
          <p className="text-center leading-7 text-lg">
            یکی از خدمات اصلی سایت که برای بهبود فروش و شناخته شدن شما و افزایش بازدید سایت شما می باشد ، خدمات سئو سایت می باشد.
            با این خدمات شما می توانید در صفحه گوگل در جایگاه بالاتر قرار بگیرید.
          </p>
          <Link
            to={"/"}
            className="bg-[#1ac648] hover:bg-[#23d051] transition-all duration-200 text-white px-20 py-2 text-center rounded-lg shadow-[1px_1px_10px_rgba(0,0,0,.5)] -tracking-[1.3px]"
          >
            ادامه مطلب و مشاهده کامل جزییات
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 items-center justify-center w-[22rem]">
          <Link className="flex items-center justify-center">
            <GiFamilyHouse className="text-[#818a91] text-6xl" />
          </Link>
          <Link to={"/"} className="flex items-center justify-center font-[shabnamBold] font-black tracking-tighter text-lg">
            خدمات کسب و کار
          </Link>
          <p className="text-center leading-7 text-lg">
            تیم خدمات کسب و کار نهال آی تی ، جهت بهبود سریع تر در کسب و کار های نوپا و انواع کسب و کارها، میتواند از ابتدای هر کسب
            و کاری، تا برند شدن و افزایش فروش آن کسب و کار ، به شما کمک کند.
          </p>
          <Link
            to={"/"}
            className="bg-[#1ac648] hover:bg-[#23d051] transition-all duration-200 text-white px-20 py-2 text-center rounded-lg shadow-[1px_1px_10px_rgba(0,0,0,.5)] -tracking-[1.3px]"
          >
            ادامه مطلب و مشاهده کامل جزییات
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 items-center justify-center w-[22rem]">
          <Link className="flex items-center justify-center">
            <BsInstagram className="text-[#818a91] text-6xl" />
          </Link>
          <Link to={"/"} className="flex items-center justify-center font-[shabnamBold] font-black tracking-tighter text-lg">
            خدمات شبکه های اجتماعی
          </Link>
          <p className="text-center leading-7 text-lg">
            اگر قصد دارید رشد سریع تری را در شبکه های اجتماعی مانند آپارات و اینستاگرام و تلگرام و لینکدین و توییتر و دیگر شبکه
            های اجتماعی تجربه کنید و حرفه ای کار کنید ، میتوانید از خدمات نهال آی تی استفاده کنید.
          </p>
          <Link
            to={"/"}
            className="bg-[#1ac648] hover:bg-[#23d051] transition-all duration-200 text-white px-20 py-2 text-center rounded-lg shadow-[1px_1px_10px_rgba(0,0,0,.5)] -tracking-[1.3px]"
          >
            ادامه مطلب و مشاهده کامل جزییات
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 items-center justify-center w-[22rem]">
          <Link className="flex items-center justify-center">
            <FaCrow className="text-[#818a91] text-6xl" />
          </Link>
          <Link to={"/"} className="flex items-center justify-center font-[shabnamBold] font-black tracking-tighter text-lg">
            خدمات موشن گرافیک
          </Link>
          <p className="text-center leading-7 text-lg">
            ویدیوهایی که پیام و محتوا را به صورت متحرک منتقل می کنند موشن هستند. واژه موشن Motionدر زبان فارسی پویا ترجمه می شود و
            به هر چیزی که دارای حرکت باشد. تیم موشن گرافیک نهال آی تی ، آماده انجام تمامی خدمات شما در حوزه گرافیکی می باشد.
          </p>
          <Link
            to={"/"}
            className="bg-[#1ac648] hover:bg-[#23d051] transition-all duration-200 text-white px-20 py-2 text-center rounded-lg shadow-[1px_1px_10px_rgba(0,0,0,.5)] -tracking-[1.3px]"
          >
            ادامه مطلب و مشاهده کامل جزییات
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 items-center justify-center w-[22rem]">
          <Link className="flex items-center justify-center">
            <FaPaintBrush className="text-[#818a91] text-6xl" />
          </Link>
          <Link to={"/"} className="flex items-center justify-center font-[shabnamBold] font-black tracking-tighter text-lg">
            خدمات گرافیک
          </Link>
          <p className="text-center leading-6 text-lg">
            تیم گرافیک نهال آی تی ، کارهای حرفه ای گرافیکی از جمله طراحی لوگو و پوستر و بروشور های تبلیغاتی، و طراحی انواع بنر های
            تبلیغاتی و کارت های ویزیت، همچنین طراحی انیمیشن و کاراکتر سازی و تیزر تبلیغاتی و همچنین طراحی UI/UX سایت را با سرعت
            بالا و کیفیت بالا انجام می دهد.
          </p>
          <Link
            to={"/"}
            className="bg-[#1ac648] hover:bg-[#23d051] transition-all duration-200 text-white px-20 py-2 text-center rounded-lg shadow-[1px_1px_10px_rgba(0,0,0,.5)] -tracking-[1.3px]"
          >
            ادامه مطلب و مشاهده کامل جزییات
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 items-center justify-center w-[22rem]">
          <Link className="flex items-center justify-center">
            <FaNetworkWired className="text-[#818a91] text-6xl" />
          </Link>
          <Link to={"/"} className="flex items-center justify-center font-[shabnamBold] font-black tracking-tighter text-lg">
            تدوین پروپوزال و بیزنس پلن
          </Link>
          <p className="text-center leading-7 text-lg">
            در تیم مشاوره نهال آی تی ، ما از صفر تا صد نقشه کسب و کار شما را به صورت الکترونیکی و یا به صورت تلفنی ، به شما مشاوره
            میدهیم که چگونه کسب و کارهای خود را راه اندازی و مدیریت نمایید و به سوی برند شدن و افزایش فروش در کسب و کار خود
            بشتابید.
          </p>
          <Link
            to={"/"}
            className="bg-[#1ac648] hover:bg-[#23d051] transition-all duration-200 text-white px-20 py-2 text-center rounded-lg shadow-[1px_1px_10px_rgba(0,0,0,.5)] -tracking-[1.3px]"
          >
            ادامه مطلب و مشاهده کامل جزییات
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 items-center justify-center w-[22rem]">
          <Link className="flex items-center justify-center">
            <AiFillMobile className="text-[#818a91] text-6xl" />
          </Link>
          <Link to={"/"} className="flex items-center justify-center font-[shabnamBold] font-black tracking-tighter text-lg">
            خدمات اپلیکیشن موبایل
          </Link>
          <p className="text-center leading-7 text-lg">
            تیم اپلیکیشن نهال آی تی با استفاده از طرح ها و ایده های نو و با استفاده از تکنولوژی های به روز، میتواند کسب و کارهای
            شما را به صورت سریع و از طریق اپلیکیشن در اختیار مشتریان شما قرار دهد.
          </p>
          <Link
            to={"/"}
            className="bg-[#1ac648] hover:bg-[#23d051] transition-all duration-200 text-white px-20 py-2 text-center rounded-lg shadow-[1px_1px_10px_rgba(0,0,0,.5)] -tracking-[1.3px]"
          >
            ادامه مطلب و مشاهده کامل جزییات
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 items-center justify-center w-[22rem]">
          <Link className="flex items-center justify-center">
            <FaFileVideo className="text-[#818a91] text-6xl" />
          </Link>
          <Link to={"/"} className="flex items-center justify-center font-[shabnamBold] font-black tracking-tighter text-lg">
            خدمات پریمیر و تدوین فیلم
          </Link>
          <p className="text-center leading-7 text-lg">
            در تیم نهال آی تی ، جهت بهره برداری بهتر خدمات پریمیر و تدوین فیلم ، کاربران میتوانند به راحتی با متخصصان مختلف در
            حوزه تدوین فیلم و نرم افزار پریمیر به صورت مشترک، مشاوره بگیرند.
          </p>
          <Link
            to={"/"}
            className="bg-[#1ac648] hover:bg-[#23d051] transition-all duration-200 text-white px-20 py-2 text-center rounded-lg shadow-[1px_1px_10px_rgba(0,0,0,.5)] -tracking-[1.3px]"
          >
            ادامه مطلب و مشاهده کامل جزییات
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 items-center justify-center w-[22rem]">
          <Link className="flex items-center justify-center">
            <GiSpeaker className="text-[#818a91] text-6xl" />
          </Link>
          <Link to={"/"} className="flex items-center justify-center font-[shabnamBold] font-black tracking-tighter text-lg">
            خدمات تدوین صدا و صدا گذاری
          </Link>
          <p className="text-center leading-7 text-lg">
            در تیم نهال آی تی ، جهت بهره برداری بهتر خدمات ما در حوزه ی تدوین صدا و صداگذاری ، کاربران میتوانند به راحتی با
            متخصصان مختلف در حوزه صداگذاری به صورت مشترک، مشاوره بگیرند.
          </p>
          <Link
            to={"/"}
            className="bg-[#1ac648] hover:bg-[#23d051] transition-all duration-200 text-white px-20 py-2 text-center rounded-lg shadow-[1px_1px_10px_rgba(0,0,0,.5)] -tracking-[1.3px]"
          >
            ادامه مطلب و مشاهده کامل جزییات
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesHomePage;
