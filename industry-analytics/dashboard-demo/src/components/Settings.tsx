import React from 'react';
import { Save, Bell, User, Shield, Database, RefreshCw } from 'lucide-react';

interface SettingsProps {
  translations: Record<string, string>;
}

const Settings: React.FC<SettingsProps> = ({ translations }) => {
  // t function to get translations
  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">{t('settings')}</h2>
      <p className="text-gray-600">{t('settingsDescription')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-md font-semibold text-gray-800">Settings Menu</h3>
            </div>
            <nav className="p-2">
              <ul className="space-y-1">
                <li>
                  <button className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary-50 text-primary-700">
                    <User size={18} className="mr-2 text-primary-500" />
                    User Preferences
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">
                    <Bell size={18} className="mr-2 text-gray-500" />
                    Notifications
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">
                    <Database size={18} className="mr-2 text-gray-500" />
                    Data Sources
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">
                    <RefreshCw size={18} className="mr-2 text-gray-500" />
                    Refresh Intervals
                  </button>
                </li>
                <li>
                  <button className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">
                    <Shield size={18} className="mr-2 text-gray-500" />
                    Security
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        {/* Main Settings Content */}
        <div className="md:col-span-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">User Preferences</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Display Name
                </label>
                <input 
                  type="text" 
                  defaultValue="Manufacturing Admin"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  defaultValue="admin@manufacturing.example.com"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Default Language
                </label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="en">English</option>
                  <option value="zh">中文 (Chinese)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dashboard Theme
                </label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input type="radio" name="theme" className="form-radio h-4 w-4 text-primary-600" defaultChecked />
                    <span className="ml-2 text-sm text-gray-700">Light</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="theme" className="form-radio h-4 w-4 text-primary-600" />
                    <span className="ml-2 text-sm text-gray-700">Dark</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="theme" className="form-radio h-4 w-4 text-primary-600" />
                    <span className="ml-2 text-sm text-gray-700">System Default</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date Format
                </label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="mm/dd/yyyy">MM/DD/YYYY</option>
                  <option value="dd/mm/yyyy">DD/MM/YYYY</option>
                  <option value="yyyy-mm-dd">YYYY-MM-DD</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time Format
                </label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="12h">12-hour (AM/PM)</option>
                  <option value="24h">24-hour</option>
                </select>
              </div>
              
              <div className="pt-2">
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-600" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">Enable AI-powered insights</span>
                </label>
              </div>
              
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-600" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">Show prediction confidence intervals</span>
                </label>
              </div>
              
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-600" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">Enable real-time notifications</span>
                </label>
              </div>
              
              <div className="pt-4">
                <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors flex items-center">
                  <Save size={16} className="mr-2" />
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 