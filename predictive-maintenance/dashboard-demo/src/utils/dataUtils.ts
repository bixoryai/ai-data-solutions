/**
 * Utility functions for data processing and calculations
 */

/**
 * Calculate the health score based on various metrics
 * @param metrics - Object containing equipment metrics
 * @returns Health score (0-100)
 */
export const calculateHealthScore = (metrics: Record<string, any>): number => {
  // This is a simplified example calculation
  // Real health score would involve more complex algorithms
  
  let score = 100;
  
  // Example: Reduce score based on how close current values are to thresholds/optimal values
  Object.entries(metrics).forEach(([key, metric]) => {
    if (metric.threshold && metric.current) {
      // For metrics with thresholds (like vibration), reduce score as it approaches threshold
      const ratio = metric.current / metric.threshold;
      if (ratio > 0.8) {
        score -= (ratio - 0.8) * 100;
      }
    }
    else if (metric.optimal && metric.current) {
      // For metrics with optimal values, reduce score based on deviation
      const deviation = Math.abs(metric.current - metric.optimal) / metric.optimal;
      if (deviation > 0.05) {
        score -= (deviation - 0.05) * 100;
      }
    }
  });
  
  // Ensure score is between 0 and 100
  return Math.max(0, Math.min(100, Math.round(score)));
};

/**
 * Calculate probability of failure within a given time period
 * @param healthScore - Health score of the equipment
 * @param days - Number of days in the future
 * @returns Probability (0-100)
 */
export const calculateFailureProbability = (healthScore: number, days: number): number => {
  // Simple exponential model for demo purposes
  // A real model would be much more complex and use ML/statistical methods
  
  // Base probability inversely related to health score
  const baseProbability = Math.max(5, 100 - healthScore);
  
  // Time factor - probability increases with time
  const timeFactor = 1 + (days / 100);
  
  // Calculate final probability
  let probability = baseProbability * timeFactor;
  
  // Cap at 100%
  probability = Math.min(100, probability);
  
  return Math.round(probability);
};

/**
 * Format currency values
 * @param value - Numeric value to format
 * @param currency - Currency symbol (default: '$')
 * @returns Formatted currency string
 */
export const formatCurrency = (value: number, currency: string = '$'): string => {
  return `${currency}${value.toLocaleString()}`;
};

/**
 * Format percentage values
 * @param value - Numeric value to format
 * @param decimals - Number of decimal places (default: 1)
 * @returns Formatted percentage string
 */
export const formatPercentage = (value: number, decimals: number = 1): string => {
  return `${value.toFixed(decimals)}%`;
};

/**
 * Format date values
 * @param dateString - Date string to format
 * @param locale - Locale for formatting (default: 'en-US')
 * @returns Formatted date string
 */
export const formatDate = (dateString: string, locale: string = 'en-US'): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' });
};

/**
 * Calculate estimated savings from early detection vs. breakdown
 * @param repairCost - Cost of repair
 * @param downtimeCost - Cost of downtime
 * @param earlyDetectionFactor - Factor for early detection savings (default: 0.65)
 * @returns Estimated savings amount
 */
export const calculatePredictiveSavings = (
  repairCost: number, 
  downtimeCost: number, 
  earlyDetectionFactor: number = 0.65
): number => {
  // Early detection typically reduces repair costs and downtime significantly
  const totalCost = repairCost + downtimeCost;
  const savings = totalCost * earlyDetectionFactor;
  
  return Math.round(savings);
};

/**
 * Get status color based on equipment health score
 * @param healthScore - Equipment health score (0-100)
 * @returns Color code
 */
export const getHealthScoreColor = (healthScore: number): string => {
  if (healthScore >= 85) return '#10B981'; // Green (good)
  if (healthScore >= 70) return '#F59E0B'; // Amber (warning)
  return '#EF4444'; // Red (critical)
};

/**
 * Get status indicator based on equipment status
 * @param status - Equipment status
 * @returns Status object with color and label
 */
export const getStatusIndicator = (status: string): { color: string, label: string } => {
  switch (status.toLowerCase()) {
    case 'operational':
      return { color: '#10B981', label: 'Operational' };
    case 'maintenance':
    case 'under maintenance':
      return { color: '#6366F1', label: 'Under Maintenance' };
    case 'warning':
      return { color: '#F59E0B', label: 'Warning' };
    case 'critical':
      return { color: '#EF4444', label: 'Critical' };
    default:
      return { color: '#6B7280', label: 'Unknown' };
  }
}; 