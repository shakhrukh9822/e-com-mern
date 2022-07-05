import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClient } from "services/QueryClient";
import { HelmetProvider } from "react-helmet-async";

// components
import App from "./App";

// Global Store
import { store } from "store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClient>
        <HelmetProvider>
          <Provider store={store}>
            <ToastContainer position="bottom-center" limit={1} />
            <App />
          </Provider>
        </HelmetProvider>
      </QueryClient>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
