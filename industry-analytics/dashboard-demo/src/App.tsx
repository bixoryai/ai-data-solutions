import React, { useState } from 'react';
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
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const [activeSection, setActiveSection] = useState<Section>('dashboard');

  const changeLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
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
      <Header language={language} changeLanguage={changeLanguage} title={translations[language].operationsDashboard} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          activeSection={activeSection}
          setActiveSection={(section: Section) => setActiveSection(section)} 
          language={language}
          translations={translations[language]}
        />
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App; 