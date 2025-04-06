import React from 'react';
import { Database, FileSpreadsheet, Shield, BarChart2 } from 'lucide-react';

interface TitleSlideProps {
  language: 'en' | 'zh';
}

const TitleSlide: React.FC<TitleSlideProps> = ({ language }) => {
  const content = {
    en: {
      title: 'AI Synthetic Data Generation',
      subtitle: 'Business Plan & Solution Demo',
      company: 'BixoryAI',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    },
    zh: {
      title: 'AI合成数据生成',
      subtitle: '商业计划与方案演示',
      company: 'BixoryAI',
      date: new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  };

  const { title, subtitle, company, date } = content[language];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="flex justify-center mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-900 bg-opacity-50 p-6 rounded-lg flex items-center justify-center">
            <Database size={48} className="text-blue-400" />
          </div>
          <div className="bg-green-900 bg-opacity-50 p-6 rounded-lg flex items-center justify-center">
            <FileSpreadsheet size={48} className="text-green-400" />
          </div>
          <div className="bg-purple-900 bg-opacity-50 p-6 rounded-lg flex items-center justify-center">
            <Shield size={48} className="text-purple-400" />
          </div>
          <div className="bg-amber-900 bg-opacity-50 p-6 rounded-lg flex items-center justify-center">
            <BarChart2 size={48} className="text-amber-400" />
          </div>
        </div>
      </div>
      
      <h1 className="text-5xl font-bold text-blue-400 mb-4">
        {title}
      </h1>
      <h2 className="text-2xl font-semibold text-blue-300 mb-8">
        {subtitle}
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl">
        {company} • {date}
      </p>
    </div>
  );
};

export default TitleSlide;
