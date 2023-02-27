import React from "react";

const Search = () => {
  return (
    <div className="container px-48 mx-auto">
      <form className="flex flex-row border-2 border-solid border-[#07B235] py-2 px-2 rounded-full">
        <select className="appearance-none py-2 px-2 mr-5 border-l-2 border-solid border-[#07B235] outline-none">
          <option>محصولات</option>
          <option>نوشته ها</option>
          <option>محصولات و مطالب</option>
        </select>
        <input
          type="text"
          placeholder="دنبال چی میگردی؟"
          className="w-full py-1 px-4 text outline-0 placeholder:text-black focus:placeholder:text-white transition-all duration-500"
        />
        <button
          type="button"
          className="flex items-center justify-center whitespace-nowrap px-20 py-2 bg-[#07B235] hover:bg-[#2ac954] transition-all duration-300 rounded-full text-white"
        >
          جستجو
        </button>
      </form>
    </div>
  );
};

export default Search;
