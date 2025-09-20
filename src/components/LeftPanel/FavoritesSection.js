import React from 'react';
import { Box, Typography } from '@mui/material';
import './FavoritesSection.css';

const FavoritesSection = ({ onPageChange, selectedPage }) => {
  const favoritesItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'projects', label: 'Projects' }
  ];

  const handlePageSelect = (page) => {
    onPageChange(page);
  };

  return (
    <Box className="favoritesFrame">
      {/* Group - Favorites/Recently Tabs */}
      <Box className="favoritesGroup">
        {/* Favorites Button */}
        <Box className="favoritesButton">
          <Box className="favoritesButtonText">
            <Typography className="favoritesButtonLabel">
              Favorites
            </Typography>
          </Box>
        </Box>
        
        {/* Recently Button */}
        <Box className="recentlyButton">
          <Box className="recentlyButtonText">
            <Typography className="recentlyButtonLabel">
              Recently
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Content Items */}
      {favoritesItems.map((item, index) => (
        <Box key={item.id} className="contentItem">
          <Box className="iconText">
            <Box className="iconSet">
              <Box className="dot">
                <Box className="vector"></Box>
              </Box>
            </Box>
            <Box className="itemText">
              <Typography 
                className="itemLabel"
                onClick={() => handlePageSelect(item.id)}
                style={{ 
                  cursor: 'pointer',
                  color: selectedPage === item.id ? '#1C1C1C' : '#1C1C1C'
                }}
              >
                {item.label}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default FavoritesSection;
