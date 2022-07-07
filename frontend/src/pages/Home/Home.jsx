import React from "react";

// components
import Banner from "./components/Banner";
import { Container } from "components/Container";
import { Product } from "components/Product";
import { MainTitle } from "components/Title";

const product = {
  name: "Blue Tshirt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, placeat.",
  images: [
    { url: "https://m.media-amazon.com/images/I/61HWDmRKrfL._AC_UL320_.jpg" },
  ],
  price: 4000,
  _id: "shaka9822",
  shippingCompany: "Amazon",
  productModel: "AA 200454",
  brand: "Adidas",
  discauntPrecent: 20,
  hasDiscaunt: true,
  isNew: true,
  numOfReviews: 2,
  ratings: 4.5,
};

const Home = () => {
  return (
    <>
      <Banner />

      <Container>
        <MainTitle title={"featured products"} extraClasses="mx-auto mb-5" />
        <ul
          className="mb-10"
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          <Product product={product} />
        </ul>
      </Container>
    </>
  );
};

export default Home;
