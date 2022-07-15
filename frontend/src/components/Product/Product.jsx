import React from "react";
import { get } from "lodash";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// components
import CardBadges from "./components/CardBadges";
import CardPrices from "./components/CardPrices";
import CardProductRating from "./components/CardProductRating";
import Button from "components/Buttons/Button";
import CardHeartIcon from "./components/CardHeartIcon";
import CardSeeLaterButton from "./components/CardSeeLaterButton";
import CardProductModel from "./components/CardProductModel";
import CardProductBanner from "./components/CardProductBanner";
import CardCompareButton from "./components/CardCompareButton";

// Placeholder Img
import placeHolderProductimg from "assets/images/place-holder-imgs/placeholdere_product.png";

const Product = ({ product }) => {
  const id = get(product, "_id", 0);
  const price = get(product, "price", 0);
  const ratings = get(product, "ratings", 0);
  const brand = get(product, "brand", "Brand");
  const isNew = get(product, "isNewProduct", false);
  const numOfReviews = get(product, "numOfReviews", 0);
  const hasDiscaunt = get(product, "hasDiscaunt", false);
  const producName = get(product, "name", "Product Name");
  const discauntPrecent = get(product, "discauntPrecent", 0);
  const productModel = get(product, "productModel", "Product Model");
  const shippingCompany = get(product, "shippingCompany", "E-com Delivery");
  const productBanner = get(product, "images[0].url", placeHolderProductimg);

  const productCheckedValueBanner = productBanner
    ? productBanner
    : placeHolderProductimg;

  return (
    <div
      className="rounded-[5px] relative"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      }}
    >
      <CardBadges isNew={isNew} discauntPrecent={discauntPrecent} />
      <CardProductBanner image={productCheckedValueBanner} name={producName} />
      <div className="p-3">
        <Link
          className="product-card-text-ellips font-semibold text-[22px] text-textColor hover:text-gray-800 hover:underline h-[53px]"
          to={`product/${id}`}
        >
          {producName}
        </Link>
        <div className="flex items-center justify-between mb-1">
          <CardPrices
            hasDiscaunt={hasDiscaunt}
            price={price}
            discauntPrecent={discauntPrecent}
          />
          <div className="flex items-center">
            <CardSeeLaterButton product={product} />
            <CardHeartIcon product={product} />
            <CardCompareButton product={product} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <CardProductModel brand={brand} productModel={productModel} />
          <CardProductRating rating={ratings} numOfReviews={numOfReviews} />
        </div>
        <div className="mb-1 text-[18px]">
          <span>Shipping via:</span> {shippingCompany}
        </div>
        <Button btnTitle={"add to cart"} />
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

Product.defaultProps = {
  product: {},
};

export default Product;
