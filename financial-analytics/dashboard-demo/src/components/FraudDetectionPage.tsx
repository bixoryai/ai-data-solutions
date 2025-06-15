import React from 'react';
import { AlertCircle, Search, ShieldCheck, Bell } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import getTranslation from '../types/translations';

// Mock data for fraud metrics
const fraudTrendData = [
  { month: 'Jan', suspiciousTransactions: 45, confirmedFraud: 12 },
  { month: 'Feb', suspiciousTransactions: 52, confirmedFraud: 15 },
  { month: 'Mar', suspiciousTransactions: 48, confirmedFraud: 10 },
  { month: 'Apr', suspiciousTransactions: 70, confirmedFraud: 22 },
  { month: 'May', suspiciousTransactions: 55, confirmedFraud: 18 },
  { month: 'Jun', suspiciousTransactions: 42, confirmedFraud: 8 },
];

const fraudTypeData = [
  { name: 'Identity Theft', value: 35 },
  { name: 'Transaction Fraud', value: 25 },
  { name: 'Account Takeover', value: 20 },
  { name: 'Payment Fraud', value: 15 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#EF4444', '#F59E0B', '#3B82F6', '#10B981', '#6B7280'];

interface FraudDetectionPageProps {
  language: 'en' | 'zh';
}

const FraudDetectionPage: React.FC<FraudDetectionPageProps> = ({ language }) => {
  const t = (key: any) => getTranslation(key, language);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">{t('Fraud Detection')}</h1>
      
      {/* Fraud Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Suspicious Activities')}</p>
              <p className="text-2xl font-bold">42</p>
              <p className="text-yellow-500 text-sm">{t('Last 24 Hours')}</p>
            </div>
            <AlertCircle className="text-yellow-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Under Investigation')}</p>
              <p className="text-2xl font-bold">15</p>
              <p className="text-blue-500 text-sm">{t('Active Cases')}</p>
            </div>
            <Search className="text-blue-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Prevention Rate')}</p>
              <p className="text-2xl font-bold">96.8%</p>
              <p className="text-green-500 text-sm">+2.3% {t('vs Last Month')}</p>
            </div>
            <ShieldCheck className="text-green-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('High Priority Alerts')}</p>
              <p className="text-2xl font-bold">7</p>
              <p className="text-red-500 text-sm">{t('Requires Action')}</p>
            </div>
            <Bell className="text-red-500" size={24} />
          </div>
        </div>
      </div>

      {/* Fraud Analysis Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fraud Trends Over Time */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('Fraud Activity Trends')}</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={fraudTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="suspiciousTransactions" stroke="#F59E0B" name="Suspicious" />
                <Line type="monotone" dataKey="confirmedFraud" stroke="#EF4444" name="Confirmed" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Fraud Types Distribution */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('Fraud Types Distribution')}</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={fraudTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {fraudTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Alerts Section */}
      <div className="mt-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('Recent Fraud Alerts')}</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h3 className="font-medium text-red-700">{t('Suspicious Transaction Pattern')}</h3>
              <p className="text-gray-600">{t('Multiple high-value transactions detected from unusual locations')}</p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <h3 className="font-medium text-yellow-700">{t('Potential Account Compromise')}</h3>
              <p className="text-gray-600">{t('Unusual login activity detected from multiple IP addresses')}</p>
              <p className="text-sm text-gray-500">4 hours ago</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h3 className="font-medium text-orange-700">{t('Identity Verification Failed')}</h3>
              <p className="text-gray-600">{t('Multiple failed verification attempts for high-risk transaction')}</p>
              <p className="text-sm text-gray-500">6 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraudDetectionPage; 