import React, { useState } from 'react';
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Collapse
} from '@mui/material';
import {
    ExpandLess,
    ExpandMore,
    ChevronRight
} from '@mui/icons-material';
import './PagesSection.css';
import UserProfileIcon from '../../../assets/UserProfile.png';
import AccountIcon from '../../../assets/Account.png';
import CorporateIcon from '../../../assets/Corporate.png';
import BlogIcon from '../../../assets/Blog.png';
import SocialIcon from '../../../assets/social.png';

const PagesSection = ({ onPageChange, selectedPage }) => {
    const [userProfileExpanded, setUserProfileExpanded] = useState(false);

    const handleUserProfileToggle = () => {
        setUserProfileExpanded(!userProfileExpanded);
    };

    const handlePageSelect = (page) => {
        onPageChange(page);
    };

    const userProfileItems = [
        { id: 'user-overview', label: 'Overview' },
        { id: 'user-projects', label: 'Projects' },
        { id: 'user-campaigns', label: 'Campaigns' },
        { id: 'user-documents', label: 'Documents' },
        { id: 'user-followers', label: 'Followers' }
    ];

    const otherPages = [
        { id: 'account', label: 'Account', icon: AccountIcon, hasSubmenu: true },
        { id: 'corporate', label: 'Corporate', icon: CorporateIcon, hasSubmenu: true },
        { id: 'blog', label: 'Blog', icon: BlogIcon, hasSubmenu: true },
        { id: 'social', label: 'Social', icon: SocialIcon, hasSubmenu: true }
    ];

    return (
        <Box className="sectionContainer">
            <Box className="pagesectiontitle">
                <Typography variant="caption" className="pagesectiontitletext">
                    Pages
                </Typography>
            </Box>
            <List dense className="listContainer">
                {/* User Profile with submenu */}
                <ListItem disablePadding className="listItem">
                        <ListItemButton
                            onClick={handleUserProfileToggle}
                            className="listItemButton"
                        >
                            <Box className="listItemGroup">
                                <Box className="listItemIconSet">
                                    {userProfileExpanded ? <ExpandMore className="expandIcon" /> : <ChevronRight className="expandIcon" />}
                                </Box>
                            </Box>
                            <Box className="listItemIconText">
                                <Box className="listItemIcon">
                                    <img 
                                        src={UserProfileIcon} 
                                        alt="User Profile"
                                        style={{ width: '20px', height: '20px' }}
                                    />
                                </Box>
                                <Box className="listItemText">
                                    <Typography className="listItemLabel user-profile">
                                        User Profile
                                    </Typography>
                                </Box>
                            </Box>
                        </ListItemButton>
                </ListItem>
                <Collapse in={userProfileExpanded} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding className="submenuContainer">
                        {userProfileItems.map((item) => (
                            <ListItem key={item.id} disablePadding className="listItem">
                                <ListItemButton
                                    onClick={() => handlePageSelect(item.id)}
                                    selected={selectedPage === item.id}
                                    className={`submenuItem ${selectedPage === item.id ? 'selected' : ''}`}
                                >
                                    <Box className="submenuText">
                                        <Typography className={`submenuLabel ${item.label.toLowerCase()}`}>
                                            {item.label}
                                        </Typography>
                                    </Box>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>

                {/* Other pages */}
                {otherPages.map((item) => (
                    <ListItem key={item.id} disablePadding className="listItem">
                        <ListItemButton
                            onClick={() => handlePageSelect(item.id)}
                            selected={selectedPage === item.id}
                            className={`listItemButton ${selectedPage === item.id ? 'selected' : ''}`}
                        >
                            <Box className="listItemGroup">
                                <Box className="listItemIconSet">
                                    {item.hasSubmenu && (
                                        <ChevronRight className="chevronIcon" />
                                    )}
                                </Box>
                            </Box>
                            <Box className="listItemIconText">
                                <Box className="listItemIcon">
                                    <img 
                                        src={item.icon} 
                                        alt={item.label}
                                        style={{ width: '20px', height: '20px' }}
                                    />
                                </Box>
                                <Box className="listItemText">
                                    <Typography className={`listItemLabel ${item.label.toLowerCase()}`}>
                                        {item.label}
                                    </Typography>
                                </Box>
                            </Box>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default PagesSection;
