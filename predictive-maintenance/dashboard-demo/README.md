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
│   ├── App.jsx          # Main application component
│   └── index.js         # Entry point
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Technology Stack

- React.js
- Tailwind CSS
- Recharts for data visualization
- TensorFlow.js for client-side predictive models 