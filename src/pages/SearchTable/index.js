import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ActionRow from "./components/ActionRow";
import FunctionalTable from "./components/FunctionalTable";
import Pagination from "./components/Pagination";
import {
  fetchTableDataAsync,
  setSearchTerm,
  setCurrentPage,
  selectRow,
  selectAllRows,
} from "../../store/tableSlice";
import "./SearchTable.css";

const SearchTable = () => {
  const dispatch = useDispatch();
  const { data, totalPages, currentPage, selectedRows, searchTerm } =
    useSelector((state) => state.table);

  // Fetch data on component mount and when dependencies change
  useEffect(() => {
    dispatch(
      fetchTableDataAsync({
        page: currentPage,
        limit: 10,
        search: searchTerm,
      })
    );
  }, [dispatch, currentPage, searchTerm]);

  const handleSearch = (term) => {
    dispatch(setSearchTerm(term));
  };

  const handleAddRow = () => {
    console.log("Add row clicked");
    // Implement add row functionality
  };

  const handleFilter = () => {
    console.log("Filter clicked");
    // Implement filter functionality
  };

  const handleSort = () => {
    console.log("Sort clicked");
    // Implement sort functionality
  };

  const handleRowSelect = (rowId, isSelected) => {
    dispatch(selectRow(rowId));
  };

  const handleSelectAll = (isSelected) => {
    dispatch(selectAllRows(isSelected));
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <Box className="searchTablePage">
      {/* Page Header */}
      <Box className="pageHeader">
        <Typography
          variant="h4"
          className="pageTitle"
          sx={{
            width: "67px",
            height: "20px",
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0%",
            color: "var(--black-100, hsla(0, 0%, 11%, 1))",
            margin: 0,
            opacity: 1,
            angle: "0deg",
          }}
        >
          Order List
        </Typography>
      </Box>

      {/* Action Row */}
      <Box className="actionRowContainer">
        <ActionRow
          onSearch={handleSearch}
          onAddRow={handleAddRow}
          onFilter={handleFilter}
          onSort={handleSort}
        />
      </Box>

      {/* Functional Table */}
      <Box className="tableContainer">
        <FunctionalTable
          data={data}
          onRowSelect={handleRowSelect}
          onSelectAll={handleSelectAll}
          selectedRows={selectedRows}
        />
      </Box>

      {/* Pagination */}
      <Box className="paginationContainer">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </Box>
    </Box>
  );
};

export default SearchTable;
