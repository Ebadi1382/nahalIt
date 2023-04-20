import React, { useRef } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CustomSlider2 = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const sliderRef = useRef();
  const swiperCustome = (data) => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo(sliderRef.current.scrollLeft + width * data, 0);
    }
  };
  return (
    <div className="container mx-auto px-48 max-lg:px-10 max-md:px-5 max-sm:px-2  py-5 bg-[#f3f3f5] rounded-xl">
      <div className="flex items-center justify-between">
        <div className="border-r-4 text-[#868686] border-[#07B235] pr-2 font-bold text-2xl border-solid">
          <h3>قالب های ویژه HTML</h3>
        </div>
        <div className="flex justify-end items-center w-[15rem]">
          <div className="flex gap-x-4 text-2xl">
            <HiOutlineChevronRight
              onClick={() => swiperCustome(1)}
              className="bg-white text-[#868686] hover:bg-[#2ac954] rounded-lg w-10 h-10 hover:text-white transition-all duration-500 cursor-pointer"
            />
            <HiOutlineChevronLeft
              onClick={() => swiperCustome(-1)}
              className="bg-white text-[#868686] hover:bg-[#2ac954] rounded-lg w-10 h-10 hover:text-white transition-all duration-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div ref={sliderRef} className="sliderContainer overflow-x-scroll">
        <div className="flex items-center justify-start gap-5 py-8 mx-10">
          <div className="sliderItem p-2">
            <div className="flex flex-col bg-white justify-around  w-[18rem] h-[28rem] rounded-2xl shadow-[5px_5px_8px_rgba(0,0,0,0.25)] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.7)] hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start justify-center h-full">
                <img
                  className="rounded-tl-2xl rounded-tr-2xl pt-6"
                  alt="product_Slide_Image"
                  width={250}
                  height="160px"
                  src="https://nahalit.com/wp-content/uploads/2022/10/rahro-300x300.jpg"
                />
              </div>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="mr-3">
                  <div className="flex items-center gap-x-2">
                    <p className="py-2 px-1 text-sm bg-[#F4F4F5] rounded-lg">اپلیکیشن موبایل</p>
                    <p className="py-2 px-1 text-sm bg-[#F4F4F5] rounded-lg">اپلیکیشن اندروید</p>
                  </div>
                  <h3 className="text-[#000] font-bold text-lg">سرویس خدمات بانکی راهرو</h3>
                  <p className="text-[#656666] text-sm mb-2">Rahro Android Application</p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-end justify-end w-full gap-x-2">
                    <Link to="/">
                      <RiShoppingCartLine className="bg-[#FB923C] p-2 w-10 h-10 rounded-lg text-white" />
                    </Link>
                    <div className="flex flex-col items-center">
                      <p className="text-red-500 whitespace-nowrap line-through">تومان 4,000,000</p>
                      <p className="bg-[#A3A3A3] px-5 py-2 rounded-tr-lg rounded-br-lg text-white font-bold whitespace-nowrap">
                        تومان 3,500,000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sliderItem p-2">
            <div className="flex flex-col bg-white justify-around w-[18rem] h-[28rem] rounded-2xl shadow-[5px_5px_8px_rgba(0,0,0,0.25)] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.7)] hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start justify-center h-full">
                <img
                  className="rounded-tl-2xl rounded-tr-2xl pt-6"
                  alt="product_Slide_Image"
                  width={250}
                  height="160px"
                  src="https://nahalit.com/wp-content/uploads/2022/10/Reserve-300x300.jpg"
                />
              </div>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="mr-3">
                  <div className="flex items-center gap-x-2">
                    <p className="py-2 px-1 text-sm bg-[#F4F4F5] rounded-lg">اپلیکیشن موبایل</p>
                    <p className="py-2 px-1 text-sm bg-[#F4F4F5] rounded-lg">اپلیکیشن اندروید</p>
                  </div>
                  <h3 className="text-[#000] font-bold text-lg">سرویس نوبت دهی نهال آی تی</h3>
                  <p className="text-[#656666] text-sm mb-2">Nahalit Reserve Android</p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-end justify-end w-full gap-x-2">
                    <Link to="/">
                      <RiShoppingCartLine className="bg-[#FB923C] p-2 w-10 h-10 rounded-lg text-white" />
                    </Link>
                    <div className="flex flex-col items-center">
                      <p className="text-red-500 whitespace-nowrap line-through">تومان 3,500,000</p>
                      <p className="bg-[#A3A3A3] px-5 py-2 rounded-tr-lg rounded-br-lg text-white font-bold whitespace-nowrap">
                        تومان 3,000,000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider2;
