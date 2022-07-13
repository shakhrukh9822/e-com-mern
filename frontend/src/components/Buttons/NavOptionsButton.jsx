import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const NavOptionsButton = ({ children, onClick }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className="ml-3 hover:text-red-600 text-white"
      type="button"
      onClick={onClick ? () => onClick() : null}
    >
      {children}
    </motion.button>
  );
};

NavOptionsButton.propTypes = {
  children: PropTypes.object,
  onClick: PropTypes.func,
};

NavOptionsButton.defaultProps = {
  children: {},
  onClick: () => console.log("Nav Options Button"),
};

export default NavOptionsButton;
