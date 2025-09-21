import React from 'react';
import {
    Box,
    Typography
} from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';
import FavoritesSection from './FavoritesSection';
import './LeftPanel.css';
import DashboardsSection from './DashboardsSection';
import PagesSection from './PagesSection';

const LeftPanel = ({ onPageChange, selectedPage }) => {
    const { isDarkMode } = useTheme();

    return (
        <Box className={`leftPanel ${isDarkMode ? 'dark' : ''}`}>
            {/* User Profile Section */}
            <Box className="userProfileSection">
                <Box className="userProfileContainer">
                    <Box className="userProfileImage" />
                    <Typography className="userProfileName">
                        ByeWind
                    </Typography>
                </Box>
            </Box>

            {/* Navigation Content */}
            <Box className="navigationContent">
                {/* Favorites Section */}
                <FavoritesSection
                    onPageChange={onPageChange}
                    selectedPage={selectedPage}
                />
                <DashboardsSection
                    onPageChange={onPageChange}
                    selectedPage={selectedPage}
                />
                <PagesSection
                    onPageChange={onPageChange}
                    selectedPage={selectedPage}
                />
            </Box>
        </Box>
    );
};

export default LeftPanel;
