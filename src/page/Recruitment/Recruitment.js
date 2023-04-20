import React from "react";
import { Link } from "react-router-dom";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

const Recruitment = () => {
  return (
    <div>
      <header>
        <div className="max-lg:hidden">
          <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader />
        </div>
      </header>
      <div className="bg-[#f5f5f9] mt-2 pb-32">
        <div className="container px-48 mx-auto pt-12 flex justify-between items-start gap-x-12">
          <div className="flex flex-col">
            <h3 className="font-[shabnamBold]">شرابط استخدام :</h3>
            <p className="text-[1.1rem]">
              اولین سایت فریلنسری به نام <span className="font-[shabnamBold]">نهال آی تی</span> که به صورت پکیجی می باشد و از تمام
              متخصصان در حوزه آی تی دعوت به عمل می آورد. خواهشمند است از تمام متخصصان در حوزه آی تی اگر نمونه کار در زمینه وب
              سایت،اپلیکیشن و فتوشاپ،بنر،پوستر و موشن گرافیک… دارند می توانند پروژه های خود را به صورت رایگان در سایت نهال آی تی
              دمو نمایند.
            </p>
            <p className="text-[1.1rem]">
              به این صورت که شرح پروژه ی خود را به صورت داکیومنت،عکس و فیلم و خروجی کار خود را به صورت فیلم و کامل ارسال نمایند؛
              در صورتی که محصول شما قابل اراِئه بود در سایت نهال آی تی بارگذاری می شود و بعد از اولین سفارش محصولتان با شما در
              تماس خواهیم بود.
            </p>
            <p className="text-[1.1rem]">
              لازم به ذکر است که شما وظیفه دارید در یک سال اول محصول خود را پشتیبانی نمایید و هزینه ی پشتیبانی هم به شما داده
              خواهد شد؛ همچنین بعد از سفارش محصول شما تمامی سورس کد یا فرمت های استانداردی کار شما در اختیار ما قرار خواهند گرفت.
            </p>
            <p className="text-[1.1rem]">
              همچنین شما می توانید قیمت پیشنهادی محصول خود را و پشتیبانی تخصص خود را بصورت اشتراکی و تعداد بالا اعلام نمایید که
              بتوانیم با توضیحات و هزینه ی دلخواه شما در سایت نهال آی تی دمو نماییم.
            </p>
            <p className="text-[1.1rem]">
              لازم به ذکر است که ممکن است محصولی که شما دارید را شخص دیگری سایت دمو کرده باشد و قیمت پیشنهادی آن شخص کمتر از شما
              باشد و ما محصول آن شخص را دمو می نماییم.
            </p>
            <p className="text-[1.1rem]">
              همچنین شما می توانید بصورت (برنامه نویس، فتوشاپ و گرافیک کار یا موشن…) در سایت نهال آی تی ثبت نام نمایید و به شما
              پروژه می دهیم و به صورت پروژه ای فعالیت نمایید.
            </p>
            <p className="text-[1.1rem]">لطفا ابتدا نمونه قرارداد ها را مشاهده نموده سپس در صورت تمایل فرم را پر نمایید .</p>
            <Link className="text-[1.1rem] mt-10 font-[shabnamBold] underline hover:text-[#0056b3] transition-all duration-200">
              نمونه قرارداد برنامه نویسی
            </Link>
            <Link className="text-[1.1rem] mt-7 font-[shabnamBold] underline hover:text-[#0056b3] transition-all duration-200">
              نمونه قرارداد گرافیک و موشن گرافیک و ..
            </Link>
          </div>
          <div>
            <form className="flex flex-col w-[35rem] gap-y-2">
              <label htmlFor="NameRecruitment" className="font-[shabnamBold]">
                نام شما <span className="text-red-500">*</span>
              </label>
              <input id="NameRecruitment" className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" type="text" />
              <label htmlFor="EmailRecruitment" className="font-[shabnamBold]">
                ایمیل شما <span className="text-red-500">*</span>
              </label>
              <input id="EmailRecruitment" className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" type="email" />
              <label htmlFor="AgeRecruitment" className="font-[shabnamBold]">
                سن <span className="text-red-500">*</span>
              </label>
              <input id="AgeRecruitment" className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" type="number" />
              <label htmlFor="GenderRecruitment" className="font-[shabnamBold]">
                وضعیت تاهل <span className="text-red-500">*</span>
              </label>
              <select className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" id="GenderRecruitment">
                <option>انتخاب کنید</option>
                <option>مجرد</option>
                <option>متاهل</option>
              </select>
              <label htmlFor="AddressRecruitment" className="font-[shabnamBold]">
                آدرس <span className="text-red-500">*</span>
              </label>
              <input
                id="AddressRecruitment"
                className="py-2 border border-solid border-[#c7c7c7] outline-none px-2"
                type="text"
              />
              <label htmlFor="NumRecruitment" className="font-[shabnamBold]">
                شماره تلفن <span className="text-red-500">*</span>
              </label>
              <input id="NumRecruitment" className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" type="text" />
            </form>
            <div className="mt-7">
              <label htmlFor="checkBoxRecruitment" className="font-[shabnamBold]">
                فعالیت ها <span className="text-red-500">*</span>
              </label>
              <form>
                <div className="flex items-center justify-around font-[shabnamMedium]">
                  <div className="flex flex-col gap-y-5">
                    <div className="flex flex-col gap-y-1">
                      <div className="flex items-center gap-x-1">
                        <input type="checkbox" />
                        <label>طراح سایت بخش فرانت اند</label>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <input type="checkbox" />
                        <label>طراح قالب وردپرس</label>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <input type="checkbox" />
                        <label>طراح اپلیکیشن اندروید</label>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <input type="checkbox" />
                        <label>برنامه نویس لاراول</label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex items-center gap-x-1">
                        <input type="checkbox" />
                        <label>برنامه نویس جاوا</label>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <input type="checkbox" />
                        <label>سئو</label>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <input type="checkbox" />
                        <label>انیمیشن</label>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <input type="checkbox" />
                        <label>برنامه نویس پایتون</label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-5">
                    <div className="flex flex-col gap-y-1">
                      <div className="flex items-center gap-x-1">
                        <input type="checkbox" />
                        <label>طراح سایت بخش بک اند</label>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <input type="checkbox" />
                        <label>طراح پلاگین وردپرس</label>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <input type="checkbox" />
                        <label>طراح اپلیکیشن IOS</label>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <input type="checkbox" />
                        <label>متخصص پایگاه داده (MYSql یا Sql Server )</label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex items-center gap-x-1">
                        <input type="checkbox" />
                        <label>تولید محتوا</label>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <input type="checkbox" />
                        <label>گرافیک</label>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <input type="checkbox" />
                        <label>بازاریابی</label>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <input type="checkbox" />
                        <label>موشن گرافیک</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="mt-10">
              <form className="flex flex-col gap-y-4 font-[shabnamBold]">
                <label>
                  وضعیت تحصیل <span className="text-red-500">*</span>
                </label>
                <input type="text" className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" />
                <label>شرح توانایی شما (اختیاری)</label>
                <textarea className="min-h-[7rem] outline-none px-2"></textarea>
                <label>
                  شماره شبای کارت بانکی <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="شماره شبا بانکی خود را بدون IR وارد کنید"
                  className="py-2 border border-solid border-[#cecece] outline-none px-2"
                />
                <button
                  type="button"
                  className="bg-[#e3e3e3] self-start px-4 py-2 border border-solid border-[#cccccc] hover:bg-[#d3d3d3] transition-all duration-200"
                >
                  ثبت
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Recruitment;
