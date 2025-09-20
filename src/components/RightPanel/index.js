import React from "react";
import { Box } from "@mui/material";
import Overview from "../../pages/Overview";
import Header from "../Header";

// Import page components

const RightPanel = ({ selectedPage }) => {
  const renderPage = () => {
    switch (selectedPage) {
      case "overview":
        return <Overview />;
      default:
        return <Overview />;
    }
  };

  return (
    <Box
      sx={{
        flex: 1,
        height: "100vh",
        backgroundColor: "#fafafa",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box sx={{ flex: 1, overflow: "auto" }}>{renderPage()}</Box>
    </Box>
  );
};

export default RightPanel;
