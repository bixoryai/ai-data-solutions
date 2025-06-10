import React, { useMemo, useState } from 'react';
import { CheckCircle, AlertTriangle, AlertCircle, Settings, Activity, Thermometer } from 'lucide-react';
import { EquipmentStatus, EquipmentMonitoringProps, Content, SectorData, Language } from '../types';
import ErrorBoundary from './ErrorBoundary';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const content: Record<Language, Content> = {
  en: {
    title: 'Equipment Monitoring Dashboard',
    description: 'Monitor the status of your equipment and make data-driven maintenance decisions.',
    selectSector: 'Select Industry Sector',
    equipmentOverview: 'Equipment Overview',
    sensorReadings: 'Sensor Readings',
    maintenanceAlerts: 'Maintenance Alerts',
    performanceMetrics: 'Performance Metrics',
    equipment: 'Equipment',
    equipmentNames: {
      'CNC Machine A-123': 'CNC Machine A-123',
      'Assembly Robot B-456': 'Assembly Robot B-456',
      'Conveyor System C-789': 'Conveyor System C-789',
      'Industrial Oven D-101': 'Industrial Oven D-101',
      'Wind Turbine #42': 'Wind Turbine #42',
      'Solar Inverter X1': 'Solar Inverter X1',
      'Generator Unit G3': 'Generator Unit G3',
      'Battery Bank B7': 'Battery Bank B7',
      'Fleet Vehicle F-238': 'Fleet Vehicle F-238',
      'Cargo Crane CC-45': 'Cargo Crane CC-45',
      'Loading Dock LD-3': 'Loading Dock LD-3',
      'Conveyor Belt CB-9': 'Conveyor Belt CB-9'
    },
    sectors: {
      manufacturing: 'Manufacturing',
      energy: 'Energy',
      transportation: 'Transportation'
    },
    status: 'Status',
    lastMaintenance: 'Last Maintenance',
    hoursOperated: 'Hours Operated',
    nextScheduled: 'Next Scheduled',
    hours: 'hours',
    days: 'days',
    value: 'Value',
    range: 'Range',
    sensorData: 'Sensor Data',
    statusLabels: {
      healthy: 'Healthy',
      warning: 'Warning',
      critical: 'Critical',
      offline: 'Offline'
    },
    overallHealth: 'Overall Equipment Health',
    reliability: 'Reliability Score',
    efficiencyLoss: 'Efficiency Loss',
    estimatedDowntime: 'Estimated Downtime'
  },
  zh: {
    title: '设备监控仪表板',
    description: '监控您的设备状态并做出数据驱动的维护决策。',
    selectSector: '选择行业领域',
    equipmentOverview: '设备概况',
    sensorReadings: '传感器读数',
    maintenanceAlerts: '维护警报',
    performanceMetrics: '性能指标',
    equipment: '设备',
    equipmentNames: {
      'CNC Machine A-123': 'CNC机床A-123',
      'Assembly Robot B-456': '装配机器人B-456',
      'Conveyor System C-789': '输送系统C-789',
      'Industrial Oven D-101': '工业烤箱D-101',
      'Wind Turbine #42': '风力涡轮机#42',
      'Solar Inverter X1': '太阳能逆变器X1',
      'Generator Unit G3': '发电机单元G3',
      'Battery Bank B7': '电池组B7',
      'Fleet Vehicle F-238': '车队车辆F-238',
      'Cargo Crane CC-45': '货物起重机CC-45',
      'Loading Dock LD-3': '装卸码头LD-3',
      'Conveyor Belt CB-9': '输送带CB-9'
    },
    sectors: {
      manufacturing: '制造业',
      energy: '能源',
      transportation: '运输'
    },
    status: '状态',
    lastMaintenance: '上次维护',
    hoursOperated: '运行时间',
    nextScheduled: '下次计划',
    hours: '小时',
    days: '天',
    value: '数值',
    range: '范围',
    sensorData: '传感器数据',
    statusLabels: {
      healthy: '健康',
      warning: '警告',
      critical: '严重',
      offline: '离线'
    },
    overallHealth: '设备整体健康状况',
    reliability: '可靠性评分',
    efficiencyLoss: '效率损失',
    estimatedDowntime: '预计停机时间'
  }
};

const EquipmentMonitoring: React.FC<EquipmentMonitoringProps> = ({ 
  language,
  selectedSector,
  setSelectedSector
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState('overview');

  // Status icon mapping with proper typing
  const getStatusIcon = (status: EquipmentStatus) => {
    switch(status) {
      case 'healthy':
        return <CheckCircle className="text-green-500" size={18} aria-label="Healthy" />;
      case 'warning':
        return <AlertTriangle className="text-amber-500" size={18} aria-label="Warning" />;
      case 'critical':
        return <AlertCircle className="text-red-500" size={18} aria-label="Critical" />;
      case 'offline':
        return <Settings className="text-gray-500" size={18} aria-label="Offline" />;
      default:
        return <CheckCircle className="text-green-500" size={18} aria-label="Unknown Status" />;
    }
  };

  // Memoized sector data
  const sectorData = useMemo<SectorData | null>(() => {
    try {
      const getEquipmentName = (key: string): string => {
        return content[language].equipmentNames[key] || key;
      };

      const manufacturingData: SectorData = {
        equipmentList: [
          { id: 1, name: getEquipmentName('CNC Machine A-123'), status: 'healthy', lastMaintenance: '2023-06-15', hoursOperated: 1245, nextScheduled: 12 },
          { id: 2, name: getEquipmentName('Assembly Robot B-456'), status: 'warning', lastMaintenance: '2023-07-05', hoursOperated: 980, nextScheduled: 3 },
          { id: 3, name: getEquipmentName('Conveyor System C-789'), status: 'critical', lastMaintenance: '2023-05-20', hoursOperated: 2200, nextScheduled: 0 },
          { id: 4, name: getEquipmentName('Industrial Oven D-101'), status: 'healthy', lastMaintenance: '2023-08-01', hoursOperated: 560, nextScheduled: 24 }
        ],
        sensorData: [
          { id: 1, type: 'temperature', value: '75°C', range: '60-80°C', status: 'healthy' },
          { id: 2, type: 'vibration', value: '2.5 mm/s', range: '0-3 mm/s', status: 'warning' },
          { id: 3, type: 'pressure', value: '8.2 bar', range: '7-9 bar', status: 'healthy' }
        ]
      };
      
      const energyData: SectorData = {
        equipmentList: [
          { id: 1, name: getEquipmentName('Wind Turbine #42'), status: 'healthy', lastMaintenance: '2023-07-20', hoursOperated: 2150, nextScheduled: 15 },
          { id: 2, name: getEquipmentName('Solar Inverter X1'), status: 'warning', lastMaintenance: '2023-06-10', hoursOperated: 1850, nextScheduled: 5 },
          { id: 3, name: getEquipmentName('Generator Unit G3'), status: 'healthy', lastMaintenance: '2023-08-05', hoursOperated: 750, nextScheduled: 30 },
          { id: 4, name: getEquipmentName('Battery Bank B7'), status: 'offline', lastMaintenance: '2023-04-15', hoursOperated: 3200, nextScheduled: null }
        ],
        sensorData: [
          { id: 1, type: 'current', value: '45 A', range: '40-50 A', status: 'healthy' },
          { id: 2, type: 'voltage', value: '480 V', range: '460-500 V', status: 'warning' },
          { id: 3, type: 'temperature', value: '65°C', range: '60-70°C', status: 'healthy' }
        ]
      };
      
      const transportationData: SectorData = {
        equipmentList: [
          { id: 1, name: getEquipmentName('Fleet Vehicle F-238'), status: 'healthy', lastMaintenance: '2023-07-28', hoursOperated: 450, nextScheduled: 18 },
          { id: 2, name: getEquipmentName('Cargo Crane CC-45'), status: 'critical', lastMaintenance: '2023-05-12', hoursOperated: 1750, nextScheduled: 0 },
          { id: 3, name: getEquipmentName('Loading Dock LD-3'), status: 'warning', lastMaintenance: '2023-06-25', hoursOperated: 1100, nextScheduled: 4 },
          { id: 4, name: getEquipmentName('Conveyor Belt CB-9'), status: 'healthy', lastMaintenance: '2023-08-10', hoursOperated: 320, nextScheduled: 25 }
        ],
        sensorData: [
          { id: 1, type: 'acoustics', value: '75 dB', range: '70-80 dB', status: 'healthy' },
          { id: 2, type: 'vibration', value: '3.2 mm/s', range: '0-3 mm/s', status: 'critical' },
          { id: 3, type: 'temperature', value: '72°C', range: '65-75°C', status: 'healthy' }
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
          return null;
      }
    } catch (err) {
      setError('Failed to load equipment data');
      console.error('Error loading sector data:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [selectedSector, language]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!sectorData) {
    return null;
  }

  return (
    <ErrorBoundary componentName="EquipmentMonitoring">
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
                {content[language].sectors.manufacturing}
              </button>
              <button
                onClick={() => setSelectedSector('energy')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedSector === 'energy'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {content[language].sectors.energy}
              </button>
              <button
                onClick={() => setSelectedSector('transportation')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedSector === 'transportation'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {content[language].sectors.transportation}
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
              <div className="equipment-monitoring">
                <div className="sector-selector">
                  <button 
                    className={selectedSector === 'manufacturing' ? 'active' : ''}
                    onClick={() => setSelectedSector('manufacturing')}
                  >
                    {content[language].sectors.manufacturing}
                  </button>
                  <button 
                    className={selectedSector === 'energy' ? 'active' : ''}
                    onClick={() => setSelectedSector('energy')}
                  >
                    {content[language].sectors.energy}
                  </button>
                  <button 
                    className={selectedSector === 'transportation' ? 'active' : ''}
                    onClick={() => setSelectedSector('transportation')}
                  >
                    {content[language].sectors.transportation}
                  </button>
                </div>

                {sectorData && (
                  <div className="equipment-list">
                    {sectorData.equipmentList.map(equipment => (
                      <div key={equipment.id} className={`equipment-card ${equipment.status}`}>
                        <h3>{equipment.name}</h3>
                        <div className="equipment-details">
                          <p>{content[language].status}: {content[language].statusLabels[equipment.status]}</p>
                          <p>{content[language].lastMaintenance}: {equipment.lastMaintenance}</p>
                          <p>{content[language].hoursOperated}: {equipment.hoursOperated}</p>
                          {equipment.nextScheduled !== null && (
                            <p>{content[language].nextScheduled}: {equipment.nextScheduled} {content[language].hours}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="sensor-data">
                <h2>{content[language].sensorData}</h2>
                <div className="sensor-grid">
                  {sectorData.sensorData.map(sensor => (
                    <div key={sensor.id} className={`sensor-card ${sensor.status}`}>
                      <h3>{sensor.type}</h3>
                      <p>{content[language].value}: {sensor.value}</p>
                      <p>{content[language].range}: {sensor.range}</p>
                      <p>{content[language].status}: {content[language].statusLabels[sensor.status]}</p>
                    </div>
                  ))}
                </div>
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
    </ErrorBoundary>
  );
};

export default EquipmentMonitoring; 