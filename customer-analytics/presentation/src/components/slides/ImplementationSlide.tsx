import React from 'react';
import { Rocket, Shield, Users, Milestone, CheckCircle, Flag, Search, Settings, TrendingUp } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ImplementationSlide: React.FC<SlideProps> = ({ t }) => {
  const frameworkPhases = [
    { icon: Search, titleKey: 'phase1Title', durationKey: 'phase1Duration', items: ['phase1Item1', 'phase1Item2', 'phase1Item3', 'phase1Item4'] },
    { icon: Settings, titleKey: 'phase2Title', durationKey: 'phase2Duration', items: ['phase2Item1', 'phase2Item2', 'phase2Item3', 'phase2Item4'] },
    { icon: TrendingUp, titleKey: 'phase3Title', durationKey: 'phase3Duration', items: ['phase3Item1', 'phase3Item2', 'phase3Item3', 'phase3Item4'] },
  ];

  const milestones = [
    { weekKey: 'milestone1Week', descriptionKey: 'milestone1Desc' },
    { weekKey: 'milestone2Week', descriptionKey: 'milestone2Desc' },
    { weekKey: 'milestone3Week', descriptionKey: 'milestone3Desc' },
  ];
  
  const riskMitigationItems = ['risk1', 'risk2', 'risk3', 'risk4'];
  const teamRoleItems = ['role1', 'role2', 'role3', 'role4'];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">{t('slide9Title')}</h2>
      <p className="text-xl text-center text-gray-600 mb-8">{t('slide9Subtitle')}</p>

      <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg mb-10 shadow-inner">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center justify-center">
          <Rocket className="mr-2" /> {t('frameworkTitle')}
        </h3>
        <div className="flex flex-col md:flex-row justify-between relative">
          {/* Timeline Connector */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-200" style={{ transform: 'translateY(-50%)' }}></div>
          
          {frameworkPhases.map((phase, index) => (
            <div key={index} className="flex-1 md:text-center mb-8 md:mb-0 relative px-4">
              <div className="flex md:flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full z-10 shadow-lg">
                  <phase.icon size={24} />
                </div>
                <div className="md:mt-4 ml-4 md:ml-0">
                  <h4 className="font-bold text-blue-800">{t(phase.titleKey)}</h4>
                  <p className="text-sm text-gray-500">{t(phase.durationKey)}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-left md:text-center text-gray-700">
                {phase.items.map(item => (
                  <li key={item}>{t(item)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center"><Shield className="mr-2" />{t('riskMitigationTitle')}</h3>
          <ul className="space-y-3">
            {riskMitigationItems.map(item => (
              <li key={item} className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18}/>
                <span className="text-gray-700">{t(item)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center"><Users className="mr-2" />{t('teamRoleTitle')}</h3>
          <ul className="space-y-3">
            {teamRoleItems.map(item => (
              <li key={item} className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18}/>
                <span className="text-gray-700">{t(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImplementationSlide; 