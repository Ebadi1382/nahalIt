import React from "react";

const Search = () => {
  return (
    <div className="px-48 max-lg:px-14 max-sm:px-3 max-[390px]:px-1 mx-auto">
      <form className="flex flex-row border-2 border-solid border-[#07B235] py-2 px-2 rounded-full">
        <select className="appearance-none py-2 px-2 mr-5 max-[500px]:mr-0 max-[500px]:scale-90 border-l-2 border-solid border-[#07B235] outline-none">
          <option>محصولات</option>
          <option>نوشته ها</option>
          <option>محصولات و مطالب</option>
        </select>
        <input
          type="text"
          placeholder="دنبال چی میگردی؟"
          className="w-full py-1 px-4 text outline-0 placeholder:text-black max-[540px]:placeholder:text-sm max-[540px]:placeholder:tracking-tighter focus:placeholder:text-white transition-all duration-500"
        />
        <button
          type="button"
          className="flex items-center justify-center whitespace-nowrap px-20 max-lg:px-16 max-md:px-14 max-sm:px-2 py-2 bg-[#07B235] hover:bg-[#2ac954] transition-all duration-300 rounded-full text-white"
        >
          جستجو
        </button>
      </form>
    </div>
  );
};

export default Search;
