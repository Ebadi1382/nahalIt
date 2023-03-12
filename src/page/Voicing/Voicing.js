import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { TfiFaceSad } from "react-icons/tfi";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";

const Voicing = () => {
  return (
    <main>
      <header>
        <Header />
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
