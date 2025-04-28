import React from 'react';
import { FileText, Download } from 'lucide-react';

interface ReportsProps {
  translations: Record<string, string>;
}

const Reports: React.FC<ReportsProps> = ({ translations }) => {
  // t function to get translations
  const t = (key: string): string => {
    return translations[key] || key;
  };

  // Report templates data
  const reportTemplates = [
    {
      id: 1,
      name: 'Production Efficiency Report',
      description: 'Daily overview of production line efficiency, utilization and throughput.',
      type: 'Automated',
      frequency: 'Daily',
      lastGenerated: '6 hours ago'
    },
    {
      id: 2,
      name: 'Quality Assurance Metrics',
      description: 'Detailed breakdown of quality metrics, defect rates and quality scores.',
      type: 'Automated',
      frequency: 'Weekly',
      lastGenerated: '3 days ago'
    },
    {
      id: 3,
      name: 'Predictive Maintenance Forecast',
      description: 'AI-generated maintenance schedules and equipment health predictions.',
      type: 'Automated',
      frequency: 'Weekly',
      lastGenerated: '2 days ago'
    },
    {
      id: 4,
      name: 'Resource Utilization Analysis',
      description: 'Breakdown of resource usage by department, equipment, and personnel.',
      type: 'On-demand',
      frequency: 'Monthly',
      lastGenerated: '12 days ago'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">{t('reports')}</h2>
      <p className="text-gray-600">{t('reportsDescription')}</p>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Reports</h3>
        
        <div className="space-y-4">
          {reportTemplates.map(report => (
            <div key={report.id} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-md font-medium text-gray-800">{report.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                  <div className="flex mt-2 space-x-4">
                    <span className="text-xs text-gray-500">Type: {report.type}</span>
                    <span className="text-xs text-gray-500">Frequency: {report.frequency}</span>
                    <span className="text-xs text-gray-500">Last generated: {report.lastGenerated}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <button className="bg-primary-50 text-primary-700 px-3 py-2 rounded-md hover:bg-primary-100 transition-colors text-sm flex items-center">
                    <FileText size={16} className="mr-1.5" />
                    View
                  </button>
                  <button className="ml-2 bg-gray-50 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm flex items-center">
                    <Download size={16} className="mr-1.5" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Report Scheduler</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Report Type
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="production">Production Efficiency Report</option>
                <option value="quality">Quality Assurance Metrics</option>
                <option value="maintenance">Predictive Maintenance Forecast</option>
                <option value="resource">Resource Utilization Analysis</option>
                <option value="custom">Custom Report</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Frequency
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="custom">Custom Schedule</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Method
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="email">Email</option>
                <option value="dashboard">Dashboard Only</option>
                <option value="api">API Endpoint</option>
                <option value="download">Auto Download</option>
              </select>
            </div>
          </div>
          
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Recipients (Email)
              </label>
              <input 
                type="text" 
                placeholder="Enter email addresses"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">Separate multiple emails with commas</p>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Format
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="format" className="form-radio h-4 w-4 text-primary-600" defaultChecked />
                  <span className="ml-2 text-sm text-gray-700">PDF</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="format" className="form-radio h-4 w-4 text-primary-600" />
                  <span className="ml-2 text-sm text-gray-700">Excel</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="format" className="form-radio h-4 w-4 text-primary-600" />
                  <span className="ml-2 text-sm text-gray-700">CSV</span>
                </label>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
                Schedule Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports; 