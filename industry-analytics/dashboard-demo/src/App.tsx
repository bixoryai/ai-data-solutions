import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Alerts from './components/Alerts';
import Reports from './components/Reports';
import Settings from './components/Settings';
import translations from './utils/translations';

type Section = 'dashboard' | 'analytics' | 'alerts' | 'reports' | 'settings';

function App() {
  // Initialize language from localStorage if available
  const getInitialLanguage = () => {
    const stored = localStorage.getItem('language');
    return stored === 'zh' ? 'zh' : 'en';
  };
  const [language, setLanguage] = useState<'en' | 'zh'>(getInitialLanguage());
  // Set sidebarOpen default to true (sidebar open by default)
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<Section>('dashboard');

  // Persist language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const toggleSidebar = () => {
    setSidebarOpen((open) => !open);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard translations={translations[language]} />;
      case 'analytics':
        return <Analytics translations={translations[language]} />;
      case 'alerts':
        return <Alerts translations={translations[language]} />;
      case 'reports':
        return <Reports translations={translations[language]} />;
      case 'settings':
        return <Settings translations={translations[language]} />;
      default:
        return <Dashboard translations={translations[language]} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header 
        language={language} 
        changeLanguage={changeLanguage} 
        title={translations[language].operationsDashboard} 
        toggleSidebar={toggleSidebar}
      />
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar overlay for mobile */}
        <div className="sm:hidden">
          {sidebarOpen && (
            <>
              <div className="fixed inset-0 bg-black bg-opacity-40 z-30" onClick={toggleSidebar}></div>
              <Sidebar 
                activeSection={activeSection}
                setActiveSection={(section: Section) => {
                  setActiveSection(section);
                  setSidebarOpen(false); // close sidebar on mobile after selection
                }} 
                language={language}
                isOpen={sidebarOpen}
              />
            </>
          )}
        </div>
        {/* Sidebar static for desktop */}
        <div className="hidden sm:block">
          <Sidebar 
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            language={language}
            isOpen={sidebarOpen}
          />
        </div>
        <main className={`flex-1 overflow-y-auto p-4 pt-24 transition-all duration-300 ${sidebarOpen ? 'sm:ml-64' : ''}`}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App; 