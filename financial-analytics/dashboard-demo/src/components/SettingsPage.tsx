import React, { useState } from "react";
import { Bell, Moon, Globe, Shield } from "lucide-react";

interface SettingsPageProps {
  language: "en" | "zh";
}

const translations = {
  title: { en: "Settings", zh: "设置" },
  appearance: { en: "Appearance", zh: "外观" },
  darkMode: { en: "Dark Mode", zh: "深色模式" },
  darkModeDesc: { en: "Enable dark mode for a better viewing experience", zh: "启用深色模式以获得更好的体验" },
  notifications: { en: "Notifications", zh: "通知" },
  notificationsDesc: { en: "Receive alerts for important updates", zh: "接收重要更新提醒" },
  security: { en: "Security", zh: "安全" },
  twoFactor: { en: "Two-Factor Authentication", zh: "双重认证" },
  twoFactorDesc: { en: "Add an extra layer of security", zh: "添加额外的安全层" },
  language: { en: "Language", zh: "语言" },
  languageDesc: { en: "Choose your preferred language", zh: "选择您的语言" },
  english: { en: "English", zh: "英语" },
  chinese: { en: "Chinese", zh: "中文" },
  save: { en: "Save Changes", zh: "保存更改" },
  saveSuccess: { en: "Settings saved successfully!", zh: "设置保存成功！" }
};

const SettingsPage: React.FC<SettingsPageProps> = ({ language }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [currentLang, setCurrentLang] = useState(language);

  const t = (key: keyof typeof translations) => translations[key][language];

  const handleSave = () => {
    alert(t("saveSuccess"));
  };

  const ToggleSwitch = ({ checked, onChange }: { checked: boolean; onChange: (checked: boolean) => void }) => (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
    </label>
  );

  const SettingSection = ({ icon: Icon, title, description, children }: any) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        <Icon className="mr-2" size={20} />
        {title}
      </h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
        {children}
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">{t("title")}</h1>
      
      <div className="space-y-6">
        <SettingSection
          icon={Moon}
          title={t("darkMode")}
          description={t("darkModeDesc")}
        >
          <ToggleSwitch checked={darkMode} onChange={setDarkMode} />
        </SettingSection>

        <SettingSection
          icon={Bell}
          title={t("notifications")}
          description={t("notificationsDesc")}
        >
          <ToggleSwitch checked={notifications} onChange={setNotifications} />
        </SettingSection>

        <SettingSection
          icon={Shield}
          title={t("twoFactor")}
          description={t("twoFactorDesc")}
        >
          <ToggleSwitch checked={twoFactor} onChange={setTwoFactor} />
        </SettingSection>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <Globe className="mr-2" size={20} />
            {t("language")}
          </h2>
          <p className="text-gray-500 text-sm mb-3">{t("languageDesc")}</p>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-md ${currentLang === "en" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
              onClick={() => setCurrentLang("en")}
            >
              {t("english")}
            </button>
            <button
              className={`px-4 py-2 rounded-md ${currentLang === "zh" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
              onClick={() => setCurrentLang("zh")}
            >
              {t("chinese")}
            </button>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          {t("save")}
        </button>
      </div>
    </div>
  );
};

export default SettingsPage; 