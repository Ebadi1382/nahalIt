import React from "react";
import "./Saplication.css";
import { motion } from "framer-motion";
// import images
import HeadImg from "../../assets/img/MobileApplication/خدمات-اپلیکیشن-موبایل-1024x576.jpg";
import img_1 from "../../assets/img/MobileApplication/5-min-1024x682.png";
import img_2 from "../../assets/img/MobileApplication/6-min-1024x759.png";
import img_3 from "../../assets/img/MobileApplication/3-min.png";
import img_4 from "../../assets/img/MobileApplication/1-400x400.png";
import img_5 from "../../assets/img/MobileApplication/2-min-400x400.png";
import img_6 from "../../assets/img/MobileApplication/4-min-300x300.png";
import img_7 from "../../assets/img/MobileApplication/android (2).png";
import img_8 from "../../assets/img/MobileApplication/apple.png";
import img_9 from "../../assets/img/MobileApplication/java.png";
import img_10 from "../../assets/img/MobileApplication/تعرفه-اپلیکیشن-موبایل-اقتصادی-min.png";
import img_11 from "../../assets/img/MobileApplication/تعرفه-اپلیکیشن-موبایل-حرفه-ای-min.png";
import img_12 from "../../assets/img/MobileApplication/تعرفه-اپلیکیشن-موبایل-ویژه-min.png";
import front_1 from "../../assets/img/frm-thbt-sfarsh-transformed-min.png";
import front_2 from "../../assets/img/SaleReadyTemplate/خدمات-کامپیوتر.png";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

function Saplication() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="MobileApplication-content flex flex-col items-center gap-10 pb-10 pt-2 bg-[#f5f5f9]">
        <div className="container px-48 mx-auto">
          <div className="flex flex-col gap-10 px-1">
            <img src={HeadImg} alt="img" />
            <div className="flex flex-row">
              <div className="text-justify">
                <motion.h1
                  className="text-green-08A"
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  اپلیکیشن یا نرم‌افزار چیست؟
                </motion.h1>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  بسیاری از برنامه‌های موجود بر روی گوشی هوشمند، که استفاده از آنها فرد را قادر به برقراری ارتباط با دیگران یا
                  انجام فعالیت‌های روزمره می‌کند، اپلیکیشن یا نرم‌افزار نامیده می‌شود.
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  به عبارت ساده، تمام برنامه‌هایی که بر روی گوشی هوشمند خود دارید نرم‌افزار به‌حساب می‌آیند؛ اما اگر بخواهیم
                  تعریفی دقیق از نرم‌افزار ارائه دهیم باید بگوییم، تمام برنامه‌های موجود در گوشی‌های هوشمند به‌جز زبان‌های
                  برنامه‌نویسی و سیستم‌عامل گوشی در دسته اپلیکیشن­های موبایل قرار می‌گیرند.
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  وب‌سایت Techopedia مرجع رسمی اصطلاحات دنیای تکنولوژی است.
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  در این وب‌سایت در تعریف اپلیکیشن آمده است: اپلیکیشن موبایل بانام مخفف app نوعی نرم‌افزار رایانه‌ای به شمار
                  می‌آید که از آن برای ارتباط نهایی کاربران استفاده شده و قابلیت اجرا بر روی سیستم‌عامل گوشی‌های هوشمند را دارد.
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  این نرم‌افزارها از قابلیت اجرای اغلب خدمات کامپیوتر مانند پخش ویدئو برخوردار هستند.
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  App ها معمولا دارای حجم کم و عملکرد محدود هستند.
                </motion.p>
              </div>
              <motion.img
                src={img_1}
                alt="application or softwar"
                className="w-1/2 h-80"
                whileInView={{ x: [-700, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
            <div>
              <motion.h2
                className="text-green-08A"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                اهمیت ساخت اپلیکیشن موبایل
              </motion.h2>
              <motion.p whileInView={{ x: [1000, 0], opacity: [0, 1] }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                امروزه هر کسب و کاری قصد دارد مخاطبان، محبوبیت برند، فروش و درآمدزایی خود را افزایش دهد. یک برنامه تلفن همراه
                توانایی انجام همه این کارها را دارد و به مشاغل کمک می کند فرصت های رشد چندگانه را پیدا کنند و درآمد خود را افزایش
                دهند.
              </motion.p>
              <motion.p whileInView={{ x: [1000, 0], opacity: [0, 1] }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                امروزه تعداد کاربران گوشی های هوشمند با جهشی فوق العاده در حال افزایش است و اعتقاد بر این است که تقریباً 80٪ از
                مردم دنیا از تلفن های همراه استفاده می کنند. مردم از دستگاه های تلفن همراه برای تأمین نیازهای روزمره خود مانند
                رزرو تاکسی، خرید آنلاین، خرید بلیط و … استفاده می کنند.
              </motion.p>
              <motion.p whileInView={{ x: [1000, 0], opacity: [0, 1] }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                بنابراین در عصر حاضر طراحی اپلیکیشن موبایل برای هر کسب و کاری ضروری است، چه یک شرکت تازه تاسیس باشد چه یک شرکت
                باسابقه. اگر هنوز قصد ندارید یک برنامه تلفن همراه برای تجارت خود بسازید پس از رقبای خود بسیار عقب هستید. برای غلبه
                بر رقابت و پیشی گرفتن از رقبای خود اکنون باید برنامه ریزی کنید. تمام کاری که شما باید انجام دهید این است که یک
                ایده ابتکاری برای ساخت اپلیکیشن موبایل خود بدست آورید و با یک توسعه دهنده اپلیکیشن تماس بگیرید.
              </motion.p>
            </div>
            <div>
              <motion.h3
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-green-08A text-center"
              >
                خدمات اپلیکیشن موبایل
              </motion.h3>
              <motion.p whileInView={{ x: [1000, 0], opacity: [0, 1] }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                این روزها کمتر کسی را می توان پیدا کرد که از گوشی هوشمند استفاده نکند. تقریبا می شود گفت گوشی های هوشمند به بخش
                غیر قابل انکار زندگی هر کدام از ما تبدیل شده است. چنانچه هر کدام از ما مشکلی یا سوال داشته باشیم سریعا به گوشی های
                هوشمند خود سر می زنیم .برای برقراری ارتباط، جهت بازی، برای خرید اینترنتی برای هر کاری که بشود آن را از طریق
                اینترنت انجام داد. کلمه “اپ” مخفف کلمه “اپلیکیشن” است که می تواند از طریق مرورگر وب یا آفلاین در رایانه شما و در
                تلفن هوشمند، تبلت یا سایر دستگاه های الکترونیکی از جمله تلویزیون های هوشمند و باید به فکر ساعت های هوشمند اجرا
                شود. پس اگر شما به دنبال رونق کسب و کار خود هستید، حتماً ایجاد بخشی اینترنتی برای آن نیز باشید. در میان بخش های
                مجازی مربوط به کسب و کار ها، از آن جا که گوشی های تلفن همراه گسترش بیشتری نسبت به کامپیوتر ها در میان اقشار جامعه
                داشته اند و تقریباً مردم از هر سنی یک گوشی هوشمند همراه خود دارند، ساخت و طراحی اپلیکیشن کسب و کارتان در بستر گوشی
                های تلفن همراه از تمام بخش های دیگر دارای اهمیت بیشتری است.
              </motion.p>
            </div>
            <div className="flex flex-row gap-5 items-center justify-around">
              <div>
                <motion.h4
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="text-green-08A"
                >
                  مزایای طراحی اپلیکیشن اختصاصی
                </motion.h4>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  افزایش بهره وری کسب و کار شما
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  افزایش محبوبیت برند شما
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  برقرای ارتباط نزدیک با مشتریان
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  افزایش انگیزه تعامل برای کاربران
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  کاهش هزینه و افزایش درآمد
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  افزایش ترویج وفاداری مشتری
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  پیشی گرفتن از سایر رقبا
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  افزایش حفظ و نگهداری مشتریان
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  با داشتن یک اپلیکیشن اختصاصی برای کسب و کار خود باعث رشد و پیشرفت هر چه بیشتر کسب و کارتان شوید.
                </motion.p>
              </div>
              <motion.img
                src={img_2}
                alt="benifits-exclusive-application"
                className="w-1/2"
                whileInView={{ x: [-700, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>
            <div>
              <motion.h5
                className="text-green-08A text-center"
                whileInView={{ x: [-1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                اپلیکیشن موبایل چیست؟
              </motion.h5>
              <motion.p whileInView={{ x: [1000, 0], opacity: [0, 1] }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                اپلیکیشن‌ موبایل عبارت‌است از از نرم افزارهایی که ارتباط مستقیم با پردازنده‎های سیستم عامل گوشی همراه دارند و
                مستقیماً درخواست‎های کاربران را انجام می‌دهند. اپلیکیشن ها در موبایل به صورت مستقیم دستوری را انجام می‌دهند که
                کاملاً برای کاربران ملموس و قابل رؤیت است. اگر بخواهیم در مورد اپلیکیشن موبایل مثالی را بزنیم باید بگوئیم به کلیه
                نرم افزارهای گوشی که کاربر توسط آنها به اجرای فرمانی در گوشی می پردازد اپلیکیشن نام دارد. برای مثال شما ممکن است
                برای فعالیت های مالی بسته به حساب بانکی خود ممکن است از اپلیکیشن موبایل بانک ملت، اپلیکیشن موبایل بانک پاسارگاد،
                اپلیکیشن موبایل بانک ملی، اپلیکیشن موبایل بانک سامان، اپلیکیشن موبایل بانک اقتصاد نوین، اپلیکیشن موبایل بانک سپه،
                اپلیکیشن موبایل بانک آینده و یا غیره استفاده نمائید. و یا ممکن است شما در طول روز به استفاده از ابزارهای دیگری در
                گوشی همراه خود بپردازید. برای مثال ممکن است برای دنبال کردن رویدادهای ورزشی از اپلیکیشن موبایل شبکه سه استفاده
                کنید{" "}
              </motion.p>
            </div>
            <div className="flex flex-row justify-around items-center">
              <motion.p
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-justify w-2/4"
              >
                برای دنبال کردن برنامه های تلویزیونی ممکن است از اپلیکیشن اندروید پخش زنده استفاده نمائید. همچنین برخی کاربران که
                از طریق فروشگاه اینترنتی به خرید میپردازند ممکن است از اپلیکیشن سایت های مانند اپلیکیشن موبایل دیجی کالا و یا
                اپلیکیشن موبایل بامیلو استفاده نمایند. همچنین برای مثال ممکن است اپلیکیشن بازی خاصی هم برای PC ارائه شود و هم به
                صورت اپلیکیشن موبایل ارائه گردد که در این صورت توسعه دهنده نرم افزار سعی میکند این بازی را بر پایه دستگاه های
                دیجیتال تولید نماید. برای مثال اپلیکیشن م وبایل clash of clans از مواردی است که برای انجام بازی برنامه نویسی شده
                است. یا بازی angry birds یکی دیگر از موارد اپلیکیشن موبایل می باشد. تمامی این ابزارها که در دسترس شما قرار گرفته
                اند اپلیکیشن موبایل نام دارند که ممکن است براساس نوع سیستم عامل یک گوشی همراه، برای اجرا نیازمند بستر و سیستم عامل
                مورد نیاز خود باشند مربوط به خود باشند. یک اپلیکیشن موبایل ممکن است بر پایه سیستم عامل اندروید باشد که به در این
                حالت به این نرم افزار اصطلاحاً اپلیکیشن اندروید می گویند. یا ممکن است سیستم عالی که این نرم افزار را مدیریت میکند
                برپایه IOS باشد که در این حالت به آن اپلیکیشن IOS یا اپلیکیشن اپل می گویند. برای دیگر سیستم عامل ها همانند ویندوز
                فون، بلک بری، جاوا، سیمبین و غیره نیز اپلیکیشن هایی بسته به نوع بستر سیستم عامل طراحی شده است. توسعه دهندگان
                اپلیکیشن موبایل، همانطور که سعی کرده اند براساس دستگاه های مختلف ورژن های متفاوتی از نرم افزار را ارائه دهند، برای
                سیستم عامل های مختلفی که ممکن است بر روی موبایل به کار رود نیز سعی میکنند به ساخت و طراحی ورژن های مختلفی از یک
                اپلیکیشن موبایل بپردازند.
              </motion.p>
              <motion.img
                whileInView={{ x: [-700, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                src={img_3}
                alt="img"
                className="w-80"
              />
            </div>
            <div className="flex flex-row justify-around items-center">
              <div className="w-2/4">
                <motion.h6
                  whileInView={{ x: [300, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="text-green-08A"
                >
                  اپلیکیشن اندروید
                </motion.h6>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="text-justify"
                >
                  Android به زبان ساده سیستم عاملی است برای دستگاه های موبایل و گوشی های هوشمند که توسط بیش از 30 کمپانی معروف
                  پشتیبانی می شود. اندروید اوپن سورس است و توسعه دهندگان می توانند با استفاده از Android SDK انواع اپلیکیشن
                  اندروید را برای این سیستم عامل بنویسند. در واقع اندروید بستری را فراهم می کند تا برنامه نویسان اپلیکیشن اندروید
                  بتوانند هرچه سریعتر و بهتر برنامه هایی بسازند که از تمام ویژگی های یک گوشی هوشمند استفاده کند. اندروید به معنای
                  واقعی “ باز” (Open) است، یعنی برنامه نویس می تواند از تمام قدرت یک تلفن همراه استفاده کند. اندروید امکان استفاده
                  از توابع داخلی گوشی موبایل همچون شماره گیری، فرستادن SMS یا استفاده از دوربین گوشی را به برنامه نویسان می دهد تا
                  بتوانند اپلیکیشن اندروید قدرتمند و کاربردی برای کاربران بسازند.
                </motion.p>
              </div>
              <motion.img
                whileInView={{ x: [-700, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                src={img_4}
                alt="android-application"
                className="w-96"
              />
            </div>
            <div className="flex flex-row items-center justify-around">
              <div className="w-2/4 text-justify">
                <motion.h6
                  whileInView={{ x: [300, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="text-green-08A"
                >
                  اپلیکیشن جاوا
                </motion.h6>
                <motion.b whileInView={{ x: [400, 0], opacity: [0, 1] }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                  زبان برنامه نویسی جاوا چیست؟{" "}
                </motion.b>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="mt-5"
                >
                  <b>Java</b> یکی از زبان های برنامه نویسی سطح بالا می باشد که مبتنی بر کلاس و شی گرا است و به صورت رایگان در
                  اختیار برنامه نویسان قرار می گیرد و با آن می توان برنامه های مختلفی ساخت. زبان برنامه نویسی Java بیشتر در ساخت
                  نرم افزار اندروید مورد استفاده قرار می گیرد و کاربرد دارد.
                </motion.p>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  جاوا پر کاربــرد ترین پلت فرم براي گوشي هاي بدون سیستم عامل است ما میتوانیم یک اپلیکیشن فوق العاده با استفاده از
                  جاوا برای شما بسازیم.
                </motion.p>
              </div>
              <motion.img
                src={img_5}
                alt="java-application"
                className="w-80"
                whileInView={{ x: [-700, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="flex flex-row items-center justify-around">
              <div className="w-2/4">
                <motion.h6
                  whileInView={{ x: [300, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="text-green-08A"
                >
                  اپلیکیشن ios
                </motion.h6>
                <motion.p
                  whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="text-justify"
                >
                  شرکت نهال آی تی علاوه بر طراحی اپلیکیشن های اندرویدی به ساخت وطراحی اپلیکیشن ios نیز می پردازد و طبق خواسته
                  مشتری هریک از این اپ ها را به صورت اختصاصی و حرفه تولید و طراحی کرده و در اختیار شما عزیزان قرار خواهد داد،
                  البته لازم به ذکر است که نهال آی تی با استفاده از فریم ورک های حرفه ای برنامه نویسی اپلیکیشن ها را به گونه ای
                  طراحی می کند که هم در پلتفرم اندروید و هم در ios سازگار باشد، برای اطلاعات بیشتر در زمینه طراحی اپلیکیشن موبایل
                  با مشاورین نهال آی تی در تماس باشید.
                </motion.p>
              </div>
              <motion.img
                whileInView={{ x: [-700, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                src={img_6}
                alt="ios-appliacation"
                className="w-80"
              />
            </div>
            <motion.div whileInView={{ x: [1000, 0], opacity: [0, 1] }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
              <h6 className="text-green-137 text-center">خدمات طراحی اپلیکیشن موبایل</h6>
              <div className="flex flex-row gap-5 design-mobile-application">
                <div className="flex flex-col gap-3 items-center">
                  <img src={img_7} alt="andriod" className="w-24" />
                  <b>طراحی اپلیکیشن اندروید</b>
                  <span className="text-center">
                    از مزایای داشتن اپلیکیشن اندروید، می توان به موارد زیر اشاره کرد: فروش شما را افزایش می‌دهد و مخاطبانتان را
                    زیاد میکند و همچنین میتوانید همیشه در دسترس مشتریانتان باشید
                  </span>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <img src={img_8} alt="apple" className="w-24" />
                  <b>طراحی اپلیکیشن IOS</b>
                  <span className="text-center">
                    از مزایای داشتن اپلیکیشن IOS، می توان به موارد زیر اشاره کرد: فروش شما را افزایش می‌دهد و مخاطبانتان را زیاد
                    میکند و همچنین میتوانید همیشه در دسترس مشتریانتان باشید.
                  </span>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <img src={img_9} alt="java" className="w-24" />
                  <b>طراحی اپلیکیشن جاوا </b>
                  <span className="text-center">
                    جاوا پر کاربــرد ترین پلت فرم براي گوشي هاي بدون سیستم عامل است ما در تیم نهال آی تی میتوانیم یک اپلیکیشن فوق
                    العاده با استفاده از جاوا برای شما بسازیم.
                  </span>
                </div>
              </div>
            </motion.div>
            <div className="flex flex-col gap-5">
              <h6 className="text-center text-gray-4444">تعرفه خدمات اپلیکیشن موبایل تیم نهال آی تی</h6>
              <div className="flex flex-row justify-evenly">
                <img src={img_10} alt="tarrif" className="w-80" />
                <img src={img_11} alt="tarrif" className="w-80" />
                <img src={img_12} alt="tarrif" className="w-80" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <motion.div
            className="flex flex-row items-center bg-green-d5 py-5 container px-48 mx-auto bg-[#D5FFE2]"
            whileInView={{ y: [300, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-end gap-5">
              <span className="text-xl leading-10 font-thin text-gray-66 text-center">
                جهت سفارش انواع پروژه اپلیکیشن موبایل ، میتوانید به صورت رایگان ، با شماره{" "}
                <b className="text-gray3030 font-bold">09927674217</b> تماس بگیرید و یا از طریق لینک زیر اقدام کنید.
              </span>
              <button className="text-white hover:brightness-105 transition-all bg-[#57C053] w-11/12 py-2 rounded-md text-sm">
                سفارش پروژه اپلیکیشن موبایل
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
                جهت مشاهده نمونه کارهای اپلیکیشن موبایل توسط تیم نهال آی تی از طریق لینک زیر اقدام کنید
              </span>
              <button className="text-white bg-[#57C053] w-11/12 py-2 rounded-md text-sm hover:brightness-105 transition-all">
                مشاهده نمونه کار اپلیکیشن موبایل
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

export default Saplication;
