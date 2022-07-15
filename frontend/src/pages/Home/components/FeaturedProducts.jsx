import { useSelector } from "react-redux";

// store
import {
  selectAllProducts,
  useGetProductsQuery,
} from "store/slices/products/products";

// components
import { Product } from "components/Product";
import { MainTitle } from "components/Title";
import { ApiError } from "components/ApiError";
import { Container } from "components/Container";
import { ProductCardSkeleton } from "components/Skeletons";

const FeaturedProducts = () => {
  const { isLoading, error, isError } = useGetProductsQuery();

  const products = useSelector(selectAllProducts);

  const transformedProducts = products.map((product) => {
    return {
      ...product,
      viewLater: false,
      isLiked: false,
      isAddedToCompare: false,
    };
  });

  // console.log(transformedProducts);

  return (
    <Container>
      <MainTitle title={"featured products"} extraClasses="mx-auto mb-5" />

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
    </Container>
  );
};

export default FeaturedProducts;
