import React from 'react';
import { TrendingUp, DollarSign, Database, AlertTriangle, Frown, ShoppingCart, Target, TrendingDown, Users, BarChart2 } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const BusinessChallengesSlide: React.FC<SlideProps> = ({ t }) => {
  const marketRealities = [
    {
      icon: TrendingUp,
      titleKey: 'realityTitle1',
      points: ['reality1Point1', 'reality1Point2', 'reality1Point3']
    },
    {
      icon: DollarSign,
      titleKey: 'realityTitle2',
      points: ['reality2Point1', 'reality2Point2', 'reality2Point3']
    },
    {
      icon: Database,
      titleKey: 'realityTitle3',
      points: ['reality3Point1', 'reality3Point2', 'reality3Point3']
    }
  ];

  const consequences = [
    { icon: TrendingDown, titleKey: 'consequenceTitle1', textKey: 'consequenceText1' },
    { icon: Target, titleKey: 'consequenceTitle2', textKey: 'consequenceText2' },
    { icon: Frown, titleKey: 'consequenceTitle3', textKey: 'consequenceText3' },
    { icon: BarChart2, titleKey: 'consequenceTitle4', textKey: 'consequenceText4' }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
        {t('slide3Title')}
      </h2>
      <p className="text-xl text-center text-gray-600 mb-8">
        {t('slide3Subtitle')}
      </p>

      <h3 className="text-2xl font-semibold text-blue-700 mb-6 text-center">{t('marketRealitiesTitle')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {marketRealities.map((reality, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-sm border-t-4 border-blue-200">
            <div className="flex items-center mb-4">
              <reality.icon className="text-blue-600 mr-3" size={28} />
              <h4 className="text-lg font-bold text-blue-800">{t(reality.titleKey)}</h4>
            </div>
            <ul className="space-y-2">
              {reality.points.map(pointKey => (
                <li key={pointKey} className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span className="text-gray-700">{t(pointKey)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-red-700 mb-6 text-center">{t('consequencesTitle')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {consequences.map((con, index) => (
          <div key={index} className="bg-red-50 p-5 rounded-lg border-l-4 border-red-400 text-center">
            <con.icon size={32} className="text-red-500 mx-auto mb-3" />
            <h4 className="font-semibold text-red-800 mb-2">{t(con.titleKey)}</h4>
            <p className="text-gray-700 text-sm">{t(con.textKey)}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-100 p-6 rounded-lg text-center shadow-inner">
        <p className="text-lg font-semibold text-gray-800">
          <AlertTriangle className="inline-block text-yellow-500 mr-2" size={24} />
          {t('slide3BottomLine')}
        </p>
      </div>
    </div>
  );
};

export default BusinessChallengesSlide; 