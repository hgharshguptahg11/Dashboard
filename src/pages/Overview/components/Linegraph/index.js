import React from "react";
import { useTheme } from "../../../../contexts/ThemeContext";
import "./Linegraph.css";

const Linegraph = () => {
  const { isDarkMode } = useTheme();

  // Sample data for the line graph - two lines as per curves.png reference
  const currentWeekData = [
    { month: "Jan", value: 2000 },
    { month: "Feb", value: 1500 },
    { month: "Mar", value: 1800 },
    { month: "Apr", value: 2500 },
    { month: "May", value: 3000 },
    { month: "Jun", value: 2800 },
  ];

  const previousWeekData = [
    { month: "Jan", value: 2500 },
    { month: "Feb", value: 2800 },
    { month: "Mar", value: 3200 },
    { month: "Apr", value: 3000 },
    { month: "May", value: 3500 },
    { month: "Jun", value: 4000 },
  ];

  const allData = [...currentWeekData, ...previousWeekData];
  const maxValue = Math.max(...allData.map((d) => d.value));
  const minValue = Math.min(...allData.map((d) => d.value));
  const range = maxValue - minValue;

  return (
    <div className={`linegraph-block ${isDarkMode ? "dark" : "light"}`}>
      {/* Header */}
      <div className="linegraph-header">
        <div className="linegraph-title-group">
          <h3 className="linegraph-title">Revenue</h3>
        </div>
        <div className="linegraph-legend">
          <div className="legend-item">
            <div className="legend-line current-week"></div>
            <span className="legend-text">Current Week $58,211</span>
          </div>
          <div className="legend-item">
            <div className="legend-line previous-week"></div>
            <span className="legend-text">Previous Week $68,768</span>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="linegraph-chart">
        <svg
          width="614"
          height="200"
          viewBox="0 0 614 200"
          className="linegraph-svg"
        >
          {/* Grid lines */}
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke={
                  isDarkMode
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(28, 28, 28, 0.1)"
                }
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="614" height="200" fill="url(#grid)" />

          {/* Current Week Line (Solid Black) */}
          <path
            d={currentWeekData
              .map((point, index) => {
                const x = (index / (currentWeekData.length - 1)) * 574 + 20;
                const y = 180 - ((point.value - minValue) / range) * 160;
                if (index === 0) {
                  return `M ${x} ${y}`;
                } else {
                  const prevX =
                    ((index - 1) / (currentWeekData.length - 1)) * 574 + 20;
                  const prevY =
                    180 -
                    ((currentWeekData[index - 1].value - minValue) / range) *
                      160;
                  const cp1x = prevX + (x - prevX) / 3;
                  const cp1y = prevY;
                  const cp2x = x - (x - prevX) / 3;
                  const cp2y = y;
                  return `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`;
                }
              })
              .join(" ")}
            fill="none"
            stroke="#1C1C1C"
            strokeWidth="2"
            className="linegraph-line current-week-line"
          />

          {/* Previous Week Line (Dashed Light Blue) */}
          <path
            d={previousWeekData
              .map((point, index) => {
                const x = (index / (previousWeekData.length - 1)) * 574 + 20;
                const y = 180 - ((point.value - minValue) / range) * 160;
                if (index === 0) {
                  return `M ${x} ${y}`;
                } else {
                  const prevX =
                    ((index - 1) / (previousWeekData.length - 1)) * 574 + 20;
                  const prevY =
                    180 -
                    ((previousWeekData[index - 1].value - minValue) / range) *
                      160;
                  const cp1x = prevX + (x - prevX) / 3;
                  const cp1y = prevY;
                  const cp2x = x - (x - prevX) / 3;
                  const cp2y = y;
                  return `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`;
                }
              })
              .join(" ")}
            fill="none"
            stroke="#87CEEB"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="linegraph-line previous-week-line"
          />

          {/* Data points for current week */}
          {currentWeekData.map((point, index) => {
            const x = (index / (currentWeekData.length - 1)) * 574 + 20;
            const y = 180 - ((point.value - minValue) / range) * 160;
            return (
              <circle
                key={`current-${index}`}
                cx={x}
                cy={y}
                r="3"
                fill="#1C1C1C"
                className="linegraph-point current-week-point"
              />
            );
          })}

          {/* Data points for previous week */}
          {previousWeekData.map((point, index) => {
            const x = (index / (previousWeekData.length - 1)) * 574 + 20;
            const y = 180 - ((point.value - minValue) / range) * 160;
            return (
              <circle
                key={`previous-${index}`}
                cx={x}
                cy={y}
                r="3"
                fill="#87CEEB"
                className="linegraph-point previous-week-point"
              />
            );
          })}

          {/* Y-axis labels */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
            const value = minValue + range * ratio;
            const y = 180 - ratio * 160;
            return (
              <text
                key={index}
                x="10"
                y={y + 5}
                textAnchor="end"
                className="y-axis-label"
                fill={
                  isDarkMode
                    ? "rgba(255, 255, 255, 0.6)"
                    : "rgba(28, 28, 28, 0.6)"
                }
              >
                ${(value / 1000).toFixed(0)}k
              </text>
            );
          })}

          {/* X-axis labels */}
          {currentWeekData
            .filter((_, index) => index % 2 === 0)
            .map((point, index) => {
              const x = ((index * 2) / (currentWeekData.length - 1)) * 574 + 20;
              return (
                <text
                  key={index}
                  x={x}
                  y="195"
                  textAnchor="middle"
                  className="x-axis-label"
                  fill={
                    isDarkMode
                      ? "rgba(255, 255, 255, 0.6)"
                      : "rgba(28, 28, 28, 0.6)"
                  }
                >
                  {point.month}
                </text>
              );
            })}
        </svg>
      </div>
    </div>
  );
};

export default Linegraph;
