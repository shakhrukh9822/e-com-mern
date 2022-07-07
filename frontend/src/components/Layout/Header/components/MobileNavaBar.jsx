import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// settings
import { mobile_nav as mobileMenus } from "settings/mobile_nav";

const MobileNavaBar = () => {
  const { pathname } = useLocation();

  const activePageIndex = mobileMenus.findIndex(
    (mobileMenu) => mobileMenu.path === pathname
  );

  return (
    <div className="md:hidden flex px-2 fixed bottom-0 bg-textColor w-[100%] left-0 py-4 justify-between z-50">
      {mobileMenus.map((mobileMenu, mobileMenuIndex) => (
        <li
          className={`align-bottom flex justify-center w-[25%] 
          ${
            activePageIndex === mobileMenuIndex
              ? "before:border-b-[3px] before:w-[15%] before:absolute before:mx-3 before:flex before:bottom-0 before:border-red-700"
              : null
          }    
          `}
          key={mobileMenu.id}
        >
          <Link
            className={`headerNavLinkFontFamily text-[22px] capitalize flex justify-center w-[100%]  ${
              activePageIndex === mobileMenuIndex
                ? "text-red-700"
                : "text-white"
            }`}
            to={mobileMenu.path}
          >
            <motion.div whileTap={{ scale: 0.85 }}>
              {activePageIndex === mobileMenuIndex
                ? mobileMenu.iconActive
                : mobileMenu.iconDefault}
            </motion.div>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default MobileNavaBar;
