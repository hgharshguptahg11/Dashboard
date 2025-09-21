import React from "react";
import { useTheme } from "../../../../contexts/ThemeContext";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import "./GeographyChart.css";

const GeographyChart = () => {
  const { isDarkMode } = useTheme();

  // Sample data for geography chart
  const geographyData = [
    { country: "United States", value: 45, color: "#22c55e" },
    { country: "Canada", value: 25, color: "#3b82f6" },
    { country: "United Kingdom", value: 20, color: "#8b5cf6" },
    { country: "Germany", value: 15, color: "#f59e0b" },
    { country: "France", value: 12, color: "#ef4444" },
    { country: "Australia", value: 8, color: "#06b6d4" },
    { country: "Japan", value: 6, color: "#84cc16" },
    { country: "Others", value: 19, color: "#6b7280" },
  ];

  // Plot points data for the map
  const plotPoints = [
    { name: "New York", coordinates: [-74.006, 40.7128], value: 72 },
    { name: "San Francisco", coordinates: [-122.4194, 37.7749], value: 39 },
    { name: "Sydney", coordinates: [151.2093, -33.8688], value: 25 },
    { name: "Singapore", coordinates: [103.8198, 1.3521], value: 61 },
  ];

  // World map topology data URL
  const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";


  return (
    <div className={`geography-chart ${isDarkMode ? "dark" : "light"}`}>
      {/* Header */}
      <div className="geography-header">
        <h3 className="geography-title">Revenue by Location</h3>
      </div>

      {/* Chart Area */}
      <div className="geography-chart-area">
        <div className="geography-visual">
          {/* World Map */}
          <div className="world-map-container">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 25,
                center: [0, 12],
              }}
              width={154}
              height={90}
            >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const countryName = geo.properties.NAME;
                      const fillColor = "#A8C5DA";

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={fillColor}
                          stroke={isDarkMode ? "#ffffff" : "#1c1c1c"}
                          strokeWidth={0.5}
                          style={{
                            default: {
                              fill: fillColor,
                              stroke: isDarkMode ? "#ffffff" : "#1c1c1c",
                              strokeWidth: 0.5,
                              outline: "none",
                            },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
                {/* Plot points on the map */}
                {plotPoints.map((point, index) => (
                  <Marker key={index} coordinates={point.coordinates}>
                    <circle
                      r={4}
                      fill="#1C1C1C"
                      stroke="#ffffff"
                      strokeWidth={2}
                    />
                  </Marker>
                ))}
            </ComposableMap>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="geography-legend">
        {plotPoints.map((point, index) => (
          <div key={index} className="geography-legend-item">
            <div className="legend-content">
              <span className="legend-country">{point.name}</span>
              <span className="legend-value">{point.value}K</span>
            </div>
            <div className="legend-progress-bar">
              <div 
                className="legend-progress-fill"
                style={{ width: `${(point.value / 72) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeographyChart;
