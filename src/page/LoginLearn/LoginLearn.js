import React from "react";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const LoginLearn = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="container px-48 mx-auto flex flex-col items-center justify-center mt-10 mb-20">
        <h2 className="text-center font-[shabnamBold] text-xl mb-8">آموزش نحوه ورود و ثبت نام در وبسایت نهال آی تی</h2>
        <div className="w-[100%] h-[40rem] flex items-center justify-center">
          <span style={{ display: "block", paddingTop: "57%" }}></span>
          <iframe
            className="w-full h-full"
            title="Login_learn"
            src="https://www.aparat.com/video/video/embed/videohash/yntlK/vt/frame?titleShow=true&startTime=0"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
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

export default LoginLearn;
