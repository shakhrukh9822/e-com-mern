import React from "react";
import { Link } from "react-router-dom";

// img
import notFoundBanner404 from "assets/images/not-found-404/not-found-404.png";

const NotFound = () => {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center flex-col">
      <img className="max-w-[40%]" src={notFoundBanner404} alt="404" />
      <Link className="text-[50px] font-thin underline text-textColor" to={"/"}>
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
