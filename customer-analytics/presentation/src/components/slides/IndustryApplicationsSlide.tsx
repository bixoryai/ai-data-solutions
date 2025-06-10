import React from 'react';
import { ShoppingBag, Briefcase, Stethoscope, Landmark, CheckCircle, TrendingUp } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const IndustryApplicationsSlide: React.FC<SlideProps> = ({ t }) => {
  const industries = [
    {
      icon: ShoppingBag,
      titleKey: 'industry1Title',
      useCases: ['industry1Case1', 'industry1Case2', 'industry1Case3', 'industry1Case4'],
      results: ['industry1Result1', 'industry1Result2', 'industry1Result3'],
      color: 'blue'
    },
    {
      icon: Briefcase,
      titleKey: 'industry2Title',
      useCases: ['industry2Case1', 'industry2Case2', 'industry2Case3', 'industry2Case4'],
      results: ['industry2Result1', 'industry2Result2', 'industry2Result3'],
      color: 'purple'
    },
    {
      icon: Stethoscope,
      titleKey: 'industry3Title',
      useCases: ['industry3Case1', 'industry3Case2', 'industry3Case3', 'industry3Case4'],
      results: ['industry3Result1', 'industry3Result2', 'industry3Result3'],
      color: 'green'
    },
    {
      icon: Landmark,
      titleKey: 'industry4Title',
      useCases: ['industry4Case1', 'industry4Case2', 'industry4Case3', 'industry4Case4'],
      results: ['industry4Result1', 'industry4Result2', 'industry4Result3'],
      color: 'orange'
    }
  ];
  
  const colorClasses = {
    blue: { headerBg: 'bg-blue-50', iconBg: 'bg-blue-100', text: 'text-blue-600', title: 'text-blue-800' },
    purple: { headerBg: 'bg-purple-50', iconBg: 'bg-purple-100', text: 'text-purple-600', title: 'text-purple-800' },
    green: { headerBg: 'bg-green-50', iconBg: 'bg-green-100', text: 'text-green-600', title: 'text-green-800' },
    orange: { headerBg: 'bg-orange-50', iconBg: 'bg-orange-100', text: 'text-orange-600', title: 'text-orange-800' },
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">{t('slide7Title')}</h2>
      <p className="text-xl text-center text-gray-600 mb-8">{t('slide7Subtitle')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industries.map((industry, index) => {
          const colors = colorClasses[industry.color as keyof typeof colorClasses];
          return (
            <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
              <div className={`${colors.headerBg} p-5 flex items-center`}>
                <div className={`${colors.iconBg} p-3 rounded-full mr-4`}>
                  <industry.icon size={24} className={colors.text} />
                </div>
                <h3 className={`text-xl font-bold ${colors.title}`}>{t(industry.titleKey)}</h3>
              </div>
              <div className="p-6">
                <div className="mb-5">
                  <h4 className="font-semibold text-gray-700 mb-3">{t('useCases')}</h4>
                  <ul className="space-y-2 text-gray-600">
                    {industry.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className={`text-gray-400 mr-2 mt-1 flex-shrink-0`} size={16} />
                        <span>{t(useCase)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">{t('typicalResults')}</h4>
                  <ul className="space-y-2 text-gray-600">
                    {industry.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <TrendingUp className={`text-green-500 mr-2 mt-1 flex-shrink-0`} size={16} />
                        <span className="font-medium text-green-700">{t(result)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndustryApplicationsSlide; 