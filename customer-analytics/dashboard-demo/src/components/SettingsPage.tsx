import React, { useState, useEffect } from 'react';
import { Sun, Moon, Languages } from 'lucide-react';

interface SettingsPageProps {
  language: 'en' | 'zh';
  setLanguage: (lang: 'en' | 'zh') => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ language, setLanguage }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const translations = {
    en: {
      title: 'Settings',
      description: 'Manage your application settings and preferences.',
      language: 'Language',
      theme: 'Theme',
      light: 'Light',
      dark: 'Dark',
    },
    zh: {
      title: '设置',
      description: '管理您的应用程序设置和首选项。',
      language: '语言',
      theme: '主题',
      light: '浅色',
      dark: '深色',
    },
  };
  const t = translations[language];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2 dark:text-white">{t.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">{t.description}</p>

      <div className="space-y-8 max-w-md">
        {/* Language Setting */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 flex items-center dark:text-white">
            <Languages className="w-6 h-6 mr-3 text-gray-500" />
            {t.language}
          </h3>
          <div className="flex space-x-4">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-lg transition-colors ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'}`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('zh')}
              className={`px-4 py-2 rounded-lg transition-colors ${language === 'zh' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'}`}
            >
              中文
            </button>
          </div>
        </div>

        {/* Theme Setting */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 flex items-center dark:text-white">
            {theme === 'light' ? <Sun className="w-6 h-6 mr-3 text-yellow-500" /> : <Moon className="w-6 h-6 mr-3 text-indigo-400" />}
            {t.theme}
          </h3>
          <div className="flex space-x-4">
            <button
              onClick={() => setTheme('light')}
              className={`px-4 py-2 rounded-lg transition-colors w-24 ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'}`}
            >
              {t.light}
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`px-4 py-2 rounded-lg transition-colors w-24 ${theme === 'dark' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'}`}
            >
              {t.dark}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 