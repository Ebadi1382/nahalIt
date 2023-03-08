import React from "react";
import "./SsaleWebExclusive.css";
import { motion } from "framer-motion";
// import images
import HeadImg from "../../assets/img/ExWebDesign/طراحی-سایت-اختصاصی-1024x576.jpg";
import Img_1 from "../../assets/img/ExWebDesign/1.png";
import Img_2 from "../../assets/img/ExWebDesign/2.png";
import Img_3 from "../../assets/img/ExWebDesign/3.png";
import Img_4 from "../../assets/img/ExWebDesign/4.png";
import domain from "../../assets/img/ExWebDesign/domain-min.png";
import Img_5 from "../../assets/img/ExWebDesign/5.png";
import Img_6 from "../../assets/img/ExWebDesign/6.png";
import tarrif_laravel from "../../assets/img/ExWebDesign/تعرفه-طراحی-وبسایت-اختصاصی-با-زبان-لاراول-549x1024.png";
import tarrif_jango from "../../assets/img/ExWebDesign/تعرفه-طراحی-وبسایت-اختصاصی-با-زبان-جنگو-549x1024.png";
import tarrif_php from "../../assets/img/ExWebDesign/تعرفه-طراحی-وبسایت-اختصاصی-با-زبان-php-549x1024.png";
import tarrif_wordpress from "../../assets/img/ExWebDesign/تعرفه-طراحی-وبسایت-اختصاصی-با-وردپرس-549x1024.png";
import front_1 from "../../assets/img/frm-thbt-sfarsh-transformed-min.png";
import front_2 from "../../assets/img/SaleReadyTemplate/خدمات-کامپیوتر.png";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

function SsaleWebExclusive() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="ExWebDesign-content flex flex-col items-center gap-10 pb-10 pt-2 bg-[#f5f5f9]">
        <div className="container px-48 mx-auto">
          <div className="flex flex-col gap-10 px-1">
            <img src={HeadImg} alt="header" />
            <div>
              <h1 className="text-center text-green-137">طراحی انواع وب سایت اختصاصی</h1>
              <p>
                وب سایت و فروشگاه ایننرنتی شما نمایندگی کسب وکارتان در فضای دیجیتال است. امروزه بسیاری از مخاطبان پیش از تعامل
                مستقیم با شما نخستین بار با وب سایت شما مواجه شده و تلقی خود از کسب وکار تان را با کیفیت طراحی وب سایت شما می
                سنجند.
              </p>
              <p>
                باتوجه به اینکه دنیای کسب وکار‎ها به سمت دیجیتالی شدن رفته، همه صاحبان کسب و کار‎ها برای دیده شدن بین رقبا ناگزیر
                به آنلاین کردن کسب و کارشون هستن و قطعا یکی از گام های اساس برای آنلاین کردن کسب وکارمون، طراحی سایت هست.
              </p>
              <p>
                وب سایت نماینده شما در فضای دیجیتال است که بدون تعطیلی و در تمام روز های هفته می تواند به معرفی شما و یا فروش
                محصولات و خدمات شما بپردازد .
              </p>
              <p>
                تجربه تیم ما در طراحی وب سایت و فروشگاه اینترنتی، برای برند های گوناگون در صنایع مختلف به ما کمک می کند تا بر اساس
                خواسته های هر کسب وکار، رقبای فعال، زمینه فعالیت و … بهترین تکنولوژی مورد نیاز طراحی وب سایت مد نظر شما را مشخص
                کرده و با طراحی تجربه کاربری و رابط کاربری مناسب وب سایت شما را طراحی نماییم.
              </p>
              <p>
                قطعا طراحی سایت لازمه ی کار هست اما برای اینکه شاهد نتیجه گرفتن ازش باشیم، باید به مخاطبانی که متقاضی دریافت
                محصولات یا خدمات ما هستن، اعلام کنیم که سایتمون رو ایجاد کردیم و ازشون دعوت کنیم که از سایت ما بازدید کنن که این
                دعوت به بازدید از سایت در دنیای دیجیتال از راه های مختلفی مثل سئو و خدمات دیگه رقم میخوره که تو بخش{" "}
                <span className="text-soft-red">خدمات وب سایت و سئو وب سایت</span> کامل توضیح دادیم براتون.
              </p>
              <p>در ادامه ، با انواع وب سایت ها آشنا خواهید شد.</p>
            </div>
            <div className="flex flex-row">
              <div>
                <motion.h2
                  whileInView={{ x: [500, -20, 20, 0] }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="text-green-137"
                >
                  طراحی وب سایت فروشگاهی
                </motion.h2>
                <motion.p
                  whileInView={{ x: [1000, -20, 20, 0] }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  با توجه به فراهم شدن بستر استفاده از پرداخت اینترنتی و از سوی دیگر مشکلاتی مانند ترافیک، ازدحام جمعیت و نداشتن
                  وقت کافی برای خرید حضوری، این روزها تمایل افراد برای خرید کالا به صورت اینترنتی رو به افزایش است.
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, -20, 20, 0] }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  هر کسی دوست دارد بدون خروج از منزل یا محل کار، سریعا وارد سایت یک فروشگاه اینترنتی شده و محصول خود را خریداری
                  کند. بنابراین توجه به مسئله ساخت سایت فروشگاهی برای کسب و کارهای سنتی، افزایش یافته است.
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, -20, 20, 0] }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  استفاده از خدمات طراحی سایت فروشگاهی حرفه ای این امکان را به شما خواهد داد که بتوانید بازار هدف خود را که شامل
                  مشتریان یک محله و شهر خاصی هستند را توسعه داده و در سطح کلان کشوری آنها را جذب کنید. این کار باعث دیده شدن بیشتر
                  خدمات و محصولات شما شده و خواهید توانست به راحتی بازار بزرگی از مشتریان را به خود جذب کنید.
                </motion.p>
              </div>
              <motion.img
                whileInView={{ x: [-500, 20, -20, 0] }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                src={Img_1}
                alt="Img_1"
                className="w-80"
              />
            </div>
            <div className="flex flex-row">
              <motion.img
                src={Img_2}
                alt="Img_2"
                className="w-80"
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
              <div>
                <motion.h3
                  className="text-green-137"
                  whileInView={{ x: [-1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  طراحی وب سایت خبری
                </motion.h3>
                <motion.p whileInView={{ x: [-1000, 0], opacity: [0, 1] }} transition={{ duration: 2 }} viewport={{ once: true }}>
                  افراد عاشق شنیدن خبر های تازه هستند . اما از آن جایی که بسیاری از مردم این روزها به دنیای اینترنت رو آورده اند،
                  بسیاری از اخبار را از طریق وب سایت های خبری دنبال می کنند. به همین علت طراحی وبسایت خبری از تقاضای بالایی در
                  تهران و دیگر شهرستان ها برخوردار شده است . وب سایت نهال آی تی به شما کمک می کند تا با آسودگی خاطر اقدام به سفارش
                  طراحی وب سایت کنید.
                </motion.p>
                <motion.p whileInView={{ x: [-1000, 0], opacity: [0, 1] }} transition={{ duration: 2 }} viewport={{ once: true }}>
                  اگر با حوزه تولید محتوا آشنا باشید، می‌دانید که اگر تولید محتوای مناسب و جذابی داشته باشید، روزانه هزاران کاربر
                  را به سمت خود می‌کشانید. همین ویژگی افزایش بازدید در طی ماه‌ها و سال‌ها موجب شده تا درآمد سایت‌های خبری تا حد
                  زیادی افزایش یابد.
                </motion.p>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <motion.h4
                  whileInView={{ y: [-300, 0], opacity: [0, 1] }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="text-green-137"
                >
                  طراحی وب سایت شرکتی
                </motion.h4>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  اگر هدف شما از طراحی سایت شرکتی، ورود به عرصه رقابت با وب سایت ها و شرکت های رقیب که فعالیتی مشابه شما دارند
                  است، حتما طراحی وب سایت شرکتی اختصاصی لازمه موفقیت کار شماست.
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  در پروژه های طراحی سایت شرکت نهال آی تی ، علاوه بر زیبایی نمای بصری و گرافیکی وب سایت در طرح های اختصاصی، نیاز و
                  سلیقه شما در دیزاین لحاظ شده و همچنین اصول اولیه افزایش رتبه وب سایت و سئو نیز بر اساس نوع فعالیت شما به نحو
                  شایسته ای در سایت طراحی شده پیاده سازی می‌ شود.
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  علاوه بر آن امکانات خاص مد نظر شما در طراحی سایت شرکت با انتخاب طراحی وب سایت اختصاصی قابلیت توسعه بیشتری خواهد
                  داشت.‎
                </motion.p>
              </div>
              <motion.img
                src={Img_3}
                alt="Img_3"
                className="w-80"
                whileInView={{ y: [500, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="flex gap-3 flex-row">
              <motion.img
                src={Img_4}
                alt="Img_4"
                className="w-80"
                whileInView={{ y: [-300, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
              <div>
                <motion.h5
                  className="text-green-137"
                  whileInView={{ x: [-500, 0], opacity: [0, 1] }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                >
                  طراحی وب سایت اشتراک گذاری عکس و فیلم
                </motion.h5>
                <motion.p
                  whileInView={{ x: [-1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 2.2 }}
                  viewport={{ once: true }}
                >
                  پنل مدیریت وب سایت به اشتراک گذاری ویدئو و اشتراک گذاری عکس یکی از cms های دست نویس تیم نهال آی تی می باشد و از
                  هیچ گونه سیستم های آماده همانند وردپرس و جوملا و … استفاده نشده است و به زبان php نوشته شده است.
                </motion.p>
                <motion.p
                  whileInView={{ x: [-1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 2.2 }}
                  viewport={{ once: true }}
                >
                  با توجه به دست نویس بودن کامل این سیستم، امکان اختصاصی سازی چه از نظر ظاهری و چه از نظر امکانات و بخش ها قابل
                  مدیریت و برنامه نویسی می باشد .
                </motion.p>
              </div>
            </div>
            <motion.div whileInView={{ x: [1000, 0], opacity: [0, 1] }} transition={{ duration: 2.2 }} viewport={{ once: true }}>
              <h6 className="text-center text-green-137">طراحی وب سایت حرفه ای</h6>
              <div className="flex flex-row gap-2">
                <div className="w-1/3 flex flex-col items-center gap-2">
                  <img src={domain} alt="domain" className="w-28" />
                  <span className="font-bold text-gray-66">ثبت دامنه ی اختصاصی</span>
                  <p className="text-gray-66 text-center leading-8 text-sm">
                    دوست دارید آدرس وب‌ سایت شما چه باشد؟ شما می‌ توانید خیلی سریع دامنه مورد نظرتان را ثبت کنید یا دامنه‌ قبلی
                    خود را به سایت متصل نمایید.
                  </p>
                </div>
                <div className="w-1/3 flex flex-col items-center gap-2">
                  <img src={Img_5} alt="Img_5" className="w-28" />
                  <span className="font-bold text-gray-66">قالب‌ های مناسب و جذاب</span>
                  <p className="text-gray-66 text-center leading-8 text-sm">
                    طراحی انواع قالب های گرافیکی زیبا و همچنین بهینه سازی انواع قالب ها متناسب با سلیقه کاربر به همراه پشتیبانی از
                    سایت
                  </p>
                </div>
                <div className="w-1/3 flex flex-col items-center gap-2">
                  <img src={Img_6} alt="Img_6" className="w-28" />
                  <span className="font-bold text-gray-66">ایجاد پنل برای مدیریت آسان سایت</span>
                  <p className="text-gray-66 text-center leading-8 text-sm">
                    کار با پنل مدیریت سایت واقعاً ساده است و هر کسی از پس مدیریت آن بر خواهد آمد. بنابراین در آینده به هیچ مشکلی
                    برخورد نمی‌کنید.
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="flex flex-col items-center justify-center">
              <h6 className="text-gray-66 text-center">تعرفه خدمات طراحی وب سایت</h6>
              <div className="flex flex-row gap-2">
                <img className="w-60" src={tarrif_laravel} alt="laravel" />
                <img className="w-60" src={tarrif_jango} alt="jango" />
                <img className="w-60" src={tarrif_php} alt="php" />
                <img className="w-60" src={tarrif_wordpress} alt="wordpress" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <motion.div
            whileInView={{ y: [300, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex flex-row items-center bg-green-d5 py-5 bg-[#D5FFE2] container px-48 mx-auto"
          >
            <div className="flex flex-col items-end gap-5">
              <span className="text-xl leading-10 font-thin text-gray-66 text-center">
                جهت سفارش انواع پروژه طراحی وب سایت ، میتوانید به صورت رایگان ، با شماره{" "}
                <b className="text-gray3030 font-bold">09927674217</b> تماس بگیرید و یا از طریق لینک زیر اقدام کنید.
              </span>
              <button className="text-white hover:brightness-105 transition-all bg-[#57C053] w-11/12 py-2 rounded-md text-sm">
                سفارش پروژه طراحی انواع وب سایت
              </button>
            </div>
            <img src={front_1} alt="front" className="w-80" />
          </motion.div>
          <motion.div
            whileInView={{ y: [200, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-row-reverse items-center bg-green-72 py-10 bg-[#72FD9D] container px-48 mx-auto"
          >
            <div className="flex flex-col items-start gap-5">
              <span className="text-xl leading-10 font-thin text-gray-66 text-center">
                برای مشاهده و سفارش قالب ها و سایت های آماده ی طراحی شده توسط تیم نهال آی تی از طریق لینک زیر اقدام کنید
              </span>
              <button className="text-white bg-[#57C053] w-11/12 py-2 rounded-md text-sm hover:brightness-105 transition-all">
                مشاهده وب سایت ها و قالب های آماده
              </button>
            </div>
            <img src={front_2} alt="front" className="w-80" />
          </motion.div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default SsaleWebExclusive;
