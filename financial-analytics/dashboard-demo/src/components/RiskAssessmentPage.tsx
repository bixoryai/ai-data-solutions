import React from 'react';
import { AlertTriangle, TrendingDown, Shield, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import getTranslation from '../types/translations';

// Mock data for risk metrics
const riskTrendData = [
  { month: 'Jan', creditRisk: 65, marketRisk: 78, operationalRisk: 82 },
  { month: 'Feb', creditRisk: 75, marketRisk: 73, operationalRisk: 78 },
  { month: 'Mar', creditRisk: 85, marketRisk: 82, operationalRisk: 71 },
  { month: 'Apr', creditRisk: 78, marketRisk: 85, operationalRisk: 75 },
  { month: 'May', creditRisk: 72, marketRisk: 76, operationalRisk: 82 },
  { month: 'Jun', creditRisk: 68, marketRisk: 71, operationalRisk: 86 },
];

const riskRadarData = [
  { subject: 'Credit Risk', A: 85, fullMark: 100 },
  { subject: 'Market Risk', A: 78, fullMark: 100 },
  { subject: 'Liquidity Risk', A: 72, fullMark: 100 },
  { subject: 'Operational Risk', A: 86, fullMark: 100 },
  { subject: 'Compliance Risk', A: 65, fullMark: 100 },
  { subject: 'Strategic Risk', A: 75, fullMark: 100 },
];

interface RiskAssessmentPageProps {
  language: 'en' | 'zh';
}

const RiskAssessmentPage: React.FC<RiskAssessmentPageProps> = ({ language }) => {
  const t = (key: any) => getTranslation(key, language);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">{t('Risk Assessment')}</h1>
      
      {/* Risk Score Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Overall Risk Score')}</p>
              <p className="text-2xl font-bold">78/100</p>
              <p className="text-yellow-500 text-sm">{t('Moderate Risk Level')}</p>
            </div>
            <AlertTriangle className="text-yellow-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Market Volatility')}</p>
              <p className="text-2xl font-bold">High</p>
              <p className="text-red-500 text-sm">+12% {t('Increase')}</p>
            </div>
            <TrendingDown className="text-red-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Compliance Status')}</p>
              <p className="text-2xl font-bold">92%</p>
              <p className="text-green-500 text-sm">{t('Within Limits')}</p>
            </div>
            <Shield className="text-green-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">{t('Risk Alerts')}</p>
              <p className="text-2xl font-bold">3</p>
              <p className="text-orange-500 text-sm">{t('Require Attention')}</p>
            </div>
            <Activity className="text-orange-500" size={24} />
          </div>
        </div>
      </div>

      {/* Risk Analysis Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Trends Over Time */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('Risk Trends')}</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={riskTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="creditRisk" stroke="#EF4444" name="Credit Risk" />
                <Line type="monotone" dataKey="marketRisk" stroke="#F59E0B" name="Market Risk" />
                <Line type="monotone" dataKey="operationalRisk" stroke="#3B82F6" name="Operational Risk" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Category Analysis */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('Risk Category Analysis')}</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={riskRadarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Risk Score" dataKey="A" stroke="#6366F1" fill="#818CF8" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Risk Alerts Section */}
      <div className="mt-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">{t('Active Risk Alerts')}</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <h3 className="font-medium text-red-700">{t('High Credit Exposure')}</h3>
              <p className="text-gray-600">{t('Credit exposure in sector X exceeds threshold by 15%')}</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <h3 className="font-medium text-yellow-700">{t('Market Volatility Warning')}</h3>
              <p className="text-gray-600">{t('Increased volatility detected in Asian markets')}</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h3 className="font-medium text-orange-700">{t('Liquidity Alert')}</h3>
              <p className="text-gray-600">{t('Short-term liquidity ratio approaching minimum threshold')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessmentPage; 