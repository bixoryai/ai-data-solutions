import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DomainSelection from './components/DomainSelection';
import DataCleaning from './components/DataCleaning';
import DataVisualization from './components/DataVisualization';
import ComplianceTools from './components/ComplianceTools';
import AIReadyPreparation from './components/AIReadyPreparation';
import CollaborationWorkflow from './components/CollaborationWorkflow';

// Define types for active section and industry domain
type ActiveSection = 'domain-selection' | 'data-cleaning' | 'data-visualization' | 'compliance-tools' | 'ai-ready' | 'collaboration';
type IndustryDomain = 'healthcare' | 'finance' | 'manufacturing';

const App: React.FC = () => {
  // State for active section and language
  const [activeSection, setActiveSection] = useState<ActiveSection>('domain-selection');
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const [selectedDomain, setSelectedDomain] = useState<IndustryDomain>('healthcare');

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
      const parentPath = currentPath.substring(0, currentPath.indexOf('/domain-dataset-curation'));
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
      case 'domain-selection':
        return <DomainSelection language={language} selectedDomain={selectedDomain} setSelectedDomain={setSelectedDomain} />;
      case 'data-cleaning':
        return <DataCleaning language={language} selectedDomain={selectedDomain} />;
      case 'data-visualization':
        return <DataVisualization language={language} selectedDomain={selectedDomain} />;
      case 'compliance-tools':
        return <ComplianceTools language={language} selectedDomain={selectedDomain} />;
      case 'ai-ready':
        return <AIReadyPreparation language={language} selectedDomain={selectedDomain} />;
      case 'collaboration':
        return <CollaborationWorkflow language={language} selectedDomain={selectedDomain} />;
      default:
        return <DomainSelection language={language} selectedDomain={selectedDomain} setSelectedDomain={setSelectedDomain} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header 
        language={language} 
        toggleLanguage={toggleLanguage} 
        goToHome={goToHome}
        selectedDomain={selectedDomain}
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
