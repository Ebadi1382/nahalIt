import React from "react";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

const Brochure = () => {
  return (
    <main>
      <header>
        <div className="max-lg:hidden">
          <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader />
        </div>
      </header>
      <div className="bg-[#f5f5f9] pt-9 pb-12">
        <div className="container px-48 mx-auto max-lg:px-20">
          <h2 className="font-[shabnamBold] text-4xl px-12 max-sm:px-2 max-sm:text-xl">نمونه کارهای بروشور نهال آی تی</h2>
          <div className="flex items-center justify-center gap-x-8 mt-8 flex-wrap gap-y-5">
            <img
              alt="image_Brochure"
              width={550}
              src="https://nahalit.com/wp-content/uploads/2022/11/photo_6023757646743583840_y-1024x768.jpg"
            />
            <img
              alt="image_Brochure"
              width={550}
              src="https://nahalit.com/wp-content/uploads/2022/11/photo_6023757646743583829_y-1024x768.jpg"
            />
          </div>
          <div className="flex items-center justify-center gap-x-6 mt-5 flex-wrap gap-y-5">
            <img alt="image_Brochure" width={350} src="https://nahalit.com/wp-content/uploads/2022/11/IMG-20221031-WA0001.jpg" />
            <img
              alt="image_Brochure"
              width={350}
              src="https://nahalit.com/wp-content/uploads/2022/11/IMG-20221031-WA0002-1024x683.jpg"
            />
            <img
              alt="image_Brochure"
              width={350}
              src="https://nahalit.com/wp-content/uploads/2022/11/IMG-20221031-WA0003-1024x683.jpg"
            />
          </div>
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

export default Brochure;
