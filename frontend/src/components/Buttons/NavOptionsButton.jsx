import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const NavOptionsButton = ({ children, onClick }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className="mx-2 hover:text-red-700"
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
