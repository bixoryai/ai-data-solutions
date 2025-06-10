# Predictive Maintenance Dashboard

An interactive dashboard showcasing AI-powered predictive maintenance capabilities.

## Features

- Real-time equipment monitoring dashboard
- Asset health visualization with status indicators
- Failure prediction timeline
- Maintenance recommendation system
- Cost savings calculator
- Interactive asset performance charts

## Prerequisites

- Node.js 14+ and npm

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm start
```

The development server will start at http://localhost:3000

### Production Build

```bash
# Create production build
npm run build
```

The build files will be created in the `build` folder, ready for deployment.

### Windows Build Script

For Windows users, you can use the included build script:

```bash
# Run the build script
.\build.bat
```

## Folder Structure

```
dashboard-demo/
├── public/              # Static assets
├── src/                 # Source code
│   ├── components/      # React components
│   ├── data/            # Sample data
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main application component (UI/UX standardized)
│   └── index.js         # Entry point
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Technology Stack

- React.js
- Tailwind CSS
- Recharts for data visualization
- TensorFlow.js for client-side predictive models 

## Status Update

This dashboard now uses the standardized React/TypeScript structure (`App.tsx`) and is fully aligned with the project-wide UI/UX standard. Sidebar toggle, header/sidebar layout, and main content padding issues have been resolved as of 2024. 