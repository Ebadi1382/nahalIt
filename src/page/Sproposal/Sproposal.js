import React from "react";
import "./Sproposal.css";
import { motion } from "framer-motion";
// import images
import HeadImg from "../../assets/img/Proposal/تدوین-پروپوزال-1024x576.jpg";
import Img_1 from "../../assets/img/Proposal/images.jpg";
import Img_2 from "../../assets/img/Proposal/building.jpg";
import Img_3 from "../../assets/img/Proposal/planing.png";
import front_1 from "../../assets/img/frm-thbt-sfarsh-transformed-min.png";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

function Sproposal() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="proposal-content flex flex-col items-center gap-10 pb-10 pt-2 bg-[#f5f5f9]">
        <div className="flex flex-col gap-10 container px-48 mx-auto">
          <img src={HeadImg} alt="proposal" className="mb-10" />
          <motion.div
            className="flex flex-row gap-10 items-center justify-start"
            whileInView={{ rotate: [-90, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h1
                whileInView={{ x: [300, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-green-1c"
              >
                بیزینس پلن یا پروپوزال چیست ؟
              </motion.h1>
              <p>سندی است نشان می‌دهد کسب‌وکار شما چیست، چگونه کار می‌کند و چگونه قرار است که موفق شود.</p>
              <p>
                بیزینس پلن (Business plan) یا طرح تجاری ، در واقع مکانیسمی است مکتوب که مشخص کننده نقشه راه (road map) کسب و کار
                شما برای تولید و فروش کالا یا خدمات مشخص است. نیازمند تحقیقات بازار (market research) است، نیازمند مدل تجاری
                (business model) است. نیازمند، آنالیز روند ها (trend analysis) است، نیازمند برنامه ریزی بازاریابی (marketing
                planning) است. نیازمند تعیین اهداف بلند مدت و تیم سازی (team building) و توسعه استراتژی (strategy development) است
              </p>
            </div>
            <motion.img
              src={Img_1}
              alt="plan"
              className="w-80"
              whileInView={{ x: [-300, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
          </motion.div>
          <motion.div
            className="flex flex-row items-center gap-5"
            whileInView={{ x: [-1000, 0], skew: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <img src={Img_2} alt="building" className="w-80" />
            <div>
              <h2 className="text-green-1c">چرا به بیزینس پلن نیاز داریم؟</h2>
              <p className="mb-5">فرض کنید یک زمین 400 متری دارید و می‌خواهید یک ویلا در آن بسازید. چه کار می‌کنید؟</p>
              <p className="mb-5">همینطوری می‌روید وسط زمین و شروع می‌کنید به چیدن آجرها روی یکدیگر؟</p>
              <p className="mb-5">یا نه، ابتدا نقشۀ ساختمانی که می‌خواهید بسازید را آماده می‌کنید؟</p>
              <p className="mb-5">
                بعید می‌دانم کسی جزو دستۀ اول باشد؛ به احتمال 99%، همۀ ما ابتدا طرح و نقشه را تهیه می‌کنیم، هزینه‌ها را حساب
                می‌کنیم، مصالح تهیه می‌کنیم، نیرو استخدام می‌کنیم و بعد می‌رویم سراغ ساختن ویلا!
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-row gap-5 items-center"
            whileInView={{ rotate: [10, -10, 10, -10, 10, -10, 0] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-green-1c">چه کسانی به بیزینس پلن نیاز دارند؟</h3>
              <p className="mb-7">
                اگر یک کسب‌وکار کوچک برای خودتان دارید که نیازی به سرمایه‌گذار یا توسعه آن‌چنانی ندارد، نیازی به نوشتن طرح کسب و
                کار نیست.
              </p>
              <p className="mb-7">
                مثلاً فرض کنید که یک سایت شخصی دارید و از طریق آن پروژه‌های سئو می‌گیرید؛ اگر برنامه‌ای برای گسترش کارتان ندارید و
                به همین شیوه راضی هستید، نیازی به نوشتن بیزینس پلن ندارید.
              </p>
              <b>اما در 2 حالت است که شما حتماً به بیزینس پلن نیاز پیدا می‌کنید:</b>
              <p>راه‌اندازی استارتاپ</p>
              <p>توسعه کسب‌وکار</p>
              <p>پیشنهاد می‌کنیم که حتماً سری به صفحه «آموزش راه‌اندازی کسب‌وکار» بزنید و حالا که در اولین قدم‌های ساخت</p>
              <p>کسب‌وکارتان هستید، از آموزش‌های حذاب و کاربردی این صفحه استفاده کنید.</p>
            </div>
            <img src={Img_3} alt="planing" className="w-80" />
          </motion.div>
          <motion.div whileInView={{ y: [300, -20, 0, -20, 0, -20, 0] }} transition={{ duration: 1.2 }} viewport={{ once: true }}>
            <h4 className="text-green-1c">یک بیزینس پلن از چه بخش‌هایی تشکیل شده است؟</h4>
            <p>
              تا الان طرح‌های مختلفی برای بیزینس پلن ارائه شده است که در بعضی بخش‌ها با هم تفاوت دارند؛ اما کامل‌ترین و بهترین طرح
              از نظر ما، باید شامل بخش‌های زیر باشد:
            </p>
            <p>یک جلد مرتبط</p>
            <p>فهرست مطالب</p>
            <p>معرفی اعضای اصلی (هیات مدیره)</p>
            <p>چکیده</p>
            <p>معرفی کسب‌وکار شما</p>
            <p>شرح مشکل</p>
            <p>شرح راه حل</p>
            <p>اهداف بیزینس</p>
            <p>اهداف کوتاه‌مدت</p>
            <p>اهداف بلندمدت</p>
            <p>تحقیقات بازار</p>
            <p>بازار هدف</p>
            <p>آنالیز مشتریان</p>
            <p>آنالیز رقبا</p>
            <p>معرفی آمیخته بازاریابی</p>
            <p>محصول</p>
            <p>قیمت‌گذاری</p>
            <p>روش توزیع</p>
            <p>برنامه ترویج و تبلیغات</p>
            <p>منابع انسانی</p>
            <p>صورت مالی</p>
            <p>
              همانطور که پیداست، در بیزینس پلن‌تان، قرار است که درباره این موارد، صحبت کنید. حالا دیگر با خودتان است که این
              اطلاعات را در فایل Word سروسامان دهید، یا در PowerPoint! در هر صورت دقت کنید که طرح کسب‌وکارتان خوانا، جذاب و دور از
              حاشیه‌های اضافی باشد.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-row items-center justify-center py-5 container px-48 mx-auto bg-[#D5FFE2]"
          whileInView={{ y: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-end gap-5">
            <span className="text-xl leading-10 font-thin text-gray-66 text-center">
              جهت سفارش انواع پروژه تدوین پروپوزال ، میتوانید به صورت رایگان ، با شماره{" "}
              <b className="text-gray3030 font-bold">09927674217</b> تماس بگیرید و یا از طریق لینک زیر اقدام کنید.
            </span>
            <button className="text-white hover:brightness-105 transition-all bg-[#57C053] w-11/12 py-2 rounded-md text-sm">
              سفارش پروژه تدوین پروپوزال
            </button>
          </div>
          <img src={front_1} alt="front" className="w-80" />
        </motion.div>
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default Sproposal;
