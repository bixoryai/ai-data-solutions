import React from 'react';

interface PageProps {
  language: 'en' | 'zh';
}

const translations = {
  en: {
    title: 'Settings',
    subtitle: 'Manage your dashboard preferences and settings.',
  },
  zh: {
    title: '设置',
    subtitle: '管理您的仪表板首选项和设置。',
  },
};

const SettingsPage: React.FC<PageProps> = ({ language }) => {
  const t = translations[language];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
      <p className="text-gray-600">{t.subtitle}</p>
      
      <div className="mt-8">
        {/* Settings content will go here */}
        <p className="text-gray-500">Settings functionality to be implemented.</p>
      </div>
    </div>
  );
};

export default SettingsPage; 