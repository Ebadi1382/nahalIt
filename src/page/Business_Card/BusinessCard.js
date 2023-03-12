import React from "react";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const BusinessCard = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="bg-[#f5f5f9] pt-9 pb-12">
        <div className="container px-48 mx-auto">
          <h2 className="font-[shabnamBold] text-4xl mb-10">نمونه کار های کارت ویزیت</h2>
          <div className="flex flex-wrap items-center justify-start gap-8">
            <img
              alt="Imgae_Catalog"
              width={250}
              src="https://nahalit.com/wp-content/uploads/2022/12/IMG_20221225_130536_530-656x1024.jpg"
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

export default BusinessCard;
