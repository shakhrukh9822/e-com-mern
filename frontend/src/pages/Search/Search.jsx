import React from "react";
import { get } from "lodash";

// hooks
import { useLocation } from "react-router-dom";
import { useEntityContainerAll } from "hooks/queryHooks";

// components
import { Container } from "components/Container";
import { ProductsGrid } from "components/ProductsGrid";
import { Loader } from "components/Loader";
import { NoResults } from "components/NoResults";

const Search = () => {
  const { search } = useLocation();

  // getting a new instance from  "URLSearchParams"
  const sp = new URLSearchParams(search);

  //   sorting products
  const q = sp.get("q") || "";
  // const page = sp.get("page") || 1;

  const { data, isLoading } = useEntityContainerAll({
    url: `/api/v1/search?q=${q}`,
    entity: `/api/v1/search?q=${q}`,
  });

  const products = get(data, "products", []);

  console.log(products.length);

  return (
    <Container>
      <div className="my-6">
        <span className="text-[18px]">Search Result: {products.length}</span>
      </div>

      {products?.length === 0 && isLoading === false ? <NoResults /> : null}

      {isLoading ? (
        <div className="flex items-center justify-center h-[50vh] w-full">
          <div className="w-[100px]">
            <Loader />
          </div>
        </div>
      ) : (
        <ProductsGrid products={products} />
      )}
    </Container>
  );
};

export default Search;
