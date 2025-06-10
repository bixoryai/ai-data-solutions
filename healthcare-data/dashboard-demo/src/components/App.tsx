import React, { useState } from 'react';
import Header from './Header';
import Sidebar, { NavItem, NavItemInfo } from './Sidebar';
import { TrendingUp, Scan, BrainCircuit, SlidersHorizontal, Settings } from 'lucide-react';
import PredictiveAnalyticsPage from './PredictiveAnalyticsPage';
import MedicalImagingPage from './MedicalImagingPage';
import NlpIntelligencePage from './NlpIntelligencePage';
import ResourceSimulatorPage from './ResourceSimulatorPage';
import SettingsPage from './SettingsPage';

const navItems: readonly NavItemInfo[] = [
  { name: 'Predictive Analytics', icon: <TrendingUp /> },
  { name: 'Medical Imaging', icon: <Scan /> },
  { name: 'NLP Intelligence', icon: <BrainCircuit /> },
  { name: 'Resource Simulator', icon: <SlidersHorizontal /> },
  { name: 'Settings', icon: <Settings /> },
];

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState<NavItem>('Predictive Analytics');
  const [language, setLanguage] = useState<'en' | 'zh'>(
    (localStorage.getItem('language') as 'en' | 'zh') || 'en'
  );

  const appTranslations = {
    en: { title: 'Healthcare AI Dashboard' },
    zh: { title: '医疗AI数据看板' },
  };

  const toggleSidebar = () => setSidebarOpen(open => !open);
  const changeLanguage = (lang: 'en' | 'zh') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const renderContent = () => {
    switch (activeNavItem) {
      case 'Predictive Analytics':
        return <PredictiveAnalyticsPage language={language} />;
      case 'Medical Imaging':
        return <MedicalImagingPage language={language} />;
      case 'NLP Intelligence':
        return <NlpIntelligencePage language={language} />;
      case 'Resource Simulator':
        return <ResourceSimulatorPage language={language} />;
      case 'Settings':
        return <SettingsPage language={language} />;
      default:
        return <PredictiveAnalyticsPage language={language} />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header
        language={language}
        changeLanguage={changeLanguage}
        toggleSidebar={toggleSidebar}
        title={appTranslations[language].title}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        language={language}
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
        navItems={navItems}
      />
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
        <div className="pt-20">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App; 