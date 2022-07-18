import React, { useState } from "react";
import { get } from "lodash";
import { Helmet } from "react-helmet-async";

// store hook
import { useGetProductsQuery } from "store/slices/products/products";

// components
import { Loader } from "components/Loader";
import { MainTitle } from "components/Title";
import { Container } from "components/Container";
import { SearchField } from "components/SearchField";
import { ProductsGrid } from "components/ProductsGrid";
import ProductsPagnation from "./components/ProductsPagnation";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetProductsQuery(currentPage);

  const productCount = get(data, "productCount", 0);
  const resultPerPage = get(data, "resultPerPage", 0);
  const products = get(data, "products", []);

  return (
    <Container>
      <Helmet>
        <title>All Products</title>
      </Helmet>
      <div className="ml-auto w-[50%] flex justify-end">
        <SearchField />
      </div>
      <div className="my-6">
        <MainTitle title={"all Products"} />
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center h-[50vh] w-full">
          <div className="w-[100px]">
            <Loader />
          </div>
        </div>
      ) : (
        <ProductsGrid products={products} />
      )}
      <ProductsPagnation
        currentPage={currentPage}
        productCount={productCount}
        resultPerPage={resultPerPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default Products;
