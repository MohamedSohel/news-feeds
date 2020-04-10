import React from "react";
import PropTypes from 'prop-types';

const Loader = ({isLoading}) => (
  isLoading && (
    <div className="d-flex justify-content-center section-padding-80-0">
      <div className="spinner-grow text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
);
Loader.propTypes = {
  isLoading: PropTypes.bool,
};
Loader.defaultProps = {
  isLoading: false,
};
export default Loader;
