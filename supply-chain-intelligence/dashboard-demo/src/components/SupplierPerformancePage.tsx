import React from 'react';
import SupplierRadarChart from './SupplierRadarChart';
import { supplierPerformanceData } from '../data/supplierPerformanceData';

interface SupplierPerformancePageProps {
  language: 'en' | 'zh';
}

const SupplierPerformancePage: React.FC<SupplierPerformancePageProps> = ({ language }) => {
  const translations = {
    title: {
      en: 'Supplier Performance Analytics',
      zh: '供应商表现分析',
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{translations.title[language]}</h1>
      <SupplierRadarChart data={supplierPerformanceData} language={language} />
    </div>
  );
};

export default SupplierPerformancePage; 