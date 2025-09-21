import React from "react";
import { useTheme } from "../../../../contexts/ThemeContext";
import image1 from "../../../../assets/image1.png";
import image2 from "../../../../assets/image2.png";
import image3 from "../../../../assets/image3.png";
import image4 from "../../../../assets/image4.png";
import image5 from "../../../../assets/image5.png";
import image6 from "../../../../assets/image6.png";
import image7 from "../../../../assets/image7.png";
import image8 from "../../../../assets/image8.png";
import image9 from "../../../../assets/image9.png";
import image10 from "../../../../assets/image10.png";
import image11 from "../../../../assets/image11.png";
import bugIcon from "../../../../assets/bug.png";
import profileIcon from "../../../../assets/profile.png";
import alarmIcon from "../../../../assets/alarm.png";
import "./RightBar.css";

const RightBar = () => {
  const { isDarkMode } = useTheme();

  // Sample data for notifications
  const notifications = [
    {
      id: 1,
      icon: bugIcon,
      title: "You have a bug that needs to be fixed",
      time: "Just now",
    },
    {
      id: 2,
      icon: profileIcon,
      title: "New user registered",
      time: "59 minutes ago",
    },
    {
      id: 3,
      icon: bugIcon,
      title: "You have a bug that needs to be fixed",
      time: "12 hours ago",
    },
    {
      id: 4,
      icon: alarmIcon,
      title: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
    },
  ];

  // Sample data for activities
  const activities = [
    {
      id: 1,
      avatar: image7,
      title: "You have a bug that needs to be fixed",
      time: "Just now",
    },
    {
      id: 2,
      avatar: image8,
      title: "Released a new version",
      time: "59 minutes ago",
    },
    {
      id: 3,
      avatar: image9,
      title: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      id: 4,
      avatar: image10,
      title: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      id: 5,
      avatar: image11,
      title: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];

  // Sample data for contacts
  const contacts = [
    { id: 1, name: "Natali Craig", avatar: image1 },
    { id: 2, name: "Drew Cano", avatar: image2 },
    { id: 3, name: "Orlando Diggs", avatar: image3 },
    { id: 4, name: "Andi Lane", avatar: image4 },
    { id: 5, name: "Kate Morrison", avatar: image5 },
    { id: 6, name: "Koray Okumus", avatar: image6 },
  ];

  return (
    <div className={`right-bar ${isDarkMode ? "dark" : "light"}`}>
      {/* Notifications Section */}
      <div className="right-bar-section">
        <div className="section-header">
          <h3 className="section-title">Notifications</h3>
        </div>
        <div className="section-content">
          {notifications.map((notification) => (
            <div key={notification.id} className="notification-item">
              <div className="notification-icon">
                <img 
                  src={notification.icon} 
                  alt="Notification"
                  className="notification-icon-image"
                />
              </div>
              <div className="notification-content">
                <div className="notification-title">{notification.title}</div>
                <div className="notification-time">{notification.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activities Section */}
      <div className="right-bar-section">
        <div className="section-header">
          <h3 className="section-title">Activities</h3>
        </div>
        <div className="section-content">
          {activities.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-avatar">
                <img 
                  src={activity.avatar} 
                  alt="Activity"
                  className="activity-avatar-image"
                />
              </div>
              <div className="activity-content">
                <div className="activity-title">{activity.title}</div>
                <div className="activity-time">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts Section */}
      <div className="right-bar-section">
        <div className="section-header">
          <h3 className="section-title">Contacts</h3>
        </div>
        <div className="section-content">
          {contacts.map((contact) => (
            <div key={contact.id} className="contact-item">
              <div className="contact-avatar">
                <img 
                  src={contact.avatar} 
                  alt={contact.name}
                  className="contact-avatar-image"
                />
              </div>
              <div className="contact-name">{contact.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
