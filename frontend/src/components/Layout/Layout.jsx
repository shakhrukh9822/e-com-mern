import React from "react";

// components
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-[100vh] flex flex-col ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
