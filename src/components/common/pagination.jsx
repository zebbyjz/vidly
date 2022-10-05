import React from "react";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = [];

  for (let index = 1; index <= pagesCount; index++) {
    pages.push(index);
  }

  return (
    <React.Fragment>
      <nav>
        <ul className="pagination">
          {pages.map((c) => (
            <li
              className={c === currentPage ? "page-item active" : "page-item"}
            >
              <a onClick={() => props.onPageChange(c)} className="page-link">
                {c}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
