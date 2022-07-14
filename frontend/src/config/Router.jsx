import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import { Layout } from "components/Layout";

// Route pages ########################
import { Home } from "pages/Home";
import { ScrollToTop } from "hoc";
import { About } from "pages/About";
import { Viewed } from "pages/Viewed";
import { Contact } from "pages/Contact";
import { Products } from "pages/Products";
import { LikedProducts } from "pages/LikedProducts";
import { ProductDetails } from "pages/ProductDetails";
import { Search } from "pages/Search";
import { ShoppingCart } from "pages/ShoppingCart";
import { UserAccont } from "pages/UserAccont";

// routes array #######################
const route = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:id", element: <ProductDetails /> },
  { path: "/viewed", element: <Viewed /> },
  { path: "/liked-products", element: <LikedProducts /> },
  { path: "/search", element: <Search /> },
  { path: "/shopping-cart", element: <ShoppingCart /> },
  { path: "/user-account", element: <UserAccont /> },
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
