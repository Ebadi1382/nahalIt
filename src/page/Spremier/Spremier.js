import React from "react";
import "./Spremier.css";
import { motion } from "framer-motion";
// import images
import headImg from "../../assets/img/PremierEditing/خدمات-فیلم-1024x576.jpg";
import img_1 from "../../assets/img/PremierEditing/youtube-creator-awards-1024x683.png";
import img_2 from "../../assets/img/PremierEditing/man-watching-online-video-1024x1024.png";
import img_3 from "../../assets/img/PremierEditing/movie.png";
import img_4 from "../../assets/img/PremierEditing/sharing-and-video-marketing-concept-with-loud-speaker-image.png";
import img_5 from "../../assets/img/PremierEditing/concept-of-man-got-success-and-achieving-goal.png";
import img_6 from "../../assets/img/PremierEditing/speech.png";
import img_7 from "../../assets/img/PremierEditing/facebook-advertisement-tutorial.png";
import img_8 from "../../assets/img/PremierEditing/announcement.png";
import img_9 from "../../assets/img/PremierEditing/تعرفه-تدوین-فیلم2-min-600x600.png";
import front_1 from "../../assets/img/frm-thbt-sfarsh-transformed-min.png";
import front_2 from "../../assets/img/SaleReadyTemplate/خدمات-کامپیوتر.png";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";

function Spremier() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="premierEditing-content flex flex-col items-center gap-10 pb-10 pt-2 bg-[#f5f5f9]">
        <div className="flex flex-col gap-10 container px-48 mx-auto">
          <img src={headImg} alt="header" />
          <div>
            <motion.h1
              whileInView={{ y: [-300, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-center text-green-08A"
            >
              تدوین ویدیو
            </motion.h1>
            <p>
              یکی از محتواهای اثرگذار در دنیای امروز ویدیوها هستند. وقتی قرار باشد که اثری قدرتمند به جا بگذارید، هیچ‌ چیز به
              اندازه تحرک و صدا نیست. صدا و تصویر اثری عمیق بر مخاطب می‌گذارد و می‌تواند به خوبی پیام شما را انتقال دهد.
            </p>
            <p>
              فرایند برش، حذف موارد ناخواسته، اصلاح رنگ، تقویت صدا و یکپارچه سازی برداشت‌ها را تدوین و ویرایش می‌نامند. برای این
              کار باید از برنامه‌ای مناسب استفاده کرد و قابلیت‌های برنامه را شناخت. از جمله بسترهای محبوب برای تدوین فیلم شامل
              ادوبی پریمیر، فاینال کات پرو، سونی وگاس، آی مووی و غیره هستند. نرم افزار تدوین باید نیازهای مربوط به محتوای ویدئویی
              را تأمین کرده و کار تهیه فیلم را طبق استانداردهای سفارش دهنده محتوا پیش ببرد. تدوین فیلم، تکنیک‌های متنوعی دارد که
              داشتن تخصص در این حوزه از طریق منابع مجازی مثل کتابهای الکترونیک و طی کردن دوره‌های مجازی و حضوری آموزش تدوین فیلم،
              میسر است.
            </p>
            <p>
              در تیم نهال آی تی ، جهت بهره برداری بهتر خدمات پریمیر و تدوین فیلم ، کاربران میتوانند به راحتی با متخصصان مختلف در
              حوزه تدوین فیلم و نرم افزار پریمیر به صورت مشترک، مشاوره بگیرند.
            </p>
          </div>
          <div className="flex flex-row items-center gap-5 justify-between">
            <div>
              <motion.h2
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-green-08A"
              >
                فواید تدوین ویدیوی حرفه ایی :
              </motion.h2>
              <motion.ul whileInView={{ x: [1000, 0], opacity: [0, 1] }} transition={{ duration: 2 }} viewport={{ once: true }}>
                <li>موجب افزایش نرخ کلیک می شود</li>
                <li>در طول نمایش ویدئو باعث ایجاد تمرکز بیشتر می شود</li>
                <li>با موزیک گذاری می تواند احساسات بیننده را تحت تاثیر قرار دهد</li>
                <li>نرخ تعامل را بالا ببرد</li>
                <li>اطلاعات جانبی به همراه ویدئو به بیننده بدهد</li>
                <li>تبلیغات را تدوین می توان به ویدئو اضافه کرد</li>
              </motion.ul>
            </div>
            <motion.img
              src={img_1}
              alt="youtube"
              className="w-96"
              whileInView={{ x: [-700, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
          </div>
          <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
            <p>
              تدوین ویدیو اثر مستقیم بر میزان دیدن شدن ویدئوی شما دارد. تدوین ویدیو مثل جلد کتاب است، چیزی که شما در ابتدای کار
              جذب یک کتاب می کند، صرفا نام کتاب و طراحی روی جلد کتاب است. سپس شما آن کتاب را انتخاب میکنید تا از سرفصل های آن آگاه
              شوید. همان طوری که کتاب با طرح جلد زیباتر، احتمال فروشش بالا میرود، می توانیم بگوییم ویدئوها با تدوین ویدیوی حرفه
              ایی تر امکان دیدن شدن بیشتری پیدا می کنند.
            </p>
            <p>
              سفارش دهندگان محتوای ویدئویی به دنبال تیم تولید محتوایی هستند که تدوینگر فیلم هم جزئی از این تیم است. این فرد به
              جنبه‌های مختلف ویرایش آشنایی دارد و ابزارهای مناسب را می شناسد. تنها ابزارهای رایگان محدودی با امکانات محدود برای
              تدوین فیلم در فضای آنلاین وجود دارد.
            </p>
            <p>
              اما تدوینگران و سازندگان فیلم به نرم افزارهای تخصصی و پولی در این حوزه دسترسی دارند چون این کار را به عنوان یک شغل
              انتخاب کرده و سخت افزارها و نرم افزارهای مناسب این حرفه را تهیه نموده‌اند
            </p>
          </motion.div>
          <div className="flex flex-row justify-between items-center">
            <div>
              <motion.h3
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-green-08A"
              >
                مخاطبین تدوین ویدیو :
              </motion.h3>
              <motion.ul whileInView={{ x: [1000, 0], opacity: [0, 1] }} transition={{ duration: 2 }} viewport={{ once: true }}>
                <li>تدوین ویدیو برای یوتویوبرها</li>
                <li>تدوین ویدیو برای مدرسین</li>
                <li>تدوین ویدیو برای بلاگرها</li>
                <li>تدوین ویدیو برای تولید کننده های محتوا</li>
                <li>تدوین ویدیو برای مستند سازان و فیلم سازان</li>
                <li>تدوین ویدیو برای محتوای اینستاگرام</li>
                <li>تدوین ویدیو برای تیزر سازی</li>
                <li>تدوین ویدیو برای هدف شما</li>
              </motion.ul>
            </div>
            <motion.img
              src={img_2}
              alt="youtube"
              className="w-96"
              whileInView={{ x: [-1000, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
          </div>
          <div>
            <motion.h4
              whileInView={{ x: [1000, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-green-137"
            >
              خدمات تدوین ویدیو
            </motion.h4>
            <div className="editing-video-Services flex flex-row flex-wrap justify-around">
              <motion.div
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3 items-center"
              >
                <img src={img_3} alt="" className="w-16" />
                <b>تدوین ویدیو یوتیوب</b>
                <span className="text-center">
                  امروزه یوتیوب یکی از بزرگترین بسترهای تولید محتوا در جهان است که بسیاری از کاربران همه روزه با آن مشغول به
                  فعالیت هستند. تولید محتوای باکیفیت نقش مهمی در جذب کاربران دارد. با نهال آی تی ویدیو متفاوت برای خود بسازید
                </span>
              </motion.div>
              <motion.div
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3 items-center"
              >
                <img src={img_4} alt="" className="w-24" />
                <b>تدوین تیزر تبلیغاتی</b>
                <span className="text-center">
                  تیزر های تبلیغاتی نقش بسیار مهمی در تبلیغ محصولات و خدمات دارند به طوری که یک تیزر تبلیغاتی با کیفیت میتواند
                  مشتریان بسیاری را با خود به همراه آورد
                </span>
              </motion.div>
              <motion.div
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3 items-center"
              >
                <img src={img_5} alt="" className="w-24" />
                <b>تدوین ویدیو انگیزشی</b>
                <span className="text-center">
                  یک ویدیو انگیزشی مناسب میتواند شما را در قدم برداشتن در مسیر زندگی تان هدایت کند. با نهال آی تی فیلم های انگیزشی
                  تان را متفاوت بسازید
                </span>
              </motion.div>
              <motion.div
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5, delay: 1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3 items-center"
              >
                <img src={img_6} alt="" className="w-24" />
                <b>تدوین سخنرانی</b>
                <span className="text-center">
                  تدوین ویدیوهای سخنرانی تاثیر بسیار مهمی در انتشار هر چه بیشتر آن ها در فضای مجازی دارد. تدوین انواع ویدیوهای
                  سخنرانی، مداحی و مذهبی توسط تیم حرفه ای نهال آی تی انجام میگیرد
                </span>
              </motion.div>
              <motion.div
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5, delay: 1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3 items-center"
              >
                <img src={img_7} alt="" className="w-24" />
                <b>تدیون تولید محتوا</b>
                <span className="text-center">
                  در حال حاضر تولید محتوا یکی مشاغل پر درامد در دنیای تکنولوژی است، طبیعتا با افزایش کاربران فعال در این عرصه
                  رقابت هم بیشتر میشود. با نهال آی تی همیشه خود را متفاوت نگه دارید
                </span>
              </motion.div>
              <motion.div
                whileInView={{ x: [1000, 0], opacity: [0, 1] }}
                transition={{ duration: 1.5, delay: 1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3 items-center"
              >
                <img src={img_8} alt="" className="w-24" />
                <b>تدوین برند</b>
                <span className="text-center">
                  برند یک سازمان انعکاس کننده تمامی خدمات و محصولات آن سازمان است. داشتن یک ویدیو برند معرفی میتواند نقش مهمی در
                  جذب مشتریان شما داشته باشد
                </span>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <h5 className="text-gray3030">تعرفه های تدوین فیلم تیم نهال آی تی</h5>
            <img src={img_9} alt="tarrif" className="w-3/5" />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <motion.div
            whileInView={{ y: [300, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex flex-row items-center py-5 container px-48 mx-auto bg-[#D5FFE2]"
          >
            <div className="flex flex-col items-end gap-5">
              <span className="text-xl leading-10 font-thin text-gray-66 text-center">
                جهت سفارش انواع پروژه پریمیر و تدوین فیلم ، میتوانید به صورت رایگان ، با شماره{" "}
                <b className="text-gray3030 font-bold">09927674217</b> تماس بگیرید و یا از طریق لینک زیر اقدام کنید.
              </span>
              <button className="text-white hover:brightness-105 transition-all bg-[#57C053] w-11/12 py-2 rounded-md text-sm">
                سفارش پروژه پریمیر و تدوین فیلم
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
                جهت مشاهده نمونه کارهای پریمیر و تدوین فیلم توسط تیم نهال آی تی از طریق لینک زیر اقدام کنید
              </span>
              <button className="text-white bg-[#57C053] w-11/12 py-2 rounded-md text-sm hover:brightness-105 transition-all">
                مشاهده نمونه کار پریمیر و تدوین فیلم
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

export default Spremier;
