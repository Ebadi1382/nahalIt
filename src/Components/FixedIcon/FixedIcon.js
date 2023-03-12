import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

const FixedIcon = () => {
  return (
    <Link to="/" className="fixed z-50">
      <BiShoppingBag className="w-14 h-14 fixed bottom-10 right-10 bg-[#227e1f] hover:bg-[#2d9b29] transition-all duration-200 text-white p-2 rounded-full" />
      <span className="w-7 h-7 bg-[#035e0b] fixed z-[1000] bottom-[4.5rem] right-[5.2rem] flex items-center justify-center text-white rounded-full">
        0
      </span>
    </Link>
  );
};

export default FixedIcon;
