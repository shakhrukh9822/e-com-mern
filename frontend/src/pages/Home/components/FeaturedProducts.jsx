import { useSelector } from "react-redux";

// store
import {
  selectAllProducts,
  useGetProductsQuery,
} from "store/slices/products/products";

// components
import { Product } from "components/Product";
import { MainTitle } from "components/Title";
import { Container } from "components/Container";
import { DataError } from "components/DataError";
import { ProductCardSkeleton } from "components/Skeletons";

const FeaturedProducts = () => {
  const { isLoading, error, isError } = useGetProductsQuery();

  const products = useSelector(selectAllProducts);

  return (
    <Container>
      <MainTitle title={"featured products"} extraClasses="mx-auto mb-5" />
      <ul
        className="mb-10"
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
        }}
      >
        {isError ? (
          <DataError message={error} />
        ) : isLoading ? (
          Array(4)
            .fill(4)
            .map((_, index) => <ProductCardSkeleton key={index} />)
        ) : (
          products?.map((product, productIndex) => (
            <Product product={product} key={productIndex} />
          ))
        )}
      </ul>
    </Container>
  );
};

export default FeaturedProducts;
