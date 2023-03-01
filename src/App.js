import React from "react";
import Home from "./page/Home/Home";
import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./page/Order/Order";
import Recruitment from "./page/Recruitment/Recruitment";
import LoginLearn from "./page/LoginLearn/LoginLearn";
import MotionGraphics from "./page/MotionGraphics/MotionGraphics";
import UI_UX from "./page/UI_UX/UI_UX";
import Brochure from "./page/Brochure/Brochure";
import Poster from "./page/Poster/Poster";
import Catalog from "./page/Catalog/Catalog";
import BusinessCard from "./page/Business_Card/BusinessCard";
import Logo from "./page/Logo/Logo";

const App = () => {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/LoginLearn" element={<LoginLearn />} />
          <Route path="/MotionGraphics" element={<MotionGraphics />} />
          <Route path="/UI_UX" element={<UI_UX />} />
          <Route path="/Brochure" element={<Brochure />} />
          <Route path="/Poster" element={<Poster />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/BusinessCard" element={<BusinessCard />} />
          <Route path="/Logo" element={<Logo />} />
        </Routes>
      </div>
      {/* <ToastContainer
      position="top-right"
      autoClose={5000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    /> */}
    </BrowserRouter>
  );
};

export default App;
