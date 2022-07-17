import { Container } from "components/Container";
import { PaginationComponent } from "components/PaginationComponent";
import { ProductsGrid } from "components/ProductsGrid";
import { SearchField } from "components/SearchField";
import { MainTitle } from "components/Title";
import { get } from "lodash";
import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useGetProductsQuery } from "store/slices/products/products";

import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdDoubleArrow,
} from "react-icons/md";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useGetProductsQuery(currentPage);

  const productCount = get(data, "productCount", 0);
  const resultPerPage = get(data, "resultPerPage", 0);
  const products = get(data, "products", []);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

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
      <ProductsGrid products={products} />
      {resultPerPage < productCount ? (
        <div className="pagination-row">
          <PaginationComponent
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={productCount}
            onChange={setCurrentPageNo}
            firstPageText={<MdDoubleArrow size={20} className="rotate-180" />}
            lastPageText={<MdDoubleArrow size={20} />}
            nextPageText={<MdOutlineKeyboardArrowRight size={22} />}
            prevPageText={<MdOutlineKeyboardArrowLeft size={22} />}
            itemClass={"page-item"}
            linkClass={"page-link"}
            activeClass={"page-item__active"}
            activeLinkClass={"page-link__active"}
            hideFirstLastPages
          />
        </div>
      ) : null}
    </Container>
  );
};

export default Products;
