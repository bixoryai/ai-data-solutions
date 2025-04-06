import React from 'react';

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
    <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-yellow-400 mb-6">{title}</h1>
      <h2 className="text-3xl mb-12 text-gray-300">{subtitle}</h2>
      
      <div className="mt-16 bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700">
        <p className="text-2xl mb-2">{company}</p>
        <p className="text-xl text-gray-400">{date}</p>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <div className="animate-bounce bg-primary-600 p-2 w-10 h-10 ring-1 ring-primary-400 shadow-lg rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;
