import React, { useRef } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { RiShoppingCartLine } from "react-icons/ri";
import "./CustomSlider.css";

const CustomSlider = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const sliderRef = useRef();
  const swiperCustome = (data) => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo(sliderRef.current.scrollLeft + width * data, 0);
    }
  };
  return (
    <div className="container mx-auto px-60 py-5 bg-[#f3f3f5] rounded-xl">
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
            <div className="flex flex-col bg-white justify-around w-[19.8rem] h-[23rem] rounded-2xl shadow-[5px_5px_8px_rgba(0,0,0,0.25)] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.7)] hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start justify-center h-full">
                <img
                  className="rounded-tl-2xl rounded-tr-2xl"
                  alt="product_Slide_Image"
                  width={316}
                  height="160px"
                  src="https://nahalit.com/wp-content/uploads/2022/12/photo_8_2022-12-25_23-58-11-300x200.jpg"
                />
              </div>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="mr-3">
                  <div className="flex items-center gap-x-2">
                    <p className="py-2 px-1 text-sm bg-[#F4F4F5] rounded-lg">قالب HTML</p>
                  </div>
                  <h3 className="text-[#656666] font-bold text-lg mb-6">قالب html مارکت پلیس وب استور</h3>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-end w-full gap-x-2">
                    <RiShoppingCartLine className="bg-[#FB923C] p-2 w-10 h-10 rounded-lg text-white" />
                    <p className="bg-[#A3A3A3] px-5 py-2 rounded-tr-lg rounded-br-lg text-white font-bold">تومان 000'119</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sliderItem p-2">
            <div className="flex flex-col bg-white justify-around w-[19.8rem] h-[23rem] rounded-2xl shadow-[5px_5px_8px_rgba(0,0,0,0.25)] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.7)] hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start justify-center h-full">
                <img
                  className="rounded-tl-2xl rounded-tr-2xl"
                  alt="product_Slide_Image"
                  width={316}
                  height={160}
                  src="https://nahalit.com/wp-content/uploads/2022/12/photo_8_2022-12-25_23-57-58-300x200.jpg"
                />
              </div>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="mr-3">
                  <div className="flex items-center gap-x-2">
                    <p className="py-2 px-1 text-sm bg-[#F4F4F5] rounded-lg">قالب HTML</p>
                  </div>
                  <h3 className="text-[#656666] font-bold text-lg">قالب در دست ساخت ابروان</h3>
                  <span className="mb-6  text-[#a7a7a7] text-sm">abrovan</span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-end w-full gap-x-2">
                    <RiShoppingCartLine className="bg-[#FB923C] p-2 w-10 h-10 rounded-lg text-white" />
                    <p className="bg-[#A3A3A3] px-5 py-2 rounded-tr-lg rounded-br-lg text-white font-bold">تومان 000'109</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sliderItem p-2">
            <div className="flex flex-col bg-white justify-around w-[19.8rem] h-[23rem] rounded-2xl shadow-[5px_5px_8px_rgba(0,0,0,0.25)] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.7)] hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start justify-center h-full">
                <img
                  className="rounded-tl-2xl rounded-tr-2xl"
                  alt="product_Slide_Image"
                  width={316}
                  height={160}
                  src="https://nahalit.com/wp-content/uploads/2022/12/photo_9_2022-12-25_23-57-58-300x200.jpg"
                />
              </div>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="mr-3">
                  <div className="flex items-center gap-x-2">
                    <p className="py-2 px-1 text-sm bg-[#F4F4F5] rounded-lg">قالب HTML</p>
                  </div>
                  <h3 className="text-[#656666] font-bold text-lg">قالب html فروشگایی پاندو</h3>
                  <span className="mb-6  text-[#a7a7a7] text-sm">pando</span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-end w-full gap-x-2">
                    <RiShoppingCartLine className="bg-[#FB923C] p-2 w-10 h-10 rounded-lg text-white" />
                    <p className="bg-[#A3A3A3] px-5 py-2 rounded-tr-lg rounded-br-lg text-white font-bold">تومان 000'109</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sliderItem p-2">
            <div className="flex flex-col bg-white justify-around w-[19.8rem] h-[23rem] rounded-2xl shadow-[5px_5px_8px_rgba(0,0,0,0.25)] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.7)] hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start justify-center h-full">
                <img
                  className="rounded-tl-2xl rounded-tr-2xl"
                  alt="product_Slide_Image"
                  width={316}
                  height={160}
                  src="https://nahalit.com/wp-content/uploads/2022/12/photo_7_2022-12-25_23-57-58-300x200.jpg"
                />
              </div>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="mr-3">
                  <div className="flex items-center gap-x-2">
                    <p className="py-2 px-1 text-sm bg-[#F4F4F5] rounded-lg">قالب HTML</p>
                  </div>
                  <h3 className="text-[#656666] font-bold text-lg">قالب لندینگ پیج تک محصوله نایان</h3>
                  <span className="mb-6  text-[#a7a7a7] text-sm">nayan</span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-end w-full gap-x-2">
                    <RiShoppingCartLine className="bg-[#FB923C] p-2 w-10 h-10 rounded-lg text-white" />
                    <p className="bg-[#A3A3A3] px-5 py-2 rounded-tr-lg rounded-br-lg text-white font-bold">تومان 000'109</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sliderItem p-2">
            <div className="flex flex-col bg-white justify-around w-[19.8rem] h-[23rem] rounded-2xl shadow-[5px_5px_8px_rgba(0,0,0,0.25)] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.7)] hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start justify-center h-full">
                <img
                  className="rounded-tl-2xl rounded-tr-2xl"
                  alt="product_Slide_Image"
                  width={316}
                  height={160}
                  src="https://nahalit.com/wp-content/uploads/2022/12/photo_9_2022-12-25_23-58-11-300x200.jpg"
                />
              </div>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="mr-3">
                  <div className="flex items-center gap-x-2">
                    <p className="py-2 px-1 text-sm bg-[#F4F4F5] rounded-lg">قالب HTML</p>
                  </div>
                  <h3 className="text-[#656666] font-bold text-lg">قالب شرکتی html شادان</h3>
                  <span className="mb-6  text-[#a7a7a7] text-sm">shadan</span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-end w-full gap-x-2">
                    <RiShoppingCartLine className="bg-[#FB923C] p-2 w-10 h-10 rounded-lg text-white" />
                    <p className="bg-[#A3A3A3] px-5 py-2 rounded-tr-lg rounded-br-lg text-white font-bold">تومان 000'109</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sliderItem p-2">
            <div className="flex flex-col bg-white justify-around w-[19.8rem] h-[23rem] rounded-2xl shadow-[5px_5px_8px_rgba(0,0,0,0.25)] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.7)] hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start justify-center h-full">
                <img
                  className="rounded-tl-2xl rounded-tr-2xl"
                  alt="product_Slide_Image"
                  width={316}
                  height={160}
                  src="https://nahalit.com/wp-content/uploads/2022/12/photo_6_2022-12-25_23-57-58-300x200.jpg"
                />
              </div>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="mr-3">
                  <div className="flex items-center gap-x-2">
                    <p className="py-2 px-1 text-sm bg-[#F4F4F5] rounded-lg">قالب HTML</p>
                  </div>
                  <h3 className="text-[#656666] font-bold text-lg mb-6">صفحه فرود html تخفیفانه 7 شنبه بازار</h3>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-end w-full gap-x-2">
                    <RiShoppingCartLine className="bg-[#FB923C] p-2 w-10 h-10 rounded-lg text-white" />
                    <p className="bg-[#A3A3A3] px-5 py-2 rounded-tr-lg rounded-br-lg text-white font-bold">تومان 000'109</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sliderItem p-2">
            <div className="flex flex-col bg-white justify-around w-[19.8rem] h-[23rem] rounded-2xl shadow-[5px_5px_8px_rgba(0,0,0,0.25)] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.7)] hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start justify-center h-full">
                <img
                  className="rounded-tl-2xl rounded-tr-2xl"
                  alt="product_Slide_Image"
                  width={316}
                  height={160}
                  src="https://nahalit.com/wp-content/uploads/2022/12/photo_5_2022-12-25_23-58-11-300x200.jpg"
                />
              </div>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="mr-3">
                  <div className="flex items-center gap-x-2">
                    <p className="py-2 px-1 text-sm bg-[#F4F4F5] rounded-lg">قالب HTML</p>
                  </div>
                  <h3 className="text-[#656666] font-bold text-lg mb-6">ورود و ثبت نام پامیس html پک کامل</h3>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-end w-full gap-x-2">
                    <RiShoppingCartLine className="bg-[#FB923C] p-2 w-10 h-10 rounded-lg text-white" />
                    <p className="bg-[#A3A3A3] px-5 py-2 rounded-tr-lg rounded-br-lg text-white font-bold">تومان 000'109</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sliderItem p-2">
            <div className="flex flex-col bg-white justify-around w-[19.8rem] h-[23rem] rounded-2xl shadow-[5px_5px_8px_rgba(0,0,0,0.25)] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.7)] hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start justify-center h-full">
                <img
                  className="rounded-tl-2xl rounded-tr-2xl"
                  alt="product_Slide_Image"
                  width={316}
                  height={160}
                  src="https://nahalit.com/wp-content/uploads/2022/12/photo_5_2022-12-25_23-57-58-300x200.jpg"
                />
              </div>
              <div className="flex flex-col items-start justify-center h-full">
                <div className="mr-3">
                  <div className="flex items-center gap-x-2">
                    <p className="py-2 px-1 text-sm bg-[#F4F4F5] rounded-lg">قالب HTML</p>
                    <p className="py-2 px-1 text-sm bg-[#F4F4F5] rounded-lg">بدون دسته بندی</p>
                  </div>
                  <h3 className="text-[#656666] font-bold text-lg mb-6">قالب html داشبورد و پنل ادمین ubold</h3>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center justify-end w-full gap-x-2">
                    <RiShoppingCartLine className="bg-[#FB923C] p-2 w-10 h-10 rounded-lg text-white" />
                    <p className="bg-[#A3A3A3] px-5 py-2 rounded-tr-lg rounded-br-lg text-white font-bold">تومان 000'50</p>
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

export default CustomSlider;
