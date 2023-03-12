import React from "react";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Seo = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="flex items-start justify-around bg-[#f5f5f9] mt-1 pb-10 pt-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="font-[shabnamBold] tracking-tighter">سئو وب سایت آسمان سازه</p>
          <p>کلمات بهینه شده در این پروژه: </p>
          <p>انجام امور شهرداری</p>
          <p>اخذ تراکم</p>
          <p>شهرداری تهران</p>
          <p>اخذ سند</p>
          <p>گواهی عدم خلافی</p>
          <p>اخذ جواز ساختمان</p>
          <button className="bg-[#57C053] hover:bg-[#5dcd59] transition-all duration-300 px-6 py-2 rounded-md text-white mt-2">
            مشاهده
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="font-[shabnamBold] tracking-tighter">بهینه سازی و سئو سایت مکسی</p>
          <p>کلمات بهینه شده در این پروژه: </p>
          <p>خرید و قیمت کفش بچه گانه</p>
          <button className="bg-[#57C053] hover:bg-[#5dcd59] transition-all duration-200  px-6 py-2 rounded-md text-white mt-2">
            مشاهده
          </button>
        </div>
      </div>
      <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Seo;
