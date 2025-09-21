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
    const [userProfileExpanded, setUserProfileExpanded] = useState(true);

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
            <Typography variant="caption" className="sectionTitle">
                Pages
            </Typography>
            <List dense className="listContainer">
                {/* User Profile with submenu */}
                <ListItem disablePadding className="listItem">
                        <ListItemButton
                            onClick={handleUserProfileToggle}
                            className="listItemButton"
                        >
                            <ListItemIcon className="listItemIcon">
                                <img 
                                    src={UserProfileIcon} 
                                    alt="User Profile"
                                    style={{ width: '20px', height: '20px' }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary="User Profile"
                                className="listItemText"
                            />
                            {userProfileExpanded ? <ExpandLess className="expandIcon" /> : <ExpandMore className="expandIcon" />}
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
                                    <ListItemText
                                        primary={item.label}
                                        className="submenuText"
                                    />
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
                            <ListItemIcon className="listItemIcon">
                                <img 
                                    src={item.icon} 
                                    alt={item.label}
                                    style={{ width: '20px', height: '20px' }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                className="listItemText"
                            />
                            {item.hasSubmenu && (
                                <ChevronRight className="chevronIcon" />
                            )}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default PagesSection;
