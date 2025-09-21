import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTableData } from "../services/mockData";

// Async thunk for fetching table data
export const fetchTableDataAsync = createAsyncThunk(
  "table/fetchTableData",
  async ({ page, limit, search, sortBy, sortOrder }) => {
    const response = await fetchTableData(
      page,
      limit,
      search,
      sortBy,
      sortOrder
    );
    return response;
  }
);

const initialState = {
  data: [],
  totalCount: 0,
  totalPages: 0,
  currentPage: 1,
  selectedRows: [],
  searchTerm: "",
  sortBy: "",
  sortOrder: "asc",
  loading: false,
  error: null,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.currentPage = 1; // Reset to first page when searching
    },
    setSorting: (state, action) => {
      const { sortBy, sortOrder } = action.payload;
      state.sortBy = sortBy;
      state.sortOrder = sortOrder;
      state.currentPage = 1; // Reset to first page when sorting
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    selectRow: (state, action) => {
      const rowId = action.payload;
      if (state.selectedRows.includes(rowId)) {
        state.selectedRows = state.selectedRows.filter((id) => id !== rowId);
      } else {
        state.selectedRows.push(rowId);
      }
    },
    selectAllRows: (state, action) => {
      const isSelected = action.payload;
      if (isSelected) {
        state.selectedRows = state.data.map((row) => row.id);
      } else {
        state.selectedRows = [];
      }
    },
    clearSelectedRows: (state) => {
      state.selectedRows = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTableDataAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTableDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.totalCount = action.payload.totalCount;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        // Clear selected rows when data changes
        state.selectedRows = [];
      })
      .addCase(fetchTableDataAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setSearchTerm,
  setSorting,
  setCurrentPage,
  selectRow,
  selectAllRows,
  clearSelectedRows,
} = tableSlice.actions;

export default tableSlice.reducer;
