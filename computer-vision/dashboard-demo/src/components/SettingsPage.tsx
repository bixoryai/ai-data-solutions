import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface SettingsPageProps {
  language: 'en' | 'zh';
}

const translations = {
  pageTitle: { en: 'Settings', zh: '设置' },
  theme: { en: 'Appearance', zh: '外观' },
  themeDesc: { en: 'Choose your preferred theme for the dashboard.', zh: '为仪表盘选择您喜欢的主题。' },
  light: { en: 'Light', zh: '浅色' },
  dark: { en: 'Dark', zh: '深色' },
  data: { en: 'Data Simulation', zh: '数据模拟' },
  dataDesc: { en: 'Adjust the speed of data generation across the demo.', zh: '调整整个演示中的数据生成速度。' },
  save: { en: 'Save Changes', zh: '保存更改' },
};

const SettingsPage: React.FC<SettingsPageProps> = ({ language }) => {
  const t = (key: keyof typeof translations) => translations[key][language];

  // In a real app, this state would be managed by a global context or state management library
  const [theme, setTheme] = React.useState('light');

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{t('pageTitle')}</h1>

      <div className="max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
        
        {/* Appearance Settings */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{t('theme')}</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">{t('themeDesc')}</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => setTheme('light')}
              className={`flex items-center justify-center w-full p-4 rounded-lg border-2 transition-all ${
                theme === 'light' 
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/50 ring-2 ring-indigo-500' 
                  : 'border-gray-300 dark:border-gray-600 hover:border-indigo-400'
              }`}
            >
              <Sun className="mr-2 text-yellow-500" />
              {t('light')}
            </button>
            <button
               onClick={() => setTheme('dark')}
               className={`flex items-center justify-center w-full p-4 rounded-lg border-2 transition-all ${
                theme === 'dark' 
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/50 ring-2 ring-indigo-500' 
                  : 'border-gray-300 dark:border-gray-600 hover:border-indigo-400'
              }`}
            >
              <Moon className="mr-2 text-indigo-400" />
              {t('dark')}
            </button>
          </div>
        </div>

        {/* Data Simulation Settings */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{t('data')}</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">{t('dataDesc')}</p>
          <div className="mt-4">
            <input
              type="range"
              min="1"
              max="3"
              step="1"
              defaultValue="2"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
             <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 px-1">
              <span>Slow</span>
              <span>Normal</span>
              <span>Fast</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 flex justify-end">
            <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                {t('save')}
            </button>
        </div>

      </div>
    </div>
  );
};

export default SettingsPage; 