import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClient } from "services/QueryClient";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";

// Global Store
import { store } from "store";
import { productsApiSlice } from "store/slices/products/products";

// components
import App from "./App";

// Import Swiper styles
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "tippy.js/dist/tippy.css";

// triggering request of getting all products
store.dispatch(productsApiSlice.endpoints.getProducts.initiate());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClient>
        <HelmetProvider>
          <Provider store={store}>
            <ToastContainer position="bottom-center" limit={1} />
            <AnimatePresence>
              <App />
            </AnimatePresence>
          </Provider>
        </HelmetProvider>
      </QueryClient>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
