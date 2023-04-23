import React from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";
// import images
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

function ContactUs() {
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
      <div className="flex flex-col w-full container px-28 max-lg:px-10 max-sm:px-2 mx-auto">
        <div className="flex flex-col gap-8 p-20 max-lg:p-10 max-sm:p-2 text-gray-4444 items-start ">
          <div className="flex flex-col">
            <span className="font-bold border-b-4 border-green-57C pb-2">تماس با نهال آیتی</span>
            <span className="text-gray-b1b1 tracking-wide pt-2" style={{ letterSpacing: "0.2rem" }}>
              Contact Us
            </span>
          </div>
          <div className="text-sm text-gray-5E5E leading-8 mt-5">
            <p>
              کاربر گرامی، لطفاً در صورت وجود هرگونه سوال یا ابهامی، پیشنهاد و یا هرگونه پیامی از بخش پشتیبانی سایت اقدام نمایید .
              پشتیبانان و تیم ما هر لحظه از شبانه روز آماده پاسخگویی به شما کاربران نهال آیتی می باشند .
            </p>
            <p>موقعیت ما را روی نقشه میتوانید پیدا کنید:</p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold">نهال آیتی در شبکه های اجتماعی</span>
            <div className="flex flex-row gap-5 text-green-137 mr-20">
              <Link to="https://www.instagram.com/nahal_it_official">
                <BsInstagram className="w-7 h-7" />
              </Link>
              <Link to="https://telegram.me/nahal_it">
                <BsTelegram className="w-7 h-7" />
              </Link>
              <Link to="https://youtube.com/nahal_it">
                <BsYoutube className="w-7 h-7" />
              </Link>
              <Link to="https://aparat.com/nahal_it">
                <FaVideo className="w-7 h-7" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col text-gray-77 text-sm gap-2">
            <span>با عضویت در شبکه های اجتماعی نهال آیتی از آخرین تخفیف ها ،</span>
            <span>جشنواره ها و اطلاعیه های فروشگاه با خبر خواهید شد.</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold text-base">تماس با نهال آیتی</span>
            <div className="flex flex-row gap-5 opacity-80">
              <Link to="tell://+982188867940" className="flex flex-row items-center gap-1 ">
                <FaMicrophone className="text-green-137" />
                <span>
                  <b>021</b>88867940
                </span>
              </Link>
              <Link to="mailto:admin@nahalit.com">
                <b className="ml-2">@</b>
                <span>
                  <b>admin@</b>nahalit.com
                </span>
              </Link>
            </div>
            <Link to="tell://+989927674217" className="flex flex-row items-center gap-1 opacity-80">
              <FaMicrophone className="text-green-137" />
              <span>
                <b>0992</b>7674217
              </span>
            </Link>
          </div>
          <Link className="text-sm text-gray-77 w-3/5 leading-7" to="/">
            <b className="ml-1">دفتر مرکزی : </b>
            تهران - میدان فردوسی - خیابان ایرانشهر - بین سمیه و طالقانی - مجتمع تجاری میلاد - طبقه ۵ - واحد ۹
          </Link>
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
}

export default ContactUs;
