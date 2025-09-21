import React, { useState } from "react";
import { useTheme } from "../../../../contexts/ThemeContext";
import "./BarChart.css";

const BarChart = () => {
  const { isDarkMode } = useTheme();
  const [hoveredBar, setHoveredBar] = useState(null);

  const chartData = [
    { label: "Jan", value: 90, height: 90 },
    { label: "Feb", value: 110, height: 110 },
    { label: "Mar", value: 95, height: 95 },
    { label: "Apr", value: 120, height: 120 },
    { label: "May", value: 80, height: 80 },
    { label: "Jun", value: 110, height: 110 },
  ];

  const yAxisLabels = ["30M", "20M", "10M", "0"];

  const handleBarHover = (index) => {
    setHoveredBar(index);
  };

  const handleBarLeave = () => {
    setHoveredBar(null);
  };

  return (
    <div className={`bar-chart ${isDarkMode ? "dark" : "light"}`}>
      <div className="chart-title">Projections vs Actuals</div>
      <div className="chart-container">
        <div className="chart">
          <div className="left-text">
            {yAxisLabels.map((label, index) => (
              <div key={index} className="y-axis-label">
                {label}
              </div>
            ))}
          </div>

          <div className="chart-frame">
            <div className="chart-lines">
              {yAxisLabels.map((_, index) => (
                <div
                  key={index}
                  className={`chart-line ${
                    index === yAxisLabels.length - 1 ? "bottom-line" : ""
                  }`}
                />
              ))}
            </div>

            <div className="bottom-labels">
              {chartData.map((item, index) => (
                <div key={index} className="x-axis-label">
                  {item.label}
                </div>
              ))}
            </div>

            <div className="vertical-bars">
              {chartData.map((item, index) => (
                <div
                  key={index}
                  className="bar-container"
                  style={{
                    paddingTop: `${140 - item.height}px`,
                  }}
                  onMouseEnter={() => handleBarHover(index)}
                  onMouseLeave={handleBarLeave}
                >
                  <div className="bar-frame">
                    <div
                      className={`bar ${hoveredBar === index ? "hovered" : ""}`}
                      style={{
                        height: `${item.height}px`,
                      }}
                    />
                    <div
                      className={`bar-fill ${
                        hoveredBar === index ? "hovered" : ""
                      }`}
                      style={{
                        height: `${item.height * 0.8}px`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
