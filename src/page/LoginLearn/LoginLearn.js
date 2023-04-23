import React from "react";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

const LoginLearn = () => {
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
      <div className="container px-48 max-lg:px-16 max-md:px-8 max-sm:px-5 mx-auto flex flex-col items-center justify-center mt-10 mb-20">
        <h2 className="text-center font-[shabnamBold] text-xl mb-8">آموزش نحوه ورود و ثبت نام در وبسایت نهال آی تی</h2>
        <iframe
          className="w-full h-screen max-lg:h-[20rem] max-sm:h-[12rem]"
          title="Login_learn"
          src="https://www.aparat.com/video/video/embed/videohash/yntlK/vt/frame?titleShow=true&startTime=0"
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
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
