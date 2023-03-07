import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const WebsiteDesignPortfolio = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="flex items-start justify-between py-10 container mx-auto px-48">
        <div>
          <p className="font-[shabnamBold] text-xl tracking-tighter text-[#4c4c4c] mb-2">نمونه کارها</p>
          <Link className="text-[#00750A] font-[shabnamBold] tracking-tighter text-lg">سایت کفش توپ</Link>
          <p className="text-lg tracking-tighter">این سایت با موضوع خرید کفش و کتونی با نام کفش توپ می باشد .</p>
        </div>
        <Link>
          <img
            src="https://nahalit.com/wp-content/uploads/2022/10/photo_2022-10-07_03-12-07.jpg"
            className="rounded-3xl border-[3.1px] border-solid border-[#4c4c4c] m-8 hover:opacity-80 transition-all duration-300"
            width={320}
            alt="image_portfolio"
          />
        </Link>
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default WebsiteDesignPortfolio;
