// Equipment related types
export type EquipmentStatus = 'healthy' | 'warning' | 'critical' | 'offline';
export type EquipmentType = 'CNC' | 'Conveyor' | 'Robotics' | 'Facility';
export type MaintenanceType = 'Preventive' | 'Corrective';
export type PriorityLevel = 'high' | 'medium' | 'low' | 'normal';
export type IndustrySector = 'manufacturing' | 'energy' | 'transportation';

// Language types
export type Language = 'en' | 'zh';

// Equipment metrics interface
export interface EquipmentMetrics {
  temperature: { current: number; optimal: number; unit: string };
  vibration: { current: number; threshold: number; unit: string };
  [key: string]: {
    current: number;
    optimal?: number;
    threshold?: number;
    unit: string;
  };
}

// Equipment interface
export interface Equipment {
  id: string;
  name: string;
  status: EquipmentStatus;
  type: EquipmentType;
  location: string;
  lastMaintenance: string;
  nextMaintenance: string;
  healthScore: number;
  uptime: number;
  alerts: number;
  metrics: EquipmentMetrics;
}

// Maintenance schedule interface
export interface MaintenanceSchedule {
  id: string;
  equipmentId: string;
  equipmentName: string;
  maintenanceType: MaintenanceType;
  description: string;
  scheduledDate: string;
  estimatedHours: number;
  technicians: string[];
  parts: string[];
  priority: PriorityLevel;
  status: 'scheduled' | 'pending' | 'completed' | 'cancelled';
}

// Component props interfaces
export interface EquipmentMonitoringProps {
  language: Language;
  selectedSector: IndustrySector;
  setSelectedSector: (sector: IndustrySector) => void;
}

export interface MaintenanceSchedulingProps {
  language: Language;
  selectedSector: string;
}

// Content types
export interface EquipmentNames {
  [key: string]: string;
}

export interface Content {
  title: string;
  description: string;
  selectSector: string;
  equipmentOverview: string;
  sensorReadings: string;
  maintenanceAlerts: string;
  performanceMetrics: string;
  equipment: string;
  equipmentNames: Record<string, string>;
  sectors: {
    manufacturing: string;
    energy: string;
    transportation: string;
  };
  status: string;
  lastMaintenance: string;
  hoursOperated: string;
  nextScheduled: string;
  hours: string;
  days: string;
  value: string;
  range: string;
  sensorData: string;
  statusLabels: Record<string, string>;
  overallHealth: string;
  reliability: string;
  efficiencyLoss: string;
  estimatedDowntime: string;
}

// Equipment list types
export interface EquipmentItem {
  id: number;
  name: string;
  status: EquipmentStatus;
  lastMaintenance: string;
  hoursOperated: number;
  nextScheduled: number | null;
}

export interface SensorData {
  id: number;
  type: string;
  value: string;
  range: string;
  status: EquipmentStatus;
}

export interface SectorData {
  equipmentList: EquipmentItem[];
  sensorData: SensorData[];
} 