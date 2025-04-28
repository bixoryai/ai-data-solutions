// Equipment status data
export const equipmentStatusData = [
  { name: 'Operational', value: 68, color: '#10B981' }, // green
  { name: 'Under Maintenance', value: 12, color: '#6366F1' }, // indigo
  { name: 'Warning', value: 15, color: '#F59E0B' }, // amber
  { name: 'Critical', value: 5, color: '#EF4444' }, // red
];

// Equipment status data for Chinese
export const equipmentStatusDataZh = [
  { name: '运行中', value: 68, color: '#10B981' }, // green
  { name: '维护中', value: 12, color: '#6366F1' }, // indigo
  { name: '警告', value: 15, color: '#F59E0B' }, // amber
  { name: '临界', value: 5, color: '#EF4444' }, // red
];

// Equipment list with details
export const equipmentList = [
  {
    id: 'cnc-001',
    name: 'CNC Machine #1',
    status: 'operational',
    type: 'CNC',
    location: 'Manufacturing Floor - Section A',
    lastMaintenance: '2023-02-15',
    nextMaintenance: '2023-06-15',
    healthScore: 92,
    uptime: 98.7,
    alerts: 0,
    metrics: {
      temperature: { current: 65, optimal: 72, unit: '°C' },
      vibration: { current: 2.1, threshold: 3.0, unit: 'mm/s' },
      noise: { current: 75, threshold: 90, unit: 'dB' },
      pressure: { current: 5.2, optimal: 5.5, unit: 'bar' }
    }
  },
  {
    id: 'cnc-002',
    name: 'CNC Machine #2',
    status: 'operational',
    type: 'CNC',
    location: 'Manufacturing Floor - Section A',
    lastMaintenance: '2023-03-10',
    nextMaintenance: '2023-07-10',
    healthScore: 95,
    uptime: 99.2,
    alerts: 0,
    metrics: {
      temperature: { current: 68, optimal: 72, unit: '°C' },
      vibration: { current: 1.8, threshold: 3.0, unit: 'mm/s' },
      noise: { current: 72, threshold: 90, unit: 'dB' },
      pressure: { current: 5.4, optimal: 5.5, unit: 'bar' }
    }
  },
  {
    id: 'cnc-003',
    name: 'CNC Machine #3',
    status: 'operational',
    type: 'CNC',
    location: 'Manufacturing Floor - Section B',
    lastMaintenance: '2023-01-25',
    nextMaintenance: '2023-05-25',
    healthScore: 87,
    uptime: 95.3,
    alerts: 0,
    metrics: {
      temperature: { current: 70, optimal: 72, unit: '°C' },
      vibration: { current: 2.3, threshold: 3.0, unit: 'mm/s' },
      noise: { current: 78, threshold: 90, unit: 'dB' },
      pressure: { current: 5.3, optimal: 5.5, unit: 'bar' }
    }
  },
  {
    id: 'cnc-004',
    name: 'CNC Machine #4',
    status: 'critical',
    type: 'CNC',
    location: 'Manufacturing Floor - Section B',
    lastMaintenance: '2022-12-05',
    nextMaintenance: '2023-04-05',
    healthScore: 45,
    uptime: 82.1,
    alerts: 3,
    metrics: {
      temperature: { current: 79, optimal: 72, unit: '°C' },
      vibration: { current: 4.7, threshold: 3.0, unit: 'mm/s' },
      noise: { current: 88, threshold: 90, unit: 'dB' },
      pressure: { current: 4.8, optimal: 5.5, unit: 'bar' }
    }
  },
  {
    id: 'conveyor-001',
    name: 'Conveyor Belt A',
    status: 'warning',
    type: 'Conveyor',
    location: 'Assembly Line - Section C',
    lastMaintenance: '2023-02-01',
    nextMaintenance: '2023-06-01',
    healthScore: 72,
    uptime: 93.5,
    alerts: 1,
    metrics: {
      temperature: { current: 58, optimal: 55, unit: '°C' },
      vibration: { current: 1.2, threshold: 2.5, unit: 'mm/s' },
      tension: { current: 18.2, optimal: 22.0, unit: 'kN' },
      speed: { current: 0.95, optimal: 1.0, unit: 'm/s' }
    }
  },
  {
    id: 'robot-001',
    name: 'Robotic Arm #1',
    status: 'operational',
    type: 'Robotics',
    location: 'Assembly Line - Section D',
    lastMaintenance: '2023-03-20',
    nextMaintenance: '2023-07-20',
    healthScore: 91,
    uptime: 98.2,
    alerts: 0,
    metrics: {
      temperature: { current: 62, optimal: 65, unit: '°C' },
      vibration: { current: 1.5, threshold: 3.5, unit: 'mm/s' },
      accuracy: { current: 0.02, threshold: 0.05, unit: 'mm' },
      cycleTime: { current: 12.3, optimal: 12.0, unit: 's' }
    }
  },
  {
    id: 'hvac-001',
    name: 'HVAC System',
    status: 'warning',
    type: 'Facility',
    location: 'Building - Central',
    lastMaintenance: '2022-11-15',
    nextMaintenance: '2023-05-15',
    healthScore: 68,
    uptime: 92.7,
    alerts: 1,
    metrics: {
      temperature: { current: 22, optimal: 21, unit: '°C' },
      humidity: { current: 52, optimal: 50, unit: '%' },
      airflow: { current: 950, optimal: 1200, unit: 'm³/h' },
      efficiency: { current: 82, optimal: 90, unit: '%' }
    }
  }
];

// Recent alerts
export const recentAlerts = [
  {
    id: 'alert-001',
    equipmentId: 'cnc-004',
    equipmentName: 'CNC Machine #4',
    issue: 'Abnormal vibration detected',
    priority: 'high',
    time: '10 min ago',
    metrics: {
      vibration: { current: 4.7, threshold: 3.0, unit: 'mm/s' }
    }
  },
  {
    id: 'alert-002',
    equipmentId: 'conveyor-001',
    equipmentName: 'Conveyor Belt A',
    issue: 'Belt tension below threshold',
    priority: 'medium',
    time: '43 min ago',
    metrics: {
      tension: { current: 18.2, optimal: 22.0, unit: 'kN' }
    }
  },
  {
    id: 'alert-003',
    equipmentId: 'hvac-001',
    equipmentName: 'HVAC System',
    issue: 'Filter replacement needed',
    priority: 'low',
    time: '2 hours ago',
    metrics: {
      efficiency: { current: 82, optimal: 90, unit: '%' },
      airflow: { current: 950, optimal: 1200, unit: 'm³/h' }
    }
  }
];

// Key metrics
export const keyMetrics = {
  uptime: 93.7,
  efficiency: 87.2,
  maintenanceCost: 12450,
  predictedSavings: 35200,
  availableAssets: 23,
  activeAlerts: 5
};

// Historical data for metrics
export const historicalData = {
  temperature: [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 68 },
    { month: 'Mar', value: 70 },
    { month: 'Apr', value: 72 },
    { month: 'May', value: 74 },
    { month: 'Jun', value: 78 },
    { month: 'Jul', value: 76 },
    { month: 'Aug', value: 75 },
    { month: 'Sep', value: 79 }
  ],
  vibration: [
    { equipment: 'CNC #1', value: 2.1 },
    { equipment: 'CNC #2', value: 1.8 },
    { equipment: 'CNC #3', value: 2.3 },
    { equipment: 'CNC #4', value: 4.7 },
    { equipment: 'Conveyor', value: 1.2 },
    { equipment: 'Robotics', value: 1.5 }
  ],
  uptime: [
    { month: 'Jan', value: 92.3 },
    { month: 'Feb', value: 93.1 },
    { month: 'Mar', value: 91.8 },
    { month: 'Apr', value: 94.2 },
    { month: 'May', value: 93.7 },
    { month: 'Jun', value: 92.9 },
    { month: 'Jul', value: 95.1 },
    { month: 'Aug', value: 94.8 },
    { month: 'Sep', value: 93.5 }
  ]
}; 