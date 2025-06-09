import React from 'react';

interface RiskAssessmentPageProps {
  language: 'en' | 'zh';
}

const RiskAssessmentPage: React.FC<RiskAssessmentPageProps> = ({ language }) => {
  const translations = {
    title: { en: 'Risk Assessment', zh: '风险评估' },
    content: { en: 'Risk assessment models and reports will be displayed here.', zh: '风险评估模型和报告将在此处显示。' },
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

export default RiskAssessmentPage; 