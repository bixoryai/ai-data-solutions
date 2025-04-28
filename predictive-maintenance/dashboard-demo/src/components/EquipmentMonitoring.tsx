import React, { useState } from 'react';
import { CheckCircle, AlertCircle, AlertTriangle, Settings, Activity, Thermometer } from 'lucide-react';

interface EquipmentMonitoringProps {
  language: 'en' | 'zh';
  selectedSector: 'manufacturing' | 'energy' | 'transportation';
  setSelectedSector: (sector: 'manufacturing' | 'energy' | 'transportation') => void;
}

const EquipmentMonitoring: React.FC<EquipmentMonitoringProps> = ({ 
  language,
  selectedSector,
  setSelectedSector
}) => {
  const content = {
    en: {
      title: 'Equipment Monitoring Dashboard',
      description: 'Monitor the status of your equipment and make data-driven maintenance decisions.',
      selectSector: 'Select Industry Sector',
      manufacturing: 'Manufacturing',
      energy: 'Energy',
      transportation: 'Transportation',
      equipmentOverview: 'Equipment Overview',
      sensorReadings: 'Sensor Readings',
      maintenanceAlerts: 'Maintenance Alerts',
      performanceMetrics: 'Performance Metrics',
      equipment: 'Equipment',
      status: 'Status',
      lastMaintenance: 'Last Maintenance',
      hoursOperated: 'Hours Operated',
      nextScheduled: 'Next Scheduled',
      days: 'days',
      critical: 'Critical',
      warning: 'Warning',
      healthy: 'Healthy',
      offline: 'Offline',
      readingType: 'Reading Type',
      value: 'Value',
      normalRange: 'Normal Range',
      currentStatus: 'Current Status',
      temperature: 'Temperature',
      vibration: 'Vibration',
      pressure: 'Pressure',
      acoustics: 'Acoustics',
      current: 'Current',
      voltage: 'Voltage',
      overallHealth: 'Overall Equipment Health',
      reliability: 'Reliability Score',
      efficiencyLoss: 'Efficiency Loss',
      estimatedDowntime: 'Estimated Downtime',
      maintenanceCosts: 'Maintenance Costs'
    },
    zh: {
      title: '设备监控仪表板',
      description: '监控您的设备状态并做出数据驱动的维护决策。',
      selectSector: '选择行业领域',
      manufacturing: '制造业',
      energy: '能源',
      transportation: '交通运输',
      equipmentOverview: '设备概况',
      sensorReadings: '传感器读数',
      maintenanceAlerts: '维护警报',
      performanceMetrics: '性能指标',
      equipment: '设备',
      status: '状态',
      lastMaintenance: '上次维护',
      hoursOperated: '运行小时数',
      nextScheduled: '下次计划维护',
      days: '天',
      critical: '严重',
      warning: '警告',
      healthy: '健康',
      offline: '离线',
      readingType: '读数类型',
      value: '数值',
      normalRange: '正常范围',
      currentStatus: '当前状态',
      temperature: '温度',
      vibration: '振动',
      pressure: '压力',
      acoustics: '声学',
      current: '电流',
      voltage: '电压',
      overallHealth: '设备整体健康状况',
      reliability: '可靠性评分',
      efficiencyLoss: '效率损失',
      estimatedDowntime: '预计停机时间',
      maintenanceCosts: '维护成本'
    }
  };

  const [activeTab, setActiveTab] = useState('overview');

  // Sample data based on selected sector
  const getSectorData = () => {
    const manufacturingData = {
      equipmentList: [
        { id: 1, name: 'CNC Machine A-123', status: 'healthy', lastMaintenance: '2023-06-15', hoursOperated: 1245, nextScheduled: 12 },
        { id: 2, name: 'Assembly Robot B-456', status: 'warning', lastMaintenance: '2023-07-05', hoursOperated: 980, nextScheduled: 3 },
        { id: 3, name: 'Conveyor System C-789', status: 'critical', lastMaintenance: '2023-05-20', hoursOperated: 2200, nextScheduled: 0 },
        { id: 4, name: 'Industrial Oven D-101', status: 'healthy', lastMaintenance: '2023-08-01', hoursOperated: 560, nextScheduled: 24 }
      ],
      sensorData: [
        { id: 1, type: 'temperature', value: '85°C', range: '65-90°C', status: 'healthy' },
        { id: 2, type: 'vibration', value: '12mm/s', range: '0-10mm/s', status: 'warning' },
        { id: 3, type: 'pressure', value: '6.8 bar', range: '5-7 bar', status: 'healthy' },
        { id: 4, type: 'acoustics', value: '92 dB', range: '0-85 dB', status: 'critical' }
      ]
    };
    
    const energyData = {
      equipmentList: [
        { id: 1, name: 'Wind Turbine #42', status: 'healthy', lastMaintenance: '2023-07-20', hoursOperated: 2150, nextScheduled: 15 },
        { id: 2, name: 'Solar Inverter X1', status: 'warning', lastMaintenance: '2023-06-10', hoursOperated: 1850, nextScheduled: 5 },
        { id: 3, name: 'Generator Unit G3', status: 'healthy', lastMaintenance: '2023-08-05', hoursOperated: 750, nextScheduled: 30 },
        { id: 4, name: 'Battery Bank B7', status: 'offline', lastMaintenance: '2023-04-15', hoursOperated: 3200, nextScheduled: null }
      ],
      sensorData: [
        { id: 1, type: 'current', value: '125A', range: '0-150A', status: 'healthy' },
        { id: 2, type: 'voltage', value: '385V', range: '370-410V', status: 'healthy' },
        { id: 3, type: 'temperature', value: '72°C', range: '50-70°C', status: 'warning' },
        { id: 4, type: 'vibration', value: '8mm/s', range: '0-15mm/s', status: 'healthy' }
      ]
    };
    
    const transportationData = {
      equipmentList: [
        { id: 1, name: 'Fleet Vehicle F-238', status: 'healthy', lastMaintenance: '2023-07-28', hoursOperated: 450, nextScheduled: 18 },
        { id: 2, name: 'Cargo Crane CC-45', status: 'critical', lastMaintenance: '2023-05-12', hoursOperated: 1750, nextScheduled: 0 },
        { id: 3, name: 'Loading Dock LD-3', status: 'warning', lastMaintenance: '2023-06-25', hoursOperated: 1100, nextScheduled: 4 },
        { id: 4, name: 'Conveyor Belt CB-9', status: 'healthy', lastMaintenance: '2023-08-10', hoursOperated: 320, nextScheduled: 25 }
      ],
      sensorData: [
        { id: 1, type: 'pressure', value: '4.2 bar', range: '4-5 bar', status: 'healthy' },
        { id: 2, type: 'temperature', value: '65°C', range: '50-80°C', status: 'healthy' },
        { id: 3, type: 'vibration', value: '18mm/s', range: '0-12mm/s', status: 'critical' },
        { id: 4, type: 'acoustics', value: '78 dB', range: '0-90 dB', status: 'healthy' }
      ]
    };
    
    switch(selectedSector) {
      case 'manufacturing':
        return manufacturingData;
      case 'energy':
        return energyData;
      case 'transportation':
        return transportationData;
      default:
        return manufacturingData;
    }
  };

  const sectorData = getSectorData();

  // Status icon mapping
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'healthy':
        return <CheckCircle className="text-green-500" size={18} />;
      case 'warning':
        return <AlertTriangle className="text-amber-500" size={18} />;
      case 'critical':
        return <AlertCircle className="text-red-500" size={18} />;
      case 'offline':
        return <Settings className="text-gray-500" size={18} />;
      default:
        return <CheckCircle className="text-green-500" size={18} />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold text-gray-800">{content[language].title}</h1>
        <p className="text-gray-600 mt-2">{content[language].description}</p>
        
        {/* Sector Selection */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">{content[language].selectSector}</h3>
          <div className="flex space-x-3">
            <button
              onClick={() => setSelectedSector('manufacturing')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedSector === 'manufacturing'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {content[language].manufacturing}
            </button>
            <button
              onClick={() => setSelectedSector('energy')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedSector === 'energy'
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {content[language].energy}
            </button>
            <button
              onClick={() => setSelectedSector('transportation')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedSector === 'transportation'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {content[language].transportation}
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-6 text-sm font-medium border-b-2 ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {content[language].equipmentOverview}
            </button>
            <button
              onClick={() => setActiveTab('sensors')}
              className={`py-4 px-6 text-sm font-medium border-b-2 ${
                activeTab === 'sensors'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {content[language].sensorReadings}
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {content[language].equipment}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {content[language].status}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {content[language].lastMaintenance}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {content[language].hoursOperated}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {content[language].nextScheduled}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sectorData.equipmentList.map((equipment) => (
                    <tr key={equipment.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {equipment.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          {getStatusIcon(equipment.status)}
                          <span className="ml-2">
                            {content[language][equipment.status as keyof typeof content[typeof language]]}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {equipment.lastMaintenance}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {equipment.hoursOperated}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {equipment.nextScheduled !== null ? (
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            equipment.nextScheduled <= 3
                              ? 'bg-red-100 text-red-800'
                              : equipment.nextScheduled <= 7
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-green-100 text-green-800'
                          }`}>
                            {equipment.nextScheduled} {content[language].days}
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            —
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {content[language].readingType}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {content[language].value}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {content[language].normalRange}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {content[language].currentStatus}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sectorData.sensorData.map((sensor) => (
                    <tr key={sensor.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex items-center">
                          {sensor.type === 'temperature' && <Thermometer size={18} className="mr-2 text-red-500" />}
                          {sensor.type === 'vibration' && <Activity size={18} className="mr-2 text-blue-500" />}
                          {sensor.type === 'pressure' && <Settings size={18} className="mr-2 text-amber-500" />}
                          {sensor.type === 'acoustics' && <Settings size={18} className="mr-2 text-purple-500" />}
                          {sensor.type === 'current' && <Settings size={18} className="mr-2 text-green-500" />}
                          {sensor.type === 'voltage' && <Settings size={18} className="mr-2 text-indigo-500" />}
                          {content[language][sensor.type as keyof typeof content[typeof language]]}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {sensor.value}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {sensor.range}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          {getStatusIcon(sensor.status)}
                          <span className="ml-2">
                            {content[language][sensor.status as keyof typeof content[typeof language]]}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">{content[language].performanceMetrics}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">{content[language].overallHealth}</h3>
            <div className="mt-2 flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-900">75%</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">{content[language].reliability}</h3>
            <div className="mt-2 flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '88%' }}></div>
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-900">88%</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">{content[language].efficiencyLoss}</h3>
            <div className="mt-2 flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '12%' }}></div>
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-900">12%</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500">{content[language].estimatedDowntime}</h3>
            <p className="mt-2 text-lg font-semibold text-gray-900">
              {selectedSector === 'manufacturing' ? '4.2h' : selectedSector === 'energy' ? '2.5h' : '5.8h'}
              <span className="text-sm font-normal text-gray-500 ml-1">/ week</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentMonitoring; 