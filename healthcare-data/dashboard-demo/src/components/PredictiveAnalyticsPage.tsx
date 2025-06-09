import React from 'react';
import { Bed, Users, Activity } from 'lucide-react';

interface PageProps {
  language: 'en' | 'zh';
}

const translations = {
  en: {
    pageTitle: 'Predictive Analytics Dashboard',
    kpi: {
      occupancy: 'Bed Occupancy Rate',
      stay: 'Avg. Length of Stay',
      readmission: 'Readmission Rate',
      vsLastMonth: 'vs last month',
    },
    riskTable: {
      title: 'Patient Readmission Risk',
      patientId: 'Patient ID',
      patientName: 'Patient Name',
      age: 'Age',
      riskScore: 'AI Risk Score',
      details: 'Details'
    },
    forecast: {
      title: 'Disease Outbreak Forecast',
      map: 'Map Visualization',
      mapPlaceholder: 'Interactive map will be rendered here',
      hotspots: 'Projected Hotspots:',
      flu: 'Downtown Area (Influenza) - High Confidence',
      covid: 'North Suburbs (COVID-19) - Medium Confidence'
    }
  },
  zh: {
    pageTitle: '预测性分析仪表板',
    kpi: {
      occupancy: '病床占用率',
      stay: '平均住院天数',
      readmission: '再入院率',
      vsLastMonth: '与上月相比',
    },
    riskTable: {
      title: '患者再入院风险',
      patientId: '患者ID',
      patientName: '患者姓名',
      age: '年龄',
      riskScore: 'AI风险评分',
      details: '详情'
    },
    forecast: {
      title: '疾病爆发预测',
      map: '地图可视化',
      mapPlaceholder: '交互式地图将在此处呈现',
      hotspots: '预测热点:',
      flu: '市中心区域 (流感) - 高置信度',
      covid: '北市郊 (新冠) - 中等置信度'
    }
  }
};

const PredictiveAnalyticsPage: React.FC<PageProps> = ({ language }) => {
  const t = translations[language];

  const kpiData = [
    {
      title: t.kpi.occupancy,
      value: '85.4%',
      trend: '+2.1%',
      trendColor: 'text-green-500',
      icon: <Bed className="w-8 h-8 text-blue-500" />
    },
    {
      title: t.kpi.stay,
      value: '6.8 Days',
      trend: '-0.3 Days',
      trendColor: 'text-green-500',
      icon: <Users className="w-8 h-8 text-purple-500" />
    },
    {
      title: t.kpi.readmission,
      value: '15.2%',
      trend: '+1.5%',
      trendColor: 'text-red-500',
      icon: <Activity className="w-8 h-8 text-red-500" />
    }
  ];
  
  const KpiCard: React.FC<typeof kpiData[0]> = ({ title, value, trend, trendColor, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
      <div className="mr-4">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
        <p className={`text-sm ${trendColor}`}>{trend} {t.kpi.vsLastMonth}</p>
      </div>
    </div>
  );
  
  const patientData = [
    { id: 'PID-001', name: 'John Doe', age: 68, gender: 'Male', risk: 'High', riskColor: 'bg-red-100 text-red-800', details: 'Previous cardiac event, diabetic.' },
    { id: 'PID-002', name: 'Jane Smith', age: 74, gender: 'Female', risk: 'High', riskColor: 'bg-red-100 text-red-800', details: 'COPD, recent surgery.' },
    { id: 'PID-003', name: 'Robert Brown', age: 52, gender: 'Male', risk: 'Medium', riskColor: 'bg-yellow-100 text-yellow-800', details: 'High blood pressure, smoker.' },
    { id: 'PID-004', name: 'Emily White', age: 81, gender: 'Female', risk: 'Medium', riskColor: 'bg-yellow-100 text-yellow-800', details: 'History of falls.' },
    { id: 'PID-005', name: 'Michael Green', age: 61, gender: 'Male', risk: 'Low', riskColor: 'bg-green-100 text-green-800', details: 'No major chronic conditions.' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <h1 className="text-3xl font-bold mb-6">{t.pageTitle}</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {kpiData.map(kpi => <KpiCard key={kpi.title} {...kpi} />)}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient Readmission Risk Table */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">{t.riskTable.title}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="p-2">{t.riskTable.patientId}</th>
                  <th className="p-2">{t.riskTable.patientName}</th>
                  <th className="p-2">{t.riskTable.age}</th>
                  <th className="p-2">{t.riskTable.riskScore}</th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody>
                {patientData.map(patient => (
                  <tr key={patient.id} className="border-b hover:bg-gray-50">
                    <td className="p-2 font-mono text-sm">{patient.id}</td>
                    <td className="p-2">{patient.name}</td>
                    <td className="p-2">{patient.age}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${patient.riskColor}`}>
                        {patient.risk}
                      </span>
                    </td>
                    <td className="p-2 text-right">
                      <button className="text-blue-600 hover:underline text-sm">{t.riskTable.details}</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disease Outbreak Forecast */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
          <h2 className="text-xl font-bold mb-4">{t.forecast.title}</h2>
          <div className="flex-grow flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="text-center text-gray-500">
              <p className="font-semibold">{t.forecast.map}</p>
              <p className="text-sm">{t.forecast.mapPlaceholder}</p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-md">{t.forecast.hotspots}</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
              <li>{t.forecast.flu}</li>
              <li>{t.forecast.covid}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveAnalyticsPage;
