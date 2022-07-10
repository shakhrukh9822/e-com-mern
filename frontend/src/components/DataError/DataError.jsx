import React from "react";
import { get } from "lodash";

// Error banners
import error400Banner from "assets/images/error_banners/404_error.svg";
import error500Banner from "assets/images/error_banners/500_error.svg";

const Error = ({ message }) => {
  const status = get(message, "response.status");
  const errorMessage = get(message, "message");

  if (status >= 400 && status <= 499) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          textAlign: "center",

          "& img": {
            marginBottom: 20,
            width: "300px",
            height: "300px",
          },

          "& p": {
            fontSize: 22,
            textDecoration: "underline",
            color: "#404040",
            lineHeight: 1.5,
          },
        }}
      >
        <img width={300} src={error400Banner} alt="error 400" />
        <p>{errorMessage}</p>
      </div>
    );
  }

  if (status >= 500 && status <= 599) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          textAlign: "center",

          "& img": {
            marginBottom: 20,
            width: "300px",
            height: "300px",
          },

          "& p": {
            fontSize: 22,
            textDecoration: "underline",
            color: "#404040",
            lineHeight: 1.5,
          },
        }}
      >
        <img width={300} src={error500Banner} alt="error 500" />
        <p>{errorMessage}</p>
      </div>
    );
  }
};

export default Error;
