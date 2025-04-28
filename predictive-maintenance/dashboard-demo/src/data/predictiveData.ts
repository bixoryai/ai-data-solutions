// Failure prediction data for radar chart
export const failureRiskData = {
  current: [
    { category: 'Bearing Wear', value: 65 },
    { category: 'Belt Tension', value: 45 },
    { category: 'Motor Health', value: 30 },
    { category: 'Lubrication', value: 20 },
    { category: 'Electrical', value: 35 },
    { category: 'Structural', value: 15 }
  ],
  lastMonth: [
    { category: 'Bearing Wear', value: 50 },
    { category: 'Belt Tension', value: 40 },
    { category: 'Motor Health', value: 25 },
    { category: 'Lubrication', value: 25 },
    { category: 'Electrical', value: 30 },
    { category: 'Structural', value: 10 }
  ]
};

// Failure risk data for Chinese
export const failureRiskDataZh = {
  current: [
    { category: '轴承磨损', value: 65 },
    { category: '皮带张力', value: 45 },
    { category: '电机健康', value: 30 },
    { category: '润滑', value: 20 },
    { category: '电气', value: 35 },
    { category: '结构', value: 15 }
  ],
  lastMonth: [
    { category: '轴承磨损', value: 50 },
    { category: '皮带张力', value: 40 },
    { category: '电机健康', value: 25 },
    { category: '润滑', value: 25 },
    { category: '电气', value: 30 },
    { category: '结构', value: 10 }
  ]
};

// Component lifespan data
export const componentLifespanData = [
  { component: 'Bearings', lifeRemaining: 65, status: 'good' },
  { component: 'Drive Belt', lifeRemaining: 32, status: 'critical' },
  { component: 'Motor', lifeRemaining: 78, status: 'good' },
  { component: 'Hydraulic Pump', lifeRemaining: 85, status: 'good' },
  { component: 'Control Board', lifeRemaining: 92, status: 'good' }
];

// Component lifespan data for Chinese
export const componentLifespanDataZh = [
  { component: '轴承', lifeRemaining: 65, status: 'good' },
  { component: '传动带', lifeRemaining: 32, status: 'critical' },
  { component: '电机', lifeRemaining: 78, status: 'good' },
  { component: '液压泵', lifeRemaining: 85, status: 'good' },
  { component: '控制板', lifeRemaining: 92, status: 'good' }
];

// Failure probability timeline data
export const failureProbabilityTimelineData = [
  { day: 1, probability: 2 },
  { day: 7, probability: 3 },
  { day: 14, probability: 5 },
  { day: 21, probability: 8 },
  { day: 30, probability: 15 },
  { day: 45, probability: 22 },
  { day: 60, probability: 35 },
  { day: 75, probability: 48 },
  { day: 90, probability: 65 }
];

// Predicted failures
export const predictedFailures = [
  {
    id: 'pred-001',
    equipmentId: 'cnc-004',
    equipmentName: 'CNC Machine #4',
    component: 'Main Bearing',
    probability: 65,
    estimatedTimeToFailure: '30-45 days',
    recommendedAction: 'Schedule bearing replacement within 3 weeks',
    impactLevel: 'high',
    potentialCost: 18500,
    earlyDetectionSavings: 12800
  },
  {
    id: 'pred-002',
    equipmentId: 'conveyor-001',
    equipmentName: 'Conveyor Belt A',
    component: 'Drive Belt',
    probability: 45,
    estimatedTimeToFailure: '45-60 days',
    recommendedAction: 'Replace drive belt during next scheduled maintenance',
    impactLevel: 'medium',
    potentialCost: 8200,
    earlyDetectionSavings: 5500
  },
  {
    id: 'pred-003',
    equipmentId: 'hvac-001',
    equipmentName: 'HVAC System',
    component: 'Compressor',
    probability: 32,
    estimatedTimeToFailure: '75-90 days',
    recommendedAction: 'Monitor compressor performance, schedule inspection',
    impactLevel: 'medium',
    potentialCost: 12400,
    earlyDetectionSavings: 8900
  }
];

// Maintenance recommendations
export const maintenanceRecommendations = [
  {
    id: 'rec-001',
    equipmentId: 'cnc-004',
    equipmentName: 'CNC Machine #4',
    recommendation: 'Replace main bearing assembly',
    priority: 'high',
    timeframe: 'Within 3 weeks',
    estimatedHours: 8,
    partsCost: 2750,
    laborCost: 1200,
    downtimeCost: 14550,
    potentialSavings: 12800
  },
  {
    id: 'rec-002',
    equipmentId: 'conveyor-001',
    equipmentName: 'Conveyor Belt A',
    recommendation: 'Replace drive belt and adjust tensioner',
    priority: 'medium',
    timeframe: 'Next scheduled maintenance',
    estimatedHours: 4,
    partsCost: 1200,
    laborCost: 600,
    downtimeCost: 6400,
    potentialSavings: 5500
  },
  {
    id: 'rec-003',
    equipmentId: 'all',
    equipmentName: 'All CNC Machines',
    recommendation: 'Implement enhanced lubrication schedule',
    priority: 'low',
    timeframe: 'Next 2-3 months',
    estimatedHours: 2,
    partsCost: 350,
    laborCost: 300,
    downtimeCost: 0,
    potentialSavings: 7500
  }
];

// Machine learning model parameters (for demo purposes)
export const mlModelParams = {
  modelType: 'Random Forest',
  features: [
    'vibration_rms',
    'temperature_avg',
    'noise_level',
    'power_consumption',
    'operating_hours',
    'maintenance_count',
    'age_months'
  ],
  accuracy: 0.92,
  precision: 0.88,
  recall: 0.85,
  f1Score: 0.86,
  trainingDataPoints: 12500,
  lastUpdated: '2023-03-15'
}; 