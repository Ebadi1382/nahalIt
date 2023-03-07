import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Aplication = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="container px-48 mx-auto mb-10">
        <div>
          <h2 className="font-[shabnamBold] px-16 tracking-tighter text-lg mt-9 mb-10">نمونه کار های اندروید</h2>
        </div>
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center justify-center">
            <Link>
              <img
                className="hover:opacity-80 transition-all duration-200"
                src="https://nahalit.com/wp-content/uploads/2022/10/Reserve.jpg"
                alt="image_aplication"
                width={170}
              />
            </Link>
            <Link className="font-[shabnamBold] tracking-tighter mt-4 hover:text-[#5e5e5e] transition-all duration-200">
              اپلیکیشن سرویس نوبت دهی
            </Link>
            <p className="mt-1">سرویس نوبت دهی نهال آی تی</p>
            <button
              type="button"
              className="bg-[#367B1D] mt-6 hover:bg-[#459b26] transition-all duration-200 text-white px-7 py-3 font-bold rounded-lg tracking-tighter"
            >
              برای مشاهده روی اینجا کلیک کنید
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link>
              <img
                className="hover:opacity-80 transition-all duration-200"
                src="https://nahalit.com/wp-content/uploads/2022/10/rahro.jpg"
                alt="image_aplication"
                width={170}
              />
            </Link>
            <Link className="font-[shabnamBold] hover:text-[#5e5e5e] transition-all duration-200 tracking-tighter mt-4">
              اپلیکیشن سرویس خدمات بانکی
            </Link>
            <p className="mt-1">سرویس خدمات بانکی راهرو</p>
            <button
              type="button"
              className="bg-[#367B1D] mt-6 hover:bg-[#459b26] transition-all duration-200 text-white px-7 py-3 font-bold rounded-lg tracking-tighter"
            >
              برای مشاهده روی اینجا کلیک کنید
            </button>
          </div>
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </main>
  );
};

export default Aplication;
