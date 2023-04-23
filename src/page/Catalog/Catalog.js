import React from "react";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

const Catalog = () => {
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
      <div className="bg-[#f5f5f9] pt-9 mb-12">
        <div className="container px-48 max-lg:px-20 max-sm:px-10 mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <img
              alt="Imgae_Catalog"
              width={355}
              src="https://nahalit.com/wp-content/uploads/2022/11/photo_6023757646743583833_y-1024x1024.jpg"
            />
            <img
              alt="Imgae_Catalog"
              width={355}
              src="https://nahalit.com/wp-content/uploads/2022/11/photo_6023757646743583834_y-1024x1024.jpg"
            />
            <img
              alt="Imgae_Catalog"
              width={355}
              src="https://nahalit.com/wp-content/uploads/2022/11/photo_6023757646743583835_y-1024x1024.jpg"
            />
            <img
              alt="Imgae_Catalog"
              width={550}
              src="https://nahalit.com/wp-content/uploads/2022/11/photo_6023757646743583830_y-1024x682.jpg"
            />
            <img
              alt="Imgae_Catalog"
              width={550}
              src="https://nahalit.com/wp-content/uploads/2022/11/photo_6023757646743583831_y-1024x683.jpg"
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

export default Catalog;
