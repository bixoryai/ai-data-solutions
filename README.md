# AI Data Solutions

AI-powered solutions for data processing, analysis, and visualization with a web portal interface.

## Overview

This repository hosts a collection of AI-powered data solutions for various data-related tasks. It includes a central demo portal that showcases multiple individual solution dashboards, providing easy access to these solutions either locally or over the internet.

**All dashboard demos and the main portal are now fully mobile responsive.**

## Core Components

1. **GitHub Repository Structure**: Organized framework for housing multiple AI data solution projects
2. **Demo Portal Interface**: Web-based entry point to access and showcase all dashboard demos
3. **Individual Solution Dashboards**: Interactive demonstrations of each AI data solution (**all dashboards are mobile-optimized**)
4. **Presentation Module**: Modern interactive presentation for showcasing AI capabilities

## Solution Offerings

- **Industry-specific AI Analytics**: Advanced analytics dashboards tailored for specific industries (starting with manufacturing)
- **Synthetic Data Generation**: Tools for creating realistic synthetic datasets for testing and development
- **Domain Dataset Curation**: Solutions for curating and managing domain-specific datasets
- **Predictive Maintenance**: AI-powered systems to predict equipment failures before they occur and optimize maintenance schedules
- **Customer Analytics**: Customer segmentation, behavior prediction, and personalized recommendation engines
- **NLP Data Intelligence**: Document understanding, information extraction, and intelligent search capabilities (Coming Soon)
- **Supply Chain Intelligence**: End-to-end supply chain optimization and visibility solutions (Coming Soon)
- **Financial Analytics**: Interactive dashboards for financial data analysis, fraud detection, and risk assessment.

## Current Implementation Status

### UI/UX Standardization Update
A major effort has been completed to standardize the UI/UX across all dashboard demos. This ensures a consistent look and feel, including headers, sidebars, and color schemes. All dashboards now follow the same responsive and mobile-friendly design pattern.

### Ready Solutions

1. **Industry-specific AI Analytics**
   - About page: Implemented and accessible via the "About" button
   - Demo dashboard: Fully functional and accessible via the "View Demo" button
   - Presentation: Not yet implemented
   - Build Plan: Not yet implemented (button disabled)
   - **Dashboard is fully mobile responsive**

2. **Synthetic Data Generator**
   - About page: Implemented and accessible via the "About" button
   - Demo dashboard: Fully functional and accessible via the "View Demo" button
   - Presentation: Not yet implemented
   - Build Plan: Not yet implemented (button disabled)
   - **Dashboard is fully mobile responsive**

3. **Domain Dataset Curation**
   - About page: Implemented and accessible via the "About" button
   - Demo dashboard: Fully functional and accessible via the "View Demo" button
   - Presentation: Not yet implemented
   - Build Plan: Not yet implemented (button disabled)
   - **Dashboard is fully mobile responsive**

4. **Predictive Maintenance**
   - About page: Implemented and accessible via the "About" button
   - Demo dashboard: Fully functional, UI/UX standardized, and accessible via the "View Demo" button
   - Presentation: Completed and standardized
   - Sidebar toggle, header/sidebar layout, and main content padding issues resolved (now matches all other dashboards)
   - Build Plan: Not yet implemented (button disabled)
   - Key features: Equipment health monitoring, failure prediction, maintenance scheduling, root cause analysis, and cost optimization
   - **Dashboard is fully mobile responsive**

5. **Customer Analytics**
   - About page: Implemented and accessible via the "About" button
   - Demo dashboard: MVP implemented, accessible via the "View Demo" button
   - Presentation: Completed and standardized
   - Build Plan: Not yet implemented (button disabled)
   - Key features: Customer segmentation, behavior prediction, and personalized recommendations. Interactive dashboard with KPI cards and charts.
   - **Dashboard is fully mobile responsive**

6. **NLP Data Intelligence**
   - About page: Implemented and accessible via the "About" button
   - Demo dashboard: Fully functional, UI/UX standardized, and accessible via the "View Demo" button
   - Presentation: Completed and standardized
   - Build Plan: Not yet implemented (button disabled)
   - Key features: Document understanding, text analysis, sentiment analysis, intelligent search, and knowledge management. Interactive dashboard with language toggle.
   - **Dashboard is fully mobile responsive**

7. **Supply Chain Intelligence**
   - About page: Implemented and accessible via the 'About' button
   - Demo dashboard: Fully functional, accessible via the "View Demo" button
   - Presentation: Completed and standardized
   - Build Plan: Not yet implemented (button disabled)
   - Key features: Interactive dashboard with KPI cards, demand/inventory charts, supplier performance scorecards, and a disruption simulator.
   - **Dashboard is fully mobile responsive**

8. **Financial Analytics**
   - About page: Implemented and accessible via the 'About' button
   - Demo dashboard: Fully functional, UI/UX standardized, and accessible via the "View Demo" button
   - Presentation: Completed and standardized
   - Build Plan: Not yet implemented (button disabled)
   - Key features: Interactive dashboard for financial data analysis, including KPI cards and placeholders for fraud detection and risk assessment modules.
   - **Dashboard is fully mobile responsive**

9. **Healthcare Data**
   - About page: Not yet implemented (button disabled)
   - Demo dashboard: Initial scaffolding complete with a standardized UI. Accessible via the "View Demo" button (placeholder).
   - Presentation: Not yet implemented
   - Build Plan: Not yet implemented (button disabled)
   - Key features: Placeholders for patient outcome prediction, medical image analysis, and drug discovery modules.
   - **Dashboard is fully mobile responsive**

10. **Computer Vision**
    - About page: Implemented and accessible via the "About" button
    - Demo dashboard: Fully functional, UI/UX standardized, and accessible via the "View Demo" button
    - Presentation: Completed and standardized
    - Build Plan: Not yet implemented (button disabled)
    - Key features: Live visual inspection, defect analytics, model performance monitoring, and ROI simulation.
    - **Dashboard is fully mobile responsive**

### Coming Soon Solutions

1. **Healthcare Data**
   - Current status: In development
   - Features: Patient outcome prediction, medical image analysis, and drug discovery
   - Industry focus: Healthcare

## Development Roadmap & Future Improvements

To ensure the long-term health and scalability of the project, we are focused on the following areas for improvement. While we will keep components solution-specific to maintain flexibility, we will strive for consistency in patterns and design.

-   **Complete TypeScript Migration**: Continue converting any remaining JavaScript/JSX files to TypeScript (TSX) to improve code quality and type safety across all solutions.
-   **UI/UX Pattern Consistency**: While avoiding overly complex shared components, ensure that common UI elements (cards, buttons, forms) and layouts follow a consistent design language and user experience.
-   **Code Quality and Maintainability**: Refactor code where necessary to improve readability, reduce duplication within individual solutions, and adhere to best practices.
-   **Documentation**: Enhance documentation for both developers and end-users, ensuring that each solution is easy to understand, run, and maintain.
-   **Expand Solution Offerings**: Continue development on the "Coming Soon" solutions, such as Supply Chain Intelligence, Computer Vision, and Financial Analytics.

This approach will help us build a robust and maintainable platform while delivering a cohesive user experience.

## Repository Structure

```
ai-data-solutions/
├── index.html                   # Demo Portal entry interface
├── README.md                    # Main repository documentation
├── .gitignore                   # Git ignore file for the repository
├── LICENSE                      # Repository license
├── common/                      # Shared utilities and components
│   ├── components/              # Reusable UI components
│   ├── utils/                   # Shared utility functions
│   └── styles/                  # Shared CSS/styling
│
├── industry-analytics/          # Industry-specific AI Analytics project
│   ├── dashboard-demo/          # Demo implementation of the dashboard
│   │   ├── package.json         # Project dependencies
│   │   ├── package-lock.json    # Dependency lock file
│   │   ├── public/              # Static assets
│   │   ├── src/                 # Source code
│   │   │   ├── components/      # Dashboard components
│   │   │   ├── App.jsx          # Main application component
│   │   │   └── index.js         # Entry point
│   │   ├── build/               # Compiled dashboard (created by build process)
│   │   ├── build.bat            # Build script for Windows
│   │   ├── tailwind.config.js   # Tailwind CSS configuration
│   │   ├── postcss.config.js    # PostCSS configuration
│   │   └── README.md            # Instructions for running the demo
│   ├── presentation/            # Interactive presentation for industry analytics
│   │   ├── package.json         # Project dependencies
│   │   ├── package-lock.json    # Dependency lock file
│   │   ├── public/              # Static assets
│   │   ├── src/                 # Source code
│   │   ├── backups/             # Backup files
│   │   ├── tailwind.config.js   # Tailwind CSS configuration
│   │   ├── postcss.config.js    # PostCSS configuration
│   │   ├── tsconfig.json        # TypeScript configuration
│   │   └── README.md            # Instructions for the presentation
│   ├── production-app/          # Full implementation (future)
│   └── README.md                # Project documentation
│
├── synthetic-data-generator/    # Synthetic Data Generation project
│   ├── dashboard-demo/          # Demo dashboard for synthetic data
│   │   ├── package.json         # Project dependencies
│   │   ├── public/              # Static assets
│   │   ├── src/                 # Source code
│   │   ├── build/               # Compiled dashboard (created by build process)
│   │   └── README.md            # Instructions for running the demo
│   ├── presentation/            # Interactive presentation for synthetic data
│   │   ├── package.json         # Project dependencies
│   │   ├── public/              # Static assets
│   │   ├── src/                 # Source code
│   │   │   ├── components/      # Slide components
│   │   │   ├── App.tsx          # Main application component
│   │   │   └── index.tsx        # Entry point
│   │   ├── tailwind.config.js   # Tailwind CSS configuration
│   │   ├── postcss.config.js    # PostCSS configuration
│   │   ├── tsconfig.json        # TypeScript configuration
│   │   └── README.md            # Instructions for the presentation
│   ├── generation-models/       # Data generation algorithms
│   └── README.md                # Project documentation
│
├── domain-dataset-curation/     # Domain Dataset Curation project
│   ├── dashboard-demo/          # Demo dashboard for dataset curation
│   │   ├── package.json         # Project dependencies
│   │   ├── public/              # Static assets
│   │   ├── src/                 # Source code
│   │   ├── build/               # Compiled dashboard (created by build process)
│   │   └── README.md            # Instructions for running the demo
│   ├── curation-tools/          # Dataset curation utilities
│   └── README.md                # Project documentation
│
├── predictive-maintenance/      # Predictive Maintenance project
│   ├── dashboard-demo/          # Demo dashboard for predictive maintenance
│   │   ├── package.json         # Project dependencies
│   │   ├── public/              # Static assets
│   │   ├── src/                 # Source code
│   │   ├── build/               # Compiled dashboard (created by build process)
│   │   └── README.md            # Instructions for running the demo
│   ├── presentation/            # Interactive presentation for predictive maintenance
│   │   ├── package.json         # Project dependencies
│   │   ├── public/              # Static assets
│   │   ├── src/                 # Source code
│   │   ├── tailwind.config.js   # Tailwind CSS configuration
│   │   ├── postcss.config.js    # PostCSS configuration
│   │   ├── tsconfig.json        # TypeScript configuration
│   │   └── README.md            # Instructions for the presentation
│   └── README.md                # Project documentation
│
├── customer-analytics/          # Customer Analytics project
│   ├── dashboard-demo/          # Demo dashboard for customer analytics
│   │   ├── package.json         # Project dependencies
│   │   ├── public/              # Static assets
│   │   ├── src/                 # Source code
│   │   └── README.md            # Instructions for running the demo
│   ├── presentation/            # Interactive presentation for customer analytics
│   └── README.md                # Project documentation
│
├── computer-vision/             # Computer Vision solution (new)
│   ├── dashboard-demo/          # Demo dashboard for computer vision
│   │   ├── package.json         # Project dependencies
│   │   ├── public/              # Static assets
│   │   ├── src/                 # Source code
│   │   │   ├── components/      # Dashboard components
│   │   │   ├── data/            # Mock data files
│   │   │   ├── utils/           # Utility functions
│   │   │   └── index.tsx        # Entry point
│   │   └── README.md            # Instructions for running the demo
│   └── README.md                # Project documentation
│
└── docs/                        # Documentation for the entire repository
    ├── architecture/            # Architecture diagrams and docs
    ├── development-guide/       # Development guidelines
    └── client-presentations/    # Materials for client presentations
```

## Getting Started

### Prerequisites

- Python 3.8+
- Node.js 14+
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Docker (optional, for containerized deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/BixoryAI/ai-data-solutions.git
cd ai-data-solutions

# For dashboard development
cd [project-name]/dashboard-demo
npm install
npm start

# To build a dashboard for the demo portal
npm run build
```

## Demo Portal

The Demo Portal is a standalone HTML file (`index.html`) at the repository root that provides:

- Visual cards for each AI data solution
- Brief descriptions of capabilities
- Status indicators (Ready/Coming Soon)
- Launch buttons to access demos
- **The portal and all dashboards are mobile-optimized for all devices.**

## Language Support

The project implements comprehensive language support for both English and Chinese:

### Demo Portal Language Toggle
- Uses data attributes (`data-i18n`) to mark elements for translation
- Translations stored in a JavaScript object with keys for each text element
- Toggle is located in the header with "EN" and "中文" options
- Language preference is saved in localStorage (key: 'language')
- Implementation uses vanilla JavaScript to switch languages without page reload

```javascript
// Example implementation
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
}
```

### Dashboard Language Toggle
- React-based implementation in dashboard components
- Uses a Globe icon with EN/中文 button options
- Implements a translation function `t(key)` to retrieve text
- Stores language preference separately in localStorage (key: 'dashboard_language')
- All text elements can switch between languages instantly

```jsx
// Example React implementation
const t = (key) => {
    return translations[language][key] || key;
};

<button 
    className={`px-2 py-1 text-xs rounded-full ${language === 'en' ? 'bg-white text-indigo-700' : 'text-white'}`}
    onClick={() => changeLanguage('en')}
>
    EN
</button>
```

## Implementation Timeline

### Phase 1: Foundation (Weeks 1-2)
- Initialize repository structure
- Set up the entry portal HTML
- Implement core styling and layout
- Create documentation framework

### Phase 2: First Dashboard (Weeks 3-5)
- Implement Industry-specific AI Analytics dashboard for manufacturing
- Create build process and instructions
- Ensure proper integration with Demo Portal

### Phase 3: Additional Dashboards (Weeks 6-12)
- Implement Domain Dataset Curation dashboard
- Implement Synthetic Data Generation dashboard
- Integrate all dashboards with Demo Portal

### Phase 4: Refinement (Weeks 13-16)
- Conduct user testing and gather feedback
- Implement UI/UX improvements
- Optimize performance
- Enhance documentation

## Documentation

- [Project Requirements Document](./docs/PRD.md) - Detailed project specifications and requirements
- [Architecture Overview](./docs/ARCHITECTURE.md) - System design and component interactions
- [Development Guide](./docs/development-guide/README.md) - Development guidelines and standards
- [User Guide](./docs/USER_GUIDE.md) - End-user documentation

## Contributing

Please see our [Contributing Guidelines](.github/CONTRIBUTING.md) for information on how to contribute to this project. We follow a specific branching strategy to maintain code quality and streamline development.

### Branching Strategy Overview

- `main` - Production-ready code, protected branch
- `develop` - Main development branch, where all features are integrated
- `feature/*` - Development of new features (branch from develop)
- `