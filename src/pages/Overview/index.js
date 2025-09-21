import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import StatBlocks from "./components/StatBlocks";
import BarChart from "./components/BarChart";
import Linegraph from "./components/Linegraph";
import GeographyChart from "./components/GeographyChart";
import TrendingTable from "./components/TrendingTable";
import PieChart from "./components/PieChart";
import RightBar from "./components/RightBar";
import "./Overview.css";

const Overview = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`overview-page ${isDarkMode ? "dark" : "light"}`}>
      <div className="overview-header">
        <h1 className="overview-title">eCommerce</h1>
      </div>

      <div className="overview-main">
        <div className="overview-content">
          {/* First Row: StatBlocks and BarChart */}
          <div className="overview-row first-row">
            <StatBlocks />
            <BarChart />
          </div>

          {/* Second Row: Linegraph and GeographyChart */}
          <div className="overview-row second-row">
            <Linegraph />
            <GeographyChart />
          </div>

          {/* Third Row: TrendingTable and PieChart */}
          <div className="overview-row third-row">
            <TrendingTable />
            <PieChart />
          </div>
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default Overview;
