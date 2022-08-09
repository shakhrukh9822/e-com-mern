import React from "react";
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "hoc";

// components
import { Layout } from "components/Layout";

// Route pages ########################
import {
  Home,
  About,
  Viewed,
  Search,
  SignUp,
  SignIn,
  Orders,
  Porfile,
  Contact,
  Compare,
  NotFound,
  Products,
  Dashboard,
  UserAccont,
  ShoppingCart,
  LikedProducts,
  UpdateProfile,
  ProductDetails,
  UpdatePassword,
} from "pages";

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
  { path: "/me/update", element: <UpdateProfile /> },
  { path: "/shopping-cart", element: <ShoppingCart /> },
  { path: "/product/:id", element: <ProductDetails /> },
  { path: "/user-account/orders", element: <Orders /> },
  { path: "/liked-products", element: <LikedProducts /> },
  { path: "/user-account/profile", element: <Porfile /> },
  { path: "/user-account/dashboard", element: <Dashboard /> },
  { path: "/user-account/update-passowrd", element: <UpdatePassword /> },

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
