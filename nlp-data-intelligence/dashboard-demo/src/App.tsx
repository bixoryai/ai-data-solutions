import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TextAnalysis from './components/TextAnalysis';
import DashboardHome from './components/DashboardHome';
import Search from './components/Search';
import SettingsPage from './components/SettingsPage';

const translations = {
  en: {
    title: 'NLP Data Intelligence',
    subtitle: 'Interactive Demo',
  },
  zh: {
    title: 'NLP数据智能',
    subtitle: '交互式演示',
  },
};

type Section = 'dashboard' | 'text-analysis' | 'search' | 'settings';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const [activeSection, setActiveSection] = useState<Section>('dashboard');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'zh')) {
      setLanguage(storedLanguage);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const changeLanguage = (lang: 'en' | 'zh') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const goToHome = () => {
    window.location.href = '/';
  };
  
  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardHome language={language} />;
      case 'text-analysis':
        return <TextAnalysis language={language} />;
      case 'search':
        return <Search language={language} />;
      case 'settings':
        return <SettingsPage language={language} setLanguage={changeLanguage} />;
      default:
        return <DashboardHome language={language} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        language={language}
        isOpen={sidebarOpen}
        goToHome={goToHome}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          language={language}
          toggleLanguage={() => changeLanguage(language === 'en' ? 'zh' : 'en')}
          title={translations[language].title}
          subtitle={translations[language].subtitle}
          toggleSidebar={toggleSidebar}
          goToHome={goToHome}
        />
        <main className={`flex-1 overflow-y-auto p-6 pt-24 transition-all duration-300 ${sidebarOpen ? 'ml-64' : ''}`}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
