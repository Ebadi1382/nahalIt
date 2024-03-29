import React, { useState } from "react";
import { RiSendBackward } from "react-icons/ri";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaSeedling } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { SiAparat } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { HiCode } from "react-icons/hi";

import { Link } from "react-router-dom";

const Footer = () => {
  const [Footer, setFooter] = useState(false);
  const SiteCreateOnEnterMouse = () => {
    setFooter(true);
  };
  const SiteCreateOnOutMouse = () => {
    setFooter(false);
  };
  return (
    <div className="text-[#ccc] right-0 left-0 bg-[#223621] whitespace-nowrap px-48 max-xl:px-0 mx-auto pt-5 -z-10 pb-8">
      {/* <div className="absolute bg-[#55FF51] h-[5px] left-0 right-0"></div> */}
      <div className="container px-36 mx-auto flex items-start justify-center gap-x-28 max-xl:flex-wrap text-sm mt-24 max-xl:gap-y-12 tracking-tight">
        <div className="flex flex-col justify-center items-start gap-y-4">
          <RiSendBackward className="text-6xl text-white" />
          <Link className="font-[shabnamMedium] text-lg" to="/">
            لینک های کمکی
          </Link>
          <div className="w-20 h-[1px] bg-white"></div>
          <Link className="mt-5 tracking-tighter" to="/order">
            ثبت سفارش
          </Link>
          <Link to="/">فروشنده باشید</Link>
          <Link to="/">استخدام</Link>
          <Link to="/">حساب کاربری من</Link>
          <Link to="/">اخبار سایت نهال آی تی</Link>
        </div>
        <div className="flex flex-col justify-center gap-y-4">
          <BsFillBriefcaseFill className="text-6xl text-white" />
          <Link className="font-[shabnamMedium] text-lg" to="/">
            خدمات اداری
          </Link>
          <div className="w-12 h-[1px] bg-white"></div>
          <Link className="mt-5 tracking-tighter" to="/">
            ایمیل مارکتینگ
          </Link>
          <Link to="/">پیامک انبوه</Link>
          <Link to="/">تولید محتوا</Link>
          <Link to="/">ربات شبکه های اجتماعی</Link>
        </div>
        <div className="flex flex-col justify-center gap-y-4">
          <FaSeedling className="text-6xl text-white" />
          <Link className="font-[shabnamMedium] text-lg" to="/">
            خدمات تیم نهال آی تی
          </Link>
          <div className="w-12 h-[1px] bg-white"></div>
          <Link className="mt-5 tracking-tighter" to="/">
            فروش سایت اختصاصی و اقتصادی
          </Link>
          <Link to="/">فروش قالب سایت</Link>
          <Link to="/">طراحی سایت اختصاصی</Link>
          <Link to="/">خدمات وبسایت و سئو وب سایت</Link>
          <Link to="/">خدمات کسب و کار</Link>
          <Link to="/">خدمات شبکه های اجتماعی</Link>
          <Link to="/">خدمات موشن گرافیک</Link>
        </div>
        <div className="flex flex-col justify-center gap-y-4">
          <FaSeedling className="text-6xl text-white" />
          <Link className="font-[shabnamMedium] text-lg" to="/">
            خدمات تیم نهال آی تی
          </Link>
          <div className="w-12 h-[1px] bg-white"></div>
          <Link className="mt-5 tracking-tighter" to="/">
            خدمات گرافیک
          </Link>
          <Link to="/">تدوین پروپوزال و بیزنس پلن</Link>
          <Link to="/">خدمات اپلیکیشن موبایل</Link>
          <Link to="/">خدمات پریمیر و تدوین فیلم</Link>
          <Link to="/">خدمات تدوین صدا و صدا گذاری</Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4">
          <BsHeart className="text-6xl text-white" />
          <p className="font-[shabnamBold] text-lg">نماد اعتماد الکترونیکی</p>
          <div className="w-36 h-[6px] bg-white"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-6">
        <div className="flex items-center justify-center gap-x-5 mt-8">
          <Link>
            <FaTelegramPlane className="text-2xl text-[#ccc]" title="telegram" />
          </Link>
          <Link>
            <AiOutlineInstagram className="text-2xl text-[#ccc]" title="instagram" />
          </Link>
          <Link>
            <AiOutlineTwitter className="text-2xl text-[#ccc]" title="twitter" />
          </Link>
          <Link>
            <BsYoutube className="text-2xl text-[#ccc]" title="youtube" />
          </Link>
          <Link>
            <SiAparat className="text-2xl text-[#ccc]" title="aparat" />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <FaServer className="text-[#57C053]" />
          <Link className="tracking-tighter">توسعه و پشتیبانی : بهینه سازان سرزمین هوشمند</Link>
        </div>
      </div>
      <div className="w-[80%] h-[1px] bg-[#949494] mx-auto mt-10"></div>
      <div className="container px-36 mx-auto mt-10 tracking-tighter flex justify-between flex-wrap items-center">
        <ul className="flex items-center justify-start flex-wrap">
          <li>
            <Link className="hover:bg-[#4CA449] px-3 py-2 rounded-md transition-all duration-300 text-[#c5c3c3]">درباره ما</Link>
          </li>
          <li>
            <Link to="/ContactUs" className="hover:bg-[#4CA449] px-3 py-2 rounded-md transition-all duration-300 text-[#c5c3c3]">
              تماس با ما
            </Link>
          </li>
          <li>
            <Link className="hover:bg-[#4CA449] px-3 py-2 rounded-md transition-all duration-300 text-[#c5c3c3]">وبلاگ</Link>
          </li>
          <li>
            <Link className="hover:bg-[#4CA449] px-3 py-2 rounded-md transition-all duration-300 text-[#c5c3c3]">
              حساب کاربری من
            </Link>
          </li>
          <li>
            <Link className="hover:bg-[#4CA449] px-3 py-2 rounded-md transition-all duration-300 text-[#c5c3c3]">فروشگاه</Link>
          </li>
        </ul>
        <div className="flex items-center justify-center gap-x-1">
          <HiCode
            onMouseEnter={SiteCreateOnEnterMouse}
            onMouseLeave={SiteCreateOnOutMouse}
            className={
              Footer
                ? "bg-[#57C053] text-white w-9 h-9 p-1 rounded-lg translate-x-12 transition-all duration-500"
                : "bg-[#57C053] text-white w-9 h-9 p-1 rounded-lg transition-all duration-500"
            }
          />
          <p
            onMouseEnter={SiteCreateOnEnterMouse}
            onMouseLeave={SiteCreateOnOutMouse}
            className={Footer ? "translate-x-12 transition-all duration-500" : "opacity-0  transition-all duration-500"}
          >
            توسعه : سرزمین هوشمند
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
