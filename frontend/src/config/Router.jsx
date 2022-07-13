import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import { Layout } from "components/Layout";

// Route pages ########################
import { Home } from "pages/Home";
import { ProductDetails } from "pages/ProductDetails";
import { ScrollToTop } from "hoc";

// routes array #######################
const route = [
  { path: "/", element: <Home /> },
  { path: "/product/:id", element: <ProductDetails /> },
];

const Router = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        {route.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Layout>
  );
};

export default Router;
