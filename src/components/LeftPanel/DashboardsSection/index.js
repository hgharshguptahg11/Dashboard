import React from 'react';
import { Box, Typography } from '@mui/material';
import './DashboardsSection.css';
import Default from '../../../assets/Default.png';
import ECommerce from '../../../assets/ECommerce.png';
import Project from '../../../assets/Project.png';
import OnlineCourses from '../../../assets/OnlineCourses.png';

const DashboardsSection = ({ onPageChange, selectedPage }) => {
  const dashboardItems = [
    { id: 'overview', label: 'Default', icon: Default },
    { id: 'ecommerce', label: 'eCommerce', icon: ECommerce, hasSubmenu: true },
    { id: 'projects-dashboard', label: 'Projects', icon: Project, hasSubmenu: true },
    { id: 'online-courses', label: 'Online Courses', icon: OnlineCourses, hasSubmenu: true }
  ];

  const handlePageSelect = (page) => {
    onPageChange(page);
  };

  return (
    <Box className="dashboardsFrame">
      {/* Header Text */}
      <Box className="dashboardsHeader">
        <Typography className="dashboardsHeaderText">
          Dashboards
        </Typography>
      </Box>

      {/* Dashboard Items */}
      {dashboardItems.map((item, index) => (
        <Box 
          key={item.id} 
          className={`dashboardContent ${selectedPage === item.id ? 'selected' : ''}`}
          onClick={() => handlePageSelect(item.id)}
        >
          <Box className="dashboardGroup">
            <Box className="dashboardIconSet">
              <Box className="dashboardSelected">
                <Box className="dashboardRectangle"></Box>
              </Box>
              <Box className="dashboardArrowIcon">
                <Box className="dashboardArrowVector"></Box>
              </Box>
            </Box>
          </Box>
          
          <Box className="dashboardIconText">
            <Box className="dashboardItemIconSet">
              <img 
                src={item.icon} 
                alt={item.label}
                className="dashboardItemIcon"
                style={{ width: '20px', height: '20px' }}
              />
            </Box>
            <Box className="dashboardItemText">
              <Typography className="dashboardItemLabel">
                {item.label}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default DashboardsSection;
