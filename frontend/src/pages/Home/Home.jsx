import React from "react";
import { Helmet } from "react-helmet-async";

// components
import Banner from "./components/Banner";
import FeaturedProducts from "./components/FeaturedProducts";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>E-com</title>
      </Helmet>
      <Banner />
      <FeaturedProducts />
    </>
  );
};

export default Home;
