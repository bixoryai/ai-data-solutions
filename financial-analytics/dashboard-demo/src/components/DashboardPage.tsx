import React from 'react';

interface DashboardPageProps {
  language: 'en' | 'zh';
}

const DashboardPage: React.FC<DashboardPageProps> = ({ language }) => {
  const translations = {
    title: { en: 'Financial Dashboard', zh: '金融仪表板' },
    content: { en: 'Main dashboard content goes here.', zh: '主仪表板内容在此处。' },
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{translations.title[language]}</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p>{translations.content[language]}</p>
      </div>
    </div>
  );
};

export default DashboardPage; 