import React from "react";
import Home from "./page/Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/notification" element={<Notification />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/profile/complete_profile" element={<CompleteProfile />} />
        <Route path="/profile/login" element={<LogIn />} />
        <Route path="/profile/signup" element={<SignUp />} />
        <Route path="/profile/change_password" element={<ChangePassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/complete_data" element={<CompleteOrderDetail />} />
        <Route path="/cart/complete_data/final_veiw" element={<ViewFinalOrder />} />
        <Route path="/products/productDetail/:_id" element={<ProductDetail />} />
        <Route path="/products/productDetailSoon/:_id" element={<ProductDetailSoon />} />
        <Route path="*" element={<NotFind404 />} /> */}
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
