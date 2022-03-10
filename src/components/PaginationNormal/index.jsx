import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

PaginationNormal.propTypes = {
  itemCount: PropTypes.number,
  index: PropTypes.number,
  handleChange: PropTypes.func,
};

function PaginationNormal({ itemCount = 1, index = 1, handleChange = null }) {
  const htmlPagin = [];
  for (let number = 1; number <= itemCount; number++) {
    htmlPagin.push(
      <li
        key={number}
        className={clsx("page-item", index === number && "active")}
      >
        <div className="page-link" onClick={() => handleChange(number)}>
          {number}
        </div>
      </li>
    );
  }
  htmlPagin.push(
    <li className="page-item" key={0}>
      <div className="page-link" onClick={() => handleChange(itemCount)}>
        <i className="fa-forward fa"></i>
      </div>
    </li>
  );
  htmlPagin.unshift(
    <li className="page-item" key={-1}>
      <div className="page-link" onClick={() => handleChange(1)}>
        <i className="fa fa-backward"></i>
      </div>
    </li>
  );

  return (
    <nav className="pagination-wrap">
      <ul className="pagination pagination-normal center">{htmlPagin}</ul>
    </nav>
  );
}

export default PaginationNormal;
