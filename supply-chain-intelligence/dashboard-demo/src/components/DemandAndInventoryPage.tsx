import React from 'react';
import DemandForecastChart from './DemandForecastChart';
import { demandForecastData } from '../data/demandForecastData';
import InventoryLevelsChart from './InventoryLevelsChart';
import { inventoryLevelsData } from '../data/inventoryLevelsData';

interface DemandAndInventoryPageProps {
  language: 'en' | 'zh';
}

const DemandAndInventoryPage: React.FC<DemandAndInventoryPageProps> = ({ language }) => {
  const translations = {
    title: {
      en: 'Demand & Inventory Analytics',
      zh: '需求与库存分析',
    },
    description: {
      en: 'Demand forecasting charts and inventory visualizations will be implemented here.',
      zh: '需求预测图表和库存可视化将在此处实施.',
    },
    content: {
      en: 'Charts and visualizations will be rendered here...',
      zh: '图表和可视化将在此处呈现...',
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{translations.title[language]}</h1>
      <DemandForecastChart data={demandForecastData} language={language} />
      <InventoryLevelsChart data={inventoryLevelsData} language={language} />
    </div>
  );
};

export default DemandAndInventoryPage; 