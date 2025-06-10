export interface Document {
  id: number;
  title: string;
  content: string;
}

export const mockDocuments: Document[] = [
  {
    id: 1,
    title: "Bixory AI Launches New Platform",
    content: "Bixory AI is revolutionizing the data analytics industry with its innovative solutions. Headquartered in San Francisco, the company announced on July 4, 2025, that its new platform provides real-time insights with unparalleled accuracy. John Doe, the CEO, expressed his excitement about the future of AI-driven analytics."
  },
  {
    id: 2,
    title: "The Rise of Artificial Intelligence in Healthcare",
    content: "Artificial intelligence is transforming the healthcare sector by improving diagnostic accuracy and personalizing patient treatment plans. Machine learning algorithms can analyze medical images with incredible precision. The ethical implications of AI in medicine are also a topic of ongoing discussion."
  },
  {
    id: 3,
    title: "Global Supply Chain Challenges",
    content: "The global supply chain continues to face significant challenges, from port congestion to labor shortages. Companies are increasingly turning to data analytics and AI to predict disruptions and optimize logistics. Real-time tracking and predictive modeling are key to building resilient supply chains."
  },
  {
    id: 4,
    title: "Future of Renewable Energy",
    content: "Renewable energy sources like solar and wind are becoming more cost-effective. Advances in battery storage technology are critical for ensuring a stable power grid. AI is used to optimize energy distribution and predict demand, accelerating the transition away from fossil fuels."
  }
]; 