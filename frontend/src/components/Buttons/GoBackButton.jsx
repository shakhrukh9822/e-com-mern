import React from "react";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

import { IoReturnUpBackSharp } from "react-icons/io5";

const GoBackButton = ({ extraClasses, GoBackButtonWrapper }) => {
  const navigate = useNavigate();
  return (
    <div className={`${GoBackButtonWrapper}`}>
      <button
        className={
          extraClasses
            ? extraClasses
            : `border py-1 px-4 rounded-md border-gray-900 hover:bg-gray-900 hover:text-white transition-all`
        }
        onClick={() => navigate(-1)}
      >
        <IoReturnUpBackSharp size={30} />
      </button>
    </div>
  );
};

GoBackButton.propTypes = {
  extraClass: PropTypes.string,
  GoBackButtonWrapper: PropTypes.string,
};

export default GoBackButton;
