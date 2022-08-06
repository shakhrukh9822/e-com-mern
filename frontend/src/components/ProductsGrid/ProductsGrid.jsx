import React from "react";
import { PropTypes } from "prop-types";

// store
import { useGetProductsQuery } from "store/slices/products_slice/products.slice";

// components
import { Product } from "components/Product";
import { ApiError } from "components/ApiError";
import { ProductCardSkeleton } from "components/Skeletons";

const ProductsGrid = ({ products }) => {
  const { isLoading, error, isError } = useGetProductsQuery();

  const transformedProducts = products.map((product) => {
    return {
      ...product,
      viewLater: false,
      isLiked: false,
      isAddedToCompare: false,
    };
  });

  return (
    <ApiError error={error} isError={isError}>
      <ul
        className="mb-10"
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
        }}
      >
        {isLoading
          ? Array(4)
              .fill(4)
              .map((_, index) => <ProductCardSkeleton key={index} />)
          : transformedProducts?.map((product, productIndex) => (
              <Product product={product} key={productIndex} />
            ))}
      </ul>
    </ApiError>
  );
};

ProductsGrid.propTypes = {
  products: PropTypes.array,
};

export default ProductsGrid;
