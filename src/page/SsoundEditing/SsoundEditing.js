import React from "react";
import "./SsoundEditing.css";
import { motion } from "framer-motion";
// import images
import headImg from "../../assets/img/SoundEditing/خدمات-صداگذاری-1024x576.jpg";
import img_1 from "../../assets/img/SoundEditing/saxophonist-playing-saxophone-wearing-golden-glasses-1024x1024.png";
import img_2 from "../../assets/img/SoundEditing/kisspng-vegas-pro-portable-network-graphics-computer-icons-iconos-sony-vegas-9-pro-5b7b7f843fec75.0596849215348202282618-removebg-preview.png";
import img_3 from "../../assets/img/SoundEditing/productIcon_v2_20200705203105080.png";
import img_4 from "../../assets/img/SoundEditing/Adobe_Audition_CC_icon_2020.svg-1024x1000.png";
import img_5 from "../../assets/img/SoundEditing/آموزش-ساخت-تیزر-تبلیغاتی-min.png";
import img_6 from "../../assets/img/SoundEditing/4674029-scaled-transformed-min.png";
import img_7 from "../../assets/img/SoundEditing/1398090309273659318951144-transformed-min.png";
import img_8 from "../../assets/img/SoundEditing/تعرفه-تدوین-صدا2-min-600x600.png";
import front_1 from "../../assets/img/frm-thbt-sfarsh-transformed-min.png";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

function SsoundEditing() {
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
      <div className="soundEditing-content flex flex-col items-center gap-10 pb-10 pt-2 bg-[#f5f5f9]">
        <div className="flex flex-col gap-10 container mx-auto px-48">
          <img src={headImg} alt="header" />
          <div>
            <h1 className="text-green-1c">صدا</h1>
            <p>
              قطعا یکی از مهم ترین رکن ها در انتقال حس و درک مفاهیم، صدا است. این پدیده آنقدر مهم و حیاتی است که روزانه با افراد
              مختلفی از طریق آن ارتباط برقرار میکنیم. امروزه با گسترش چشمگیر تکنولوژی قطعا نیاز به صدای باکیفیت بیش از پیش احساس
              میشود و این امر جز با صداگذاری و تدوین حرفه ای انجام نمیپذیرد. در تیم نهال آی تی، جهت بهره برداری بهتر خدمات ما در
              حوزه ی تدوین صدا و صداگذاری ، کاربران میتوانند به راحتی با متخصصان مختلف در حوزه صداگذاری به صورت مشترک، مشاوره
              بگیرند.
            </p>
          </div>
          <div>
            <h2 className="text-green-1c">صدا گذاری و تدوین صدا چیست؟</h2>
            <p>
              صداگذاری و تدوین صدا یکی از ارکان اصلی ادیت در محتواهای دیجیتال می باشند. برای مثال شما در اکثر فیلم ها صداهای
              مختلفی را می شنوید که شاید در واقعیت این صداها وجود نداشته باشد و بعد از فیلمبرداری توسط مهندسین صدا آن را بر روی
              فیلم قرار داده باشند اگر بخواهیم یک نمونه از آن را به شما بگوییم می توانیم به صدای باران اشاره کنیم که در بسیاری از
              فیلم ها باران به صورت مصنوعی ساخته شده و صدای آن توسط مهندس صدا بر روی تصویر قرار داده می شود که به این عمل صداگذاری
              می گویند.
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div>
              <motion.h3
                whileInView={{ x: [700, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-green-1c"
              >
                موارد استفاده تدوین صدا
              </motion.h3>
              <motion.ul
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-5 mr-10"
              >
                <li>برنامه های تلویزیونی</li>
                <li>فیلم ها</li>
                <li>مستند ها</li>
                <li>انیمیشن</li>
                <li>سخنرانی</li>
                <li>تیزرهای تبلیغاتی</li>
                <li>تولید محتوا</li>
                <li>و …</li>
              </motion.ul>
            </div>
            <motion.img
              src={img_1}
              alt="soundEditing"
              className="w-96"
              whileInView={{ x: [-1000, 0], opacity: [0, 1] }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            />
          </div>
          <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 2 }} viewport={{ once: true }}>
            <h4 className="text-green-1c">تفاوت صداگذاری و تدوین صدا</h4>
            <p>
              در ابتدا بهتر است به مبحث صداگذاری بپردازیم که این روزها جایگاه بسیار خوبی در شبکه پخش خانگی پیدا کرده است، برای
              مثال شرکت هایی هستند که فیلم های زبان اصلی را دوبله می کنند که در همین کار عمل صداگذاری و تدوین صدا اعمال می شود
              برای مثال در ابتدا باید صدای خود فیلم حذف شده و صدای گوینده به زبان فارسی بر روی فیلم قرار داده شود به این عمل
              صداگذاری گفته می شود.
            </p>
            <p>
              حال قصد داریم به تدوین صدا بپردازیم در واقع شاید در قسمتی از کار نیاز باشد که شما مقداری از فیلم را سانسور کنید در
              نتیجه بعد از حذف شدن آن قسمت از فیلم باید آن قسمت از صدا که مربوط به بخش بریده شده فیلم است را کات کنید و مابقی
              صداها را به هم بچسبانید که به این کار تدوین صدا گفته میشود و در نهایت بهتر است بدانید که این دو موضوع با هم متفاوت
              هستند اما برای انجام یک کار حرفه ای به هر دوی آن ها نیاز است.
            </p>
          </motion.div>
          <div>
            <motion.h5
              whileInView={{ x: [1000, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-green-1c"
            >
              نرم افزارهای حرفه ای ویرایش صدا
            </motion.h5>
            <p>در ادامه به معرفی چند نرم افزار محبوب و حرفه ای تدوین صدا میپردازیم :</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div>
              <motion.h6
                whileInView={{ y: [500, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-green-1c"
              >
                1 - نرم افزار سونی وگاس
              </motion.h6>
              <motion.p whileInView={{ y: [500, 0], opacity: [0, 1] }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                شرکت سونی نه تنها در زمینه صنعت فیلم سازی دستی دارد، بلکه نرم افزاری را در زمینه میکس، مونتاژ و ویرایش فیلم تهیه
                کرده است که بسیار قدرتمند می باشد. هر چند این نرم افزار به سیستم بسیار قوی نیاز دارد و کمی پیچیده است.
              </motion.p>
              <motion.p whileInView={{ y: [500, 0], opacity: [0, 1] }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                استفاده از نهایت کیفیت در صداها و تصاویر خروجی که نهایت لذت را برای ببینده به همراه دارد یکی از مهم ترین خصوصیاتی
                است که در Sony Vegas Pro به چشم می خورد. انواعی از افکت ها در این ابزار گنجانده شده اند تا کاربران حرفه ای به
                راحتی با کنار هم قرار دادن تصاویر و همین افکت ها به جذاب تر شدن کار خود کمک کنند.
              </motion.p>
            </div>
            <motion.img
              src={img_2}
              alt="sonyVegas"
              className="w-64"
              whileInView={{ x: [-700, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <div>
              <motion.h6
                whileInView={{ y: [500, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-green-1c"
              >
                2 - نرم افزار cyberlink audio director
              </motion.h6>
              <motion.p whileInView={{ y: [500, 0], opacity: [0, 1] }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                این شرکت با ارائه نرم افزار های قدرتمند در زمینه تولید و ویرایش محتوا بسیار مورد استقبال کاربران قرار گرفته است.
                حال اینبار با ارائه یک نرم افزار قدرتمند دیگر در زمینه تدوین صدا نظر کاربران را به خود جلب کرده است. از ویژگی های
                این نرم افزار میتوان به موارد زیر اشاره کرد :
              </motion.p>
              <motion.ul
                whileInView={{ y: [500, 0], opacity: [0, 1] }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className="mt-5 mr-10"
              >
                <li>ویرایش فایل های صوتی با امکانات متعدد</li>
                <li>امکان رایت پروژه صوتی در سی دی</li>
                <li>پشتیبانی از فرمت های مختلف بخصوص فرمت VST</li>
                <li>استفاده از نهایت کیفیت در خروجی</li>
                <li>امکان گرفتن خروجی با فرمت ها و کیفیت های دلخواه</li>
                <li>و …</li>
              </motion.ul>
            </div>
            <motion.img
              src={img_3}
              alt="cyberlink audio director"
              className="w-64"
              whileInView={{ x: [-500, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <div>
              <motion.h6
                whileInView={{ y: [500, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-green-1c"
              >
                3 - نرم افزار Adobe Audition
              </motion.h6>
              <motion.p whileInView={{ y: [500, 0], opacity: [0, 1] }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                Adobe Audition یکی از بهترین نرم افزارهای رکورد آهنگ است که امکاناتی مثل waveform و نمایش چند آهنگ برای ترکیب،
                ویرایش و بازیابی محتوای صوتی را در اختیارتان می گذارد. این برنامه برای سرعت بخشیدن به روند تولید ویدئو و فایل صوتی
                طراحی شده است. از ویژگی های این نرم افزار میتوان به موارد زیر اشاره کرد :
              </motion.p>
              <motion.ul
                whileInView={{ y: [500, 0], opacity: [0, 1] }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3 mt-5 mr-10"
              >
                <li>می توانید کلیپ های آهنگتان رابه راحتی ضبط، ویرایش و ادغام کنید.</li>
                <li>این برنامه به شما امکان می دهد تا محتواهای صوتی مختلف را برای تولید پادکست با هم ترکیب کنید.</li>
                <li>پنل اصلی صدا با برنامه ادغام شده است تا بهترین افکت روی آهنگ شما قرار بگیرد.</li>
                <li>می توانید کلیپ های آهنگ خودتان را در کنار ویژگی ضبط صدا استفاده کنید تا آهنگ حرفه ای تری بسازید.</li>
                <li>از این پلتفرم می توان برای ایجاد پادکست های جذاب استفاده کرد.</li>
              </motion.ul>
            </div>
            <motion.img
              src={img_4}
              alt="Adobe Audition"
              className="w-64"
              whileInView={{ x: [-500, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
          <motion.div
            whileInView={{ x: [1000, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <h6 className="text-green-137 text-center">خدمات صداگذاری و تدوین صدا</h6>
            <div className="flex flex-row justify-around sound-editing-Services ">
              <div className="flex flex-col gap-3 items-center">
                <img src={img_5} alt="img" className="w-36" />
                <b>تهیه تیزر تبلیغاتی</b>
                <span className="text-center">
                  با گستردگی روزافزون مخاطبان شبکه مجازی یکی از بهترین تبلیغات در این بخش ساخت ویدئوهای ویژه کوتاه، برای نمایش در
                  صفحات شبکه های اجتماعی و بستر های مختلف است.
                </span>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <img src={img_6} alt="img" className="w-36" />
                <b>خدمات نریشن</b>
                <span className="text-center">
                  نریشن، هنر تبدیل متون مختلف به کلام تاثیرگذار است. در بسیاری از موارد مخاطبان ما علاقه ایی به خواندن متون از خود
                  نشان نمیدهند و این امر ممکن است باعث شود بسیاری از مطالب مهم، از نظرشان پنهان بماند.
                </span>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <img src={img_7} alt="img" className="w-36" />
                <b>گویندگی و دوبله</b>
                <span className="text-center">
                  درواقع گویندگی ،اثرگذاری یک موضوع را چندین برابر میکند و باعث میشود که متون به کلامی دلنشین ، اثرگذار و زیبا
                  تبدیل شود. از هنر گویندگی در رادیو ، تلوزیون، فیلم، تئاتر، انیمیشن، تبلیغاتی، و … استفاده می شود .
                </span>
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col items-center">
            <h6 className="text-gray3030">تعرفه های تیم نهال آی تی در حوزه تدوین و صداگذاری</h6>
            <img src={img_8} alt="tarrif" className="w-7/12" />
          </div>
        </div>
        <div className="bg-[#D5FFE2] w-full">
          <motion.div
            whileInView={{ y: [200, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-centerpy-5 container px-48 mx-auto"
          >
            <div className="flex flex-col items-end gap-5">
              <span className="text-xl leading-10 font-thin text-gray-66 text-center">
                جهت سفارش انواع خدمات صدا ، میتوانید به صورت رایگان ، با شماره{" "}
                <b className="text-gray3030 font-bold">09927674217</b> تماس بگیرید و یا از طریق لینک زیر اقدام کنید.
              </span>
              <button className="text-white hover:brightness-105 transition-all bg-[#57C053] w-11/12 py-2 rounded-md text-sm">
                سفارش خدمات صدا گذاری
              </button>
            </div>
            <img src={front_1} alt="front" className="w-96" />
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

export default SsoundEditing;
