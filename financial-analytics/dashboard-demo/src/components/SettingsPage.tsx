import React from 'react';

interface SettingsPageProps {
  language: 'en' | 'zh';
}

const SettingsPage: React.FC<SettingsPageProps> = ({ language }) => {
  const translations = {
    title: { en: 'Settings', zh: '设置' },
    content: { en: 'User preferences and notification settings will be managed here.', zh: '用户偏好和通知设置将在此处管理。' },
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

export default SettingsPage; 