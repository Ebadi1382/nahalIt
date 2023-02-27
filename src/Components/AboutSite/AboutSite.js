import React from "react";

const AboutSite = () => {
  return (
    <div className="flex items-center justify-start gap-28 bg-[#f3f3f5] py-4 container px-48 mx-auto rounded-lg">
      <div className="flex items-center gap-x-3">
        <img alt="aboutSite" src="https://nahalit.com/wp-content/themes/Sigma/assets/img/s1.png" />
        <div className="items-center justify-center">
          <p className="tracking-tighter">طراحی استاندارد</p>
          <p className="tracking-tighter">طرح ارسالی</p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-x-3">
          <img alt="aboutSite" src="https://nahalit.com/wp-content/themes/Sigma/assets/img/s2.png" />
          <div className="items-center justify-center">
            <p className="tracking-tighter">پرداخت اقساطی</p>
            <p className="tracking-tighter">به صورت آنلاین</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-x-3">
          <img alt="aboutSite" src="https://nahalit.com/wp-content/themes/Sigma/assets/img/s3.png" />
          <div className="items-center justify-center">
            <p className="tracking-tighter">تحویل فوری</p>
            <p className="tracking-tighter">با بالاترین کیفیت</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-x-3">
          <img alt="aboutSite" src="https://nahalit.com/wp-content/themes/Sigma/assets/img/s4.png" />
          <div className="items-center justify-center">
            <p className="tracking-tighter">پشتیبانی قوی</p>
            <p className="tracking-tighter">به صورت آنی</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSite;
