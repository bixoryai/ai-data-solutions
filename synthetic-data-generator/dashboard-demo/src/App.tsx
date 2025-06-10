import React, { useState, useEffect } from 'react';
import { Home, BarChart3, Database, LineChart, Settings, Users, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DataProfiler from './components/DataProfiler';
import GenerationMethods from './components/GenerationMethods';
import Visualization from './components/Visualization';
import UseCaseTemplates from './components/UseCaseTemplates';
import PrivacyAnalysis from './components/PrivacyAnalysis';
import ExportOptions from './components/ExportOptions';

// Define available languages
type Language = 'en' | 'zh';

// Define navigation items
type NavItem = {
  id: string;
  label: {
    en: string;
    zh: string;
  };
  icon: React.ReactNode;
};

const App: React.FC = () => {
  const getInitialLanguage = () => {
    const stored = localStorage.getItem('language');
    return stored === 'zh' ? 'zh' : 'en';
  };
  const [language, setLanguage] = useState<Language>(getInitialLanguage());
  const [activeSection, setActiveSection] = useState('data-profiler');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Navigation items for sidebar
  const navItems: NavItem[] = [
    { 
      id: 'data-profiler', 
      label: { 
        en: 'Data Profile', 
        zh: '数据配置' 
      }, 
      icon: <Database size={20} /> 
    },
    { 
      id: 'generation-methods', 
      label: { 
        en: 'Generation Methods', 
        zh: '生成方法' 
      }, 
      icon: <Settings size={20} /> 
    },
    { 
      id: 'visualization', 
      label: { 
        en: 'Visualization', 
        zh: '数据可视化' 
      }, 
      icon: <BarChart3 size={20} /> 
    },
    { 
      id: 'use-case-templates', 
      label: { 
        en: 'Use Case Templates', 
        zh: '用例模板' 
      }, 
      icon: <Users size={20} /> 
    },
    { 
      id: 'privacy-analysis', 
      label: { 
        en: 'Privacy Analysis', 
        zh: '隐私分析' 
      }, 
      icon: <LineChart size={20} /> 
    },
    { 
      id: 'export-options', 
      label: { 
        en: 'Export Options', 
        zh: '导出选项' 
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

  // Persist language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Render active section content
  const renderContent = () => {
    switch (activeSection) {
      case 'data-profiler':
        return <DataProfiler language={language} />;
      case 'generation-methods':
        return <GenerationMethods language={language} />;
      case 'visualization':
        return <Visualization language={language} />;
      case 'use-case-templates':
        return <UseCaseTemplates language={language} />;
      case 'privacy-analysis':
        return <PrivacyAnalysis language={language} />;
      case 'export-options':
        return <ExportOptions language={language} />;
      default:
        return <DataProfiler language={language} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header 
        language={language} 
        toggleLanguage={toggleLanguage} 
        goToHome={goToHome}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar overlay for mobile */}
        <div className="sm:hidden">
          {isSidebarOpen && (
            <>
              <div className="fixed inset-0 bg-black bg-opacity-40 z-30" onClick={() => setIsSidebarOpen(false)}></div>
              <Sidebar 
                navItems={navItems}
                activeSection={activeSection}
                setActiveSection={(section: string) => {
                  setActiveSection(section);
                  setIsSidebarOpen(false); // close sidebar on mobile after selection
                }}
                language={language}
                isOpen={isSidebarOpen}
                goToHome={goToHome}
              />
            </>
          )}
        </div>
        {/* Sidebar static for desktop */}
        <div className="hidden sm:block">
          <Sidebar 
            navItems={navItems}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            language={language}
            isOpen={isSidebarOpen}
            goToHome={goToHome}
          />
        </div>
        <main className={`flex-1 overflow-y-auto p-4 transition-all duration-300 ${isSidebarOpen ? 'sm:ml-64' : ''}`}>
          <div className="container mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
