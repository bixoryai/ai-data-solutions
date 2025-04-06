# AI Data Solutions

AI-powered solutions for data processing, analysis, and visualization with a web portal interface.

## Overview

This repository hosts a collection of AI-powered data solutions for various data-related tasks. It includes a central demo portal that showcases multiple individual solution dashboards, providing easy access to these solutions either locally or over the internet.

## Core Components

1. **GitHub Repository Structure**: Organized framework for housing multiple AI data solution projects
2. **Demo Portal Interface**: Web-based entry point to access and showcase all dashboard demos
3. **Individual Solution Dashboards**: Interactive demonstrations of each AI data solution
4. **Presentation Module**: Modern interactive presentation for showcasing AI capabilities

## Solution Offerings

- **Industry-specific AI Analytics**: Advanced analytics dashboards tailored for specific industries (starting with manufacturing)
- **Synthetic Data Generation**: Tools for creating realistic synthetic datasets for testing and development
- **Domain Dataset Curation**: Solutions for curating and managing domain-specific datasets

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
- `hotfix/*` - Emergency fixes for production (branch from main)
- `docs/*` - Documentation updates (branch from develop)

For complete details on our branching workflow, please see the [Contributing Guidelines](.github/CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Presentation Modules

The repository includes interactive presentation modules for showcasing our AI data solutions to clients and stakeholders. These presentations provide comprehensive overviews of our technology offerings and business value propositions.

### Available Presentations

1. **Industry Analytics Presentation**
   - Overview of industry-specific AI analytics capabilities
   - Manufacturing industry use cases and demonstrations
   - Technical architecture and implementation details
   - Business value and ROI analysis

2. **Synthetic Data Generator Presentation**
   - Executive summary and business case for synthetic data
   - Technical explanation of synthetic data generation methods
   - Market analysis and competitive landscape
   - Implementation roadmap and technology overview
   - Use cases across financial services, healthcare, and retail

### Technology Stack
- **React**: Frontend library for building the interactive presentation UI
- **TypeScript**: Type-safe JavaScript for robust application development
- **Tailwind CSS**: Utility-first CSS framework for consistent styling
- **Lucide Icons**: Modern icon library for clean visual elements

### Design Approach
All presentations follow a modern, sleek dark theme that reflects futuristic AI technology:
- **Dark Background**: Deep gradient background with subtle grid patterns
- **High Contrast Text**: Bright yellow titles with white content for readability
- **Animated Elements**: Subtle floating animations for visual engagement
- **Glassmorphism**: Semi-transparent card elements with blur effects
- **Responsive Layout**: Adapts to different screen sizes while maintaining visual integrity

### Multilingual Support
Both presentations support seamless switching between English and Chinese languages:
- Language toggle accessible from any slide
- Content dynamically updates based on selected language
- Maintains consistent layout and styling across languages

### Implementation Details
- Each presentation is structured as a series of slides with navigation controls
- Slides are implemented as React components with their own content and styling
- Navigation includes previous/next controls and a home button
- Progress indicator shows current position in the presentation
- Company branding (Bixory AI) is prominently displayed throughout

### Development Guidelines
- Maintain the established color scheme (dark background, yellow titles, light content)
- Keep animations subtle and professional
- Ensure all text has sufficient contrast with backgrounds
- Follow React best practices with functional components
- Maintain consistent styling between different presentation modules

The presentation modules are based on the company's branding guidelines and industry-standard presentation principles for technical demonstrations.
