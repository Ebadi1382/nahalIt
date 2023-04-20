import React from "react";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

const UI_UX = () => {
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
      <div className="bg-[#f5f5f9] pb-10">
        <div className="container px-48 mx-auto">
          <h2 className="font-[shabnamBold] text-4xl px-24 pt-10 mt-2 tracking-tighter">نمونه کار های UI/UX نهال آی تی</h2>
          <div>
            <div className="flex items-center justify-center gap-x-5">
              <img
                alt="UI_UX"
                width={200}
                src="https://nahalit.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-16-at-15.44.10.jpeg"
              />
              <img
                alt="UI_UX"
                width={200}
                src="https://nahalit.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-16-at-15.44.11.jpeg"
              />
              <img
                alt="UI_UX"
                width={200}
                src="https://nahalit.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-16-at-15.44.12.jpeg"
              />
              <img
                alt="UI_UX"
                width={200}
                src="https://nahalit.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-16-at-15.44.13-473x1024.jpeg"
              />
              <img
                alt="UI_UX"
                width={200}
                src="https://nahalit.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-16-at-15.44.14-473x1024.jpeg"
              />
            </div>
            <div className="flex flex-wrap items-center justify-start gap-x-5 gap-y-8 mt-8">
              <img
                alt="UI_UX"
                width={255}
                src="https://nahalit.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-16-at-15.44.17-1024x825.jpeg"
              />
              <img alt="UI_UX" width={255} src="https://nahalit.com/wp-content/uploads/2022/12/anjoman-eslami-1024x768.jpg" />
              <img alt="UI_UX" width={255} src="https://nahalit.com/wp-content/uploads/2022/12/bank-vahdat-1024x768.jpg " />
              <img alt="UI_UX" width={255} src="https://nahalit.com/wp-content/uploads/2022/12/Bonti-Phone-1024x768.jpg" />
              <img alt="UI_UX" width={255} src="https://nahalit.com/wp-content/uploads/2022/12/mahdieh-bank-1024x768.jpg" />
              <img alt="UI_UX" width={255} src="https://nahalit.com/wp-content/uploads/2022/12/Childs-Angeles-1024x768.jpg" />
              <img
                alt="UI_UX"
                width={255}
                src="https://nahalit.com/wp-content/uploads/2022/12/moavenat-riasat-Jomhoori-1024x768.jpg"
              />
              <img alt="UI_UX" width={255} src="https://nahalit.com/wp-content/uploads/2022/12/pizza-hut-1024x768.jpg" />
              <img
                alt="UI_UX"
                width={255}
                src="https://nahalit.com/wp-content/uploads/2022/12/University-of-Kurdistan-1024x768.jpg"
              />
              <img alt="UI_UX" width={255} src="https://nahalit.com/wp-content/uploads/2022/12/shohada-1024x768.jpg" />
              <img alt="UI_UX" width={255} src="https://nahalit.com/wp-content/uploads/2022/12/Shoora-Sanandaj-1024x512.jpg" />
              <img alt="UI_UX" width={255} src="https://nahalit.com/wp-content/uploads/2022/12/TaxiDar-1024x683.jpg" />
              <img alt="UI_UX" width={255} src="https://nahalit.com/wp-content/uploads/2022/12/web-bonti-1024x768.jpg" />
              <img alt="UI_UX" width={255} src="https://nahalit.com/wp-content/uploads/2022/12/Yakkr-mockup-1024x768.jpg" />
              <img alt="UI_UX" width={255} src="https://nahalit.com/wp-content/uploads/2022/12/zanest-1-1024x466.jpg" />
              <img alt="UI_UX" width={255} src="https://nahalit.com/wp-content/uploads/2022/12/zanest2-1024x614.jpg" />
              <img alt="UI_UX" width={255} src="https://nahalit.com/wp-content/uploads/2022/12/zarincrowd_resume-1024x768.jpg" />
            </div>
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

export default UI_UX;
