import React, { useState, useEffect } from 'react';
import { Home, BarChart3, Database, LineChart, Settings, Users, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DomainSelection from './components/DomainSelection';
import DataVisualization from './components/DataVisualization';
import DataCleaning from './components/DataCleaning';
import AIReadyPreparation from './components/AIReadyPreparation';
import ComplianceTools from './components/ComplianceTools';
import CollaborationWorkflow from './components/CollaborationWorkflow';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Define available languages
type Language = 'en' | 'zh';
type ActiveSection = 'domain-selection' | 'data-visualization' | 'data-cleaning' | 'ai-ready-preparation' | 'compliance-tools' | 'collaboration-workflow';
type IndustryDomain = 'healthcare' | 'finance' | 'manufacturing';

interface NavItem {
  id: ActiveSection;
  label: {
    en: string;
    zh: string;
  };
  icon: React.ReactNode;
}

interface SidebarProps {
  navItems: NavItem[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  language: 'en' | 'zh';
  isOpen: boolean;
  goToHome: () => void;
}

const App: React.FC = () => {
  const getInitialLanguage = () => {
    const stored = localStorage.getItem('language');
    return stored === 'zh' ? 'zh' : 'en';
  };
  const [language, setLanguage] = useState<Language>(getInitialLanguage());
  const [activeSection, setActiveSection] = useState<ActiveSection>('domain-selection');
  const [selectedDomain, setSelectedDomain] = useState<IndustryDomain>('healthcare');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Navigation items for sidebar
  const navItems: NavItem[] = [
    { 
      id: 'domain-selection', 
      label: { 
        en: 'Domain Selection', 
        zh: '领域选择' 
      }, 
      icon: <Database size={20} /> 
    },
    { 
      id: 'data-visualization', 
      label: { 
        en: 'Data Visualization', 
        zh: '数据可视化' 
      }, 
      icon: <BarChart3 size={20} /> 
    },
    { 
      id: 'data-cleaning', 
      label: { 
        en: 'Data Cleaning', 
        zh: '数据清洗' 
      }, 
      icon: <Settings size={20} /> 
    },
    { 
      id: 'ai-ready-preparation', 
      label: { 
        en: 'AI-Ready Preparation', 
        zh: 'AI就绪准备' 
      }, 
      icon: <LineChart size={20} /> 
    },
    { 
      id: 'compliance-tools', 
      label: { 
        en: 'Compliance Tools', 
        zh: '合规工具' 
      }, 
      icon: <Users size={20} /> 
    },
    { 
      id: 'collaboration-workflow', 
      label: { 
        en: 'Collaboration Workflow', 
        zh: '协作工作流' 
      }, 
      icon: <Download size={20} /> 
    }
  ];

  // Function to get the base URL for different environments
  const getBaseUrl = () => {
    const hostname = window.location.hostname;
    // Check if running on custom domain
    if (hostname === 'ai-data-solutions.bixory.ai') {
      return '';
    }
    // Check if running on GitHub Pages
    else if (hostname.includes('github.io')) {
      return '/ai-data-solutions';
    }
    // Local development
    return '';
  };

  // Function to handle going back to the main portal
  const goToHome = () => {
    window.location.href = `${getBaseUrl()}/index.html`;
  };

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  // Function to handle section changes with loading state
  const handleSectionChange = (section: string) => {
    setIsLoading(true);
    setActiveSection(section as ActiveSection);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  // Persist language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Render active section content
  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner language={language} />;
    }

    return (
      <ErrorBoundary language={language}>
        {(() => {
          switch (activeSection) {
            case 'domain-selection':
              return <DomainSelection 
                language={language} 
                selectedDomain={selectedDomain}
                setSelectedDomain={setSelectedDomain}
              />;
            case 'data-visualization':
              return <DataVisualization language={language} selectedDomain={selectedDomain} />;
            case 'data-cleaning':
              return <DataCleaning language={language} selectedDomain={selectedDomain} />;
            case 'ai-ready-preparation':
              return <AIReadyPreparation language={language} selectedDomain={selectedDomain} />;
            case 'compliance-tools':
              return <ComplianceTools language={language} selectedDomain={selectedDomain} />;
            case 'collaboration-workflow':
              return <CollaborationWorkflow language={language} selectedDomain={selectedDomain} />;
            default:
              return <DomainSelection 
                language={language} 
                selectedDomain={selectedDomain}
                setSelectedDomain={setSelectedDomain}
              />;
          }
        })()}
      </ErrorBoundary>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header 
        language={language} 
        toggleLanguage={toggleLanguage} 
        goToHome={goToHome}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        selectedDomain={selectedDomain}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          navItems={navItems} 
          activeSection={activeSection} 
          setActiveSection={handleSectionChange} 
          language={language}
          isOpen={isSidebarOpen}
          goToHome={goToHome}
        />
        <main 
          className="flex-1 w-full overflow-y-auto p-6 transition-all duration-300"
          style={{ height: '100vh' }}
          role="main"
          aria-label={language === 'en' ? 'Main Content' : '主要内容'}
        >
          <div className="container mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
