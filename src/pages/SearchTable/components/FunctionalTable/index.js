import React, { useState } from "react";
import { Box, Checkbox, Avatar, IconButton } from "@mui/material";
import "./FunctionalTable.css";

const FunctionalTable = ({
  data,
  onRowSelect,
  onSelectAll,
  selectedRows = [],
}) => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleSelectAll = (event) => {
    if (onSelectAll) {
      onSelectAll(event.target.checked);
    }
  };

  const handleRowSelect = (rowId, event) => {
    if (onRowSelect) {
      onRowSelect(rowId, event.target.checked);
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "complete":
        return "#4AA785";
      case "approved":
        return "#FFC555";
      case "in progress":
        return "#3B82F6";
      case "pending":
        return "#6B7280";
      case "rejected":
        return "#EF4444";
      default:
        return "#6B7280";
    }
  };

  const getStatusDot = (status) => {
    const color = getStatusColor(status);
    return <Box className="statusDot" sx={{ backgroundColor: color }} />;
  };

  const isAllSelected = selectedRows.length === data.length && data.length > 0;
  const isIndeterminate =
    selectedRows.length > 0 && selectedRows.length < data.length;

  return (
    <Box className="functionalTable">
      {/* Table Header */}
      <Box className="tableHeader">
        <Box className="checkboxColumn">
          <Checkbox
            checked={isAllSelected}
            indeterminate={isIndeterminate}
            onChange={handleSelectAll}
            className="headerCheckbox"
          />
        </Box>
        <Box className="orderIdColumn">Order ID</Box>
        <Box className="userColumn">User</Box>
        <Box className="projectColumn">Project</Box>
        <Box className="addressColumn">Address</Box>
        <Box className="dateColumn">Date</Box>
        <Box className="statusColumn">Status</Box>
        <Box className="actionsColumn"></Box>
      </Box>

      {/* Table Body */}
      <Box className="tableBody">
        {data.map((row, index) => (
          <Box
            key={row.id || index}
            className={`tableRow ${
              selectedRows.includes(row.id) ? "selected" : ""
            }`}
            onMouseEnter={() => setHoveredRow(row.id)}
            onMouseLeave={() => setHoveredRow(null)}
          >
            <Box className="checkboxColumn">
              <Checkbox
                checked={selectedRows.includes(row.id)}
                onChange={(event) => handleRowSelect(row.id, event)}
                className="rowCheckbox"
              />
            </Box>

            <Box className="orderIdColumn">{row.orderId}</Box>

            <Box className="userColumn">
              <Box className="userContent">
                <Avatar
                  src={row.userAvatar}
                  className="userAvatar"
                  sx={{ width: 24, height: 24 }}
                >
                  {row.userName?.charAt(0)}
                </Avatar>
                <span className="userName">{row.userName}</span>
              </Box>
            </Box>

            <Box className="projectColumn">{row.project}</Box>

            <Box className="addressColumn">
              <Box className="addressContent">
                <span className="addressText">{row.address}</span>
                {hoveredRow === row.id && (
                  <IconButton
                    size="small"
                    className="addressAction"
                    title="Edit Address"
                  >
                    <svg
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 8.50003C8.5 8.63264 8.44732 8.75982 8.35355 8.85359C8.25979 8.94735 8.13261 9.00003 8 9.00003H4C3.86739 9.00003 3.74021 8.94735 3.64645 8.85359C3.55268 8.75982 3.5 8.63264 3.5 8.50003C3.5 8.36742 3.55268 8.24025 3.64645 8.14648C3.74021 8.05271 3.86739 8.00003 4 8.00003H8C8.13261 8.00003 8.25979 8.05271 8.35355 8.14648C8.44732 8.24025 8.5 8.36742 8.5 8.50003ZM8 6.00003H4C3.86739 6.00003 3.74021 6.05271 3.64645 6.14648C3.55268 6.24025 3.5 6.36742 3.5 6.50003C3.5 6.63264 3.55268 6.75982 3.64645 6.85358C3.74021 6.94735 3.86739 7.00003 4 7.00003H8C8.13261 7.00003 8.25979 6.94735 8.35355 6.85358C8.44732 6.75982 8.5 6.63264 8.5 6.50003C8.5 6.36742 8.44732 6.24025 8.35355 6.14648C8.25979 6.05271 8.13261 6.00003 8 6.00003ZM11.5 2.00003V12.5C11.5 12.7652 11.3946 13.0196 11.2071 13.2071C11.0196 13.3947 10.7652 13.5 10.5 13.5H1.5C1.23478 13.5 0.98043 13.3947 0.792893 13.2071C0.605357 13.0196 0.5 12.7652 0.5 12.5V2.00003C0.5 1.73482 0.605357 1.48046 0.792893 1.29292C0.98043 1.10539 1.23478 1.00003 1.5 1.00003H3.76625C4.04719 0.685484 4.39139 0.433817 4.77633 0.261505C5.16127 0.0891935 5.57826 0.00012207 6 0.00012207C6.42174 0.00012207 6.83873 0.0891935 7.22367 0.261505C7.6086 0.433817 7.95281 0.685484 8.23375 1.00003H10.5C10.7652 1.00003 11.0196 1.10539 11.2071 1.29292C11.3946 1.48046 11.5 1.73482 11.5 2.00003ZM4 3.00003H8C8 2.4696 7.78929 1.96089 7.41421 1.58582C7.03914 1.21075 6.53043 1.00003 6 1.00003C5.46957 1.00003 4.96086 1.21075 4.58579 1.58582C4.21071 1.96089 4 2.4696 4 3.00003ZM10.5 2.00003H8.82812C8.94186 2.32117 8.99999 2.65935 9 3.00003V3.50003C9 3.63264 8.94732 3.75982 8.85355 3.85358C8.75979 3.94735 8.63261 4.00003 8.5 4.00003H3.5C3.36739 4.00003 3.24021 3.94735 3.14645 3.85358C3.05268 3.75982 3 3.63264 3 3.50003V3.00003C3.00001 2.65935 3.05814 2.32117 3.17188 2.00003H1.5V12.5H10.5V2.00003Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  </IconButton>
                )}
              </Box>
            </Box>

            <Box className="dateColumn">
              <Box className="dateContent">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="dateIcon"
                >
                  <path
                    d="M11 1H9.5V0.5C9.5 0.367392 9.44732 0.240215 9.35355 0.146447C9.25979 0.0526784 9.13261 0 9 0C8.86739 0 8.74021 0.0526784 8.64645 0.146447C8.55268 0.240215 8.5 0.367392 8.5 0.5V1H3.5V0.5C3.5 0.367392 3.44732 0.240215 3.35355 0.146447C3.25979 0.0526784 3.13261 0 3 0C2.86739 0 2.74021 0.0526784 2.64645 0.146447C2.55268 0.240215 2.5 0.367392 2.5 0.5V1H1C0.734784 1 0.48043 1.10536 0.292893 1.29289C0.105357 1.48043 0 1.73478 0 2V12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8946 0.734784 13 1 13H11C11.2652 13 11.5196 12.8946 11.7071 12.7071C11.8946 12.5196 12 12.2652 12 12V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1ZM2.5 2V2.5C2.5 2.63261 2.55268 2.75979 2.64645 2.85355C2.74021 2.94732 2.86739 3 3 3C3.13261 3 3.25979 2.94732 3.35355 2.85355C3.44732 2.75979 3.5 2.63261 3.5 2.5V2H8.5V2.5C8.5 2.63261 8.55268 2.75979 8.64645 2.85355C8.74021 2.94732 8.86739 3 9 3C9.13261 3 9.25979 2.94732 9.35355 2.85355C9.44732 2.75979 9.5 2.63261 9.5 2.5V2H11V4H1V2H2.5ZM11 12H1V5H11V12Z"
                    fill="#1C1C1C"
                  />
                </svg>
                <span className="dateText">{row.date}</span>
              </Box>
            </Box>

            <Box className="statusColumn">
              <Box className="statusContent">
                {getStatusDot(row.status)}
                <span className="statusText">{row.status}</span>
              </Box>
            </Box>

            <Box className="actionsColumn">
              <IconButton size="small" className="actionsButton">
                <svg
                  width="10"
                  height="2"
                  viewBox="0 0 10 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.49691e-07C1.55228 3.2555e-07 2 0.447716 2 1C2 1.55229 1.55228 2 1 2C0.447715 2 2.41411e-08 1.55229 0 1C-2.41411e-08 0.447716 0.447715 3.73832e-07 1 3.49691e-07Z"
                    fill="#1C1C1C"
                  />
                  <path
                    d="M5 1.74845e-07C5.55228 1.50704e-07 6 0.447715 6 1C6 1.55229 5.55228 2 5 2C4.44772 2 4 1.55229 4 1C4 0.447716 4.44772 1.98987e-07 5 1.74845e-07Z"
                    fill="#1C1C1C"
                  />
                  <path
                    d="M10 1C10 0.447715 9.55229 -2.41412e-08 9 0C8.44771 2.41412e-08 8 0.447715 8 1C8 1.55228 8.44771 2 9 2C9.55229 2 10 1.55228 10 1Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FunctionalTable;
