import React, { useState } from 'react';
import { Box } from '@mui/material';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import './App.css';

function App() {
  const [selectedPage, setSelectedPage] = useState('default');

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <LeftPanel onPageChange={handlePageChange} selectedPage={selectedPage} />
      <RightPanel selectedPage={selectedPage} />
    </Box>
  );
}

export default App;
