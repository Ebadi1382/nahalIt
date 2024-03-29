import React from "react";
import AboutSite from "../../Components/AboutSite/AboutSite";
import CustomSlider from "../../Components/CustomSlider/CustomSlider";
import CustomSlider2 from "../../Components/CustomSlider2/CustomSlider2";
import Details from "../../Components/Details/Details";
import Header from "../../Components/Header/Header";
import LotteryHomePage from "../../Components/LotteryHomePage/LotteryHomePage";
import News from "../../Components/News/News";
import OurProuduct from "../../Components/OurProuduct/OurProuduct";
import Search from "../../Components/Search/Search";
import ServicesHomePage from "../../Components/ServicesHomePage/ServicesHomePage";
import SliderSwiper from "../../Components/SliderSwiper/SliderSwiper";
import Footer from "../../Components/Footer/Footer";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

const Home = () => {
  return (
    <div>
      <header>
        <div className="max-lg:hidden">
        <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader/>
        </div>
      </header>
      <main>
        <section>
          <SliderSwiper />
        </section>
        <section className="mt-5">
          {/* problem in responsive */}
          <Search />
        </section>
        <section className="mt-14">
          <LotteryHomePage />
        </section>
        <section className="mt-14">
          <ServicesHomePage />
        </section>
        <section className="mt-14">
          <CustomSlider />
        </section>
        <section className="mt-8">
          <AboutSite />
        </section>
        <section className="mt-32">
          <OurProuduct />
        </section>
        <section className="mt-14">
          <CustomSlider2 />
        </section>
        <section className="mt-24">
          <News />
        </section>
        <section className="mt-14">
          <Details />
        </section>
        <div>
          <FixedIcon />
        </div>
        <footer className="mt-14">
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default Home;
