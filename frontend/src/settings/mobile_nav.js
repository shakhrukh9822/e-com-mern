import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineShop,
  AiTwotoneShop,
  AiOutlineInfoCircle,
  AiFillInfoCircle,
} from "react-icons/ai";

import { RiContactsFill, RiContactsLine } from "react-icons/ri";

export const mobile_nav = [
  {
    id: 1,
    iconDefault: <AiOutlineHome size={24} />,
    iconActive: <AiFillHome size={24} />,
    path: "/",
  },
  {
    id: 2,
    iconDefault: <AiOutlineShop size={24} />,
    iconActive: <AiTwotoneShop size={24} />,
    path: "/products",
  },
  {
    id: 3,
    iconDefault: <RiContactsLine size={24} />,
    iconActive: <RiContactsFill size={24} />,
    path: "/contact",
  },
  {
    id: 4,
    iconDefault: <AiOutlineInfoCircle size={24} />,
    iconActive: <AiFillInfoCircle size={24} />,
    path: "/about",
  },
];
