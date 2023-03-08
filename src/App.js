import React from "react";
import Home from "./page/Home/Home";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
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
import Premiere from "./page/Premiere/Premiere";
import WebsiteDesignPortfolio from "./page/WebsiteDesignPortfolio/WebsiteDesignPortfolio";
import Aplication from "./page/Aplication/Aplication";
import Seo from "./page/Seo/Seo";
import Voicing from "./page/Voicing/Voicing";
import Saplication from "./page/S_Aplication/Saplication";
import SsoundEditing from "./page/SsoundEditing/SsoundEditing";
import EecoSaleWeb from "./page/EecoSaleWeb/EecoSaleWeb";
import SsaleWebExclusive from "./page/SsaleWebExclusive/SsaleWebExclusive";
import SsaleWeb from "./page/SsaleWeb/SsaleWeb";
import Sseo from "./page/Sseo/Sseo";
import SworkService from "./page/SworkService/SworkService";
import SsocialMedia from "./page/SsocialMedia/SsocialMedia";
import SmotionGhraphic from "./page/SmotionGhraphic/SmotionGhraphic";
import Sproposal from "./page/Sproposal/Sproposal";
import Spremier from "./page/Spremier/Spremier";
import Sgraphic from "./page/Sgraphic/Sgraphic";

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
          <Route path="/Premiere" element={<Premiere />} />
          <Route path="/WebsiteDesignPortfolio" element={<WebsiteDesignPortfolio />} />
          <Route path="/Aplication" element={<Aplication />} />
          <Route path="/Seo" element={<Seo />} />
          <Route path="/Voicing" element={<Voicing />} />
          <Route path="/S_Aplication" element={<Saplication />} />
          <Route path="/SsoundEditing" element={<SsoundEditing />} />
          <Route path="/EecoSaleWeb" element={<EecoSaleWeb />} />
          <Route path="/SsaleWebExclusive" element={<SsaleWebExclusive />} />
          <Route path="/SsaleWeb" element={<SsaleWeb />} />
          <Route path="/Sseo" element={<Sseo />} />
          <Route path="/SworkService" element={<SworkService />} />
          <Route path="/SsocialMedia" element={<SsocialMedia />} />
          <Route path="/SmotionGhraphic" element={<SmotionGhraphic />} />
          <Route path="/Sproposal" element={<Sproposal />} />
          <Route path="/Spremier" element={<Spremier />} />
          <Route path="/Sgraphic" element={<Sgraphic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
