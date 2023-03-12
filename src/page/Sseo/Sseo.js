import React from "react";
import "./Sseo.css";
import { motion } from "framer-motion";
// import images
import HeadImg from "../../assets/img/Seo/سئو-سایت-1024x576.jpg";
import Img_1 from "../../assets/img/Seo/search-engine-optimization.png";
import Img_2 from "../../assets/img/Seo/موتور-های-جست-و-جو-1024x745-min.png";
import Img_3 from "../../assets/img/Seo/What-is-a-SERP-transformed-min-250x250.png";
import Img_4 from "../../assets/img/Seo/seooo-transformed-min.png";
import Img_5 from "../../assets/img/Seo/8-2-seo-png-pic-min.png";
import Img_6 from "../../assets/img/Seo/head-visit-website-f.png";
import Img_7 from "../../assets/img/Seo/seo-services-min.png";
import Img_8 from "../../assets/img/Seo/تعرفه-خدمات-سئو.png";
import Img_9 from "../../assets/img/Seo/تعرفه-خدمات-سئو-حرفه-ای.png";
import Img_10 from "../../assets/img/Seo/تعرفه-اپلیکیشن-خدمات-سئو-ویژه.png";
import front_1 from "../../assets/img/frm-thbt-sfarsh-transformed-min.png";
import front_2 from "../../assets/img/SaleReadyTemplate/خدمات-کامپیوتر.png";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";

function Sseo() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="Seo-content flex flex-col items-center gap-10 pb-10 pt-2 bg-[#f5f5f9]">
        <div className="flex flex-col gap-10 container mx-auto px-48">
          <img src={HeadImg} alt="header" />
          <div>
            <motion.h1
              whileInView={{ x: [10, -10, 10, -10, 10, 0] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center text-green-02"
            >
              خدمات وب سایت و سئو وب سایت
            </motion.h1>
            <p>
              یکی از خدمات اصلی سایت که برای بهبود فروش و شناخته شدن شما و افزایش بازدید سایت شما می باشد ، خدمات سئو سایت می
              باشد. با این خدمات شما می توانید در صفحه گوگل در جایگاه بالاتر قرار بگیرید.
            </p>
            <p>
              رتبه بهتر صفحات وبسایت کسب و کار در نتایج جستجو‌ی گوگل ، منجر به افزایش بازدید وبسایت و افزایش آگاهی از برند خواهد
              شد که جلب توجه بیشتر مشتریان بالقوه و افزایش فروش را به دنبال خواهد داشت.
            </p>
            <p>
              در نقطه مقابل اگر وب سایت شما برای جستجوی عبارات مرتبط در صفحه یک نتایج جستجوی گوگل نشان داده نشود، تعداد زیادی از
              مشتریانتان را از دست خواهید داد.در این بخش ، به بررسی و توضیح کامل سئو سایت و افزایش بازدید سایت خواهیم پرداخت.
            </p>
          </div>
          <div className="flex flex-row">
            <div>
              <motion.h2
                whileInView={{ x: [500, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-green-137"
              >
                سئو وب سایت چیست ؟
              </motion.h2>
              <motion.p
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                سئو چیست؟ امروزه همان سوالی است که در تمامی زیرشاخه های کسب و کارهای اینترنتی و دیجیتال مارکتینگ، مطرح می شود.
              </motion.p>
              <motion.p
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                به طور خلاصه می توان گفت بهینه سازی وب سایت یا همان سئو ، موجب می شود یک سایت توسط موتورهای جستجو نظیر گوگل، یعنی
                در صفحه سرچ آن ها به افرادی که کلمات مربوط به آن وب سایت ها را جستجو می کنند، در جایگاه بالاتری نمایش داده شود و
                آن افراد جذب وب سایت ها شوند.
              </motion.p>
            </div>
            <motion.img
              src={Img_1}
              alt="roocket"
              className="w-80"
              whileInView={{ rotate: [10, -10, 10, -10, 10, -10, 0] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
          <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <p>تاریخچه سئو، به دهه ۹۰ میلادی و ظهور موتورهای جستجو برمی‌گردد.</p>
            <p>
              امروزه سئو یا بهینه سازی موتورهای جستجو به عنوان یک استراتژی بازاریابی موثر و صنعت رو به گسترش شناخته می‌شود. با همه
              گیری ویروس کرونا و افزایش تمایل مردم به انجام خرید اینترنتی اهمیت سرمایه گذاری روی سئو سایت بیشتر شد.
            </p>
            <p>
              اصطلاحاتی مثل سئو کردن سایت، بهبود سئو، افزایش سئو سایت و سئوسازی عباراتی هستند که کاربران فارسی زبان برای جستجو
              درباره سئو استفاده می‌کنند.
            </p>
            <p>
              با بهبود سئو سایت، جایگاه صفحات وب سایت و محتوای شما در نتایج موتورهای جستجو ساده ارتقاء پیدا می کند. هر چه وبسایت
              شما از نظر موتورهای جستجو بهتر باشد و از آن ها امتیاز بیشتری بگیرد، یعنی مطابق با فاکتور ها و معیارهای آن ها باشد،
              احتمال این که آن ها شما را در جستجوهای مربوطه برای کلمات کلیدی مرتبط با محصولات یا سرویس های شما توسط کاربران، ارائه
              کنند بیشتر می شود و جایگاه بالاتری نسبت به سایت هایی که مربوط به آن کلمات هستند ولی امتیاز کمتری دارند، کسب خواهید
              کرد.
            </p>
          </motion.div>
          <div className="flex flex-row">
            <div>
              <motion.h3
                whileInView={{ x: [500, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-green-137"
              >
                موتور جست و جو چیست ؟
              </motion.h3>
              <motion.p
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                موتور جستجو یک ابزار آنلاین است که به افراد برای پیدا کردن اطلاعات مورد نظرشان در اینترنت کمک می‌کند. موتور جستجوی
                گوگل و موتور جستجوی بینگ مایکروسافت از معروف ترین موتورهای جستجو هستند.
              </motion.p>
              <motion.p
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                موتورهای جستجوی در نحوه رتبه بندی وب سایت‌ ها در هنگام جستجوی کلید واژه‌های مختلف توسط کاربران، عملکرد متفاوتی
                دارند. این تفاوت رتبه دهی ناشی از هوش مصنوعی مورد استفاده در موتورهای جستجو است.
              </motion.p>
              <motion.p
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                گوگل نتایج بهتری در هنگام جستجو به کاربران نشان ‌می‌ دهد و فرایند جستجو در اینترنت را برای کاربران در مقایسه با
                سایر موتورهای جستجو در گوگل دلپذیرتر است. به همین دلیل گوگل تبدیل به پرطرفدارترین موتور جستجو در اینترنت شده‌ است.
              </motion.p>
            </div>
            <motion.img
              src={Img_2}
              alt="search-engine"
              className="w-80 h-60"
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
          <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <h4 className="text-green-137">موتور جستجو چگونه کار می‌کند ؟</h4>
            <p>
              موتورهای جستجو مانند گوگل و بینگ برای بررسی صفحات مختلف در وبسایت‌ها از ربات‌ها استفاده می‌کنند. این ربات‌ها در واقع
              برنامه‌های کامپیوتری هستند که از سایتی به سایت دیگر می‌روند و اطلاعات مربوط به صفحات موجود در سایت‌های مختلف را
              جمع‌آوری می‌کنند. در نهایت این اطلاعات را در یک پایگاه داده عظیم ذخیره یا اصطلاحا ایندِکس (Index) می‌کنند.
            </p>
            <p>بطور کلی عملکرد موتورهای جستجو شامل چهار مرحله است:</p>
            <p>
              <b>1- خزش (Crawling) :</b> مشاهده و بررسی صفحات وب سایت‌ ها که اصطلاحا به آن کراولینگ یا خزیدن می‌ گویند.
            </p>
            <p>
              <b>2- فهرست کردن (Indexing) :</b> فهرست کردن صفحات مشاهده شده در پایگاه داده
            </p>
            <p>
              <b>3- رتبه بندی صفحات (Ranking) :</b> رتبه‌بندی (رنکینگ) نتایج بر اساس کلمه کلیدی وارد شده توسط کاربر و فاکتورهای
              رتبه‌ دهی
            </p>
            <b>4- نمایش نتایج به کاربر در صفحه نتایج جستجو </b>
            <p>
              الگوریتم‌ های موتورهای جستجو برای نمایش صفحات معتبر و مرتبط در هنگام جستجوی یک کلیدواژه طراحی شده‌ اند تا تجربه‌ی
              گشت و گذاری کارآمد و دلچسب در فضای وب را در اختیار کاربرانشان قرار ‌دهند. سئو و بهینه سازی محتوای صفحات، می‌ تواند
              به شما در کسب رتبه‌ بالاتر در نتایج جستجو کمک کند.
            </p>
          </motion.div>
          <div className="flex flex-row">
            <div>
              <motion.h5
                whileInView={{ opacity: [0, 1], scale: [0, 1], x: [-50, 0], y: [-30, 0] }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-green-137"
              >
                رتبه بندی در SERP ها چیست ؟
              </motion.h5>
              <motion.p whileInView={{ opacity: [0, 1], x: [1000, 0] }} transition={{ duration: 1 }} viewport={{ once: true }}>
                حالا که شما فهمیده اید که سئو چیست و چه معنا و مفهومی دارد، می خواهیم کمی جلوتر برویم. یکی دیگر از سوالات رایج که
                می شنویم این است :
              </motion.p>
              <motion.p whileInView={{ opacity: [0, 1], x: [1000, 0] }} transition={{ duration: 1 }} viewport={{ once: true }}>
                رتبه بندی سایت در گوگل چیست؟
              </motion.p>
            </div>
            <motion.img
              src={Img_3}
              alt="SERP"
              className="w-80"
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
          <motion.div whileInView={{ opacity: [0, 1], scale: [0, 1] }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <p>
              SERP (Search Engine Result Page) به معنی صفحه نتایج موتور جستجو می باشد. رتبه بندی سایت در گوگل شرکت شما یعنی جایگاه
              سایت شما در SERP گوگل.
            </p>
            <p>
              بهبود بهینه سازی سایت برای موتور جستجو به شما کمک می کند که رتبه بندی خودتان را تقویت کرده و میزان نمایش سایت خودتان
              به کاربران موتورهای جستجو افزایش دهید. هر چه رتبه بندی شما در SERP برای کلمات و عبارات کلیدی مربوطه بالاتر باشد،
              احتمالا مشتریان بیشتری سایت و خدمات و محصولات شما و یا موضوعات مربوطه در موتور جستجو را پیدا می کنند.
            </p>
            <p>
              برای بیشتر بخش ها، اکثر مشتریان فقط صفحه اول گوگل، بینگ یا هر موتور جستجوی دیگر را بررسی می کنند. به همین دلیل هر
              کسب و کاری که می خواهد قابلیت بازدید خودش را در موتور های جستجو و مشتریان خودش را افزایش دهد، باید تلاش کند که رتبه
              بندی SERP خودش را بهبود بخشد و در صفحه اول نتایج جستجو قرار بگیرد.
            </p>
          </motion.div>
          <div className="flex flex-row">
            <div>
              <h6 className="text-green-137">افزایش بازدید سایت</h6>
              <p>
                افزایش بازدید سایت یکی از اصلی ترین کارهایی است که هر صاحب سایتی باید به آن اهمیت دهد. در واقع اگر شما صاحب هر کسب
                و کار آنلاینی هستید باید در صدد بالا بردن بازدید سایت خود باشید. فرقی نمی کند چه خدمات و محصولاتی را ارائه می
                کنید، در هر صورت باید به فکر بالا بردن بازدید سایت تان باشید. کاملا مشخص است که ترافیک هر سایتی جزئی از سرمایه آن
                است.
              </p>
              <p>
                هر چقدر که وب سایت شما از هر لحاظی عالی باشد تا زمانی که نتوانید ترافیک واقعی دریافت کنید بی فایده است و هیچ سودی
                برای شما نخواهد داشت.
              </p>
            </div>
            <img src={Img_4} alt="seooo" className="w-80" />
          </div>
          <motion.div whileInView={{ opacity: [0, 1], scale: [0, 1] }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <p>
              دلیل عمده بسیاری از کسب و کارهای آنلاینی هم که موفق نیستند نداشتن ترافیک کافی است. همین حالا وب سایت هایی وجود دارند
              که از هر لحاظی با کیفیت هستند ولی مشکل اصلی آن ها دیده شدن است. در واقع مدیران این سایت ها در بالا بردن ترافیک سایت
              شان ناتوان هستند و نمی توانند به خوبی روزانه ترافیک واقعی و هدفمندی را روانه سایت خود کنند.
            </p>
            <p>
              در ضمن، این فقط کاربران اینترنتی نیستند که ترافیک سایت شما را افزایش می‌دهند؛ بلکه ربات‌ ها و ابزارهای آنلاین دیگری
              هم هستند که چنین بازدیدهایی رقم می‌ زنند. این تعریف بسیار ساده با ظاهر فریبنده‌ ای که دارد باعث شده تا اشتباهی بسیار
              رایج گریبان‌ گیر وب‌ مسترهای امروزی شود. اغلب این افراد حتی افراد باتجربه‌ تر، تمام تمرکز و انرژی خود را به منظور
              “کسب بازدید” می‌ گذارند. اما همانطور که ما بارها و بارها گفتیم، در بحث بازاریابی آنلاین، هیچ‌وقت کمیت بر کیفیت
              اولویت نخواهد داشت. این طرز فکری که اکثر وب‌ مسترها با آن درگیر هستند، فقط بحث جذب “بازدید” است نه “بازدیدکننده
              واقعی” و همین مسئله باعث می‌ شود تا تلاش‌ های مستمر این افراد آنطور که باید نتیجه نداشته باشد.
            </p>
            <p>
              با این توضیحات باید گفت که تمرکز اصلی شما نباید فقط روی تعداد بازدیدهای کسب شده باشد، بلکه باید روی مسئله نرخ تبدیل
              تمرکز کنید. مسلماً هرچه بازدیدهای کسب شده بیشتر باشد، شانس افزایش نرخ تبدیل نیز بیشتر می‌ شود.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1], x: [1000, 0] }}
            transition={{ duration: 2, delay: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <h6 className="text-center text-green-137">خدمات وب سایت</h6>
            <div className="flex flex-row justify-center gap-1 ">
              <div className="flex flex-col items-center w-1/3 gap-2 justify-between">
                <img src={Img_5} alt="seo" className="w-24" />
                <span className="font-bold text-black">سئو حرفه ای وب سایت</span>
                <p className="text-center font-thin text-sm leading-8 text-gray-77">
                  سئو حرفه ای انواع وب سایت ها و افزایش رتبه سایت و افزایش فروش ، با استفاده از جدید ترین روش های سئو وب سایت
                </p>
              </div>
              <div className="flex flex-col items-center w-1/3 gap-2 justify-between">
                <img src={Img_6} alt="head-visit-website" className="w-32" />
                <span className="font-bold text-black">افزایش بازدید سایت</span>
                <p className="text-center font-thin text-sm leading-8 text-gray-77">
                  افزایش بازدید سایت بعد از سئو، مهم ترین اصل برای افزایش فروش و برندسازی هر کسب و کار است که با تیم زبده نهال آی
                  تی، این امکان برای شما فراهم خواهد شد.
                </p>
              </div>
              <div className="flex flex-col items-center w-1/3 gap-2 justify-between">
                <img src={Img_7} alt="seo-service" className="w-32" />
                <span className="font-bold text-black">رسیدن به صفحه اول گوگل</span>
                <p className="text-center font-thin text-sm leading-8 text-gray-77">
                  افزایش رتبه وب سایت شما و رسیدن به صفحات بالاتر و رسیدن به صفحه اول گوگل، که منجر به افزایش مشتریان شما و افزایش
                  فروش شما می شود.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col gap-2">
            <h6 className="text-center text-gray-66">تعرفه خدمات وبسایت و سئو وبسایت تیم نهال آی تی</h6>
            <div className="flex-row flex justify-between">
              <img src={Img_8} alt="tarrif" className="w-80" />
              <img src={Img_9} alt="tarrif" className="w-80" />
              <img src={Img_10} alt="tarrif" className="w-80" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <motion.div
            whileInView={{ y: [300, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex flex-row items-center py-5 container px-48 mx-auto bg-[#D8FFE4]"
          >
            <div className="flex flex-col items-end gap-5">
              <span className="text-xl leading-10 font-thin text-gray-66 text-center">
                جهت سفارش انواع پروژه طراحی وب سایت و سئو، میتوانید به صورت رایگان ، با شماره <b>09927674217</b> تماس بگیرید و یا
                از طریق لینک زیر اقدام کنید.
              </span>
              <button className="text-white hover:brightness-105 transition-all bg-[#57C053] w-11/12 py-2 rounded-md text-sm">
                سفارش پروژه طراحی انواع وب سایت و سئو
              </button>
            </div>
            <img src={front_1} alt="front" className="w-80" />
          </motion.div>
          <motion.div
            whileInView={{ y: [200, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-row-reverse items-center py-10 container px-48 mx-auto bg-[#72FD9D]"
          >
            <div className="flex flex-col items-start gap-5">
              <span className="text-xl leading-10 font-thin text-gray-66 text-center">
                جهت مشاهده نمونه کار های سئو سایت توسط تیم نهال آی تی از طریق لینک زیر اقدام کنید{" "}
              </span>
              <button className="text-white bg-[#57C053] w-11/12 py-2 rounded-md text-sm hover:brightness-105 transition-all">
                مشاهده نمونه کار سئو
              </button>
            </div>
            <img src={front_2} alt="front" className="w-80" />
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

export default Sseo;
