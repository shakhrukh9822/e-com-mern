import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import { Layout } from "components/Layout";

// Route pages ########################
import { Home } from "pages/Home";

// routes array ##########################
const route = [{ path: "/", element: <Home /> }];

const Router = () => {
  return (
    <Layout>
      <Routes>
        {route.map((route, i) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Layout>
  );
};

export default Router;
