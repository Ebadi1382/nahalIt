import React from "react";
import "./SsocialMedia.css";
import { motion } from "framer-motion";
// import images
import HeadImg from "../../assets/img/SocalMedia/خدمات-شبکه-های-اجتماعی-1024x576.jpg";
import SocalMarcet from "../../assets/img/SocalMedia/social-marketer-banner-hurn-and-social-icons-around-desk.png";
import telegram from "../../assets/img/SocalMedia/Telegram-icon-on-transparent-PNG-min-transformed.png";
import linkedin from "../../assets/img/SocalMedia/what-is-linkedin-transformed-min.png";
import twitter from "../../assets/img/SocalMedia/image_600_400-transformed-min.png";
import faceBook from "../../assets/img/SocalMedia/c3e8b__h0310ixa90232keq4t6l-min.png";
import aparat from "../../assets/img/SocalMedia/nody-لوگو-آپارات-1628455708-min.png";
import youtube from "../../assets/img/SocalMedia/Simple-YouTube-Logo-i-transformed-min (1).png";
import instagram from "../../assets/img/SocalMedia/Glossy-Instagram-logo-PNG-transformed-min.png";
import TelegramIcon from "../../assets/img/SocalMedia/kisspng-telegram-encapsulated-postscript-transfer-5b1706056101263859681215282355253974-transformed-min.png";
import LinkedinIcon from "../../assets/img/SocalMedia/linkedin-logo-transparent-116602552215dpnc1i8cu-transformed-min.png";
import TwitterIcon from "../../assets/img/SocalMedia/103-1037817_13-twitter-icon-vector-logo-images-twitter-logo-transformed-min.png";
import FaceBookLogo from "../../assets/img/SocalMedia/Facebook_Logo-min.png";
import tarrif_1 from "../../assets/img/SocalMedia/تعرفه-شبکه-های-اجتماعی-اقتصادی2-min.png";
import tarrif_2 from "../../assets/img/SocalMedia/تعرفه-شبکه-های-اجتماعی-حرفه-ای2-min.png";
import tarrif_3 from "../../assets/img/SocalMedia/تعرفه-شبکه-های-اجتماعی-ویژه2-min.png";
import front_1 from "../../assets/img/frm-thbt-sfarsh-transformed-min.png";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

function SsocialMedia() {
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
      <div className="SocalMedia flex flex-col items-center gap-10 pb-10 pt-2 bg-[#f5f5f9]">
        <div className="flex flex-col gap-10 container px-48 mx-auto">
          <img src={HeadImg} alt="header" className="w-full" />
          <div>
            <h1 className="text-center text-green-137">خدمات شبکه های اجتماعی</h1>
            <p>
              امروزه داشتن یک وب سایت به تنهایی پاسخ گوی بازار رقابتی نیست، بازاریابی رسانه‌ های اجتماعی یکی از ابزارهای ارزشمند
              برای ایجاد یک فضا بین جامعه و درگیر شدن با مشتریان خود است.
            </p>
            <p>
              به عنوان یکی از روش‌ های مشتری مداری تعامل با مشتریان و مخاطبان از طریق خدمات شبکه‌ های اجتماعی است، اینکه مشتری شما
              حس ملموس تری از نوع کسب کار شما داشته باشد و شما را بیشتر در کنار خود ببینید تا در روبرو، حس بهتری به وی منتقل خواهد
              شد.
            </p>
            <p>
              سرمایه گذاری و تمرکز روی این بخش به دلایلی مانند: مخاطب پسند بودن، پر استفاده بودن، بازدید بالا، حس رقابتی و از همه
              مهمتر تاثیر بر سئو سایت شما، پیشنهاد می شود، ما می‌ توانیم هر جنبه‌ ای از حضور رسانه های اجتماعی شما را مدیریت،
              بهینه سازی و رشد دهیم، بنابراین می‌ توانید بر کسب و کار خود متمرکز شوید.
            </p>
            <p>
              اگر قصد دارید رشد سریع تری را در شبکه های اجتماعی مانند اینستاگرام، لینکدین، تلگرام، یوتیوب، آپارات و … تجربه کنید،
              می توانید از خدمات شبکه های اجتماعی تیم نهال آی تی استفاده کنید.
            </p>
            <p>
              تیم نهال آی تی ، بستری مناسب برای افزایش بازدید، لایک، فالوور و سایر خدمات شبکه های اجتماعی فراهم آورده است. پس از
              ایجاد کمپین، اکانت و یا پست شما برای بسیاری از کاربران ارسال شده و خدمت موردنظر بلافاصله برای شما اعمال می شود.
            </p>
          </div>
          <motion.div
            whileInView={{ y: [-300, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col bg-weak-pink px-3 py-5"
          >
            <b className="mb-10">اهمیت شبکه های اجتماعی برای کسب و کارتان :</b>
            <div className="flex flex-col gap-2 font-base text-gray-5E5E socalmedia-importance">
              <span>1- بررسی فعالیت رقبا و سنجش فعالیت خود با آن ها</span>
              <span>2- پیشرفت بازار و بدست آوردن مشتری ‌های هدف</span>
              <span>3- توسعه ارتباط با مشتری و افزایش سرعت در پاسخگویی</span>
              <span>4- توسعه بازاریابی و برندسازی در شبکه‌ های مجازی</span>
              <span>5- برنامه‌ ریزی برای اهداف کوتاه و بلندمدت شرکت و سازمان</span>
              <span>6- نگهداری مشتری ‌های فعلی و بیشتر شدن مشتری ‌ها</span>
              <span>7- آمارگیری و بررسی میزان پیشرفت</span>
            </div>
          </motion.div>
          <div className="flex flex-row">
            <div>
              <motion.h2
                whileInView={{ x: [-300, 0], opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-green-1c"
              >
                اینستاگرام چیست ؟
              </motion.h2>
              <motion.p whileInView={{ y: [-300, 0], opacity: [0, 1] }} transition={{ duration: 1 }} viewport={{ once: true }}>
                اینستاگرام (Instagram) سرویسی برای اشتراک تصاویر و برقراری تعاملات اجتماعی است. کاربران عکس یا ویدئوهای کوتاه و یا
                بلند می‌گیرند و با دنبال‌کنندگان (Followers) خود به اشتراک می‌ گذارند.
              </motion.p>
              <motion.p whileInView={{ y: [-300, 0], opacity: [0, 1] }} transition={{ duration: 1 }} viewport={{ once: true }}>
                برخلاف فیس بوک و توییتر که بیش تر بر پایه محتوای متنی بنا شده اند، اینستاگرام با اولویت عکس و فیلم و محتوای تصویری
                فعالیت می‌ کند. ولی با این حال امکان قرار دادن محتوای متنی نیز در قسمت کپشن پست ها و هچنین استوری ها وجود دارد.
              </motion.p>
              <motion.p whileInView={{ y: [-300, 0], opacity: [0, 1] }} transition={{ duration: 1 }} viewport={{ once: true }}>
                اگر بخواهیم یک تعریف به زبان عامیانه از اینستاگرام ارائه دهیم، می‌ توان گفت این شبکه اجتماعی محبوب، برای انجام
                فعالیت های گوناگون از فعالیت های سیاسی و اجتماعی تا تفریحی و یا ایجاد یک کسب و کار موفق ، محل بسیار مناسبی است.
              </motion.p>
            </div>
            <motion.img
              src={SocalMarcet}
              alt="socalmedia"
              className="w-80"
              whileInView={{ x: [-700, 0], opacity: [0, 1] }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
          <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <p>
              سال 2010 همان سالی است که در آن معجزه ای به نام اینستاگرام توسط کوین سیستروم و مایک کرایگر ساخته و منتشر شد. برنامه
              ای که در طی مدت کوتاهی توانست افراد زیادی را به خود جذب کند و تبدیل به یک شبکه ی اجتماعی بسیار پرطرفدار شود.
            </p>
            <p>
              اینستاگرام یکی از محبوب ترین و پرکاربردترین شبکه اجتماعی می باشد اینستاگرام شبکه اجتماعی می باشد که روزانه میلیون ها
              تا میلیاردها نفر در آن فعالیت دارند و از این شبکه اجتماعی استفاده می کنند.
            </p>
            <p>
              یکی از دلایل محبوبیت اینستاگرام این است که در این شبکه اجتماعی شما می توانید به هر چیزی که علاقه دارید و یا قصد راه
              اندازی کسب و کاری را دارید برسید.
            </p>
            <p>
              قابلیت ها و امکانات اینستاگرام برای کاربران قرار داده است بسیار زیاد و متنوع بوده و همین یکی از دلایل محبوب بودن و
              پرکاربردی بودن این اپلیکیشن می باشد. شما می توانید در اینستاگرام تمامی خوانندگان یا بازیگران و یا چیزهای مورد علاقه
              تان را دنبال کنید و از اخبار روز دنیا خبر دار باشید.
            </p>
          </motion.div>
          <div className="flex-row flex">
            <motion.img
              src={telegram}
              alt="telegram"
              className="w-80"
              whileInView={{ x: [300, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <div>
              <motion.h3
                className="text-green-1c"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                تلگرام چیست ؟
              </motion.h3>
              <motion.p whileInView={{ opacity: [0, 1], scale: [0, 1] }} transition={{ duration: 2 }} viewport={{ once: true }}>
                در میان انبوه اپلیکیشن های پیام رسانی که این روزها در موبایل ها می بینیم، شکی نیست که تلگرام یکی از محبوب ترین
                آنهاست. این اپلیکیشن که توسط دو برادر برنامه نویس روس طراحی شده است.
              </motion.p>
              <motion.p whileInView={{ opacity: [0, 1], scale: [0, 1] }} transition={{ duration: 2 }} viewport={{ once: true }}>
                تلگرام هم اکنون یکی از محبوب‌ ترین اپلیکیشن‌ ها یا برنامه های پیام رسان موجود به شمار می‌ رود که قابلیت‌ های بسیار
                متعددی را در اختیار کاربران قرار داده و استفاده از تمام سرویس‌ های آن رایگان است.
              </motion.p>
              <motion.p whileInView={{ opacity: [0, 1], scale: [0, 1] }} transition={{ duration: 2 }} viewport={{ once: true }}>
                تلگرام ویژگی‌ های متعددی دارد که آن را از سایر اپلیکیشن‌ های پیام رسان متمایز می‌ کند. به عنوان مثال تلگرام از
                سیستم رمزنگاری سر تا سری بهره می‌برد و به هیچ عنوان اجازه دسترسی سایر افراد به حریم خصوصی کاربران را نمی‌ دهد.
              </motion.p>
            </div>
          </div>
          <motion.div
            whileInView={{ opacity: [0, 1], scale: [0, 1], x: [-100, 0], y: [100, 0] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-green-1c text-center">ویژگی های اصلی تلگرام</h4>
            <p>
              تلگرام مجموعه‌ ای از ویژگی‌ ها و قابلیت‌ های مختلف را در اختیار کاربران قرار می‌ دهد. این موضوع سبب شده که برنامه
              تلگرام بسیار محبوب شود. مطمئنا در یک پاراگراف کوتاه قادر به شر تمام قابلیت‌ های تلگرام نیستیم، بنابراین مجبوریم از
              بسیاری موارد صرف نظر کنیم. یکی از اصلی‌ ترین ویژگی‌ های تلگرام مربوط به امنیت بالای آن می‌ شود. تلگرام از سیستم
              رمزگذاری سر تا سری (End to End Encryption) بهره‌ مند است و به این صورت از حریم خصوصی کاربران حفاظت می‌ کند.
            </p>
            <p>
              سرعت عملکرد تلگرام بسیار بالاست و تیم توسعه دهنده آن به شدت در تلاش هستند تا عملکرد آن را بهبود بخشند. از اینرو هر
              روز قابلیت‌ های جدیدی به این برنامه اضافه می‌ شود. تلگرام امکان ساخت ربات و تعامل با سایر برنامه‌ ها نظیر اینستاگرام
              را از طریق دستورات IFTT فراهم می‌کند.
            </p>
            <p>
              تلگرام همچنین به صورت تحت وب قابل اجراست. این موضوع به آن معناست که شما می‌ توانید تلگرام را از طریق مرورگر و بدون
              نیاز به نصب هیچ برنامه یا اپلیکیشن جانبی در کامپیوتر، لپ‌تاپ و غیره اجرا کنید.
            </p>
          </motion.div>
          <div className="flex flex-row">
            <div>
              <motion.h5
                className="text-green-1c"
                whileInView={{ opacity: [0, 1], x: [300, 0] }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                لینکدین چیست ؟
              </motion.h5>
              <motion.p whileInView={{ opacity: [0, 1], x: [1000, 0] }} transition={{ duration: 2 }} viewport={{ once: true }}>
                لینکدین در واقع یک شبکه اجتماعی حرفه ای است که اساسا برای بهبود کسب و کارهای مختلف و آشنا کردن دیگران با آن ها
                طراحی شده است. با این حال، استفاده از لینکدین تنها به این موضوع محدود نمی شود و کاربران این شبکه اجتماعی می توانند
                از طریق آن، با افراد دیگری که در حوزه کاری شان فعالیت می کنند، آشنا شوند و با آن ها ارتباط برقرار کنند.
              </motion.p>
              <motion.p whileInView={{ opacity: [0, 1], x: [1000, 0] }} transition={{ duration: 2 }} viewport={{ once: true }}>
                همچنین می توان از این سیستم برای پیدا کردن کار یا استخدام افراد نیز استفاده کرد. این موضوع چندان مسئله عجیبی نیست؛
                کافیست سری به صفحات اشخاص یا شرکت های مختف بزنید تا از این مسئله با خبر شوید. علاوه بر این، محدود به داشتن یک حساب
                کاربری نیستید و می توانید با در اختیار داشتن چند اکانت مختلف، استفاده های متعددی از لینکدین داشته باشید. کار کردن
                با این پلفترم نیز بسیار راحت تر از چیزیست که فکرش را می کنید.
              </motion.p>
            </div>
            <motion.img
              src={linkedin}
              alt="linkedin"
              className="w-80 h-60"
              whileInView={{ opacity: [0, 1, 0, 1, 0, 1] }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="flex flex-row">
            <motion.img
              src={twitter}
              alt="twitter"
              className="w-80"
              whileInView={{ opacity: [0, 1], scale: [0, 1], rotate: [270, 0] }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            />
            <motion.div whileInView={{ opacity: [0, 1], x: [-1000, 0] }} transition={{ duration: 1 }} viewport={{ once: true }}>
              <h6 className="text-green-1c">توییتر چیست ؟</h6>
              <p>
                توییتر یک سرویس میکروبلاگینگ است. یعنی در شبکه اجتماعی توییتر، وبلاگ نویسی در 280 کارکتر یا حرف فراهم شده است. این
                یعنی می توان خبر، دیدگاه یا جملات خود را با جملات کوتاه به مخاطبان منتقل کرد.
              </p>
              <p>
                توییتر با بیش از 1/3 میلیارد حساب کاربری، ماهانه 330 میلیون کاربر فعال و 145 میلیون کاربر روزانه، یک شبکه اجتماعی
                مهم برای افزایش فروش کسب کارها و افراد محسوب می شود.
              </p>
              <p>
                داشتن بازدید ویدیو، لایک و کامنت بالا و همچنین فالوور های معتبر، از جمله مواردی است که در الگوریتم توئیتر
                تاثیرگذار بوده و نهال آی تی نیز این خدمت را در اختیار شما قرار می دهد.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-row">
            <motion.div whileInView={{ opacity: [0, 1], x: [1000, 0] }} transition={{ duration: 1 }} viewport={{ once: true }}>
              <h6 className="text-green-1c">فیسبوک چیست ؟</h6>
              <p>
                یس بوک (facebook) اگر چه در میان شبکه های اجتماعی قدیمی ترین نیست، اما بی شک مطرح ترین است. در نیمه سال 2018 تعداد
                کاربران فعال فیس بوک از 1/7 میلیارد نفر گذشت و در فصل سوم سال 2018، تعداد کاربران فعال ماهانه فیسبوک، 2/27 میلیارد
                نفر اعلام شد.
              </p>
              <p>
                فعالیت در فیسبوک از سال های دور بین کاربران ایرانی رواج داشته و از این شبکه اجتماعی برای تبادل اطلاعات، اشتراک
                گذاری عکس و ویدیو و مواردی از این دست استفاده می شود.
              </p>
              <p>
                داشتن بازدید و لایک بالا در فیسبوک، می تواند برای افرادی که در این شبکه اجتماعی فعال هستند، جزو مواردی باشد که
                اعتبار پیج را افزایش می دهد. همچنین به دلیل اهمیت بالای فیسبوک برای گوگل و سایر شبکه های اجتماعی، داشتن سیگنال
                بالا از این شبکه اجتماعی می تواند برای سئوی سایت نیز موثر باشد.
              </p>
            </motion.div>
            <motion.img
              src={faceBook}
              alt="faceBook"
              className="w-80"
              whileInView={{ opacity: [0, 1], x: [-700, 0] }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="flex flex-row">
            <div>
              <h6 className="text-green-1c">آپارات چیست ؟</h6>
              <motion.p whileInView={{ opacity: [0, 1, 0, 1, 0, 1] }} transition={{ duration: 2 }} viewport={{ once: true }}>
                امروزه با گسترش دنیای وب، سایت هایی مانند وب سایت آپارات به عنوان معتبرترین و بزرگترین سایت ایران که بهترین رتبه
                الکسا را در بین سایت های ایرانی دارد، بستری مناسب را با رابط کاربری جذاب در اختیار همه افراد قرار داده تا به راحتی
                بتوانند ویدیوی خود را آپلود کرده و کسب و کار خود را تبلیغ کنند.
              </motion.p>
              <motion.p whileInView={{ opacity: [0, 1, 0, 1, 0, 1] }} transition={{ duration: 2 }} viewport={{ once: true }}>
                هر چه ویدیوهای یک کاربر از بازدید بالاتری برخوردار باشد، اعتبار بیشتری نزد کاربران و بازدیدکنندگان یافته و تاثیر
                بیشتری در ذهن آنان می گذارد.
              </motion.p>
              <motion.p whileInView={{ opacity: [0, 1, 0, 1, 0, 1] }} transition={{ duration: 2 }} viewport={{ once: true }}>
                ضمنا به دلیل اینکه سایت آپارات از سئو و ارزش دامنه بالایی برخوردار است، امکان بهبود جایگاه ویدیوی شما در نتایج
                گوگل نیز وجود دارد.
              </motion.p>
            </div>
            <motion.img
              src={aparat}
              alt="aparat"
              className="w-80"
              whileInView={{ opacity: [0, 1], y: [300, 0] }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="flex flex-row items-center">
            <motion.img
              src={youtube}
              alt="youtube"
              className="w-80 h-48"
              whileInView={{ opacity: [0, 1], x: [700, 0] }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            />
            <div>
              <h6 className="text-green-1c">یوتیوب چیست ؟</h6>
              <p>
                یوتیوب به عنوان یکی از زیرمجموعه های بزرگ کمپانی گوگل، معتبرترین سایت جهان در زمینه اشتراک ویدیو محسوب می شود و
                بسیاری از کاربران اینترنت از سراسر جهان، ویدیوهای خود را در آن به اشتراک گذاشته و از آن کسب درآمد می کنند. یکی از
                شروط لازم برای کسب درآمد از یوتیوب این است که ویدیوهای کانال شما حداقل 4 هزار ساعت بازدید داشته باشند.
              </p>
              <p>
                مجموعه کلیک اول، امکان افزایش بازدید یوتیوب را به صورت کاملا اختصاصی فراهم آورده تا کاربران بتوانند همانند آپارات،
                بازدید ویدیوی خود را در یوتیوب نیز افزایش دهند و ضمن کسب اعتبار بیشتر نزد کاربران، جایگاه بهتری را در گوگل و
                یوتیوب به دست آورند. نکته مهمی که باید بدان توجه کنید این است که مدت زمان بازدید ویدیو یکی از عوامل موثر در نحوه
                نمایش آمار در یوتیوب می باشد.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="text-center text-green-137">خدمات شبکه های اجتماعی</h6>
            <div className="flex flex-row flex-wrap gap-5 socalMedia-services justify-between">
              <motion.div
                className="flex flex-col gap-3 items-center"
                whileInView={{ x: [1000, 0] }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <img src={instagram} alt="instagram" className="w-20" />
                <span>خدمات اینستاگرام</span>
                <p className="text-center">
                  اینستاگرام برای ایجاد یک کسب و کار موفق ، محل بسیار مناسبی است. ما در تیم نهال آی تی، تمامی خدمات مربوط به
                  اینستاگرام را اعم از افزایش لایک و فالوور و بازدید پست ها را انجام میدهیم تا کسب و کار شما رونق پیدا کند.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col gap-3 items-center"
                whileInView={{ x: [1000, 0] }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <img src={TelegramIcon} alt="Telegram" className="w-36" />
                <span>خدمات تلگرام</span>
                <p>
                  شکی نیست که تلگرام یکی از محبوب ترین اپلیکیشن ها می باشد. تلگرام ویژگی‌ های متعددی دارد که آن را از سایر
                  اپلیکیشن‌ های پیام رسان متمایز می‌ کند. ما در این بستر به شما کمک میکنیم تا بتوانید کسب و کار خود را رونق دهید.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col gap-3 items-center"
                whileInView={{ x: [1000, 0] }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <img src={LinkedinIcon} alt="linkedin" className="w-20" />
                <span>خدمات لینکدین</span>
                <p>
                  لینکدین در واقع یک شبکه اجتماعی است که اساسا برای بهبود کسب و کارهای مختلف طراحی شده است. ما در نهال آی تی به
                  شما کمک میکنیم تا با افراد دیگری که در حوزه کاری تان فعالیت می کنند، آشنا شوید.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col gap-3 items-center"
                whileInView={{ x: [1000, 0] }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
              >
                <img src={TwitterIcon} alt="twitter" className="w-20" />
                <span>خدمات توییتر</span>
                <p>
                  داشتن بازدید ویدیو، لایک و کامنت بالا و همچنین فالوور های معتبر، از جمله مواردی است که در الگوریتم توئیتر
                  تاثیرگذار بوده و نهال آی تی نیز این خدمت را در اختیار شما قرار می دهد.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col gap-3 items-center"
                whileInView={{ x: [1000, 0] }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
              >
                <img src={FaceBookLogo} alt="faceBook" className="w-20" />
                <span>خدمات فیسبوک</span>
                <p>
                  داشتن بازدید و لایک بالا در فیسبوک، می تواند برای افرادی که در این شبکه اجتماعی فعال هستند، جزو مواردی باشد که
                  اعتبار پیج را افزایش می دهد که این امر، توسط تیم نهال آی تی ، برایتان فراهم شده است
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col gap-3 items-center"
                whileInView={{ x: [1000, 0] }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
              >
                <img src={aparat} alt="aparat" className="w-20" />
                <span>خدمات آپارات</span>
                <p>
                  هر چه ویدیوهای یک کاربر از بازدید بالاتری برخوردار باشد، اعتبار بیشتری نزد کاربران و بازدیدکنندگان یافته و تاثیر
                  بیشتری در ذهن آنان می گذارد که این امر، توسط تیم نهال آی تی ، برایتان فراهم شده است.
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="flex flex-col items-center"
            whileInView={{ x: [1000, 0] }}
            transition={{ duration: 2, delay: 2 }}
            viewport={{ once: true }}
          >
            <img src={youtube} alt="youtube" className="w-52" />
            <div className="flex flex-col items-center gap-3">
              <b>خدمات یوتیوب</b>
              <div>
                <p className="text-center px-3 text-gray-77 leading-8">
                  یوتیوب معتبرترین سایت جهان در زمینه اشتراک ویدیو محسوب می شود و بسیاری از کاربران اینترنت از سراسر جهان،
                  ویدیوهای خود را در آن به اشتراک گذاشته و از آن کسب درآمد می کنند. یکی از شروط لازم برای کسب درآمد از یوتیوب این
                  است که ویدیوهای کانال شما حداقل 4 هزار ساعت بازدید داشته باشند. ما در تیم نهال آی تی به شما کمک میکنیم تا به کسب
                  درامد برسید.
                </p>
              </div>
            </div>
          </motion.div>
          <div>
            <h6 className="text-gray-66 text-center">تعرفه خدمات شبکه های اجتماعی تیم نهال آی تی</h6>
            <div className="flex flex-row justify-between">
              <img src={tarrif_1} alt="tarrif" className="w-80" />
              <img src={tarrif_2} alt="tarrif" className="w-80" />
              <img src={tarrif_3} alt="tariff" className="w-80" />
            </div>
          </div>
        </div>
        <motion.div
          className="flex flex-row items-center py-5 container px-48 mx-auto bg-[#D5FFE2]"
          whileInView={{ y: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-end gap-5">
            <span className="text-xl leading-10 font-thin text-gray-66 text-center">
              جهت سفارش انواع خدمات شبکه های اجتماعی، میتوانید به صورت رایگان ، با شماره{" "}
              <b className="font-[shabnamBold]">09927674217</b> تماس بگیرید و یا از طریق لینک زیر اقدام کنید.
            </span>
            <button className="text-white hover:brightness-105 transition-all bg-[#57C053] w-11/12 py-2 rounded-md text-sm">
              سفارش پروژه شبکه های اجتماعی
            </button>
          </div>
          <img src={front_1} alt="front" className="w-80" />
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

export default SsocialMedia;
