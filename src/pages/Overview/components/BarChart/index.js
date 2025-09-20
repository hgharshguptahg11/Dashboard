import React, { useState } from "react";
import { useTheme } from "../../../../contexts/ThemeContext";
import "./BarChart.css";

const BarChart = () => {
  const { isDarkMode } = useTheme();
  const [hoveredBar, setHoveredBar] = useState(null);

  const chartData = [
    { label: "1", value: 90, height: 90 },
    { label: "2", value: 110, height: 110 },
    { label: "3", value: 95, height: 95 },
    { label: "4", value: 120, height: 120 },
    { label: "5", value: 80, height: 80 },
    { label: "6", value: 110, height: 110 },
  ];

  const yAxisLabels = ["4", "3", "2", "1"];

  const handleBarHover = (index) => {
    setHoveredBar(index);
  };

  const handleBarLeave = () => {
    setHoveredBar(null);
  };

  return (
    <div className={`bar-chart ${isDarkMode ? "dark" : "light"}`}>
      <div className="chart-title">Revenue Overview</div>
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
