import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// settings
import { header_nav_menu as headerMenus } from "settings/header_nav_menu";

const NavBar = () => {
  const { pathname } = useLocation();

  const activePageIndex = headerMenus.findIndex(
    (headerMenu) => headerMenu.path === pathname
  );

  return (
    <div className="md:flex px-2 hidden items-end">
      {headerMenus.map((headerMenu, headerMenuIndex) => (
        <li className="mx-0.5" key={headerMenu.id}>
          <Link
            className={`headerNavLinkFontFamily text-[22px] capitalize hover:text-red-700 ${
              activePageIndex === headerMenuIndex
                ? "text-red-700"
                : "text-baseColor"
            }`}
            to={headerMenu.path}
          >
            <motion.div
              className="flex items-end h-[100%] p-2"
              style={{ lineHeight: 1 }}
              whileTap={{ scale: 0.85 }}
            >
              {headerMenu.title}
            </motion.div>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default NavBar;
