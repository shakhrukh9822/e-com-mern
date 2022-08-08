import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ link, title, extraClasses }) => {
  return (
    <Link
      className={`border border-gray-300 py-1 px-6 text-[24px] w-[100%] xl:w-[200px] flex items-center justify-center rounded-md font-semibold capitalize hover:border-gray-800 transition-all hover:bg-gray-100 ${extraClasses}`}
      to={link}
    >
      {title}
    </Link>
  );
};

export default LinkButton;
