import React, { useEffect, useState } from "react";
import { get } from "lodash";

// hooks
import { useLocation } from "react-router-dom";
import { useEntityContainerAll } from "hooks/queryHooks";

// components
import { Container } from "components/Container";
import { ProductsGrid } from "components/ProductsGrid";
import { Loader } from "components/Loader";
import { NoResults } from "components/NoResults";
import { ProductsPagnation } from "components/ProductsPagnation";
import { searchQuery } from "utils/searchQuery";
import { ProductsFilterAside } from "components/ProductsFilterAside";
import { Helmet } from "react-helmet-async";

const Search = () => {
  const { search } = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  const query = searchQuery(search, currentPage);

  const { data, isLoading } = useEntityContainerAll({
    url: query,
    entity: query,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const products = get(data, "products", []);
  const filteredProductCount = get(data, "filteredProductCount", 0);
  const resultPerPage = get(data, "resultPerPage", 0);

  return (
    <Container>
      <Helmet>
        <title>Search Products</title>
      </Helmet>
      <div className=" min-h-[100vh]">
        <div className="my-6">
          <span className="text-[34px]">
            Search Result: {filteredProductCount}
          </span>
        </div>
        <div className="flex gap-6">
          <div
            className="w-[30%] xl:w-[25%] xxl:w-[20%]"
            style={{ display: "unset" }}
          >
            <ProductsFilterAside />
          </div>
          <div className="w-[70%] xl:w-[75%] xxl:w-[80%]">
            {products?.length === 0 && isLoading === false ? (
              <NoResults type={"search"} />
            ) : isLoading ? (
              <div className="flex items-center justify-center h-[50vh] w-full">
                <div className="w-[100px]">
                  <Loader />
                </div>
              </div>
            ) : (
              <div>
                <ProductsGrid products={products} />
                <ProductsPagnation
                  currentPage={currentPage}
                  productCount={filteredProductCount}
                  resultPerPage={resultPerPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Search;
