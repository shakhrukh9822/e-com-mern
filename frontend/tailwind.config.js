module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        320: "320px",
      },
      width: {
        150: "150px",
      },
      height: {
        80: "80px",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      colors: {
        textColor: "#101010",
        footerBgColor: "#101010",
        logoColor: "#303030",
        baseColor: "#000000",
        productCardShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
