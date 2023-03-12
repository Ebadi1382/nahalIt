import React from "react";
import { Link } from "react-router-dom";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Order = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section className="bg-[#f5f5f9] mt-1">
        <div className="container px-56 mx-auto">
          <h2 className="font-[shabnamBold] text-lg pt-5 tracking-tight">سفارش طراحی</h2>
          <div>
            <h3 className="font-[shabnamBold] tracking-tighter mt-4">راهنمای سفارش :</h3>
            <div className="mt-2 flex flex-col gap-y-2 tracking-tight">
              <p>
                شما در ابتدا برای ثبت سفارش خود باید با مراجعه به بخش{" "}
                <Link to="/" className="font-[shabnamBold] hover:text-[#377AC3] underline">
                  پشتیبانی
                </Link>{" "}
                یک تیکت با موضوع سفارش طراحی بدهید .
              </p>
              <p>
                در بخش پشتیبانی با انتخاب دپارتمان <span className="font-[shabnamBold] underline">ارتباط با نهال آی تی</span> و
                انتخاب نوع تیکت <span className="font-[shabnamBold] underline">قیمت سفارش طراحی</span> سفارش خود را مطرح نمایید .
              </p>
              <p>بعد با شرح کامل سفارش طراحی برایمان به طورکامل توضیح دهید .</p>
              <p>حتی میتوانید با امکان ویس دادن در بخش پشتیبانی ، توضیحات خود را با ویس ارائه دهید .</p>
              <p>بعد از تیکت ، همکاران ما در بخش پشتیبانی بهای انجام پروژه را برای شما اعلام خواهند کرد .</p>
              <p>سپس در صورت نداشتن مشکلی اعلام کنید که پروژه اغاز شود .</p>
              <p>سپس با مراجعه به این صفحه ثبت سفارش را به صورت رسمی انجام دهید .</p>
              <p>
                لازم به ذکر است شما می توانید پرداخت بهای انجام پروژه را به صورت{" "}
                <span className="font-[shabnamBold] underline">قسطی</span> نیز پرداخت نمایید.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f9] pt-20 pb-10 relative -z-50">
        <div className="container px-48 mx-auto flex justify-between">
          <form className="flex flex-col items-start justify-center gap-y-2">
            <label htmlFor="name">نام</label>
            <input
              id="name"
              type="text"
              className="border border-solid border-[#ccc] w-[35rem] outline-none rounded-full focus:placeholder:text-white placeholder:px-1 py-3 px-2"
              placeholder="نام"
            />
            <label htmlFor="num">شماره</label>
            <input
              id="num"
              type="text"
              className="border border-solid border-[#ccc] w-[35rem] outline-none rounded-full focus:placeholder:text-white placeholder:px-1 py-3 px-2"
              placeholder="شماره"
            />
            <label htmlFor="email">ایمیل</label>
            <input
              id="email"
              type="text"
              className="border border-solid border-[#ccc] w-[35rem] outline-none rounded-full focus:placeholder:text-white placeholder:px-1 py-3 px-2"
              placeholder="ایمیل"
            />
            <label htmlFor="select">سفارش پروژه</label>
            <select
              id="select"
              className="border border-solid border-[#ccc] w-[35rem] outline-none rounded-full focus:placeholder:text-white py-3 px-2"
            >
              <option className="font-[shabnamBold]">انتخاب کنید</option>
              <option className="font-[shabnamBold]">طراحی وبسایت اختصاصی</option>
              <option className="font-[shabnamBold]">وبسایت و سعوی وبسایت</option>
              <option className="font-[shabnamBold]">کسب و کار</option>
              <option className="font-[shabnamBold]">شبکه های اجتماعی</option>
              <option className="font-[shabnamBold]">موشن گرافیک</option>
              <option className="font-[shabnamBold]">گرافیک</option>
              <option className="font-[shabnamBold]">بیزینس پلن پروپوزال</option>
              <option className="font-[shabnamBold]">طراحی اپلیکیشن موبایل</option>
              <option className="font-[shabnamBold]">تدوین فیلم</option>
              <option className="font-[shabnamBold]">تدوین صدا و صداگذاری</option>
            </select>
            <label htmlFor="area">توضیحات</label>
            <textarea
              className="border border-solid border-[#ccc] w-[35rem] outline-none rounded-3xl min-h-[50px] placeholder:px-1 focus:placeholder:text-white py-3 px-3"
              placeholder="توضیحات سفارش"
            />
            <label htmlFor="file" className="tracking-tighter">
              در صورت نیاز به آپلود فایل آپلود کنید
            </label>
            <input type="file" className="font-[shabnamBold]" />
            <button className="bg-[#57C053] hover:bg-[#5ecf5a] transition-all duration-200 text-white w-full rounded-full py-2 font-[shabnamBold]">
              ارسال
            </button>
          </form>
          <div>
            <img width="500" alt="order_Image" src="https://nahalit.com/wp-content/uploads/2022/11/WEB-corporate-design.png" />
          </div>
        </div>
      </section>
      <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Order;
