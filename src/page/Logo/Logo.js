import React from "react";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

const Logo = () => {
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
        <div className="container px-48 max-lg:px-20 max-md:px-14 max-sm:px-10 mx-auto">
          <h2 className="font-[shabnamBold] text-4xl px-12">نمونه های لوگو و مهر نهال آی تی</h2>
          <div className="flex flex-wrap items-center justify-center gap-x-8 mt-8">
            <img
              alt="image_Brochure"
              width={160}
              src="https://nahalit.com/wp-content/uploads/2022/11/photo_6023757646743583838_y.jpg"
            />
            <img
              alt="image_Brochure"
              width={160}
              src="https://nahalit.com/wp-content/uploads/2022/11/photo_6023757646743583836_y.jpg"
            />
            <img alt="image_Brochure" width={160} src="https://nahalit.com/wp-content/uploads/2022/11/Untitفled-1.jpg" />
            <img
              alt="image_Brochure"
              width={160}
              src="https://nahalit.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-15-at-12.45.33-1.jpeg"
            />
            <img
              alt="image_Brochure"
              width={160}
              src="https://nahalit.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-15-at-12.45.34.jpeg"
            />
            <img
              alt="image_Brochure"
              width={160}
              src="https://nahalit.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-15-at-12.45.35.jpeg"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 mt-5">
            <img
              alt="image_Brochure"
              width={350}
              src="https://nahalit.com/wp-content/uploads/2022/12/KhaneDesign-Logo-1024x1024.jpg"
            />
            <img
              alt="image_Brochure"
              width={350}
              src="https://nahalit.com/wp-content/uploads/2022/12/Perspective-Logo-Design-1024x1024.jpg"
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

export default Logo;
