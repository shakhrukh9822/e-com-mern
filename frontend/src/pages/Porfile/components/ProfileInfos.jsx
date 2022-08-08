import React from "react";
import moment from "moment";
import { get } from "lodash";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthedUser } from "store/slices/user_authentification_slice/user.authentification.slice";
import ProfileInfosItem from "./ProfileInfosItem";

// icons

import { TiUser } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import { ImCalendar } from "react-icons/im";
import { BsArrowRight, BsEye, BsHeart } from "react-icons/bs";

const ProfileInfos = () => {
  const { user } = useSelector(selectAuthedUser);

  const userName = get(user, "name");
  const userEmail = get(user, "email");
  const userJoinedDate = moment(get(user, "createdAt")).format("ll");
  const userFavouriteProducts = get(user, "userFavouriteProductsList", []);
  const userViwedProducts = get(user, "userViewedLaterList", []);

  return (
    <div>
      <ProfileInfosItem>
        <TiUser className="text-gray-800 mr-2 text-[24px] xl:text-[34px]" />
        <h1 className="capitalize text-[24px] xl:text-[28px] mt-1">
          name: {userName}
        </h1>
      </ProfileInfosItem>
      <ProfileInfosItem>
        <HiOutlineMail className="text-gray-800 mr-2 text-[24px] xl:text-[34px]" />
        <h1 className="text-[24px] xl:text-[28px] mt-1">
          <span className="capitalize">e-mail:</span> {userEmail}
        </h1>
      </ProfileInfosItem>
      <ProfileInfosItem>
        <ImCalendar className="text-gray-800 mr-2 text-[24px] xl:text-[34px]" />
        <h1 className="capitalize text-[24px] xl:text-[28px] mt-1">
          Joined at: {userJoinedDate}
        </h1>
      </ProfileInfosItem>

      <ProfileInfosItem>
        <BsHeart className="text-gray-800 mr-2 text-[24px] xl:text-[34px]" />
        <Link
          className="capitalize text-[24px] xl:text-[28px] mt-1 underline hover:text-red-500"
          to={"/liked-products"}
        >
          My Favourite Products ({userFavouriteProducts.length})
        </Link>
        <BsArrowRight className="text-gray-800 ml-2" size={24} />
      </ProfileInfosItem>
      <ProfileInfosItem>
        <BsEye className="text-gray-800 mr-2 text-[24px] xl:text-[34px]" />
        <Link
          className="capitalize text-[24px] xl:text-[28px] mt-1 underline hover:text-red-500"
          to={"/viewed"}
        >
          My Viewed Products ({userViwedProducts.length})
        </Link>
        <BsArrowRight className="text-gray-800 ml-2" size={24} />
      </ProfileInfosItem>
    </div>
  );
};

export default ProfileInfos;
