import React from "react";
import PropTypes from "prop-types";
import Pagination from "react-js-pagination";

const PaginationComponent = ({
  totalItemsCount,
  onChange,
  activePage,
  itemsCountPerPage,
  prevPageText,
  firstPageText,
  lastPageText,
  nextPageText,
  activeClass,
  activeLinkClass,
  itemClass,
  itemClassFirst,
  itemClassPrev,
  itemClassNext,
  itemClassLast,
  disabledClass,
  hideDisabled,
  hideNavigation,
  linkClass,
  linkClassFirst,
  linkClassPrev,
  linkClassNext,
  linkClassLast,
}) => {
  return (
    <Pagination
      totalItemsCount={totalItemsCount}
      onChange={onChange ? (e) => onChange(e) : null}
      activePage={activePage}
      itemsCountPerPage={itemsCountPerPage}
      prevPageText={prevPageText}
      firstPageText={firstPageText}
      lastPageText={lastPageText}
      nextPageText={nextPageText}
      activeClass={activeClass}
      activeLinkClass={activeLinkClass}
      itemClass={itemClass}
      itemClassFirst={itemClassFirst}
      itemClassPrev={itemClassPrev}
      itemClassNext={itemClassNext}
      itemClassLast={itemClassLast}
      disabledClass={disabledClass}
      hideDisabled={hideDisabled}
      hideNavigation={hideNavigation}
      linkClass={linkClass}
      linkClassFirst={linkClassFirst}
      linkClassPrev={linkClassPrev}
      linkClassNext={linkClassNext}
      linkClassLast={linkClassLast}
    />
  );
};

Pagination.propTypes = {
  totalItemsCount: PropTypes.number,
  onChange: PropTypes.func,
  activePage: PropTypes.number,
  itemsCountPerPage: PropTypes.number,
  prevPageText: PropTypes.string,
  firstPageText: PropTypes.string,
  lastPageText: PropTypes.string,
  nextPageText: PropTypes.string,
  activeClass: PropTypes.string,
  activeLinkClass: PropTypes.string,
  itemClass: PropTypes.string,
  itemClassFirst: PropTypes.string,
  itemClassPrev: PropTypes.string,
  itemClassNext: PropTypes.string,
  itemClassLast: PropTypes.string,
  disabledClass: PropTypes.string,
  hideDisabled: PropTypes.bool,
  hideNavigation: PropTypes.bool,
  linkClass: PropTypes.string,
  linkClassFirst: PropTypes.string,
  linkClassPrev: PropTypes.string,
  linkClassNext: PropTypes.string,
  linkClassLast: PropTypes.string,
};

export default PaginationComponent;
