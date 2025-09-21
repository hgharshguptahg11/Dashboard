import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Collapse,
} from "@mui/material";
import {
  PieChart as PieChartIcon,
  ShoppingBag as ShoppingBagIcon,
  Folder as FolderIcon,
  MenuBook as MenuBookIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Group as GroupIcon,
  Article as ArticleIcon,
  ExpandLess,
  ExpandMore,
  ChevronRight,
} from "@mui/icons-material";
import "./LeftPanel.css";

const LeftPanel = ({ onPageChange, selectedPage }) => {
  const [userProfileExpanded, setUserProfileExpanded] = useState(true);

  const handleUserProfileToggle = () => {
    setUserProfileExpanded(!userProfileExpanded);
  };

  const handlePageSelect = (page) => {
    onPageChange(page);
  };

  const favoritesItems = [
    { id: "overview", label: "Overview" },
    { id: "projects", label: "Projects" },
  ];

  const dashboardItems = [
    {
      id: "default",
      label: "Default",
      icon: <PieChartIcon />,
      selected: selectedPage === "default",
    },
    {
      id: "ecommerce",
      label: "eCommerce",
      icon: <ShoppingBagIcon />,
      selected: selectedPage === "ecommerce",
    },
    {
      id: "projects-dashboard",
      label: "Projects",
      icon: <FolderIcon />,
      hasSubmenu: true,
    },
    {
      id: "online-courses",
      label: "Online Courses",
      icon: <MenuBookIcon />,
      hasSubmenu: true,
    },
  ];

  const userProfileItems = [
    { id: "user-overview", label: "Overview" },
    { id: "user-projects", label: "Projects" },
    { id: "user-campaigns", label: "Campaigns" },
    { id: "user-documents", label: "Documents" },
    { id: "user-followers", label: "Followers" },
  ];

  const otherPages = [
    {
      id: "account",
      label: "Account",
      icon: <SettingsIcon />,
      hasSubmenu: true,
    },
    {
      id: "corporate",
      label: "Corporate",
      icon: <GroupIcon />,
      hasSubmenu: true,
    },
    { id: "blog", label: "Blog", icon: <ArticleIcon />, hasSubmenu: true },
  ];

  return (
    <Box className="leftPanel">
      {/* User Profile Section */}
      <Box className="userProfileSection">
        <Box className="userProfileContainer">
          <Box className="userProfileImage" />
          <Typography variant="h6" className="userProfileName">
            ByeWind
          </Typography>
        </Box>
      </Box>

      {/* Navigation Content */}
      <Box className="navigationContent">
        {/* Favorites Section */}
        <Box className="sectionContainer">
          <Typography variant="caption" className="sectionTitle">
            FAVORITES
          </Typography>
          <List dense className="listContainer">
            {favoritesItems.map((item) => (
              <ListItem key={item.id} disablePadding className="listItem">
                <ListItemButton
                  onClick={() => handlePageSelect(item.id)}
                  selected={selectedPage === item.id}
                  className={`listItemButton ${
                    selectedPage === item.id ? "selected" : ""
                  }`}
                >
                  <ListItemText primary={item.label} className="listItemText" />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider className="divider" />

        {/* Dashboards Section */}
        <Box className="sectionContainer">
          <Typography variant="caption" className="sectionTitle">
            DASHBOARDS
          </Typography>
          <List dense className="listContainer">
            {dashboardItems.map((item) => (
              <ListItem key={item.id} disablePadding className="listItem">
                <ListItemButton
                  onClick={() => handlePageSelect(item.id)}
                  selected={selectedPage === item.id}
                  className={`listItemButton ${
                    selectedPage === item.id ? "selected" : ""
                  }`}
                >
                  <ListItemIcon className="listItemIcon">
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} className="listItemText" />
                  {item.hasSubmenu && <ChevronRight className="chevronIcon" />}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider className="divider" />

        {/* Pages Section */}
        <Box className="sectionContainer">
          <Typography variant="caption" className="sectionTitle">
            PAGES
          </Typography>
          <List dense className="listContainer">
            {/* User Profile with submenu */}
            <ListItem disablePadding className="listItem">
              <ListItemButton
                onClick={handleUserProfileToggle}
                className="listItemButton"
              >
                <ListItemIcon className="listItemIcon">
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="User Profile" className="listItemText" />
                {userProfileExpanded ? (
                  <ExpandLess className="expandIcon" />
                ) : (
                  <ExpandMore className="expandIcon" />
                )}
              </ListItemButton>
            </ListItem>
            <Collapse in={userProfileExpanded} timeout="auto" unmountOnExit>
              <List component="div" disablePadding className="submenuContainer">
                {userProfileItems.map((item) => (
                  <ListItem key={item.id} disablePadding className="listItem">
                    <ListItemButton
                      onClick={() => handlePageSelect(item.id)}
                      selected={selectedPage === item.id}
                      className={`submenuItem ${
                        selectedPage === item.id ? "selected" : ""
                      }`}
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
                  className={`listItemButton ${
                    selectedPage === item.id ? "selected" : ""
                  }`}
                >
                  <ListItemIcon className="listItemIcon">
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} className="listItemText" />
                  {item.hasSubmenu && <ChevronRight className="chevronIcon" />}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftPanel;
