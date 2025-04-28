// Maintenance schedule data
export const maintenanceSchedule = [
  {
    id: 'maint-001',
    equipmentId: 'cnc-004',
    equipmentName: 'CNC Machine #4',
    maintenanceType: 'Corrective',
    description: 'Replace main bearing assembly',
    scheduledDate: '2023-05-12',
    estimatedHours: 8,
    technicians: ['John Davis', 'Miguel Rodriguez'],
    parts: ['Main bearing kit', 'Seals', 'Lubricant'],
    priority: 'high',
    status: 'scheduled'
  },
  {
    id: 'maint-002',
    equipmentId: 'conveyor-001',
    equipmentName: 'Conveyor Belt A',
    maintenanceType: 'Preventive',
    description: 'Replace drive belt and adjust tensioner',
    scheduledDate: '2023-05-18',
    estimatedHours: 4,
    technicians: ['Sarah Johnson'],
    parts: ['Drive belt', 'Tensioner kit'],
    priority: 'medium',
    status: 'scheduled'
  },
  {
    id: 'maint-003',
    equipmentId: 'cnc-001',
    equipmentName: 'CNC Machine #1',
    maintenanceType: 'Preventive',
    description: 'Routine maintenance and calibration',
    scheduledDate: '2023-05-25',
    estimatedHours: 6,
    technicians: ['John Davis'],
    parts: ['Filter kit', 'Calibration tools', 'Lubricant'],
    priority: 'normal',
    status: 'scheduled'
  },
  {
    id: 'maint-004',
    equipmentId: 'cnc-002',
    equipmentName: 'CNC Machine #2',
    maintenanceType: 'Preventive',
    description: 'Routine maintenance and calibration',
    scheduledDate: '2023-06-08',
    estimatedHours: 6,
    technicians: ['Miguel Rodriguez'],
    parts: ['Filter kit', 'Calibration tools', 'Lubricant'],
    priority: 'normal',
    status: 'pending'
  },
  {
    id: 'maint-005',
    equipmentId: 'hvac-001',
    equipmentName: 'HVAC System',
    maintenanceType: 'Preventive',
    description: 'Filter replacement and system check',
    scheduledDate: '2023-05-16',
    estimatedHours: 3,
    technicians: ['Li Wei'],
    parts: ['Air filters', 'Cleaning solution'],
    priority: 'low',
    status: 'scheduled'
  },
  {
    id: 'maint-006',
    equipmentId: 'cnc-003',
    equipmentName: 'CNC Machine #3',
    maintenanceType: 'Preventive',
    description: 'Routine maintenance and calibration',
    scheduledDate: '2023-06-15',
    estimatedHours: 6,
    technicians: ['Sarah Johnson'],
    parts: ['Filter kit', 'Calibration tools', 'Lubricant'],
    priority: 'normal',
    status: 'pending'
  },
  {
    id: 'maint-007',
    equipmentId: 'robot-001',
    equipmentName: 'Robotic Arm #1',
    maintenanceType: 'Preventive',
    description: 'Precision calibration and joint inspection',
    scheduledDate: '2023-06-22',
    estimatedHours: 5,
    technicians: ['Li Wei'],
    parts: ['Calibration tools', 'Grease', 'Test equipment'],
    priority: 'normal',
    status: 'pending'
  },
  {
    id: 'maint-008',
    equipmentId: 'all',
    equipmentName: 'All CNC Machines',
    maintenanceType: 'Preventive',
    description: 'Implement enhanced lubrication schedule',
    scheduledDate: '2023-07-10',
    estimatedHours: 2,
    technicians: ['John Davis'],
    parts: ['Premium lubricant'],
    priority: 'low',
    status: 'pending'
  }
];

// Maintenance history
export const maintenanceHistory = [
  {
    id: 'hist-001',
    equipmentId: 'cnc-001',
    equipmentName: 'CNC Machine #1',
    maintenanceType: 'Preventive',
    description: 'Routine maintenance and calibration',
    completionDate: '2023-02-15',
    duration: 5.5,
    technicians: ['John Davis'],
    parts: ['Filter kit', 'Calibration tools', 'Lubricant'],
    cost: 1750,
    notes: 'All systems functioning as expected. Calibration within tolerances.'
  },
  {
    id: 'hist-002',
    equipmentId: 'cnc-002',
    equipmentName: 'CNC Machine #2',
    maintenanceType: 'Preventive',
    description: 'Routine maintenance and calibration',
    completionDate: '2023-03-10',
    duration: 6,
    technicians: ['Sarah Johnson'],
    parts: ['Filter kit', 'Calibration tools', 'Lubricant'],
    cost: 1800,
    notes: 'Slight adjustment needed for X-axis calibration. Lubrication system refilled.'
  },
  {
    id: 'hist-003',
    equipmentId: 'cnc-003',
    equipmentName: 'CNC Machine #3',
    maintenanceType: 'Preventive',
    description: 'Routine maintenance and calibration',
    completionDate: '2023-01-25',
    duration: 5.5,
    technicians: ['Miguel Rodriguez'],
    parts: ['Filter kit', 'Calibration tools', 'Lubricant'],
    cost: 1750,
    notes: 'All systems functioning as expected. Replaced worn coolant filter.'
  },
  {
    id: 'hist-004',
    equipmentId: 'robot-001',
    equipmentName: 'Robotic Arm #1',
    maintenanceType: 'Preventive',
    description: 'Precision calibration and joint inspection',
    completionDate: '2023-03-20',
    duration: 4.5,
    technicians: ['Li Wei'],
    parts: ['Calibration tools', 'Grease', 'Test equipment'],
    cost: 1350,
    notes: 'All joints operating within specified parameters. Software updated to latest version.'
  },
  {
    id: 'hist-005',
    equipmentId: 'conveyor-001',
    equipmentName: 'Conveyor Belt A',
    maintenanceType: 'Corrective',
    description: 'Tension adjustment and roller replacement',
    completionDate: '2023-02-01',
    duration: 3,
    technicians: ['Sarah Johnson'],
    parts: ['Roller assemblies', 'Tension gauge'],
    cost: 950,
    notes: 'Replaced two worn rollers and adjusted tension to specification.'
  },
  {
    id: 'hist-006',
    equipmentId: 'hvac-001',
    equipmentName: 'HVAC System',
    maintenanceType: 'Preventive',
    description: 'Filter replacement and system check',
    completionDate: '2022-11-15',
    duration: 2.5,
    technicians: ['Miguel Rodriguez'],
    parts: ['Air filters', 'Cleaning solution'],
    cost: 650,
    notes: 'Filters replaced, coils cleaned. Airflow improved by 15%.'
  }
];

// Cost data for optimization
export const costOptimizationData = {
  currentYear: {
    corrective: 48500,
    preventive: 28750,
    predictive: 12450,
    total: 89700
  },
  previousYear: {
    corrective: 72300,
    preventive: 26200,
    predictive: 5800,
    total: 104300
  },
  projected: {
    corrective: 32400,
    preventive: 30200,
    predictive: 15800,
    total: 78400
  },
  savings: {
    vs_current: 11300,
    vs_previous: 25900
  },
  monthlyBreakdown: [
    { month: 'Jan', corrective: 5200, preventive: 2400, predictive: 850 },
    { month: 'Feb', corrective: 4800, preventive: 2400, predictive: 950 },
    { month: 'Mar', corrective: 3900, preventive: 2400, predictive: 1050 },
    { month: 'Apr', corrective: 3200, preventive: 2400, predictive: 1100 },
    { month: 'May', corrective: 3100, preventive: 2400, predictive: 1100 },
    { month: 'Jun', corrective: 2850, preventive: 2400, predictive: 1150 },
    { month: 'Jul', corrective: 2750, preventive: 2400, predictive: 1200 },
    { month: 'Aug', corrective: 2700, preventive: 2400, predictive: 1250 },
    { month: 'Sep', corrective: 2600, preventive: 2400, predictive: 1300 },
    { month: 'Oct', corrective: 2600, preventive: 2450, predictive: 1300 },
    { month: 'Nov', corrective: 2500, preventive: 2450, predictive: 1400 },
    { month: 'Dec', corrective: 2400, preventive: 2450, predictive: 1450 }
  ]
};

// Resource allocation
export const resourceAllocation = {
  technicians: [
    { name: 'John Davis', skills: ['CNC', 'Mechanical'], workload: 85, availability: 'high' },
    { name: 'Sarah Johnson', skills: ['Mechanical', 'Electrical'], workload: 70, availability: 'medium' },
    { name: 'Miguel Rodriguez', skills: ['CNC', 'HVAC'], workload: 90, availability: 'low' },
    { name: 'Li Wei', skills: ['Robotics', 'Electronics'], workload: 65, availability: 'high' }
  ],
  parts: [
    { id: 'part-001', name: 'Main bearing kit', inStock: 2, onOrder: 2, leadTime: '1 week', lastPrice: 1250 },
    { id: 'part-002', name: 'Drive belt', inStock: 3, onOrder: 0, leadTime: '3 days', lastPrice: 450 },
    { id: 'part-003', name: 'Filter kit', inStock: 8, onOrder: 0, leadTime: '2 days', lastPrice: 120 },
    { id: 'part-004', name: 'Lubricant', inStock: 15, onOrder: 0, leadTime: '1 day', lastPrice: 35 },
    { id: 'part-005', name: 'Seals', inStock: 12, onOrder: 0, leadTime: '2 days', lastPrice: 85 },
    { id: 'part-006', name: 'Calibration tools', inStock: 3, onOrder: 0, leadTime: 'N/A', lastPrice: 0 },
    { id: 'part-007', name: 'Air filters', inStock: 5, onOrder: 10, leadTime: '1 day', lastPrice: 45 }
  ]
}; 