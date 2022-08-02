// components
import { Container } from "components/Container";
import { MainTitle } from "components/Title";
import { ProductsGrid } from "components/ProductsGrid";
import { selectAllProducts } from "store/slices/products_slice/products.slice";
import { useSelector } from "react-redux";

const FeaturedProducts = () => {
  const products = useSelector(selectAllProducts);

  return (
    <Container>
      <MainTitle title={"featured products"} extraClasses="mx-auto my-6" />
      <ProductsGrid products={products} />
    </Container>
  );
};

export default FeaturedProducts;
