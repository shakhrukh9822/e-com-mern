import React from "react";
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "hoc";

// components
import { Layout } from "components/Layout";

// Route pages ########################
import { Home } from "pages/Home";
import { About } from "pages/About";
import { Viewed } from "pages/Viewed";
import { Search } from "pages/Search";
import { SignUp } from "pages/SignUp";
import { SignIn } from "pages/SignIn";
import { Contact } from "pages/Contact";
import { Compare } from "pages/Compare";
import { Products } from "pages/Products";
import { UserAccont } from "pages/UserAccont";
import { ShoppingCart } from "pages/ShoppingCart";
import { LikedProducts } from "pages/LikedProducts";
import { ProductDetails } from "pages/ProductDetails";
import { NotFound } from "components/404";

// routes array #######################
const route = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/viewed", element: <Viewed /> },
  { path: "/search", element: <Search /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/compare", element: <Compare /> },
  { path: "/contact", element: <Contact /> },
  { path: "/products", element: <Products /> },
  { path: "/user-account", element: <UserAccont /> },
  { path: "/shopping-cart", element: <ShoppingCart /> },
  { path: "/product/:id", element: <ProductDetails /> },
  { path: "/liked-products", element: <LikedProducts /> },
];

const Router = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        {route.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Router;
