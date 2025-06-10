import React, { useState } from 'react';
import { TrendingDown, Target, ShoppingCart, UserPlus, Zap, Clock, BarChart, XCircle, CheckCircle, Flame } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const SolutionSlide: React.FC<SlideProps> = ({ t }) => {
  const [activeTab, setActiveTab] = useState(0);

  const analyticsComparison = {
    headers: ['capability', 'traditional', 'aiPowered'],
    rows: [
      { capability: 'dataProcessing', traditional: 'batchProcessing', aiPowered: 'realTimeProcessing' },
      { capability: 'analysisScope', traditional: 'historical', aiPowered: 'predictive' },
      { capability: 'personalization', traditional: 'basicSegmentation', aiPowered: 'individualized' },
      { capability: 'patternDetection', traditional: 'manual', aiPowered: 'automated' },
      { capability: 'actionability', traditional: 'manualInterpretation', aiPowered: 'automatedRecommendations' },
    ]
  };

  const businessProblems = [
    {
      icon: TrendingDown,
      titleKey: 'problem1Title',
      challengeKey: 'problem1Challenge',
      solutionKey: 'problem1Solution',
      resultKey: 'problem1Result',
    },
    {
      icon: Target,
      titleKey: 'problem2Title',
      challengeKey: 'problem2Challenge',
      solutionKey: 'problem2Solution',
      resultKey: 'problem2Result',
    },
    {
      icon: UserPlus,
      titleKey: 'problem3Title',
      challengeKey: 'problem3Challenge',
      solutionKey: 'problem3Solution',
      resultKey: 'problem3Result',
    },
    {
      icon: ShoppingCart,
      titleKey: 'problem4Title',
      challengeKey: 'problem4Challenge',
      solutionKey: 'problem4Solution',
      resultKey: 'problem4Result',
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">{t('slide4Title')}</h2>
      <p className="text-xl text-center text-gray-600 mb-8">{t('slide4Subtitle')}</p>
      
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-50">
            <tr>
              {analyticsComparison.headers.map(header => (
                <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                  {t(header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {analyticsComparison.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t(row.capability)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <XCircle className="text-red-400 mr-2" size={16} />
                    {t(row.traditional)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    <span className="font-semibold">{t(row.aiPowered)}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">{t('slide5Title')}</h2>
        <p className="text-xl text-center text-gray-600 mb-8">{t('slide5Subtitle')}</p>
        
        <div className="flex justify-center mb-6 border-b border-gray-200">
          {businessProblems.map((problem, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center px-4 py-2 text-sm font-medium -mb-px border-b-2
                ${activeTab === index 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`
              }
            >
              <problem.icon size={16} className="mr-2" />
              {t(problem.titleKey)}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-inner min-h-[280px]">
          {businessProblems.map((problem, index) => (
            <div key={index} style={{ display: activeTab === index ? 'block' : 'none' }}>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{t(problem.titleKey)}</h3>
              <p className="text-gray-600 mb-4"><span className="font-semibold text-red-600">{t('challenge')}:</span> {t(problem.challengeKey)}</p>
              <p className="text-gray-600 mb-4"><span className="font-semibold text-green-600">{t('aiSolution')}:</span> {t(problem.solutionKey)}</p>
              <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-4 rounded-r-lg">
                <p><span className="font-bold">{t('result')}:</span> {t(problem.resultKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionSlide; 