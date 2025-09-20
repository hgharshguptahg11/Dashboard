import React from 'react';
import { Box, Typography } from '@mui/material';
import Overview from '../../pages/Overview';

// Import page components

const RightPanel = ({ selectedPage }) => {
  const renderPage = () => {
    switch (selectedPage) {
      case 'overview':
        return <Overview />;
      default:
        return <Overview />;
    }
  };

  return (
    <Box
      sx={{
        flex: 1,
        height: '100vh',
        backgroundColor: '#fafafa',
        overflow: 'auto',
        p: 3
      }}
    >
      {renderPage()}
    </Box>
  );
};

export default RightPanel;
