import React from "react";
import { useState } from "react";

import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchField = () => {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const onSubmitSearch = (e) => {
    e.preventDefault();
    if (q) {
      navigate(`/search?q=${q}`);
    } else {
      navigate(`/products`);
    }
  };

  return (
    <form className="ml-auto flex w-[100%]" onSubmit={onSubmitSearch}>
      <input
        type="text"
        placeholder="Search Products..."
        value={q}
        className="bg-gray-50 text-[24px] py-1 border border-gray-300 text-gray-900 rounded-lg block p-2.5 w-[100%]"
        onChange={(e) => setQ(e.target.value)}
      />
      <button
        type="submit"
        className="border ml-2 border-gray-300 text-gray-900 rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-[46px] h-[46px] flex justify-center items-center"
        onClick={onSubmitSearch}
      >
        <BsSearch size={22} />
      </button>
    </form>
  );
};

export default SearchField;
