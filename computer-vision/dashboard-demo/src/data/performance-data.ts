export interface PerformanceMetrics {
  precision: number;
  recall: number;
  f1Score: number;
}

export interface ConfusionMatrixData {
  // Rows are actual, columns are predicted
  // e.g., matrix[0][1] is actual 'Scratch' predicted as 'Dent'
  matrix: number[][];
  labels: string[];
}

export interface RocCurveData {
  name: string;
  fpr: number; // False Positive Rate
  tpr: number; // True Positive Rate (Recall)
}

export const generateMetrics = (): PerformanceMetrics => ({
  precision: 0.92 + (Math.random() - 0.5) * 0.05,
  recall: 0.95 + (Math.random() - 0.5) * 0.05,
  f1Score: 0.93 + (Math.random() - 0.5) * 0.05,
});

const labels = ['Scratch', 'Dent', 'Missing', 'Misalign'];

export const generateConfusionMatrix = (): ConfusionMatrixData => {
  const size = labels.length;
  const matrix = Array(size).fill(0).map(() => Array(size).fill(0));

  for (let i = 0; i < size; i++) {
    matrix[i][i] = Math.floor(Math.random() * 500) + 400; // True positives
    for (let j = 0; j < size; j++) {
      if (i !== j) {
        matrix[i][j] = Math.floor(Math.random() * 10); // False positives/negatives
      }
    }
  }
  return { matrix, labels };
};

export const generateRocCurve = (modelName: string): RocCurveData[] => {
  const data: RocCurveData[] = [{ name: 'Start', fpr: 0, tpr: 0 }];
  let lastTpr = 0;
  for (let fpr = 0.05; fpr <= 1; fpr += 0.05) {
    const tpr = lastTpr + Math.random() * (0.95 - lastTpr) * 0.4 + (0.95-lastTpr)*0.4;
    data.push({ name: '', fpr: Number(fpr.toFixed(2)), tpr });
    lastTpr = tpr;
  }
  data.push({ name: 'End', fpr: 1, tpr: 1 });
  return data;
}; 