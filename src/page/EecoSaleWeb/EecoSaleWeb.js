import React from "react";
import "./EecoSaleWeb.css";
// import images
import headImg from "../../assets/img/Ec_Ex_Website/فروش-سایت-اختصاصی۱-1024x595.jpg";
import djangoImg from "../../assets/img/Ec_Ex_Website/python-django-min.png";
import phpImg from "../../assets/img/Ec_Ex_Website/PHP-logo.svg-min-1024x553.png";
import laravelImg from "../../assets/img/Ec_Ex_Website/VPFCsW8yTV3x0SmlRLtu8phgnxa607YetR6UmHPA-min.png";
import wordpressImg from "../../assets/img/Ec_Ex_Website/turquoise-logo-wordpress-cms-png-7-min.png";
import storeImg from "../../assets/img/Ec_Ex_Website/121-min-270x270.png";
import serviceImg from "../../assets/img/Ec_Ex_Website/خدمات-کامپیوتر.png";
//import motion
import { motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";

function EecoSaleWeb() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="flex flex-col gap-7 ExEcWebsite-content pb-10 pt-2 bg-[#f5f5f9]">
        <div className="container px-48 mx-auto">
          <div className="flex justify-center items-center">
            <img src={headImg} alt="headImg" className="w-full" />
          </div>
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <h1 className="text-green-15 text-center">فروش سایت اختصاصی و اقتصادی</h1>
            <p className="text-center px-3 text-gray-66 leading-8 font-extralight">
              در این بخش از خدمات، سایت های آماده فروشگاهی و سازمانی و شرکتی و مدیریتی و اداری و خبری و اختصاصی، آماده به فروش می
              باشد که با زبان ها و فریم ورک های مختلف مانند جنگو و لاراول و وردپرس و php ارائه می شود.
            </p>
          </motion.div>
          <div className="flex flex-col mb-10">
            <motion.h1
              className="text-gray-66 text-center "
              initial={{ translateX: 700 }}
              whileInView={{ translateX: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              فروش انواع سایت های اختصاصی و اقتصادی
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              فعالیت تیم نهال آی تی در حوزه دیجیتال مارکتینگ مجری پروژه طراحی سایت شرکتی و ساخت سایت فروشگاهی برندهای معتبر داخلی
              و بین المللی می باشد و هر نمونه طراحی سایت و فروش قالب سایت، متناسب با نیاز و ماهیت هر برند به شکلی منحصر به فرد
              طراحی و پیاده سازی می‌شود.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              داشتن یک وب ‌سایت برای کسب و کار خود، یکی از مهمترین فاکتورهای بازاریابی آنلاین به حساب می‌آید.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              امروزه عمر کسب‌و‌کارهایی که فاقد وب‌سایت هستند رو به پایان است، از این رو برای هدف‌گیری مشتریان راهی جز طراحی سایت
              اختصاصی و یا خرید قالب های متناسب با کسب و کار خود با رابط کاربری مناسب، ندارید و این دقیقا کاری است که تیم نهال آی
              تی برای شما به بهترین نحو ممکن انجام خواهد داد.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              در این بخش از خدمات، فروشگاه های اینترنتی، سایت های آماده سازمانی و شرکتی و مدیریتی و اداری و دولتی و خبری و
              اختصاصی، آماده به فروش می باشد که با زبان ها و فریم ورک های مختلف برنامه نویسی مانند جنگو و لاراول و وردپرس و php
              ارائه می شود که در ادامه به توضیح هر یک از این ها خواهیم پرداخت.
            </motion.p>
          </div>
          <div className="flex flex-row">
            <motion.div
              className="flex flex-col"
              initial={{ translateX: 100 }}
              whileInView={{ translateX: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h1 className="text-right text-green-0E">فریمورک جنگو چیست ؟</h1>
              <p>
                جنگو یک فریمورک وب مبتنی بر زبان برنامه نویسی پایتون و زبان سطح بالا می باشد که امکان طراحی سایت فروشگاهی و توسعه
                سریع وب سایت‌ های ایمن را فراهم می‌کند.
              </p>
              <p>
                جنگو توسط توسعه دهندگان باتجربه ساخته شده و از بسیاری از مشکلات هنگام تولید وب سایت پیشگیری می‌کند. این برنامه
                رایگان و منبع باز (Open Source) است، همچنین دارای یک انجمن پرکاربرد و فعال، مستندات عالی و گزینه‌های زیادی برای
                پشتیبانی رایگان و غیر رایگان می‌ باشد.
              </p>
            </motion.div>
            <motion.img
              initial={{ translateX: -50 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0 }}
              transition={{ duration: 1 }}
              src={djangoImg}
              alt="django"
              className="w-80 "
            />
          </div>
          <motion.div
            initial={{ translateY: -100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <h1 className="text-green-00">مزایای قابل توجه فریمورک جنگو</h1>
            <p>
              – اگر شما مجبور شوید در تیم کد نویسی خود تغییراتی ایجاد کنید، جنگو این امکان را به شما می دهد تا تیم جدید را پیدا
              کنید تا معماری پروژه شما را با تلاش کمی درک کند که این موضوع می تواند باعث صرفه جویی در پول و هزینه ی شما تا حد
              زیادی شود.
            </p>
            <p>
              – یکی از مزیت های قابل توجه جنگو این است که حتی اگر پروژه از ابتدا تا انتها توسط یک تیم، توسعه پیدا کند، با استفاده
              از جنگو روند برنامه نویسی با سرعت قابل توجهی بالا می رود، از ایده تا انتشار تا راه اندازی و تولید، با استفاده از
              کدنویسی بسیار واضح و تمیز، توسعه می تواند کارآمد و موثر باشد.
            </p>
            <p>
              – همه میدانیم که زمان = پول. به همین دلیل است که جنگو ” فریم ورکی برای افراد کمال گرا با مهلت های کاری محدود” محسوب
              می شود که همین موضوع اجازه می دهد تا هر توسعه دهنده به سرعت ساختار پروژه را درک کند و آنها به ابزارهایی نیاز دارند
              که هر ایده ای را پیاده سازی کنند و آن را به درستی توسعه دهند و درهمان زمان ضبط نمایند.
            </p>
          </motion.div>
          <div className="flex flex-row justify-center">
            <motion.div
              className="flex flex-col"
              initial={{ translateX: 100, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <h1 className="text-green-0E">زبان برنامه نویسی PHP چیست ؟</h1>
              <p>
                PHP یک زبان برنامه نویسی است که میتوانیم با استفاده از آن اقدام به ساخت صفحات وب داینامیک (Dynamic) کنیم. با
                استفاده از PHP میتوانیم سایت و اپلیکیشن های تحت وب قدرتمندی را برنامه نویسی کنیم.
              </p>
              <p>
                اگر بخواهیم ریزتر به سوال PHP چیست؟ پاسخ دهیم، باید بگوییم که PHP کارهای پشت صحنه را در صفحات وب انجام میدهد. به
                این معنا که شما با استفاده از PHP نمیتوانید ظاهر سایت را تغییر دهید. PHP یک زبان برنامه
              </p>
              <p>
                نویسی است که تاثیر مستقیمی روی ظاهر سایت ندارد. با استفاده از PHP شما میتوانید اطلاعات مختلف را از پایگاه داده
                بگیرید و به کاربر نشان دهید.
              </p>
            </motion.div>
            <motion.img
              initial={{ translateX: 500, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              src={phpImg}
              alt="php"
              className="w-80 mr-2 h-52"
            />
          </div>
          <motion.div
            initial={{ translateX: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            whileInView={{ translateX: [5, -5, 5, -5, 5, -5, 5, -5, 0], opacity: 1 }}
          >
            <h1 className="text-green-00">داینامیک و استاتیک یعنی چی؟</h1>
            <p>
              در ادامه‌ی پاسخ به سوال PHP چیست؟ میخواهیم درباره‌ی دو موضوع صفحات وب داینامیک (Dynamic) و استاتیک (Static) صحبت
              کنیم و خیلی ساده آن‌ها را توضیح دهیم. فرض کنید که شما در سایت‌تان یک بخشی دارید که میخواهید آخرین اخبار شرکت خودتان
              را نمایش دهید. برای نمایش این اخبار، از ۲ روش میتوانید استفاده کنید:
            </p>
            <p>
              <b className="text-base">روش اول:</b> بصورت دستی وارد کدهای HTML سایت خودتان شوید و اخبار را در کدهای HTML بصورت
              دستی بنویسید.
            </p>
            <p>
              <b className="text-base">روش دوم:</b> اخبار را ابتدا وارد پایگاه داده یا دیتابیس بکنید و سپس با استفاده از یک زبان
              برنامه نویسی مثل PHP، آن اخبار را از دیتابیس بخوانید و به کاربران نشان دهید.
            </p>
            <p>
              روش اول، یعنی زمانی که شما بصورت دستی اقدام به نوشتن اخبار در صفحات وب خود میکنید را روش Static میگویند و اصطلاحا
              میگویند که آن صفحه‌ی شما، یک صفحه‌ی وب استاتیک یا Static Web Page است.
            </p>
            <p>
              اما وقتی که شما اطلاعات و کلا محتویات صفحه را از یک پایگاه داده میخوانید و به کاربران نشان میدهید، آن صفحه‌ی وب شما
              به یک صفحه‌ی وب داینامیک یا Dynamic Web Page تبدیل میشود.
            </p>
          </motion.div>
          <div className="flex flex-row">
            <div>
              <motion.h1
                className="text-green-0E"
                initial={{ translateY: -20, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                فریمورک لاراول چیست ؟
              </motion.h1>
              <p>
                زبان برنامه نویسی PHP یکی از برترین و محبوب‌ترین زبان‌های برنامه ‌نویسی در حوزه طراحی وب است. این زبان برنامه
                نویسی Framework ‌های بسیار زیادی دارد که لاراول یکی از آن‌ها است.
              </p>
              <p>
                زمانی که در مورد فریم ورک‌های توسعه وب اپلیکیشن صحبت می‌شود، همیشه نام لاراول به میان می‌آید. از لاراول می‌توان به
                عنوان محبوب‌ترین فریم ورک زبان برنامه نویسی PHP یاد کرد. این فریم ورک توانسته است در زمانی کوتاه، به اولین گزینه‌ی
                توسعه دهندگان برای توسعه برنامه‌های پیچیده تحت وب تبدیل شود.
              </p>
            </div>
            <motion.img
              initial={{ translateY: 200, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              src={laravelImg}
              alt="laravel"
              className="w-80"
            />
          </div>
          <div>
            <p>
              لاراول فریم ورکی مبتنی بر معماری MVC است که به صورت رایگان و متن باز ارائه شده است. این فریم‌ ورک امکانات هوشمندی در
              اختیار برنامه نویسان قرار می‌دهد و برنامه‌‌ نویسی را برای آن‌ها لذت بخش‌تر می‌کند.{" "}
            </p>
            <p>
              این فریم ورک در بین سایر فریم ورک‌های PHP از امنیت و سرعت توسعه‌ی بیشتری برخوردار است و از طریق آن شما قادر خواهید
              بود بدون اینکه تغییری در کدهای اصلی ایجاد کنید، عملکرد بسیاری از بخش‌ها را تغییر دهید.{" "}
            </p>
            <p>
              سوالی که بسیاری از برنامه‌نویسان در خصوص فریم ورک laravel دارند این است که آیا فریمورک لاراول تاثیری بر سرعت انجام
              پروژه آنها دارد؟
            </p>
            <p>
              لاراول دارای امکانات و ویژگی‌هایی است که قطعا بر سرعت انجام پروژه‌ها تاثیر می‌گذارد. با ما همراه باشید تا به بررسی
              برخی از این ویژگی‌ها بپردازیم:
            </p>
            <p>Service Container: این امکان به عنوان ابزاری قدرتمند وابستگی بین کلاس‌ها را مدیریت می‌کند.</p>
            <p>
              Queues : تعریف صف در لاراول، به شما این امکان را می‌دهد تا در انجام اموری که زمان زیادی نیاز دارند وقفه ایجاد کنید و
              در خصوص زمان انجام آن، بعدا تصمیم‌گیری کنید. لاراول دارای یک API متمرکز، برای مدیریت صف است.
            </p>
            <p>
              Events: در لاراول، شما به راحتی می‌توانید بر هر اتفاقی که در اپلیکیشن شما رخ می‌دهد نظارت کنید و به سرعت ریشه خطاها
              را پیدا کنید.
            </p>
            <p>
              رابط کاربری : برجسته ترین ویژگی لاراول، رابط و محیط کاربری راحت آن است. این رابط کاربری به‌علاوه امکاناتی که در
              اختیار شما قرار می‌دهد، تاثیر بسزایی بر سهولت و سرعت انجام امور دارد.حال که با مفهوم تاثیر استفاده از فریم ورک
              laravel بر سرعت پروژه آشنا شدید در امتداد مقاله به بررسی مزیت استفاده از لارول می پردازیم.
            </p>
            <p>تمام ویژگی های گفته شده باعث افزایش سرعت پروژه با لاراول می شود.</p>
          </div>
          <div className="flex flex-row mt-20">
            <div>
              <motion.h1
                initial={{ translateX: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ translateX: 0, opacity: 1 }}
                className="text-green-0E"
              >
                وردپرس چیست ؟
              </motion.h1>
              <motion.p initial={{ scale: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} whileInView={{ scale: 1 }}>
                اگر بخواهیم به زبان ساده به معرفی وردپرس بپردازیم، وردپرس عبارت است از یک سیستم مدیریت محتوای سایت ساز که با
                استفاده از آن قادر خواهید بود تا به راه اندازی انواع گوناگونی از وبسایت و وبلاگ بپردازید. با اطمینان بر اساس
                تجربیات شخصی و نمونه های مشاهده شده به جرأت می توانم این اطمینان را به شما بدهم به دلیل انعطاف بالایی که سیستم
                مدیریت محتوای وردپرس دارد با استفاده از آن قادر خواهید بود تا اقدام به راه اندازی هر نوع وبسایت با وردپرس کنید.
              </motion.p>
            </div>
            <motion.img
              initial={{ translateY: -200 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              whileInView={{ translateY: 0 }}
              src={wordpressImg}
              alt="wordpress"
              className="w-80"
            />
          </div>
          <div>
            <motion.p
              initial={{ translateY: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              whileInView={{ translateY: 0 }}
            >
              وردپرس، یک سیستم سایت ساز و پکیج راه انداز وب‌سایت، فروشگاه اینترنتی و وبلاگ (از هر نوع و هر مدل است) است که به صورت
              رایگان شما می‌توانید آن را از طریق وب‌سایت رسمی وردپرس (فارسی یا انگلیسی) دانلود کرده و بر روی فضای اینترنتی خود نصب
              کنید. فضای اینترنتی همان فضایی است که سایت شما و محتویات آن بر روی آن فضا قرار می‌گیرد و سپس وب‌سایت خود را به طور
              کامل با جزئیات و امکانات متفاوت و طرح دلخواه بر روی آن راه اندازی کرده و مطالب و بخش‌های مختلف سایت را خودتان مدیریت
              کنید.
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <motion.div
            initial={{ translateY: 200, opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            className="bg-blue-db py-10 flex flex-row items-center justify-around bg-[#DBFCFF] container px-48 mx-auto"
          >
            <img src={storeImg} alt="store" className="w-60" />
            <div className="w-8/12 flex flex-col items-center gap-5">
              <p className="store-text">
                جهت مشاهده ی تمامی قالب های آماده به فروش (وردپرس (WordPress) و HTML و CSS و قالب جنگو (DJango)) و ثبت سفارش ، می
                توانید از طریق لینک زیر اقدام کنید.
              </p>
              <button className="text-white bg-[#57C053] w-full py-2 rounded-md hover:brightness-105 transition-all">
                مشاهده انواع قالب ها و ثبت سفارش
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: 200, opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            className="bg-green-72 py-10 flex flex-row items-center justify-around bg-[#72FD9D] container px-48 mx-auto"
          >
            <img src={serviceImg} alt="Service" className="w-80" />
            <div className="w-8/12 flex flex-col items-center gap-5">
              <p className="service-text">
                برای مشاهده و سفارش قالب ها و سایت های آماده ی طراحی شده توسط تیم نهال آی تی از طریق لینک زیر اقدام کنید
              </p>
              <button className="text-white bg-[#57C053] w-full py-2 rounded-md hover:brightness-105 transition-all">
                مشاهده وب سایت و قالب های آماده
              </button>
            </div>
          </motion.div>
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
}

export default EecoSaleWeb;
