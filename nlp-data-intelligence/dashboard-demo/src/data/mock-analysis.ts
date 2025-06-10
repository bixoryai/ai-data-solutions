export interface AnalysisResult {
  summary: string;
  sentiment: {
    label: 'Positive' | 'Negative' | 'Neutral';
    score: number;
  };
  entities: {
    text: string;
    type: 'Person' | 'Organization' | 'Location' | 'Date' | 'Other';
  }[];
  keywords: string[];
}

export const sampleText = `Bixory AI is revolutionizing the data analytics industry with its innovative solutions. Headquartered in San Francisco, the company announced on July 4, 2025, that its new platform provides real-time insights with unparalleled accuracy. John Doe, the CEO, expressed his excitement about the future of AI-driven analytics.`;

export const mockAnalysis: AnalysisResult = {
  summary: "Bixory AI, a San Francisco-based company, launched a new platform on July 4, 2025, for real-time data analytics. CEO John Doe is optimistic about the future of AI analytics.",
  sentiment: {
    label: 'Positive',
    score: 0.98,
  },
  entities: [
    { text: 'Bixory AI', type: 'Organization' },
    { text: 'San Francisco', type: 'Location' },
    { text: 'July 4, 2025', type: 'Date' },
    { text: 'John Doe', type: 'Person' },
  ],
  keywords: ['Bixory AI', 'data analytics', 'real-time insights', 'AI-driven'],
}; 