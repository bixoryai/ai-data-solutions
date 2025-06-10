export interface Defect {
  id: string;
  timestamp: string;
  type: 'Scratch' | 'Dent' | 'Missing Component' | 'Misalignment';
  severity: 'Low' | 'Medium' | 'High';
  confidence: number;
  coordinates: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

const defectTypes: Defect['type'][] = ['Scratch', 'Dent', 'Missing Component', 'Misalignment'];
const severities: Defect['severity'][] = ['Low', 'Medium', 'High'];

export const generateMockDefect = (): Defect => {
  const now = new Date();
  return {
    id: `defect-${now.getTime()}-${Math.random()}`,
    timestamp: now.toLocaleTimeString(),
    type: defectTypes[Math.floor(Math.random() * defectTypes.length)],
    severity: severities[Math.floor(Math.random() * severities.length)],
    confidence: Math.random() * (0.99 - 0.85) + 0.85,
    coordinates: {
      x: Math.random() * 0.8,
      y: Math.random() * 0.8,
      width: Math.random() * (0.2 - 0.05) + 0.05,
      height: Math.random() * (0.2 - 0.05) + 0.05,
    },
  };
}; 