import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EquipmentMonitoring from './components/EquipmentMonitoring';
import SensorAnalytics from './components/SensorAnalytics';
import MaintenanceScheduling from './components/MaintenanceScheduling';
import FailurePrediction from './components/FailurePrediction';
import CostOptimization from './components/CostOptimization';
import AnomalyDetection from './components/AnomalyDetection';

// Define types for active section and industry sector
type ActiveSection = 'equipment-monitoring' | 'sensor-analytics' | 'maintenance-scheduling' | 'failure-prediction' | 'cost-optimization' | 'anomaly-detection';
type IndustrySector = 'manufacturing' | 'energy' | 'transportation';

const App: React.FC = () => {
  // State for active section and language
  const [activeSection, setActiveSection] = useState<ActiveSection>('equipment-monitoring');
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const [selectedSector, setSelectedSector] = useState<IndustrySector>('manufacturing');

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

  // Function to go back to the main portal
  const goToHome = () => {
    // Handle navigation based on environment
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
      const parentPath = currentPath.substring(0, currentPath.indexOf('/predictive-maintenance'));
      window.location.href = parentPath || '/';
      return;
    }
  };

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  // Render the active section component
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'equipment-monitoring':
        return <EquipmentMonitoring language={language} selectedSector={selectedSector} setSelectedSector={setSelectedSector} />;
      case 'sensor-analytics':
        return <SensorAnalytics language={language} selectedSector={selectedSector} />;
      case 'maintenance-scheduling':
        return <MaintenanceScheduling language={language} selectedSector={selectedSector} />;
      case 'failure-prediction':
        return <FailurePrediction language={language} selectedSector={selectedSector} />;
      case 'cost-optimization':
        return <CostOptimization language={language} selectedSector={selectedSector} />;
      case 'anomaly-detection':
        return <AnomalyDetection language={language} selectedSector={selectedSector} />;
      default:
        return <EquipmentMonitoring language={language} selectedSector={selectedSector} setSelectedSector={setSelectedSector} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header 
        language={language} 
        toggleLanguage={toggleLanguage} 
        goToHome={goToHome}
        selectedSector={selectedSector}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          language={language}
          goToHome={goToHome}
        />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">
            {renderActiveSection()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App; 