import React from 'react';
import { Database, FileSpreadsheet, Shield, BarChart4 } from 'lucide-react';

interface TitleSlideProps {
  language: 'en' | 'zh';
}

const TitleSlide: React.FC<TitleSlideProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Domain Dataset Curation',
      subtitle: 'Business Proposal & Plan',
      description: 'A specialized service for collecting, organizing, cleaning, and enhancing industry-specific data for AI training and analytics.'
    },
    zh: {
      title: '领域数据集策划',
      subtitle: '商业提案与计划',
      description: '为AI训练和分析收集、组织、清洗和增强行业特定数据的专业服务。'
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="flex justify-center mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-100 p-6 rounded-lg flex items-center justify-center">
            <Database size={48} className="text-blue-600" />
          </div>
          <div className="bg-green-100 p-6 rounded-lg flex items-center justify-center">
            <FileSpreadsheet size={48} className="text-green-600" />
          </div>
          <div className="bg-purple-100 p-6 rounded-lg flex items-center justify-center">
            <Shield size={48} className="text-purple-600" />
          </div>
          <div className="bg-amber-100 p-6 rounded-lg flex items-center justify-center">
            <BarChart4 size={48} className="text-amber-600" />
          </div>
        </div>
      </div>
      
      <h1 className="text-5xl font-bold text-blue-800 mb-4">
        {content[language].title}
      </h1>
      <h2 className="text-2xl font-semibold text-blue-600 mb-8">
        {content[language].subtitle}
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl">
        {content[language].description}
      </p>
    </div>
  );
};

export default TitleSlide;
