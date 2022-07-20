import React from "react";
import PropTypes from "prop-types";
import { PaginationComponent } from "components/PaginationComponent";

const ProductsPagnation = ({
  resultPerPage,
  productCount,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div>
      {resultPerPage < productCount ? (
        <div className="pagination-row">
          <PaginationComponent
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={productCount}
            onChange={(e) => setCurrentPage(e)}
            itemClass={"page-item"}
            linkClass={"page-link"}
            activeClass={"page-item__active"}
            activeLinkClass={"page-link__active"}
            hideFirstLastPages
          />
        </div>
      ) : null}
    </div>
  );
};

ProductsPagnation.propTypes = {
  resultPerPage: PropTypes.number.isRequired,
  productCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default ProductsPagnation;
