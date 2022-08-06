import React from "react";
import { PropTypes } from "prop-types";

// Error banners
import error400Banner from "assets/images/error_banners/404_error.svg";
import error500Banner from "assets/images/error_banners/500_error.svg";

const Error = ({ status }) => {
  const errorMessage =
    status >= 400 && status <= 499
      ? "Error: " + status
      : status >= 500 && status <= 599
      ? "Error: " + status
      : null;

  if (status >= 400 && status <= 499) {
    return (
      <div className="flex items-center justify-center flex-col w-[100%]">
        <img
          className="w-[300px] h-[300px]"
          width={300}
          src={error400Banner}
          alt="error 400"
        />
        <p className="text-[32px]">{errorMessage}</p>
      </div>
    );
  }

  if (status >= 500 && status <= 599) {
    return (
      <div className="flex items-center justify-center flex-col w-[100%]">
        <img
          className="w-[300px] h-[300px]"
          width={300}
          src={error500Banner}
          alt="error 500"
        />
        <p className="text-[32px]">{errorMessage}</p>
      </div>
    );
  }
};

Error.propTypes = {
  status: PropTypes.number,
};

export default Error;
