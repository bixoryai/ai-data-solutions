import React, { useState } from 'react';
import { Target, DollarSign, Gift, Zap, PlayCircle, Award, Mail, Phone, Calendar, ArrowRight } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const GettingStartedSlide: React.FC<SlideProps> = ({ t }) => {
  const [activeTab, setActiveTab] = useState('nextSteps');

  const nextSteps = [
    { titleKey: 'step1Title', descriptionKey: 'step1Desc' },
    { titleKey: 'step2Title', descriptionKey: 'step2Desc' },
    { titleKey: 'step3Title', descriptionKey: 'step3Desc' },
  ];

  const investmentTiers = [
    { titleKey: 'tier1Title', priceKey: 'tier1Price', descriptionKey: 'tier1Desc', roiKey: 'tier1Roi' },
    { titleKey: 'tier2Title', priceKey: 'tier2Price', descriptionKey: 'tier2Desc', roiKey: 'tier2Roi' },
    { titleKey: 'tier3Title', priceKey: 'tier3Price', descriptionKey: 'tier3Desc', roiKey: 'tier3Roi' },
  ];

  const contactInfo = [
    { icon: Mail, textKey: 'contactEmail' },
    { icon: Phone, textKey: 'contactPhone' },
    { icon: Calendar, textKey: 'contactSchedule' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">{t('slide10Title')}</h2>
      <p className="text-xl text-center text-gray-600 mb-8">{t('slide10Subtitle')}</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex border-b border-gray-200">
            <TabButton icon={Target} title={t('nextStepsTitle')} isActive={activeTab === 'nextSteps'} onClick={() => setActiveTab('nextSteps')} />
            <TabButton icon={DollarSign} title={t('investmentTitle')} isActive={activeTab === 'investment'} onClick={() => setActiveTab('investment')} />
          </div>
          
          <div className="pt-6">
            {activeTab === 'nextSteps' && (
              <ol className="space-y-6">
                {nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg mr-4">{index + 1}</span>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">{t(step.titleKey)}</h4>
                      <p className="text-gray-600">{t(step.descriptionKey)}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}

            {activeTab === 'investment' && (
              <div className="grid md:grid-cols-3 gap-4">
                {investmentTiers.map((tier, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 text-center bg-white hover:shadow-xl transition-shadow">
                    <h4 className="font-bold text-blue-700">{t(tier.titleKey)}</h4>
                    <p className="text-2xl font-bold text-gray-800 my-2">{t(tier.priceKey)}</p>
                    <p className="text-xs text-gray-500 mb-2">{t(tier.descriptionKey)}</p>
                    <p className="text-sm font-semibold text-green-600">{t(tier.roiKey)}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-2xl shadow-2xl flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
          <div>
            <h3 className="text-xl font-bold flex items-center mb-3">
              <Gift className="mr-2" /> {t('specialOfferTitle')}
            </h3>
            <h4 className="font-bold text-lg">{t('offerTitle')}</h4>
            <p className="text-sm opacity-90 mb-3">{t('offerValue')}</p>
            <ul className="text-sm space-y-1 opacity-90">
              {['offerPoint1', 'offerPoint2', 'offerPoint3'].map(point => (
                <li key={point} className="flex items-start">
                  <span className="mr-2">✓</span><span>{t(point)}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="mt-4 w-full bg-white text-blue-600 font-bold py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center">
            {t('ctaButton')} <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </div>
      
      <div className="mt-12 border-t pt-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('questionsTitle')}</h3>
        <p className="text-gray-600 mb-6">{t('questionsSubtitle')}</p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-gray-700">
          {contactInfo.map((contact, index) => (
            <div key={index} className="flex items-center hover:text-blue-600 transition-colors">
              <contact.icon size={18} className="mr-2"/>
              <span>{t(contact.textKey)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TabButton: React.FC<{icon: React.ElementType, title: string, isActive: boolean, onClick: () => void}> = ({ icon: Icon, title, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-3 text-sm font-medium border-b-2 -mb-px
      ${isActive 
        ? 'border-blue-500 text-blue-600' 
        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`
    }
  >
    <Icon size={16} className="mr-2" />
    {title}
  </button>
);

export default GettingStartedSlide; 