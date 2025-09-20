import React, { useState } from "react";
import { useTheme } from "../../../../contexts/ThemeContext";
import "./PieChart.css";

const PieChart = () => {
  const { isDarkMode } = useTheme();
  const [hoveredSegment, setHoveredSegment] = useState(null);

  // Sample data for the pie chart - updated colors to match shapeColors.png
  const pieData = [
    {
      id: 1,
      label: "Direct",
      value: 300.56,
      percentage: 38.6,
      color: "#E3F5FF", // Light blue
      dotColor: "#007AFF",
    },
    {
      id: 2,
      label: "Affiliate",
      value: 135.18,
      percentage: 17.4,
      color: "#E8D5FF", // Light purple
      dotColor: "#8E8E93",
    },
    {
      id: 3,
      label: "Sponsored",
      value: 154.02,
      percentage: 19.8,
      color: "#D5FFE8", // Light green
      dotColor: "#34C759",
    },
    {
      id: 4,
      label: "E-mail",
      value: 48.96,
      percentage: 6.3,
      color: "#F0F0F0", // Light grey
      dotColor: "#FF9500",
    },
  ];

  const totalValue = pieData.reduce((sum, item) => sum + item.value, 0);

  // Calculate angles for pie segments
  let currentAngle = 0;
  const segments = pieData.map((item) => {
    const angle = (item.value / totalValue) * 360;
    const segment = {
      ...item,
      startAngle: currentAngle,
      endAngle: currentAngle + angle,
      angle: angle,
    };
    currentAngle += angle;
    return segment;
  });

  // Generate SVG path for pie segment
  const getSegmentPath = (segment) => {
    const centerX = 100;
    const centerY = 100;
    const radius = 60;

    const startAngleRad = (segment.startAngle - 90) * (Math.PI / 180);
    const endAngleRad = (segment.endAngle - 90) * (Math.PI / 180);

    const x1 = centerX + radius * Math.cos(startAngleRad);
    const y1 = centerY + radius * Math.sin(startAngleRad);
    const x2 = centerX + radius * Math.cos(endAngleRad);
    const y2 = centerY + radius * Math.sin(endAngleRad);

    const largeArcFlag = segment.angle > 180 ? 1 : 0;

    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  return (
    <div className={`pie-chart ${isDarkMode ? "dark" : "light"}`}>
      {/* Header */}
      <div className="pie-chart-header">
        <h3 className="pie-chart-title">Total Sales</h3>
      </div>

      {/* Pie Chart Container */}
      <div className="pie-chart-container">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="pie-chart-svg"
        >
          {segments.map((segment) => (
            <g key={segment.id}>
              <path
                d={getSegmentPath(segment)}
                fill={segment.color}
                stroke="#ffffff"
                strokeWidth="2"
                className={`pie-segment ${
                  hoveredSegment === segment.id ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredSegment(segment.id)}
                onMouseLeave={() => setHoveredSegment(null)}
                style={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transform:
                    hoveredSegment === segment.id ? "scale(1.02)" : "scale(1)",
                  transformOrigin: "100px 100px",
                  filter:
                    hoveredSegment === segment.id
                      ? "brightness(1.1)"
                      : "brightness(1)",
                }}
              />
            </g>
          ))}

          {/* Center circle for donut effect */}
          <circle
            cx="100"
            cy="100"
            r="30"
            fill={isDarkMode ? "#1a1a1a" : "#ffffff"}
            stroke={
              isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(28, 28, 28, 0.1)"
            }
            strokeWidth="1"
          />

          {/* Center percentage text */}
          <text
            x="100"
            y="100"
            textAnchor="middle"
            dominantBaseline="middle"
            className="center-percentage"
          >
            38.6%
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div className="pie-chart-legend">
        {pieData.map((item) => (
          <div key={item.id} className="legend-item">
            <div className="legend-tag-container">
              <div
                className="legend-dot"
                style={{ backgroundColor: item.dotColor }}
              />
              <span className="legend-label">{item.label}</span>
            </div>
            <span className="legend-amount">${item.value.toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Tooltip */}
      {hoveredSegment && (
        <div className="pie-chart-tooltip">
          <div className="tooltip-content">
            <div className="tooltip-label">
              {pieData.find((item) => item.id === hoveredSegment)?.label}
            </div>
            <div className="tooltip-value">
              $
              {pieData
                .find((item) => item.id === hoveredSegment)
                ?.value.toFixed(2)}
            </div>
            <div className="tooltip-percentage">
              {pieData.find((item) => item.id === hoveredSegment)?.percentage}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PieChart;
