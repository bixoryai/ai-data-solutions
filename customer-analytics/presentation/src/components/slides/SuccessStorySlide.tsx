import React from 'react';
import { Award, TrendingUp, DollarSign, Target, ListChecks, Search, Lightbulb } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const SuccessStorySlide: React.FC<SlideProps> = ({ t }) => {
  const challenges = ['challenge1', 'challenge2', 'challenge3', 'challenge4'];
  const solutionPhases = ['phase1', 'phase2', 'phase3'];
  const keyInsights = ['insight1', 'insight2', 'insight3'];
  const results = [
    { metricKey: 'metric1', before: '12%', after: '23%', improvement: '+92%' },
    { metricKey: 'metric2', before: '$335', after: '$485', improvement: '+45%' },
    { metricKey: 'metric3', before: '2.1%', after: '3.4%', improvement: '+62%' },
    { metricKey: 'metric4', before: '2.8%', after: '3.2%', improvement: '+14%' },
    { metricKey: 'metric5', before: '$142', after: '$153', improvement: '+8%' },
  ];
  const revenueImpacts = [
    { valueKey: 'impact1Value', descriptionKey: 'impact1Desc' },
    { valueKey: 'impact2Value', descriptionKey: 'impact2Desc' },
    { valueKey: 'impact3Value', descriptionKey: 'impact3Desc' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">{t('slide8Title')}</h2>
      <p className="text-xl text-center text-gray-600 mb-8">{t('slide8Subtitle')}</p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <InfoCard icon={ListChecks} title={t('clientBackgroundTitle')} content={t('clientBackgroundContent')} />
          <InfoCard icon={Target} title={t('challengesTitle')} items={challenges.map(k => t(k))} />
          <InfoCard icon={Lightbulb} title={t('solutionTitle')} items={solutionPhases.map(k => t(k))} />
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
              <Award size={22} className="mr-2" /> {t('resultsTitle')}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                  <tr>
                    <th scope="col" className="px-4 py-3">{t('metric')}</th>
                    <th scope="col" className="px-4 py-3">{t('before')}</th>
                    <th scope="col" className="px-4 py-3">{t('after')}</th>
                    <th scope="col" className="px-4 py-3 text-green-600">{t('improvement')}</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{t(result.metricKey)}</th>
                      <td className="px-4 py-3">{result.before}</td>
                      <td className="px-4 py-3">{result.after}</td>
                      <td className="px-4 py-3 font-bold text-green-600">{result.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
              <DollarSign size={22} className="mr-2" /> {t('revenueImpactTitle')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {revenueImpacts.map((impact, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <p className="text-2xl font-bold text-green-700">{t(impact.valueKey)}</p>
                  <p className="text-sm text-green-800">{t(impact.descriptionKey)}</p>
                </div>
              ))}
            </div>
          </div>

          <InfoCard icon={Search} title={t('keyInsightsTitle')} items={keyInsights.map(k => t(k))} />
        </div>
      </div>
    </div>
  );
};

const InfoCard: React.FC<{icon: React.ElementType, title: string, content?: string, items?: string[]}> = ({ icon: Icon, title, content, items }) => (
  <div className="bg-white shadow-lg rounded-xl p-6">
    <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
      <Icon size={20} className="mr-2" /> {title}
    </h3>
    {content && <p className="text-gray-700 text-sm">{content}</p>}
    {items && (
      <ul className="space-y-2 text-sm text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default SuccessStorySlide; 