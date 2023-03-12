import React from "react";
import "./Sgraphic.css";
import { motion } from "framer-motion";
// import images
import HeadImg from "../../assets/img/Graphic/خدمات-گرافیک-1024x576.jpg";
import Img_1 from "../../assets/img/Graphic/1-1.jpg";
import Img_2 from "../../assets/img/Graphic/2-1024x569.png";
import Img_3 from "../../assets/img/Graphic/3-1.jpg";
import Img_4 from "../../assets/img/Graphic/3-1.png";
import Img_5 from "../../assets/img/Graphic/9999.jpg";
import Img_6 from "../../assets/img/Graphic/499739efcfb11a821e7ac49ea3680b74.png";
import Img_7 from "../../assets/img/Graphic/5-1-191x300.png";
import Img_8 from "../../assets/img/Graphic/what-is-the-catalog-98-04-16-3.jpg";
import Img_9 from "../../assets/img/Graphic/teraket-rang.png";
import Img_10 from "../../assets/img/Graphic/Top_636517983781500000.jpg";
import Img_11 from "../../assets/img/Graphic/trifold-Brochure-3.jpg";
import Img_12 from "../../assets/img/Graphic/Everything-About-Poster-Design.minimal-abstract-design-posters-covers-templates-vector-20561722_1621174761.jpg";
import Img_13 from "../../assets/img/Graphic/windows-desktop.jpg";
import Img_14 from "../../assets/img/Graphic/images-1.jpg";
import Img_15 from "../../assets/img/Graphic/Instagram-2-1-removebg-preview.png";
import Img_16 from "../../assets/img/Graphic/10-1024x558.png";
import Img_17 from "../../assets/img/Graphic/85.jpg";
import Img_18 from "../../assets/img/Graphic/dsf.png";
import Img_19 from "../../assets/img/Graphic/آموزش-ساخت-تیزر-تبلیغاتی-min.png";
import Img_20 from "../../assets/img/Graphic/pinocchio_character_Design-min.png";
import Img_21 from "../../assets/img/Graphic/1179699_138-transformed-min.png";
import Img_22 from "../../assets/img/Graphic/logo-design-service-500x500-transformed-min.png";
import Img_23 from "../../assets/img/Graphic/lrg_397400_tizbar1-min.jpg";
import Img_24 from "../../assets/img/Graphic/You-Need-Design-Coffee-Shop-Business-Card.ea5487eb-b453-4534-a070-e27b069175f0_1624390131-min.jpg";
import Img_25 from "../../assets/img/Graphic/9710403-preview-min.jpg";
import Img_26 from "../../assets/img/Graphic/brochure-template-with-hexagonal-shapes_1017-8667-transformed-min.png";
import Img_27 from "../../assets/img/Graphic/HQUoCr8dMVC4oVgcCl87wAmpOltlD2dlBxldH4aLjpeg_512X512X70-transformed-min.png";
import Img_28 from "../../assets/img/Graphic/تعرفه-طراحی-گرافیک2-min-600x841.png";
import front_1 from "../../assets/img/frm-thbt-sfarsh-transformed-min.png";
import front_2 from "../../assets/img/SaleReadyTemplate/خدمات-کامپیوتر.png";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";

function Sgraphic() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="Graphic-content flex flex-col items-center gap-10 pb-10 pt-2 bg-[#f5f5f9]">
        <div className="flex flex-col gap-14 container px-48 mx-auto">
          <img src={HeadImg} alt="header" />
          <div>
            <motion.h1
              className="text-green-1c"
              whileInView={{ y: [100, -20, 20, -10, 10, -10, 0], opacity: [0, 1] }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              طراحی بنر
            </motion.h1>
            <motion.p whileInView={{ x: [1000, -10, 0], skew: [20, 0] }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
              در تعریف بنر آمده است بنر نواری پارچه‌ای بلندی است که روی آن چیزی نوشته شده است. بنرها معمولاً به دو سر چیزی متصل
              می‌شوند و در هنگام اعتراض یا تجمع حمل می‌شوند و یا جهت اطلاع رسانی مورد استفاده‌اند. همچنین در تعریف بنر آمده است که
              تکه پارچه‌ای که حاوی شعاری است یا یک نوار پارچه‌ای بلند که روی آن تبلیغات، تبریک و غیره نوشته شده است. یک بنر
              تبلیغاتی که بنر وب نیز نامیده می‌شود
            </motion.p>
          </div>
          <div>
            <motion.h2
              whileInView={{ y: [-50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-green-1c"
            >
              طراحی هویت بصری
            </motion.h2>
            <motion.p whileInView={{ scale: [0, 1], opacity: [0, 1] }} transition={{ duration: 0.9 }} viewport={{ once: true }}>
              در دنیایی که هر لحظه شاهد تولد کسب و کاری جدید هستیم، اهمیت برندسازی و برندینگ دیگر بر هیچ‌کسی پوشیده نیست. در دنیای
              پر سرعت ارتباطات و تکنولوژی، هر کسب و کاری باید به روز باشد تا از صحنه رقابت حذف نشود. یکی از مهمترین و
              تاثیرگذارترین عوامل در برندسازی کسب و کارها، هویت بصری برند یا هویت بصری سازمانی است. پس اگر قصد دارید کسب و کار
              خودتان را راه اندازی کنید و یا آن را در ذهن مشتریان ماندگار سازید، حتما در ادامه این مطلب همراه ما باشید تا بدانید
              دقیقا هویت بصری برند چیست و چگونه می توان یک هویت بصری عالی برای کسب و کار خود خلق کرد
            </motion.p>
          </div>
          <div>
            <motion.h3
              whileInView={{ x: [-1000, 0], opacity: [0, 1] }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-green-1c"
            >
              طراحی استند
            </motion.h3>
            <motion.p whileInView={{ x: [1000, 0], opacity: [0, 1] }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
              بنرهای استند معمولا توسط ۴ عدد فلز و یک گیره در پشت به حالت ایستاده پانچ شده و روی زمین می‌ایستند. سایز این بنرها که
              به صورت معمول در ایران استفاده می‌شود اکثر ۲ در ۹۰ سانت بصورت ایستاده می‌باشد و بیشتر در مجالس، کنفرانس‌ها، ورودی
              مراکز، مراکز تبلیغاتی و… مورد استفاده قرار می‌گیرند.
            </motion.p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <div>
              <motion.h4
                className="text-green-1c"
                whileInView={{ x: [700, 0], opacity: [0, 1] }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
              >
                طراحی UI UX
              </motion.h4>
              <motion.p whileInView={{ x: [1000, 0], opacity: [0, 1] }} transition={{ duration: 0.9 }} viewport={{ once: true }}>
                طراحی گرافیک موضوع آشنا برای تمام کسانی است که به خوبی می دانند دنیای امروز اگر زیباتر از گذشته شده است این را
                مدیون افرادی است که خلاقیت و هنرهای خود را که بسیار ارزشمند است به دنیای امروز منتقل کرده اند و با استعداد و
                خلاقیتی که در این زمینه دارند باعث شده اند دنیای امروز ما به زیبایی هرچه تمام تر خود برسد و این زیبایی ها در نقش
                نقش تمام شاهکارهای هنری این افراد خلاق و مبتکر به خوبی دیده می شود.
              </motion.p>
            </div>
            <motion.img
              src={Img_1}
              alt="UI-UX"
              className="w-80"
              whileInView={{ x: [-700, 0], opacity: [0, 1] }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            />
          </div>
          <motion.div
            whileInView={{ x: [-1000, 0] }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-row gap-5 items-center"
          >
            <img src={Img_2} alt="template" className="w-80" />
            <div>
              <h5 className="text-green-1c">طراحی قالب سایت</h5>
              <p>
                طراحی گرافیک موضوع آشنا برای تمام کسانی است که به خوبی می دانند دنیای امروز اگر زیباتر از گذشته شده است این را
                مدیون افرادی است که خلاقیت و هنرهای خود را که بسیار ارزشمند است به دنیای امروز منتقل کرده اند و با استعداد و
                خلاقیتی که در این زمینه دارند باعث شده اند دنیای امروز ما به زیبایی هرچه تمام تر خود برسد و این زیبایی ها در نقش
                نقش تمام شاهکارهای هنری این افراد خلاق و مبتکر به خوبی دیده می شود.
              </p>
            </div>
          </motion.div>
          <div className="flex flex-row gap-5 items-center">
            <motion.div whileInView={{ x: [1000, 0], opacity: [0, 1] }} transition={{ duration: 0.9 }} viewport={{ once: true }}>
              <h6 className="text-green-1c">تولید تیزر</h6>
              <p>
                تبلیغات یکی از اولیه ترین و اصولی ترین عناصر شناخته شدن در میان مشتریان است در این میان داشتن تیزر تبلیغاتی به
                خصوص برای محصولات جدید مانند یک سکوی پرتاب است. امروزه با گسترش تکنولوژی، تبلیغات از شکل سنتی خود فاصله گرفته و
                تبلیغات بصری در رسانه های تصویری محبوبیت گسترده ای پیدا کرده است.
              </p>
            </motion.div>
            <motion.img
              src={Img_3}
              alt="teaser"
              className="w-80"
              whileInView={{ x: [1000, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="flex flex-row gap-5 items-center">
            <motion.img
              src={Img_4}
              alt="character"
              className="w-80"
              whileInView={{ x: [-1000, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <motion.div whileInView={{ x: [-1000, 0], opacity: [0, 1] }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
              <h6 className="text-green-1c">طراحی کاراکتر</h6>
              <p>
                طراحی کاراکتر برای ایجاد شخصیت فیلم‌ها، کتاب های کمیک، اسباب بازی‌ها، تبلیغات و کتاب ها استفاده می‌شود. برای درک
                بهتر آنچه که طراحان کاراکتر انجام می دهند.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <motion.div whileInView={{ x: [1000, 0], opacity: [0, 1] }} transition={{ duration: 1 }} viewport={{ once: true }}>
              <h6 className="text-green-1c">طراحی کاتالوگ</h6>
              <p>
                کاتالوگ یکی از ابزارهای مهم تبلیغاتی است که صاحبان کسب وکار برای معرفی محصول و برند خود نیاز دارند از آن درکنار
                سایر ابزارهای بازاریابی و تبلیغاتی استفاده کنند.
              </p>
              <p className="mt-5">
                اگر بخواهیم کاتالوگ را به صورت حرفه‌ای معرفی نمائیم باید بگوئیم که کاتالوگ شامل دفترچه‌ای از اطلاعات کامل محصولات
                و یا خدمات است که مخاطب می‌تواند هنگام مطالعه آن با نحوه استفاده از محصولات و یا خدمات آشنا شود.
              </p>
            </motion.div>
            <motion.img
              src={Img_5}
              alt="catalog-design"
              className="w-80"
              whileInView={{ x: [1000, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="flex flex-row gap-5 items-center">
            <motion.img
              src={Img_6}
              alt="logo-design"
              className="w-80"
              whileInView={{ x: [-1000, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
            <motion.div whileInView={{ x: [-1000, 0], opacity: [0, 1] }} transition={{ duration: 1 }} viewport={{ once: true }}>
              <h6 className="text-green-1c">طراحی لوگو چیست ؟</h6>
              <p>
                لوگو یا آرم به علامتی گفته می شود که می تواند تصویر یا یک نوشته و یا ترکیبی از هر دو باشد که به صورتی خاص و منحصر
                بفرد طراحی شده و به نوعی نشانگر یک کسب و کار، سازمان، فرد و غیره است و باعث می شود تا به آن هویت بخشیده شود. یکی
                از اولین گام ها برای شروع یک بیزینس یا شرکت یا هر فعالیتی طراحی لوگو برای آن است و عموما صاحبان کسب و کارهای مختلف
                در همان ابتدای استارت کار ایده های مختلفی برای لوگوی خود دارند. بهتر است پس از اینکه نوع خدمات کسب و کار مورد نظر
                مشخص شد یا کالای مورد نظر به تولید رسید و آماده برای عرضه ی عمده در بازار بود پیش از هرچیزی لوگو را طراحی کرده تا
                آماده ی استفاده باشد. چرا که مارکت محصول شما را با نشان تجاری آن یعنی لوگوی آن خواهد شناخت
              </p>
            </motion.div>
          </div>
          <motion.div
            className="flex flex-row gap-5 items-center"
            whileInView={{ x: [1000, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <h6 className="text-green-1c">طراحی لیبل چیست ؟</h6>
              <p>
                دسته بندی و برچسب گذاری هردو کاربردهای خود را در ارائه مطالب سایت یا وبلاگ دارا هستند. برای حفظ سادگی و دسترسی
                بهتر کاربران به مطالب سایت پیشنهاد میشود که تعداد دسته ها را بیشتر از پنج عدد قرار ندهید. کاربران برای دسترسی به
                موضوع مشخصی در سایت شما از دسته ها استفاده میکنند و زیاد بودن تعداد آن میتواند موجب سردردگمی آنها شود، همچنین
                محدود بودن آن به نویسنده این امکان را میدهد تا موضوع مقاله بعدی خود را براحتی انتخاب کرده و محل نمایش صحیح آن را
                تعیین کند. برچسب گذاری نیز با هدفی مشابه به کار میرود و ترکیب این دو میتواند راهنمای مناسبی برای کاربران در یافتن
                مطالب مورد نظرشان در سایت شما باشد. در این مقاله به نحوه صحیح استفاده از برچسب ها یا همان Tag خواهیم پرداخت.
              </p>
            </div>
            <img src={Img_7} alt="label-design" />
          </motion.div>
          <div className="flex flex-row gap-5 items-center">
            <motion.img
              src={Img_8}
              alt="catalog"
              className="w-80"
              whileInView={{ x: [-1000, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
            <motion.div whileInView={{ x: [-1000, 0], opacity: [0, 1] }} transition={{ duration: 1 }} viewport={{ once: true }}>
              <h6 className="text-green-1c">کاتالوگ چیست ؟</h6>
              <p>
                کاتالوگ یکی از ابزارهای مهم تبلیغاتی است که صاحبان کسب وکار برای معرفی محصول و برند خود نیاز دارند از آن درکنار
                سایر ابزارهای بازاریابی و تبلیغاتی استفاده کنند.
              </p>
              <p className="mt-5">
                اگر بخواهیم کاتالوگ را به صورت حرفه‌ای معرفی نمائیم باید بگوئیم که کاتالوگ شامل دفترچه‌ای از اطلاعات کامل محصولات
                و یا خدمات است که مخاطب می‌تواند هنگام مطالعه آن با نحوه استفاده از محصولات و یا خدمات آشنا شود.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="flex flex-row gap-5 items-center"
            whileInView={{ x: [1000, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h6 className="text-green-1c">تراکت چیست ؟</h6>
              <p>
                تراکت برگه ای تبلیغاتی است که معمولا به صورت تک برگ و در تیراژ بالا با چاپ افست چاپ می شود ، تراکت ها کاربردی
                کاملا تبلیغاتی دارند و مناسب تبلیغات داخل شهری هستند، تبلیغات از طریق تراکت یک نوع اعلان و معرفی هردو با هم به
                حساب می آید. تراکت ها در انواع تحریر ، گلاسه و کرافت، در دو نوع چاپ یکرو و دورو ، رنگی یا سیاه و سفید، پشت چسب دار
                و یا ساده می باشند.
              </p>
            </div>
            <img src={Img_9} alt="" className="w-80" />
          </motion.div>
          <motion.div
            className="flex flex-row gap-5 items-center"
            whileInView={{ x: [-1000, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <img src={Img_10} alt="visit-card" className="w-80" />
            <div>
              <h6 className="text-green-1c">کارت ویزیت چیست ؟</h6>
              <p>
                کارت ویزیت اولین گام در معرفی و بازاریابی در مشاغل مختلف است. در واقع کارت ویزیت واسط معرفی شما و از راه‌های
                برقراری ارتباط با شماست. امروزه در امر بازاریابی اولین برخورد و بازخورد، نقش بسزایی در جذب مشتری دارد لذا کارت
                ویزیت از منظر تصویری که در ذهن مشتری از کیفیت کالا و خدمات آن شرکت می‌سازد دارای اهمیت است. خلاقانه بودن کارت
                ویزیت و کیفیت چاپ آن با ماندگاری آن در ذهن مخاطب رابطه‌ی مستقیمی دارد. چندان‌که اگر کارت ویزیتی با طرحی کلیشه‌ای و
                کاغذی نامرغوب به دست شما برسد ممکن است این تصور در شما ایجاد شود که صاحب کارت، خدمات یا کالای بی‌کیفیتی به شما
                ارائه خواهد داد. چنین کارت‌هایی به‌سرعت دور انداخته و فراموش می‌شوند.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-row gap-5 items-center"
            whileInView={{ x: [1000, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h6 className="text-green-1c">بروشور چیست ؟</h6>
              <p>
                اطلاعات: معمولا از بروشور برای اطلاع دادن به مشتریان خود، در مورد شرکت استفاده می شود. این اطلاعات مربوط به محصول
                یا خدماتی است که شرکت شما ارائه می دهد.
              </p>
              <p>
                تبلیغات: یک بروشور ابزار تبلیغاتی مهمی است که به طور قابل توجهی به شما اجازه می دهد یک یا چند محصول یا خدمات را
                تبلیغ کنید.
              </p>
              <p>شناسایی: بروشور باعث می شود که شرکت شما به طور خودکار شناسایی شود و شان و اعتبار کسب و کار را نشان می‌دهد.</p>
              <p>آموزشی: بروشور، نحوه استفاده صحیح، بهره برداری و کاربرد یک موضوع خاص را به مخاطبان انتقال می دهد.</p>
              <p>
                بروشور موفق باید نتیجه تعامل این 4 هدف باشد، در غیر این صورت موثر نخواهد بود. شاید یکی از آن ها بیشتر از دیگری
                برجسته باشد، اما این نباید بر طراحی بروشور تاثیر بگذارد. به عنوان مثال، اگر شرکت شما یک محصول جدید را راه اندازی
                کرده و تصمیم دارد که یک بروشور طراحی شده به این منظور ایجاد کند، هدفی که در بروشور شما برجسته خواهد بود، تبلیغاتی
                می باشد.
              </p>
            </div>
            <img src={Img_11} alt="img" className="w-80" />
          </motion.div>
          <motion.div
            className="flex flex-row gap-5 items-center"
            whileInView={{ x: [-1000, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <img src={Img_12} alt="poster-and-banner" className="w-80" />
            <div>
              <h6 className="text-green-1c">پوستر و بنرچیست ؟</h6>
              <p>
                در مقاله آشنایی با پوستر و انواع آن گفتیم که پوستر، یک اعلان گرافیکی شامل متن، تصویر و طرح‌های مختلف است که به
                منظور انتقال اطلاعات به مخاطبان استفاده می‌شود.
              </p>
              <p>بنر هم با همین تعریف همپای پوستر توانسته است در صنعت تبلیغات نقش موثری داشته باشد.</p>
              <p className="mb-5">پوستر و بنر در ابعاد مختلف چاپ شده و به صورت عمودی بر روی دیوار یا سطوح دیگری نصب می‌شوند</p>
              <b>تفاوت پوستر و بنر</b>
              <p>اندازه</p>
              <p>معمولا طراحان گرافیک برای طراحی بنر از دو اندازه‌ی زیر استفاده می‌کنند:</p>
              <p>۷۲۸ *۹۰ که مستطیلی بزرگ و افقی است.</p>
              <p>۴۰۰ *۶۰۰ مستطیلی متوسط و عمودی است.</p>
              <p>اما اندازه استاندارد و معمول برای پوستر تبلیغاتی به شرح زیر می‌باشد:</p>
              <p>420*594 mm که برای طراحی در کاغذ های A2 مناسب است</p>
              <p>297*420 mm که برای طراحی در کاغذ های A3 مناسب است</p>
              <p>210*297 mm که برای طراحی در کاغذ های A4 مناسب است</p>
              <p>البته معمولا پوستر‌ها به حالت عمودی و بنر‌ها به حالت افقی چاپ می‌شوند.</p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-row gap-5 items-center"
            whileInView={{ x: [1000, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h6 className="text-green-1c">رابط کاربری گرافیکی چیست؟</h6>
              <p>
                رابط کاربری گرافیکی، واسط کاربری گرافیکی، Graphical User Interface یا همان GUI نوعی رابط کاربری است که شامل المان
                های گرافیکی نظیر آیکن ها، دکمه ها، منو های کرکره ای و … می باشد تا کاربر بتواند به کمک آنها با دستگاه های
                الکترونیکی تعامل برقرار کند. برای روشن تر شدن این تعریف میتوان به نسخه های مختلف ویندوز اشاره کرد. تمامی نسخه های
                ویندوز GUI محصوب میشوند. اولین رابط کاربری گرافیکی در سال 1981 توسط آلان کی و داگلاس انجلبارت و با همراهی گروهی از
                محققان در Xerox PARC توسعه پیدا کرد. پس از آن شرکت اپل با معرفی کامپیوتر لیزا در 19 ژوئن 1983 که اولین کامپیوتر
                تجاری جهان محسوب میشود از GUI استفاده کرد. تصویر زیر ویندوز 7 دسکتاپ را نشان میدهد.
              </p>
            </div>
            <img src={Img_13} alt="UI" className="w-80" />
          </motion.div>
          <motion.div
            className="flex flex-row gap-5 items-center"
            whileInView={{ x: [-1000, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <img src={Img_14} alt="template-design" className="w-80" />
            <div>
              <h6 className="text-green-1c">طراحی قالب سایت چیست ؟</h6>
              <p>
                الب وب سایت یا Theme یا Template، به زبان ساده همان ظاهر سایت است که کاربر با آن مواجه می‌شود که حکم همان
                دکوراسیون را در واقعیت ایفا می‌کند. قالب‌ها ترکیبی از المان‌های مختلف اعم از رنگ، تصاویر، نوشته‌ها، ستون‌ها و…
                هستند که وظیفه‌شان انتقال مطالب موجود در وب سایت به شکلی ساده‌ و جذاب‌تر است.
              </p>
              <p className="mt-5">
                اما چرا یک وب سایت نیازمند یک قالب است؟ مگر نمی‌شود از قالب‌های پیش‌فرض وردپرس استفاده کرد؟ پاسخ قطعا خیر است! چرا
                که قالب‌های پیش‌فرض بسیار ابتدایی هستند و امکانات زیادی در اختیار شما نمی‌گذارند.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-row gap-5 items-center"
            whileInView={{ x: [1000, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h6 className="text-green-1c">اینستاگرام چیست ؟</h6>
              <p>
                سرویسی برای اشتراک تصاویر و برقراری تعاملات است. کاربران عکس نظرات یا ویدئوهای کوتاه خودرا بارگزاری میکنند و با
                دنبال‌کنندگان خود به اشتراک می‌گذارند.{" "}
              </p>
            </div>
            <img src={Img_15} alt="instagram" className="w-80" />
          </motion.div>
          <motion.div
            className="flex flex-row gap-5 items-center"
            whileInView={{ x: [-1000, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <img src={Img_16} alt="arrival-page" className="w-80" />
            <div>
              <h6 className="text-green-1c">طراحی صفحه ورود</h6>
              <p>
                هرشخصی برای ورود و ثبت نام در سایت نیاز به صفحه ورود دارد که ما در مجموعه نهال ای تی این بخش رو درفروشگاه خود
                قراردادیم{" "}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-row gap-5 items-center"
            whileInView={{ x: [1000, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h6 className="text-green-1c">طراحی اسلایدر</h6>
              <p>
                {" "}
                ما برای هر کسب و کاری نیاز به سایت داریم و هر سایتی برای نمایش به کابر ، زیباتر شدن ، پویا شدن سایت نیاز به
                اسلایدر متحرک داریم
              </p>
            </div>
            <img src={Img_17} alt="slider-deisgn" className="w-80" />
          </motion.div>
          <motion.div
            className="flex flex-row gap-5 items-center"
            whileInView={{ x: [-1000, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <img src={Img_18} alt="banner" className="w-80" />
            <div>
              <h6 className="text-green-1c">بنر متحرک</h6>
              <p>بنر متحرک به طور کلی شامل المان های متحرک است که نمای دوچندانی به این دسته از بنرها می بخشد.</p>
              <p>
                اگر با مبحث موشن گرافی این رزوها آشنایی داشته باشید می توانید به این مهم دست بیابید که بنرهای متحرک همان موشن
                گرافی است که فاقد هرگونه صدایی هستند.این دسته از بنرها عموما مطالب بیشتر را به دنبال متحرک بودن می توانند ساپورت
                کنند.ما مدعی پایین ترین هزینه طراحی بنر در کنار بهترین کیفیت و هارمونی هستیم.
              </p>
            </div>
          </motion.div>
          <div className="flex flex-col gap-3">
            <motion.h6
              className="text-center text-green-137"
              whileInView={{ x: [1000, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              خدمات گرافیکی
            </motion.h6>
            <div className="flex flex-row flex-wrap justify-between graphic-services">
              <motion.div
                className="flex flex-col items-center gap-3 "
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <img src={Img_19} alt="img" />
                <b>تهیه تیزر تبلیغاتی</b>
                <p className="text-center">
                  با گستردگی روزافزون مخاطبان شبکه مجازی یکی از بهترین تبلیغات در این بخش ساخت ویدئوهای ویژه کوتاه، برای نمایش در
                  صفحات شبکه های اجتماعی و بستر های مختلف است.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center gap-3 "
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <img src={Img_20} alt="characterIcon" />
                <b>طراحی کاراکتر</b>
                <p className="text-center">
                  طراحی کاراکتر برای ایجاد شخصیت فیلم‌ها، کتاب های کمیک، اسباب بازی‌ها، تبلیغات و کتاب ها استفاده می‌شود. طراحی
                  انواع کاراکترها متناسب با کسب و کار شما توسط تیم نهال آی تی
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center gap-3 "
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <img src={Img_21} alt="img" />
                <b>طراحی کاتالوگ</b>
                <p className="text-center">
                  کاتالوگ یکی از ابزارهای مهم تبلیغاتی است که صاحبان کسب وکار برای معرفی محصول و برند خود نیاز دارند از آن درکنار
                  سایر ابزارهای بازاریابی و تبلیغاتی استفاده کنند. طراحی انواع کاتالوگ متناسب با کسب و کار شما
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center gap-3 "
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <img src={Img_22} alt="img" />
                <b>طراحی لوگو</b>
                <p className="text-center">
                  لوگو یا آرم به علامتی گفته می شود که می تواند تصویر یا یک نوشته و یا ترکیبی از هر دو باشد که به صورتی خاص و
                  منحصر بفرد طراحی شده و به نوعی نشانگر یک کسب و کار، سازمان، فرد و غیره است و باعث می شود تا به آن هویت بخشیده
                  شود.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center gap-3 "
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <img src={Img_23} alt="img" />
                <b>طراحی استند</b>
                <p className="text-center">
                  بنرهای استند معمولا توسط ۴ عدد فلز و یک گیره در پشت به حالت ایستاده پانچ شده و روی زمین می‌ایستند. ما در تیم
                  نهال آی تی، متناسب با سلیقه شما انواع استند ها را طراحی میکنیم.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center gap-3 "
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <img src={Img_24} alt="img" />
                <b>طراحی کارت ویزیت</b>
                <p className="text-center">
                  امروزه در امر بازاریابی اولین برخورد و بازخورد، نقش بسزایی در جذب مشتری دارد لذا کارت ویزیت از منظر تصویری که در
                  ذهن مشتری از کیفیت کالا و خدمات آن شرکت می‌سازد دارای اهمیت است.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center gap-3 "
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 2.5 }}
                viewport={{ once: true }}
              >
                <img src={Img_25} alt="img" />
                <b>طراحی تراکت</b>
                <p className="text-center">
                  تراکت برگه ای تبلیغاتی است که معمولا به صورت تک برگ و در تیراژ بالا با چاپ افست چاپ می شود ، تراکت ها کاربردی
                  کاملا تبلیغاتی دارند و مناسب تبلیغات داخل شهری هستند، تبلیغات از طریق تراکت یک نوع اعلان و معرفی هردو با هم به
                  حساب می آید.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center gap-3 "
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 2.5 }}
                viewport={{ once: true }}
              >
                <img src={Img_26} alt="img" />
                <b>طراحی بروشور</b>
                <p className="text-center">
                  معمولا از بروشور برای اطلاع دادن به مشتریان خود، در مورد شرکت استفاده می شود. این اطلاعات مربوط به محصول یا
                  خدماتی است که شرکت شما ارائه می دهد. بروشور باعث می شود که شرکت شما به طور خودکار شناسایی شود و شان و اعتبار کسب
                  و کار را نشان می‌دهد.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center gap-3 "
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 2.5 }}
                viewport={{ once: true }}
              >
                <img src={Img_27} alt="img" />
                <b>طراحی پوستر و بنر</b>
                <p className="text-center">
                  پوستر، یک اعلان گرافیکی شامل متن، تصویر و طرح‌های مختلف است که به منظور انتقال اطلاعات به مخاطبان استفاده
                  می‌شود. بنر هم با همین تعریف همپای پوستر توانسته است در صنعت تبلیغات نقش موثری داشته باشد.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h6 className="text-gray-66">تعرفه های گرافیک تیم نهال آی تی</h6>
            <img src={Img_28} alt="tarrif" />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <motion.div
            whileInView={{ y: [300, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex flex-row items-center bg-green-d5 py-5 container px-48 mx-auto bg-[#D5FFE2]"
          >
            <div className="flex flex-col items-end gap-5">
              <span className="text-xl leading-10 font-thin text-gray-66 text-center">
                جهت سفارش انواع پروژه گرافیک ، میتوانید به صورت رایگان ، با شماره{" "}
                <b className="text-gray3030 font-bold">09927674217</b> تماس بگیرید و یا از طریق لینک زیر اقدام کنید.
              </span>
              <button className="text-white hover:brightness-105 transition-all bg-[#57C053] w-11/12 py-2 rounded-md text-sm">
                سفارش پروژه گرافیک
              </button>
            </div>
            <img src={front_1} alt="front" className="w-80" />
          </motion.div>
          <motion.div
            whileInView={{ y: [200, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-row-reverse items-center justify-center bg-green-72 py-10 container px-48 mx-auto bg-[#72FD9D]"
          >
            <div className="flex flex-col items-start gap-5">
              <span className="text-xl leading-10 font-thin text-gray-66 text-center">
                جهت مشاهده نمونه کارهای گرافیک توسط تیم نهال آی تی از طریق لینک زیر اقدام کنید
              </span>
              <button className="text-white bg-[#57C053] w-11/12 py-2 rounded-md text-sm hover:brightness-105 transition-all">
                مشاهده نمونه کار گرافیک
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

export default Sgraphic;
