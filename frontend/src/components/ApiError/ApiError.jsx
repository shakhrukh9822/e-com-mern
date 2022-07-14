import React from "react";
import PropTypes from "prop-types";
import { DataError } from "components/DataError";

const ApiError = ({ isError, error, children }) => {
  return (
    <div>
      {isError ? <DataError status={error.originalStatus} /> : children}
    </div>
  );
};

ApiError.propTypes = {
  isError: PropTypes.bool,
  error: PropTypes.object,
};

export default ApiError;
