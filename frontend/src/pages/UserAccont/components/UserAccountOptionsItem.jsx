import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const UserAccountOptionsItem = ({ setting, onClick }) => {
  if (setting.title === "logout") {
    return (
      <li
        onClick={onClick ? () => onClick() : null}
        className={`border border-gray-300 hover:border-gray-800 capitalize text-[30px] rounded-md transition-all cursor-pointer`}
      >
        <div className="w-[100%] h-[100%] p-5 flex items-center justify-center flex-col hover:drop-shadow-lg hover:shadow-lg transition-all">
          <div className="text-gray-800">{setting.icon}</div>
          <span>{setting.title}</span>
        </div>
      </li>
    );
  }

  return (
    <li
      className={`border border-gray-300 hover:border-gray-800 capitalize text-[30px] rounded-md transition-all`}
    >
      <Link
        className="w-[100%] h-[100%] p-5 flex items-center justify-center flex-col hover:drop-shadow-lg hover:shadow-lg transition-all"
        to={setting.link}
      >
        <div className="text-gray-800">{setting.icon}</div>
        <span>{setting.title}</span>
      </Link>
    </li>
  );
};

UserAccountOptionsItem.propTypes = {
  setting: PropTypes.object,
  onClick: PropTypes.func,
};

export default UserAccountOptionsItem;
