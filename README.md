# Juspay Dashboard

A modern, responsive SaaS dashboard built with React, featuring comprehensive analytics, data visualization, and user management capabilities.

## 🚀 Features

### 📊 Dashboard Overview
- **Interactive Statistics Cards**: Real-time metrics with hover effects and trend indicators
- **Advanced Data Visualization**: 
  - Bar charts with interactive tooltips
  - Line graphs with customizable legends
  - Pie charts with hover interactions
  - Geographic maps with plot points
- **Responsive Design**: Optimized for desktop and tablet viewing

### 🛒 E-Commerce Management
- **Order Management**: Comprehensive order listing with search and filtering
- **Data Table**: Sortable, paginated table with bulk operations
- **Real-time Updates**: Live data synchronization

### 🎨 User Interface
- **Dark/Light Theme**: Seamless theme switching with persistent preferences
- **Interactive Navigation**: Collapsible sidebar with hover effects
- **Responsive Layout**: Adaptive header and content areas
- **Modern Design**: Clean, professional interface with smooth animations

### 📱 Components
- **Left Panel**: Navigation with favorites, dashboards, and pages sections
- **Header**: Dynamic width based on page context (full-width for eCommerce, reserved space for notifications)
- **Right Panel**: Notifications, activities, and contacts (Overview page only)
- **Content Areas**: Flexible layouts for different page types

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **State Management**: Redux Toolkit
- **UI Library**: Material-UI (MUI) 7.3.2
- **Styling**: CSS3 with custom components
- **Maps**: React Simple Maps
- **Icons**: Material-UI Icons + Custom assets
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
dashboard/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # Reusable UI components
│   │   ├── Header/        # Top navigation bar
│   │   ├── LeftPanel/     # Sidebar navigation
│   │   └── RightPanel/    # Main content wrapper
│   ├── contexts/          # React contexts (Theme)
│   ├── pages/             # Page components
│   │   ├── Overview/      # Dashboard overview
│   │   └── SearchTable/   # E-commerce orders
│   ├── services/          # API and data services
│   ├── store/             # Redux store configuration
│   └── App.js             # Main application component
├── package.json
└── README.md
```

## 🎯 Key Components

### Overview Page
- **StatBlocks**: Key performance indicators with trend arrows
- **BarChart**: Interactive bar chart with hover tooltips
- **Linegraph**: Time-series data visualization
- **GeographyChart**: World map with location-based metrics
- **TrendingTable**: Top-selling products table
- **PieChart**: Revenue distribution visualization
- **RightBar**: Notifications, activities, and contacts

### E-Commerce Page
- **SearchTable**: Comprehensive order management
- **ActionRow**: Search, filter, and bulk operations
- **FunctionalTable**: Sortable data table with pagination
- **Pagination**: Navigation controls for large datasets

## 🎨 Theming

The application supports both light and dark themes with:
- **Automatic Theme Detection**: System preference-based initialization
- **Manual Toggle**: Theme switcher in header
- **Persistent Storage**: User preference saving
- **Component-level Styling**: Individual component theme support

## 📊 Data Visualization

### Charts and Graphs
- **Interactive Tooltips**: Hover effects with detailed information
- **Responsive Design**: Charts adapt to container size
- **Custom Styling**: Brand-consistent color schemes
- **Animation Support**: Smooth transitions and micro-interactions

### Maps
- **Geographic Visualization**: World map with country highlighting
- **Plot Points**: Interactive markers for location data
- **Zoom Controls**: Pan and zoom functionality
- **Custom Projections**: Optimized map views

## 🔧 Development

### Available Scripts
- `npm start`: Start development server
- `npm build`: Create production build
- `npm test`: Run test suite
- `npm eject`: Eject from Create React App

### Code Quality
- **ESLint**: Code linting and formatting
- **Modular Architecture**: Component-based structure
- **TypeScript Ready**: Easy migration path
- **Performance Optimized**: Lazy loading and code splitting

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

- **Desktop**: Full-featured experience with all components
- **Tablet**: Optimized layout with collapsible sidebar
- **Mobile**: Touch-friendly interface (planned)

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables
Create a `.env` file in the root directory:
```
REACT_APP_API_URL=your_api_url
REACT_APP_VERSION=1.0.0
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Material-UI for the component library
- React Simple Maps for geographic visualization
- Redux Toolkit for state management
- Create React App for the development environment

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ using React and modern web technologies**