import React from 'react';
import { Users, Shield, Star, Award } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const TeamSlide: React.FC<SlideProps> = ({ t }) => {
  const leadership = [
    { name: t('slide10_leader1_name'), title: t('slide10_leader1_title'), expertise: t('slide10_leader1_expertise') },
    { name: t('slide10_leader2_name'), title: t('slide10_leader2_title'), expertise: t('slide10_leader2_expertise') },
    { name: t('slide10_leader3_name'), title: t('slide10_leader3_title'), expertise: t('slide10_leader3_expertise') },
  ];

  const advantages = [
    { icon: <Award className="text-blue-600" />, title: t('slide10_advantage1_title'), text: t('slide10_advantage1_text') },
    { icon: <Shield className="text-blue-600" />, title: t('slide10_advantage2_title'), text: t('slide10_advantage2_text') },
    { icon: <Star className="text-blue-600" />, title: t('slide10_advantage3_title'), text: t('slide10_advantage3_text') },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{t('slide10_mainTitle')}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <Users className="mr-2" /> {t('slide10_sub1_title')}
          </h3>
          <div className="space-y-4">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold text-blue-800">{leader.name}</p>
                <p className="text-sm font-semibold text-gray-600">{leader.title}</p>
                <p className="text-sm text-gray-700 mt-1">{leader.expertise}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
             {t('slide10_sub2_title')}
          </h3>
          <div className="space-y-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">{advantage.icon}</div>
                  <div>
                    <p className="font-bold text-green-800">{advantage.title}</p>
                    <p className="text-sm text-gray-700">{advantage.text}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSlide; 