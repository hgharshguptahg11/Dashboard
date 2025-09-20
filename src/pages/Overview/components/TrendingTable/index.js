import React from "react";
import { useTheme } from "../../../../contexts/ThemeContext";
import "./TrendingTable.css";

const TrendingTable = () => {
  const { isDarkMode } = useTheme();

  // Sample data for the trending table
  const tableData = [
    {
      id: 1,
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      id: 2,
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: 37,
      amount: "$4,754.50",
    },
    {
      id: 3,
      name: "Half Sleeve Shirt",
      price: "$39.99",
      quantity: 64,
      amount: "$2,559.36",
    },
    {
      id: 4,
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: 184,
      amount: "$3,680.00",
    },
    {
      id: 5,
      name: "Marco Shoes",
      price: "$28.49",
      quantity: 69,
      amount: "$1,965.81",
    },
  ];

  return (
    <div className={`trending-table ${isDarkMode ? "dark" : "light"}`}>
      {/* Header */}
      <div className="table-header">
        <h3 className="table-title">Top Selling Products</h3>
      </div>

      {/* Table */}
      <div className="table-container">
        <div className="table-header-row">
          <div className="table-header-cell name-header">Name</div>
          <div className="table-header-cell price-header">Price</div>
          <div className="table-header-cell quantity-header">Quantity</div>
          <div className="table-header-cell amount-header">Amount</div>
        </div>

        <div className="table-body">
          {tableData.map((item) => (
            <div key={item.id} className="table-row">
              <div className="table-cell name-cell">
                <span className="cell-text">{item.name}</span>
              </div>
              <div className="table-cell price-cell">
                <span className="cell-text">{item.price}</span>
              </div>
              <div className="table-cell quantity-cell">
                <span className="cell-text">{item.quantity}</span>
              </div>
              <div className="table-cell amount-cell">
                <span className="cell-text">{item.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingTable;
