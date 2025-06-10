export interface HourlyData {
  hour: number;
  defects: number;
}

export interface DefectTypeDistribution {
  name: 'Scratch' | 'Dent' | 'Missing Component' | 'Misalignment';
  count: number;
}

// Generate data for the last 24 hours
export const generateTrendData = (): HourlyData[] => {
  const data: HourlyData[] = [];
  const now = new Date();
  for (let i = 23; i >= 0; i--) {
    const hour = (now.getHours() - i + 24) % 24;
    data.push({
      hour,
      defects: Math.floor(Math.random() * 15) + (hour > 8 && hour < 17 ? 5 : 2), // Simulate workday highs
    });
  }
  return data;
};

// Generate data for defect type distribution
export const generateDistributionData = (): DefectTypeDistribution[] => {
  return [
    { name: 'Scratch', count: Math.floor(Math.random() * 50) + 20 },
    { name: 'Dent', count: Math.floor(Math.random() * 30) + 10 },
    { name: 'Missing Component', count: Math.floor(Math.random() * 15) + 5 },
    { name: 'Misalignment', count: Math.floor(Math.random() * 40) + 15 },
  ].sort((a, b) => b.count - a.count) as DefectTypeDistribution[]; // Sort and assert type
}; 