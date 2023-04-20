import React from "react";
import "./SsaleWeb.css";
import { motion } from "framer-motion";
// import images
import headImg from "../../assets/img/SaleReadyTemplate/طراحی-قالب-سایت1-1024x576.jpg";
import nodeImg from "../../assets/img/SaleReadyTemplate/z5haaa5lwdko-min-1024x627.png";
import reactImg from "../../assets/img/SaleReadyTemplate/React-JS-1-transformed-min.png";
import vueImg from "../../assets/img/SaleReadyTemplate/ndsmpb4j2hvj-transformed-min.png";
import hyperImg from "../../assets/img/SaleReadyTemplate/swlmhhhghszz-min.png";
import tariff from "../../assets/img/SaleReadyTemplate/تعرفه-فروش-قالب-html-600x800.jpg";
import jsImg from "../../assets/img/SaleReadyTemplate/jawa-askrypt-chyst-transformed-min.png";
import front_1 from "../../assets/img/frm-thbt-sfarsh-transformed-min.png";
import front_2 from "../../assets/img/SaleReadyTemplate/خدمات-کامپیوتر.png";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

function SsaleWeb() {
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
      <div className="flex flex-col SaleReadyTemplate items-center gap-10 justify-center pt-2 pb-10 bg-[#f5f5f9]">
        <div className="flex flex-col gap-10 item-center justify-center container px-48 mx-auto">
          <img src={headImg} alt="head" className="w-full" />
          <div className="flex flex-col">
            <h1 className="text-green-1c text-center">فروش قالب سایت</h1>
            <p className="" style={{ textAlign: "center" }}>
              در این بخش، قالب های html ، css ، جاوا اسکریپت (Java Script) ، ری اکت (React) ، ویو جی اس (vue js) ، نود جی اس (node
              js) ، وردپرس و غیره و ماژول های وردپرس، به فروش می رسد.
            </p>
          </div>
          <div>
            <motion.h2
              className="text-green-02 text-center"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: [0, 1, 0, 1, 0, 1, 0, 1] }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              قالب سایت چیست ؟
            </motion.h2>
            <motion.p
              initial={{ opacity: 1 }}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              قالب سایت (به انگلیسی: Site Template یا Site Theme) را می‌ توان مشابه دکور و قفسه‌بندی فروشگاه‌ ها در دنیای واقعی
              دانست. قالب سایت ترکیبی از رنگ، تصاویر و المان‌ های موجود در ‌سایت مانند دکمه‌ ها است و باعث می‌ شود فروشگاه شما
              مرتب و منحصر به فرد دیده شود. طراحی رابط‌ کاربری یا قالب اندازه نوشته‌ ها، عرض کلی صفحات و اندازه هر یک از ستون‌ های
              سایت را تعیین می‌ کند.
            </motion.p>
            <motion.p
              initial={{ opacity: 1 }}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              اما چرا یک وب سایت نیازمند یک قالب است؟ مگر نمی‌شود از قالب‌ های پیش‌فرض استفاده کرد؟ پاسخ قطعا خیر است! چرا که
              قالب‌ های پیش‌ فرض بسیار ابتدایی هستند و امکانات زیادی در اختیار شما نمی‌ گذارند.
            </motion.p>
            <motion.p
              initial={{ opacity: 1 }}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 3 }}
              viewport={{ once: true }}
            >
              پس برای حفظ کاربران وب سایت خود و جذب بازدیدکنندگان دیگر برای ارائه خدمات، فروش محصولات و… ، باید قالبی با ظاهری
              جذاب و مناسب تهیه کنید. این کار به شما کمک می‌کند تا کاربری که وارد سایت شما شده است را از سردرگمی ناشی از بهم
              ریختگی‌ نجات دهید. همچنین به دلیل طیف گسترده‌ ای از افراد که از سایت شما بازدید می‌ کنند و سلایق و علایق گوناگونی
              دارند، انتخاب قالبی که همه‌ ی آن‌ ها را راضی نگه دارد نیاز به هوش و ذکاوت خاصی خواهد داشت.
            </motion.p>
            <motion.p
              initial={{ opacity: 1 }}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 4 }}
              viewport={{ once: true }}
            >
              در این بخش از سایت نهال آی تی ، قالب های html ، css ، جاوا اسکریپت (Java Script) ، ری اکت (React) ، ویو جی اس (vue
              js) ، نود جی اس (node js) ، وردپرس و غیره و ماژول های وردپرس، به فروش می رسد که در ادامه به بررسی و توضیح هر یک از
              اینها خواهیم پرداخت.{" "}
            </motion.p>
          </div>
          <div className="flex flex-row">
            <div>
              <motion.h1
                whileInView={{ y: [200, 0], opacity: [0, 1] }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className="text-right text-green-00"
              >
                قالب های وب HTML و CSS چیست؟
              </motion.h1>
              <motion.p
                whileInView={{ y: [200, 0], opacity: [0, 1] }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
              >
                HTML یک زبان نشانه گذاری و اسکلت اصلی تمامی سایت هایی است که در سراسر دنیا به وجود می آیند است. HTML یک زبان بسیار
                ساده است و پیشنیاز ورود به دنیای طراحی وب می باشد.
              </motion.p>
              <motion.p
                whileInView={{ y: [200, 0], opacity: [0, 1] }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
              >
                HTML یک زبان برنامه نوسی نیست و در اصل تنها برای نمایش محتوا در ساختار های از پیش تایین شده ساخته شده است.
              </motion.p>
              <motion.p
                whileInView={{ y: [200, 0], opacity: [0, 1] }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
              >
                زبان HTML هیچ ظاهری ندارد و به کمک مکمل خود یعنی CSS ظاهر و شکل و شمایل می گیرد.
              </motion.p>
              <motion.p
                whileInView={{ y: [200, 0], opacity: [0, 1] }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
              >
                هم HTML و هم CSS ساده ترین زبان های کامپیوتری و نشانه گذاری هستند.
              </motion.p>
            </div>
            <motion.img
              src={hyperImg}
              alt="html-css"
              className="w-80"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
          <motion.div whileInView={{ x: [-1000, 0] }} transition={{ duration: 2 }} viewport={{ once: true }}>
            <p>
              اگر شما هم طراح وب باشید و به این مقوله علاقه داشته باشید و فعالیت در این زمینه و یادگیری بیشتر یکی از اهداف شما
              باشد، از جمله بدیهی ترین اطلاعاتی که لازم است به آن تسلط پیدا کنید؛ مفاهیم مرتبط با اچ تی ام ال (HTML) و سی اس اس
              (CSS) می باشد.
            </p>
            <p>
              به عبارتی دانش بنیادی ای که هر شخص طراح آموخته و در کار خود به کار گرفته است، همین زبان نشانه گذاری متن می باشد که
              از طریق آن می توانید کدهایی را ایجاد کنید که هر یک منجر به نمایش یک سری از ویژگی ها در صفحات وب خواهند شد.
            </p>
            <p>
              دنیای طراحی وب دنیایی است شلوغ و پر رقابت ، بنابراین اگر واقعا قصد دارید به جایی برسید؛ باید تلاش کنید و بیشتر
              بیاموزید و نمونه کارهای بیشتری را طراحی نمایید.
            </p>
            <p>
              امروزه، با توجه به تغییراتی که در سبک بازاریابی و تبلیغات حاصل شده است ؛ طراحی سایت به عنوان یک مهارت جهانی در نظر
              گرفته می شود.
            </p>
            <p>
              شما در هر کشوری از دنیا که زندگی کنید با تسلط بر web design می تواند درآمد زایی داشته باشید اما کسی موفق است که
              اصولی و حرفه ای می آموزد و در نهایت حرفه ای نیز کار می کند.
            </p>
            <p>
              Html و css از مهمترین استانداردهای تصویب شده وب می باشند و برای ورود به این شغل، لازم است تا با مفاهیم مرتبط با آن
              ها آشنا شوید.
            </p>
          </motion.div>
          <div className="flex flex-row">
            <div>
              <motion.h1
                className="text-green-02"
                whileInView={{ y: [-200, 0], opacity: [0, 1] }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                زبان برنامه نویسی جاوا اسکریپت چیست ؟
              </motion.h1>
              <motion.p
                whileInView={{ y: [-200, 0], opacity: [0, 1] }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
              >
                JavaScript که به اختصار JS نیز نامیده می‌ شود، یکی از محبوب ترین زبان‌ های برنامه نویسی است. جاوا اسکریپت زبانی
                سطح بالا، داینامیک، شی‌گرا و تفسیری است که از شیوه‌ های مختلف برنامه نویسی پشتیبانی می‌ کند.
              </motion.p>
              <motion.p
                whileInView={{ y: [-200, 0], opacity: [0, 1] }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
              >
                از این زبان می‌ توان برای برنامه نویسی سمت سرور (Server Side)، اپلیکیشن‌ های موبایل، بازی و اپلیکیشن‌ های دسکتاپ
                استفاده کرد. بنابراین می‌ توان اینگونه برداشت کرد که زبان برنامه نویسی جاوا اسکریپت ، یک زبان همه فن حریف است.
              </motion.p>
            </div>
            <motion.img
              src={jsImg}
              alt="js"
              className="w-96"
              whileInView={{ x: [-300, 0], opacity: [0, 1] }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            />
          </div>
          <motion.div whileInView={{ opacity: [0, 1, 0, 1, 0, 1] }} transition={{ duration: 2 }} viewport={{ once: true }}>
            <h1 className="text-green-02">کاربرد های جاوا اسکریپت</h1>
            <p>
              در چشم انداز مدرن امروزی، به لطف معرفی Node.js، جاوا اسکریپت برای همه چیز حتی برای فروشگاه سازها نیز استفاده می‌
              شود. صرف نظر از اینکه چگونه از آن استفاده می‌ کنید، این فناوری نرم افزار قوی را برای شرکت‌ های سراسر جهان ایجاد می‌
              کند.
            </p>
            <p>
              علاوه بر این، شرکت‌هایی مانند LinkedIn و Medium از آن برای ایجاد پلتفرم‌ هایی برای دسترسی کاربران به خدمات خود
              استفاده می‌ کنند.
            </p>
            <p>
              جاوا اسکریپت می‌ تواند انواع مختلفی از نرم افزارها مانند بازی‌ ها، برنامه‌ های کامپیوتری، برنامه‌ های کاربردی وب و
              حتی فناوری‌ هایی مانند بلاک چین را ایجاد کند.
            </p>
            <p>
              با این حال، جاوا اسکریپت مسلماً محبوب ترین زبان برنامه نویسی برای وب است. به عنوان مثال، بیش از 125000 شغل در
              لینکدین به دنبال افراد حرفه ای و ماهر در جاوا اسکریپت هستند.
            </p>
            <p>
              محبوب ترین کاربرد جاوا اسکریپت برای توسعه وب است و یکی از قدرتمندترین ابزارهایی است که یک توسعه دهنده می‌ تواند در
              لیست ابزار خود داشته باشد.
            </p>
            <p>
              توسعه‌دهندگان از جاوا اسکریپت در توسعه وب استفاده می‌ کنند تا تعامل و ویژگی‌ هایی را برای بهبود تجربه کاربر و لذت‌
              بخش‌ تر کردن اینترنت اضافه کنند.
            </p>
            <p>
              جاوا اسکریپت فراتر از توسعه front-end گسترش یافته است، یعنی جایی که شروع شد. اخیراً، جاوا اسکریپت به انتهای توسعه وب
              گسترش یافته است و می‌ تواند در تمام پشته استفاده شود. این بدان معناست که توسعه‌ دهندگان به روش‌های CRUD (ایجاد،
              خواندن، به‌روزرسانی، تخریب) دسترسی دارند و اکنون حتی می‌ توانند در انتهای یک وب‌ سایت از آن‌ ها استفاده کنند.
            </p>
            <p>
              علاوه بر این، بر اساس W3techs، بیش از ۹۰٪ از تمام وب سایت‌ ها از جاوا اسکریپت استفاده می‌ کنند. این باعث می‌ شود که
              برجسته ترین رهبر در فناوری توسعه وب باشد.
            </p>
          </motion.div>
          <div className="flex flex-row items-center">
            <div>
              <motion.h1
                className="text-green-02"
                whileInView={{ y: [-200, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                ری اکت (React) چیست ؟
              </motion.h1>
              <motion.p
                whileInView={{ y: [-200, 0], opacity: [0, 1] }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              >
                ری اکت یکی از کتابخانه های اوپن سورس (متن باز) جاوا اسکریپت هست که برای ساخت رابط های کاربری وب سایت ها مورد
                استفاده قرار می گیرد.
              </motion.p>
              <motion.p
                whileInView={{ y: [-200, 0], opacity: [0, 1] }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              >
                کتابخانه ری اکت توسط جامعه ای از توسعه دهندگان فیس بوک ارائه شد. ریکت ابتدا در سال 2011 با هدف استفاده توسط خود
                فیسبوک ایجاد شد اما بعد ها با توسعه بیشتر و تکمیل شدنش در سال 2013 به یک کتابخانه عمومی برای استفاده همه برنامه
                نویس ها تبدیل شد.
              </motion.p>
            </div>
            <motion.img
              src={reactImg}
              alt="react"
              className="w-80"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            />
          </div>
          <div>
            <p>
              کتابخانه ری اکت جی اس به برنامه نویسان و توسعه دهندگان این امکان را خواهد داد تا با استفاده از انواع مختلف واسط های
              کاربری اپلیکیشن های مناسبی را با کامپوننت ها ایجاد نمایند و در این زمینه کمک بسیار شایانی را به برنامه نویسان ارائه
              می نماید. در حالت کلی کامپوننت از جاوا اسکریپت و html تشکیل می شود و منطقی که در کامپیوتر وجود دارد این موضوع می
              باشد که قسمت کوچکی از یک واسط کاربری بزرگتر خود را به نمایش بگذارد.
            </p>
          </div>
          <div>
            <h1 className="text-green-02">تفاوت ری اکت با فریم ورک های دیگر</h1>
            <p>
              در اوایل قرن بیست و یکم در سال ۲۰۱۱ تعدادی از برنامه نویسان و توسعه دهندگان بسیار برجسته در دنیای وب یک مخزن بسیار
              پیشرفته به نام ToDoMVC راه اندازی کرده و در آن مخزن با سرعت فریم ورک و کتابخانه های محبوب موجود در سراسر دنیا یک
              اپلیکیشن را با فهرست کار یک ساعت پیاده سازی کردند.
            </p>
            <p>همچنین در اواخر سال ۲۰۱۲ بود که این پروژه به یک مکان غیررسمی برای مقایسه ابزارهای مختلف تبدیل شد.</p>
          </div>
          <div className="flex flex-row">
            <div>
              <motion.h1
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-green-02"
              >
                ویو جی اس چیست ؟
              </motion.h1>
              <motion.p whileInView={{ x: [1000, 0] }} transition={{ duration: 1, delay: 1 }} viewport={{ once: true }}>
                vue.js یا ویو جی اس یک فریمورک برای زبان برنامه نویسی جاوا اسکریپت است و با استفاده از این فریمورک شما میتوانید
                فرانت اند یک وب سایت را هرچه سریعتر و زیباتر و کاراتر بسازید .
              </motion.p>
              <motion.p whileInView={{ x: [1000, 0] }} transition={{ duration: 1, delay: 1 }} viewport={{ once: true }}>
                با وجود فریمورک Vue.js شما میتوانید از فریمورک ها یا کتابخانه های دیگر جاوا اسکریپت هم بهره بگیرید ولی vue.js
                تقریبا یک فریمورک کامل سمت کلاینت یا فرانت اند وب سایت است .
              </motion.p>
            </div>
            <motion.img
              src={vueImg}
              alt="Vue"
              className="w-80"
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            />
          </div>
          <motion.div
            whileInView={{ x: [0, -10, 10, -10, 10, -10, 10, -10, 10, -10, 10, 0] }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-green-02">فریمورک Vue.js ، بطور دیوانه کننده ای سریع است</h1>
            <p>قبول میکنم که اکثر فریمورک های جاوا اسکریپتی سریع هستند اما فریمورک Vue.js پرفرمنس و سرعت بسیار بالاتری دارد .</p>
            <p>
              دلیل سرعت بالای Vue.js همانند React ، اتکا به virtual DOM است . همچنین Vue.js بسیار سبک است و به همین دلیل سرعت لود
              بالایی دارد .
            </p>
            <p>
              همچنین تمامی وابستگی های این فریمورک در زمان رندر شدن بررسی می شود و سیستم میداند که کدام کامپوننت باید مجددا رندر
              شود یا اینکه بدون تغییر باقی بماند .
            </p>
            <p>
              این نکته را هم در نظر داشته باشید که Vue.js بدون وابستگی به تمپلیت خاصی با html و css خالی و خام کار میکند و همچنین
              شما میتوانید روی هر فریمورک سی اس اس یا تمپلیت دیگر نیز از آن استفاده کنید .
            </p>
            <p>
              وقتی شما با یک زبان برنامه نویسی یا یک فریمورک یا هر چیز دیگری که در این دسته ها قرار بگیرد کار میکنید جامعه ی اطراف
              آن است که تجربه های شما را می سازد .
            </p>
            <p>
              این مهم است که پشتیبانی از چیزی که با آن کار میکنید توسط افراد زیادی باشد . این مهم است که منابع زیادی برای آن وجود
              داشته باشد .
            </p>
            <p>
              اگر تعداد اعضای جامعه ی یک زبان یا فریمورک زیاد باشد به راحتی میتوانید مشاوره ی رایگان برای خود پیدا کنید یا
              میتوانید یک فرد پیدا کنید که پاسخ سوالات فنی شما را بدهد .
            </p>
            <p>
              این مسئله زمانی بیشتر کاربرد دارد که شما روی پروژه عملی واقعی یا در شرکت واقعی مشغول به کار هستید و به مشکلی خاص
              برمیخورید که پاسخ ان در اینترنت هم نیست اینجاست که جامعه به کمک شما می آید .
            </p>
            <p>
              فریمورک Vue.js از ابتدا در گیتهابش رو به گسترش بوده است ، انجمن بسیار فعالی دارد ، کنفرانس های بین المللی نیز دارد و
              همچنین منابع آموزشی خوب فارسی هم دارد .
            </p>
          </motion.div>
          <div className="flex">
            <div>
              <motion.h1
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-green-02"
              >
                نود جی اس (Node.js) چیست ؟
              </motion.h1>
              <motion.p whileInView={{ x: [-700, 0], opacity: [0, 1] }} transition={{ duration: 1 }} viewport={{ once: true }}>
                Node.js یک پلتفرم ایجاد شده بر پایه موتور جاوا اسکریپت گوگل کروم است که باعث سهولت ایجاد و مقیاس‌ پذیری برنامه‌
                های تحت شبکه می‌ شود. این پلتفرم از یک مدل I/O رویداد محور استفاده می‌ کند که مسدود نشونده (non-blocking) است و
                همین امر باعث کاهش فشار موجود بر روی سرور و افزایش کارآیی می‌ شود و این امر برای اجرای برنامه‌ های مبتنی بر داده
                که بصورت بلادرنگ (Real-Time) بر روی سرورهای نامتمرکز استفاده می‌ شوند بسیار مناسب است.
              </motion.p>
            </div>
            <motion.img
              whileInView={{ x: [-200, 0], opacity: [0, 1], scale: [0, 1] }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              src={nodeImg}
              alt="node"
              className="w-80"
            />
          </div>
          <motion.div
            whileInView={{ x: [800, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              همانطور که می دانید جاوا اسکریپ یکی از برترین و محبوب ترین زبان های برنامه نویسی می باشد که در سرتاسر جهان مورد
              استفاده قرار می گیرn.Node.js درواقع پلتفرمی است که سمت سرور کار می کند و بر پایه جاوا اسکریپ بنیان گذاری شده است.
            </p>
            <p>
              اگر تاریخچه جاوا اسکریپت را مطالعه کرده باشید حتما نام آقای Ryan Dahl به گوشتان خورده است ، در واقع این آقا برای
              اینکه قدرتمندی جاوا اسکریپ را به رخ سایر زبان های برنامه نویسی بکشاند ، Node.js را معرفی کرد تا به همگان ثابت کند که
              این زبان برنامه نویسی نباید فقط برای بخش Front-end صفحات وب مورد استفاده قرار گیرد.
            </p>
            <p>
              در حقیقت Node js بود که به زبان جاوا اسکریپت این قدرت را داد که بتواند کد های خود را در محیط سرور اجرا کند و تا قبل
              از آن تمامی کد ها داخل مرورگر اجرا می شد. به کمک Node.js شما می توانید برنامه های گسترده و قابل گسترش بسازید که هیچ
              محدودیتی ندارند!
            </p>
          </motion.div>
        </div>
        <div className="w-full flex justify-center">
          <img src={tariff} alt="node" />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <motion.div
          whileInView={{ y: [300, 0], opacity: [0, 1] }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex flex-row items-center bg-[#D5FFE2] py-5 container px-48 mx-auto"
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
          whileInView={{ y: [300, 0], opacity: [0, 1] }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex flex-row-reverse items-center py-10 bg-[#72FD9D] container px-48 mx-auto"
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
      <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default SsaleWeb;
