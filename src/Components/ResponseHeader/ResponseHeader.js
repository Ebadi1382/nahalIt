import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart, BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const ResponseHeader = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <Link to="/">
        <img src="https://nahalit.com/wp-content/uploads/2022/09/photo_2022-09-21_19-42-20.jpg" width={50} alt="nahal it icon" />
      </Link>
      <div className="flex items-center justify-around w-[40%]">
        <Link>
          <BsCart className="text-3xl text-[#8E8C8C]" />
        </Link>
        <Link>
          <AiOutlineHeart className="text-4xl text-[#8E8C8C] font-thin" />
        </Link>
        <Link>
          <BsSearch className="text-3xl text-[#8E8C8C]" />
        </Link>
      </div>
      <div>
        <RxHamburgerMenu className="text-3xl text-[#8E8C8C]" />
      </div>
    </div>
  );
};

export default ResponseHeader;
