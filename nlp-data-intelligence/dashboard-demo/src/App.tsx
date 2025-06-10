import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar, { NavItem } from './components/Sidebar';
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

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const [activeSection, setActiveSection] = useState<NavItem>('Dashboard');

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

  const renderContent = () => {
    switch (activeSection) {
      case 'Dashboard':
        return <DashboardHome language={language} />;
      case 'Text Analysis':
        return <TextAnalysis language={language} />;
      case 'Search':
        return <Search language={language} />;
      case 'Settings':
        return <SettingsPage language={language} setLanguage={changeLanguage} />;
      default:
        return <DashboardHome language={language} />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header
        language={language}
        changeLanguage={changeLanguage}
        toggleSidebar={toggleSidebar}
        title={translations[language].title}
      />
      <Sidebar
        isOpen={sidebarOpen}
        language={language}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : ''}`}>
        <div className="pt-20">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
