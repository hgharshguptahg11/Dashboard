import React from "react";
import { Box, IconButton } from "@mui/material";
import "./Pagination.css";

const Pagination = ({
  currentPage = 1,
  totalPages = 5,
  onPageChange,
  onPrevious,
  onNext,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      if (onPrevious) {
        onPrevious();
      } else if (onPageChange) {
        onPageChange(currentPage - 1);
      }
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      if (onNext) {
        onNext();
      } else if (onPageChange) {
        onPageChange(currentPage + 1);
      }
    }
  };

  const handlePageClick = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    // Always show pages 1-5 as per layout
    for (let i = 1; i <= 5; i++) {
      pages.push(
        <Box
          key={i}
          className={`pageButton ${currentPage === i ? "active" : ""}`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </Box>
      );
    }

    return pages;
  };

  return (
    <Box className="pagination">
      <IconButton
        className="navButton"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        title="Previous Page"
      >
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.92541 0.558058C7.19153 0.802136 7.19153 1.19786 6.92541 1.44194L2.4375 5.55806C2.17138 5.80214 2.17138 6.19786 2.4375 6.44194L6.92541 10.5581C7.19153 10.8021 7.19153 11.1979 6.92541 11.4419C6.65928 11.686 6.22781 11.686 5.96169 11.4419L1.47378 7.32583C0.675408 6.59359 0.675406 5.40641 1.47378 4.67418L5.96169 0.558058C6.22781 0.313981 6.65928 0.313981 6.92541 0.558058Z"
            fill="#1C1C1C"
          />
        </svg>
      </IconButton>

      {renderPageNumbers()}

      <IconButton
        className="navButton"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        title="Next Page"
      >
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.07459 11.4419C0.808469 11.1979 0.808469 10.8021 1.07459 10.5581L5.5625 6.44194C5.82863 6.19786 5.82863 5.80214 5.5625 5.55806L1.07459 1.44194C0.80847 1.19786 0.80847 0.802137 1.07459 0.558058C1.34072 0.313981 1.77219 0.313981 2.03831 0.558058L6.52622 4.67418C7.32459 5.40641 7.32459 6.59359 6.52622 7.32582L2.03831 11.4419C1.77219 11.686 1.34072 11.686 1.07459 11.4419Z"
            fill="#1C1C1C"
          />
        </svg>
      </IconButton>
    </Box>
  );
};

export default Pagination;
