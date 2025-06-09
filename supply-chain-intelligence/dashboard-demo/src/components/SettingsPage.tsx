import React, { useState } from 'react';

interface SettingsPageProps {
  language: 'en' | 'zh';
}

const SettingsPage: React.FC<SettingsPageProps> = ({ language }) => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [theme, setTheme] = useState('light');

  const translations = {
    title: { en: 'Settings', zh: '设置' },
    notifications: { en: 'Notification Preferences', zh: '通知偏好' },
    email: { en: 'Email Alerts', zh: '邮件提醒' },
    sms: { en: 'SMS Alerts', zh: '短信提醒' },
    theme: { en: 'Appearance', zh: '外观' },
    light: { en: 'Light Mode', zh: '浅色模式' },
    dark: { en: 'Dark Mode', zh: '深色模式' },
    save: { en: 'Save Changes', zh: '保存更改' },
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{translations.title[language]}</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">{translations.notifications[language]}</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>{translations.email[language]}</span>
            <button
              onClick={() => setEmailNotifications(!emailNotifications)}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors ${
                emailNotifications ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
                emailNotifications ? 'translate-x-6' : ''
              }`} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span>{translations.sms[language]}</span>
            <button
              onClick={() => setSmsNotifications(!smsNotifications)}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors ${
                smsNotifications ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
                smsNotifications ? 'translate-x-6' : ''
              }`} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">{translations.theme[language]}</h2>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === 'light'}
              onChange={() => setTheme('light')}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="ml-2">{translations.light[language]}</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === 'dark'}
              onChange={() => setTheme('dark')}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="ml-2">{translations.dark[language]}</span>
          </label>
        </div>
      </div>
      
      <div className="mt-6">
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
          {translations.save[language]}
        </button>
      </div>
    </div>
  );
};

export default SettingsPage; 