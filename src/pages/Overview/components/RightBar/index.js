import React from "react";
import { useTheme } from "../../../../contexts/ThemeContext";
import "./RightBar.css";

const RightBar = () => {
  const { isDarkMode } = useTheme();

  // Sample data for notifications
  const notifications = [
    {
      id: 1,
      icon: "🐛",
      title: "You have a bug that needs to be fixed",
      time: "Just now",
    },
    {
      id: 2,
      icon: "👤",
      title: "New user registered",
      time: "59 minutes ago",
    },
    {
      id: 3,
      icon: "🐛",
      title: "You have a bug that needs to be fixed",
      time: "12 hours ago",
    },
    {
      id: 4,
      icon: "📢",
      title: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
    },
  ];

  // Sample data for activities
  const activities = [
    {
      id: 1,
      avatar: "👤",
      title: "You have a bug that needs to be fixed",
      time: "Just now",
    },
    {
      id: 2,
      avatar: "👤",
      title: "Released a new version",
      time: "59 minutes ago",
    },
    {
      id: 3,
      avatar: "👤",
      title: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      id: 4,
      avatar: "👤",
      title: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      id: 5,
      avatar: "👤",
      title: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];

  // Sample data for contacts
  const contacts = [
    { id: 1, name: "Natali Craig", avatar: "👩" },
    { id: 2, name: "Drew Cano", avatar: "👨" },
    { id: 3, name: "Orlando Diggs", avatar: "👨" },
    { id: 4, name: "Andi Lane", avatar: "👩" },
    { id: 5, name: "Kate Morrison", avatar: "👩" },
    { id: 6, name: "Koray Okumus", avatar: "👨" },
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
                <span className="icon-text">{notification.icon}</span>
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
                <span className="avatar-text">{activity.avatar}</span>
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
                <span className="avatar-text">{contact.avatar}</span>
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
