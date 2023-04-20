import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { TfiFaceSad } from "react-icons/tfi";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

const Voicing = () => {
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
      <div className="flex items-center justify-center min-h-[50vh]">
        <h2 className="font-[shabnamBold] flex items-center justify-center gap-x-1">
          در حال حاضر نمونه کاری وجود ندارد
          <TfiFaceSad />
        </h2>
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

export default Voicing;
