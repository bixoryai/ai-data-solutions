import React from 'react';
import { TrendingUp, ShieldCheck, Zap, BarChart } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const IntroductionSlide: React.FC<SlideProps> = ({ t }) => {
  const content = {
    en: {
      openingHook: "What if you could prevent $8.8 billion in annual fraud losses while improving customer experience and regulatory compliance - all with a single AI platform?",
      title: "AI-Powered Financial Analytics",
      subtitle: "Turning Financial Data into Competitive Intelligence",
    },
    zh: {
      openingHook: "如果您可以通过单一AI平台，在改善客户体验和法规遵从性的同时，防止每年88亿美元的欺诈损失，那会怎么样？",
      title: "AI驱动的金融分析",
      subtitle: "将金融数据转化为竞争情报",
    }
  };

  const currentContent = t('language') === 'zh' ? content.zh : content.en;

  return (
    <div className="text-center">
        <p className="text-lg italic text-gray-600 mb-6">{currentContent.openingHook}</p>
        <h2 className="text-4xl font-bold text-blue-800 mb-3">{currentContent.title}</h2>
        <p className="text-2xl text-blue-600">{currentContent.subtitle}</p>
    </div>
  );
};

export default IntroductionSlide; 