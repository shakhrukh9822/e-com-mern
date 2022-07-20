import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MIN, MAX } from "settings/productRangeSliderPrice";

const ProductsFilterMobile = () => {
  const navigate = useNavigate();
  const [price, setPrice] = useState([0, 2000]);

  const onSubmitSearch = (e) => {
    e.preventDefault();

    if (price) {
      navigate(`/search?price=${price}`);
    } else {
      navigate(`/products`);
    }
  };

  const priceHandler = (e, newprice) => {
    setPrice(newprice);
  };

  return <div>ProductsFilterMobile</div>;
};

export default ProductsFilterMobile;
