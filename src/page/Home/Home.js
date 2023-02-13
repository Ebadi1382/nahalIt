import React from "react";
import { BsWordpress } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { FaWordpressSimple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container px-52 mx-auto">
      <div className="bg-[#07B235] h-1 absolute top-0 right-0 left-0 text-center"></div>
      <div className="flex justify-between mt-3">
        <p className="font-[shabnamLight] text-zinc-400">آدرس : تهران میدان فردوسی خیابان ایرانشهر بین سمیه و طالقانی مجتمع تجاری میلاد واحد 9</p>
        <p className="font-[shabnamLight] text-zinc-400">پشتیبانی 24 ساعته : 02188867940 – 09927674217</p>
      </div>
      <div className="flex justify-center mt-10">
        <div className="border-l-2 border-dotted border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
          <BsWordpress className="text-[2.5rem] text-[#57C053]" />
          <p className="text-[#b3b3b3] font-[shabnamthin] tracking-tighter">قالب وردپرس</p>
        </div>
        <div className="border-l-2 border-dotted border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
          <AiFillHtml5 className="text-[2.5rem] text-[#57C053]" />
          <p className="text-[#b3b3b3] font-[shabnamThin] tracking-tighter">قالب html</p>
        </div>
        <div className="border-l-2 border-dotted border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
          <FaWordpressSimple className="text-[2.5rem] text-[#57C053]" />
          <p className="text-[#b3b3b3] font-[shabnamThin] tracking-tighter">پلاگین وردپرس</p>
        </div>
        <div className="px-4 py-3 flex flex-col items-center justify-center">
          <FaAndroid className="text-[2.7rem] text-[#57C053]" />
          <p className="text-[#a0a0a0] font-[shabnamThin] tracking-tighter">محصولات اپلیکیشن</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
