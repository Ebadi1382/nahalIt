import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineFile } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

const Details = () => {
  return (
    <div className="flex items-center justify-center gap-x-4 container px-48 mx-auto mb-96 ">
      <div className="w-[23rem]">
        <div className="relative">
          <img
            alt="detail_image"
            width={400}
            height={100}
            src="https://nahalit.com/wp-content/uploads/2023/02/Polish_۲۰۲۳۰۲۲۲_۱۲۵۰۵۰۷۷۷.jpg"
          />
          <div className="bg-[#e3e3e3] w-[23rem] h-[23rem] absolute top-[18rem] flex items-end justify-start">
            <div className="flex items-center mr-4 mb-3 gap-x-1">
              <BsEyeFill className="text-[#585858]" />
              <p className=" font-[shabnamThin]">4</p>
            </div>
            <div className="flex items-center mr-3 mb-3 gap-x-1">
              <AiOutlineFile className="text-[#585858]" />
              <Link to="/" className=" font-[shabnamThin]">
                اخبار سایت
              </Link>
            </div>
          </div>
          <div className="w-[21rem] flex flex-col items-start p-6 justify-center bg-white absolute top-[15rem] left-[1.05rem]">
            <div className="flex items-center gap-x-1">
              <BiTimeFive className="text-[#7a7979]" />
              <p className="mt-1">3 اسفند</p>
            </div>
            <Link to="/" className="font-[shabnamMedium]">
              تبدیل رشته (هر کلاس به repr نیاز دارد)
            </Link>
            <p className="text-justify p-5">
              وقتی یک کلاس سفارشی را در پایتون تعریف می کنید و سپس سعی می کنید یکی از آنها را چاپ کنید نمونه های آن را به کنسول
              (یا آن را در یک جلسه مترجم بازرسی کنید)، شما یک نتیجه نسبتا...
            </p>
            <button className="bg-[#56C253] hover:bg-[#4dce49] rounded-lg transition-all duration-200 py-2 px-24 mx-auto whitespace-nowrap text-white tracking-tight font-semibold">
              بیشتر بخوانید...
            </button>
          </div>
        </div>
      </div>
      <div className="w-[23rem]">
        <div className="relative">
          <img
            alt="detail_image"
            width={400}
            height={100}
            src="https://nahalit.com/wp-content/uploads/2023/02/Polish_۲۰۲۳۰۲۲۲_۱۲۴۹۳۲۷۶۳.jpg"
          />
          <div className="bg-[#e3e3e3] w-[23rem] h-[23rem] absolute top-[18rem] flex items-end justify-start">
            <div className="flex items-center mr-4 mb-3 gap-x-1">
              <BsEyeFill className="text-[#585858]" />
              <p className=" font-[shabnamThin]">4</p>
            </div>
            <div className="flex items-center mr-3 mb-3 gap-x-1">
              <AiOutlineFile className="text-[#585858]" />
              <Link to="/" className=" font-[shabnamThin]">
                اخبار سایت
              </Link>
            </div>
          </div>
          <div className="w-[21rem] flex flex-col items-start p-6 justify-center bg-white absolute top-[15rem] left-[1.05rem]">
            <div className="flex items-center gap-x-1">
              <BiTimeFive className="text-[#7a7979]" />
              <p className="mt-1">3 اسفند</p>
            </div>
            <Link to="/" className="font-[shabnamMedium]">
              مقایسه اشیاء: “is” در مقابل “==”
            </Link>
            <p className="text-justify p-5">
              وقتی من بچه بودم، همسایه های ما دو گربه دوقلو داشتند. به نظر می رسید که آنها کاملاً یکسان به نظر می رسیدند - همان خز
              زغالی و همان رنگ سبز نافذ چشم ها. برخی از ویژگی های شخصیتی به...
            </p>
            <button className="bg-[#56C253] hover:bg-[#4dce49] rounded-lg transition-all duration-200 py-2 px-24 mx-auto whitespace-nowrap text-white tracking-tight font-semibold">
              بیشتر بخوانید...
            </button>
          </div>
        </div>
      </div>
      <div className="w-[23rem]">
        <div className="relative">
          <img
            alt="detail_image"
            width={400}
            height={100}
            src="https://nahalit.com/wp-content/uploads/2023/02/Polish_۲۰۲۳۰۲۲۲_۱۲۴۹۱۰۴۸۶.jpg"
          />
          <div className="bg-[#e3e3e3] w-[23rem] h-[23rem] absolute top-[18rem] flex items-end justify-start">
            <div className="flex items-center mr-4 mb-3 gap-x-1">
              <BsEyeFill className="text-[#585858]" />
              <p className=" font-[shabnamThin]">4</p>
            </div>
            <div className="flex items-center mr-3 mb-3 gap-x-1">
              <AiOutlineFile className="text-[#585858]" />
              <Link to="/" className=" font-[shabnamThin]">
                اخبار سایت
              </Link>
            </div>
          </div>
          <div className="w-[21rem] flex flex-col items-start p-6 justify-center bg-white absolute top-[15rem] left-[1.05rem]">
            <div className="flex items-center gap-x-1">
              <BiTimeFive className="text-[#7a7979]" />
              <p className="mt-1">3 اسفند</p>
            </div>
            <Link to="/" className="font-[shabnamMedium]">
              چیزی برای بازگشت به اینجا نیست در پایتون
            </Link>
            <p className="text-justify p-5">
              پایتون یک عبارت بازگشت ضمنی None را به انتهای هر یک اضافه می کند تابع. بنابراین، اگر تابعی مقدار بازگشتی را مشخص
              نکند، به طور پیش‌فرض None را تبدیل می‌کند. این به این معنی است که شما می توانید عبارات...
            </p>
            <button className="bg-[#56C253] hover:bg-[#4dce49] rounded-lg transition-all duration-200 py-2 px-24 mx-auto whitespace-nowrap text-white tracking-tight font-semibold">
              بیشتر بخوانید...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
