import React from 'react';

interface SettingsPageProps {
  language: 'en' | 'zh';
  setLanguage: (language: 'en' | 'zh') => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ language, setLanguage }) => {
  const translations = {
    en: {
      title: 'Settings',
      language: 'Language',
      english: 'English',
      chinese: 'Chinese',
    },
    zh: {
      title: '设置',
      language: '语言',
      english: '英语',
      chinese: '中文',
    },
  };

  const currentTranslations = translations[language];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{currentTranslations.title}</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-lg font-medium text-gray-700">{currentTranslations.language}</label>
          <div className="mt-2 flex space-x-4">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-md ${
                language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {currentTranslations.english}
            </button>
            <button
              onClick={() => setLanguage('zh')}
              className={`px-4 py-2 rounded-md ${
                language === 'zh' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {currentTranslations.chinese}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 