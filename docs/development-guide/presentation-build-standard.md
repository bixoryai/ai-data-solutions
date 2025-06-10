# Presentation Build Standard

This guide establishes the standardized approach for implementing presentation components across all AI Data Solutions. The Predictive Maintenance presentation implementation serves as the "gold standard" reference that all other solutions should follow.

## Purpose

- Create consistent UI/UX across all presentation components
- Ensure bilingual support (English/Chinese) with standardized implementation
- Maintain uniform navigation, styling, and structure
- Streamline development of new presentation components

## Directory Structure

Every solution's presentation component should follow this structure:

```
solution-name/presentation/
├── public/                    # Static assets
│   ├── index.html             # HTML entry point
│   ├── manifest.json          # Web app manifest
│   └── images/                # Static images
├── src/                       # Source code
│   ├── components/            # React components
│   │   ├── slides/            # Individual slide components
│   │   │   ├── IntroductionSlide.tsx
│   │   │   ├── BusinessChallengesSlide.tsx
│   │   │   └── ...            # Other slide components
│   ├── App.tsx                # Main application component
│   ├── index.tsx              # Application entry point
│   └── index.css              # Global styles
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## Technology Stack

- **React**: Frontend library for building the UI
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For styling components
- **Lucide Icons**: For consistent iconography across presentations

## Standard Implementation Pattern

### App.tsx

This is the main component that sets up the slide deck, navigation, and language support:

```tsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, Globe } from 'lucide-react';
// Import slide components
import IntroductionSlide from './components/slides/IntroductionSlide';
import BusinessChallengesSlide from './components/slides/BusinessChallengesSlide';
// ... import other slides

// Translations for multilingual support
const translations = {
  en: {
    title: "Solution Title in English",
    // ... other translations
  },
  zh: {
    title: "Solution Title in Chinese",
    // ... other translations
  }
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  
  // Initialize language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('presentation_language') as 'en' | 'zh' || 'en';
    setLanguage(savedLang);
  }, []);
  
  // Function to change language
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('presentation_language', newLanguage);
  };
  
  // Translate function
  const t = (key: string) => {
    if (key === 'language') return language;
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  // Define slide components with titles
  const slides = [
    { component: IntroductionSlide, title: t('introduction') },
    { component: BusinessChallengesSlide, title: t('businessChallenges') },
    // ... other slides
  ];

  // Navigation functions
  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToHome = () => {
    // Get the base URL for different environments
    const hostname = window.location.hostname;
    
    if (hostname === 'ai-data-solutions.bixory.ai') {
      // Custom domain - go to root
      window.location.href = '/';
      return;
    } else if (hostname.includes('github.io')) {
      // GitHub Pages - include repository name
      window.location.href = '/ai-data-solutions/';
      return;
    } else {
      // Local development - go to parent directory
      const currentPath = window.location.pathname;
      const parentPath = currentPath.substring(0, currentPath.indexOf('/[solution-name]'));
      window.location.href = parentPath || '/';
      return;
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center relative">
        <div className="flex items-center">
          <a 
            href="#"
            onClick={(e) => { e.preventDefault(); goToHome(); }}
            className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Go to home page"
          >
            <Home size={24} className="text-blue-600" />
          </a>
        </div>

        {/* Centered Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-xl font-bold text-blue-800">{t('title')}</h1>
          <p className="text-sm text-gray-600">{slides[currentSlide].title}</p>
        </div>

        <div className="flex items-center">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 rounded border border-gray-300 text-sm font-medium hover:bg-gray-50 flex items-center"
          >
            <Globe size={16} className="mr-1" />
            {language === 'en' ? '中文' : 'English'}
          </button>
        </div>
      </header>

      {/* Navigation Controls - above the main content */}
      <div className="bg-white shadow-sm py-3 px-6 flex justify-between items-center">
        <button
          onClick={goToPreviousSlide}
          disabled={currentSlide === 0}
          className={`flex items-center px-4 py-2 rounded-md ${
            currentSlide === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-blue-600 hover:bg-blue-50'
          }`}
        >
          <ChevronLeft size={20} className="mr-1" />
          {t('previous')}
        </button>
        <div className="text-sm text-gray-500">
          {t('slide')} {currentSlide + 1} {t('of')} {slides.length}
        </div>
        <button
          onClick={goToNextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center px-4 py-2 rounded-md ${
            currentSlide === slides.length - 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-blue-600 hover:bg-blue-50'
          }`}
        >
          {t('next')}
          <ChevronRight size={20} className="ml-1" />
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
          <CurrentSlideComponent t={t} />
        </div>
      </main>
    </div>
  );
}

export default App;
```

### Slide Component Template

Each slide component should follow this pattern:

```tsx
import React from 'react';
// Import any required icons or assets

interface SlideProps {
  t: (key: string) => string; // Translation function
}

const SlideComponentName: React.FC<SlideProps> = ({ t }) => {
  return (
    <div className="slide-container">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">{t('slideTitle')}</h2>
      
      {/* Slide content here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">{t('section1Title')}</h3>
          <p className="text-gray-700">{t('section1Content')}</p>
        </div>
        
        {/* Additional content */}
      </div>
    </div>
  );
};

export default SlideComponentName;
```

## Standard Features

### Language Toggle

- All presentations must support both English and Chinese languages
- Language preference is stored in localStorage with the key `presentation_language`
- All text content must be defined in translation objects
- Use the translation function `t()` for all displayed text

### Navigation

- Previous/Next buttons for slide navigation
- Home button to return to the main portal
- Slide counter showing current position (e.g., "Slide 3 of 10")

### Styling

- Light theme with blue accents (primary color: `#3b82f6`)
- Clean, professional design with appropriate whitespace
- Responsive layout that works on all screen sizes
- Consistent typography:
  - Headings: `text-blue-800` with appropriate font sizes
  - Body text: `text-gray-700`
  - Accent text: `text-blue-600`

## Common Slide Types

The following slide types should be included in most presentations:

1. **Introduction Slide**: Overview of the solution and its value proposition
2. **Business Challenges**: Problems the solution addresses
3. **AI Solution**: How the solution uses AI to solve these problems
4. **Technology Overview**: Technical details of the implementation
5. **Implementation Process**: Steps to implement the solution
6. **Case Studies**: Real-world examples and results
7. **ROI & Benefits**: Business value and return on investment
8. **Next Steps**: Call to action and implementation roadmap

## Implementation Process

When building a new presentation component:

1. Create the directory structure following the standard
2. Copy the template files from this guide
3. Implement the slides based on the content document from `/client-presentations`
4. Ensure all text is properly internationalized in both English and Chinese
5. Test navigation, language switching, and responsiveness
6. Build the presentation and link it from the main portal

## Accessibility and Performance

- Ensure all interactive elements have appropriate ARIA attributes
- Optimize image sizes for web delivery
- Lazy-load slides when possible to improve performance
- Ensure good contrast ratios for text readability

## Examples and Resources

For reference implementation, examine the Predictive Maintenance presentation:
- Source: `/predictive-maintenance/presentation/`
- Live demo: Access through the "About" button on the Predictive Maintenance card in the main portal

---

This standard ensures a consistent, high-quality experience across all presentation components while allowing for solution-specific content and messaging. 