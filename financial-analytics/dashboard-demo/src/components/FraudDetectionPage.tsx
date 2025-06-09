import React from 'react';

interface FraudDetectionPageProps {
  language: 'en' | 'zh';
}

const FraudDetectionPage: React.FC<FraudDetectionPageProps> = ({ language }) => {
  const translations = {
    title: { en: 'Fraud Detection', zh: '欺诈检测' },
    content: { en: 'Fraud detection analysis and alerts will be displayed here.', zh: '欺诈检测分析和警报将在此处显示。' },
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{translations.title[language]}</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p>{translations.content[language]}</p>
      </div>
    </div>
  );
};

export default FraudDetectionPage; 