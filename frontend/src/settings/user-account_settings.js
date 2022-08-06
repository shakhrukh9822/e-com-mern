import { GrUnorderedList } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

export const userSettings = [
  {
    id: 1,
    title: "profile",
    icon: <CgProfile size={74} />,
    link: "/user-account/profile",
  },
  {
    id: 0,
    title: "orders",
    icon: <GrUnorderedList size={74} />,
    link: "/user-account/orders",
  },
];

export const adminSetting = {
  id: 2,
  title: "dashboard",
  icon: <MdOutlineDashboardCustomize size={74} />,
  link: "/user-account/dashboard",
};

export const userLogOutSetting = {
  id: 3,
  title: "logout",
  icon: <AiOutlineLogout size={74} />,
  link: "/",
};
