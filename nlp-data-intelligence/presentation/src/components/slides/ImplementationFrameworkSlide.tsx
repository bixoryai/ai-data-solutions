import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle, Shield } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ImplementationFrameworkSlide: React.FC<SlideProps> = ({ t }) => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
  };

  const phases = [
    { name: t('s9_phase1_name'), points: [t('s9_phase1_p1'), t('s9_phase1_p2'), t('s9_phase1_p3')] },
    { name: t('s9_phase2_name'), points: [t('s9_phase2_p1'), t('s9_phase2_p2'), t('s9_phase2_p3')] },
    { name: t('s9_phase3_name'), points: [t('s9_phase3_p1'), t('s9_phase3_p2'), t('s9_phase3_p3')] }
  ];

  const outcomes = [
    { title: t('s9_outcome1_title'), desc: t('s9_outcome1_desc') },
    { title: t('s9_outcome2_title'), desc: t('s9_outcome2_desc') },
    { title: t('s9_outcome3_title'), desc: t('s9_outcome3_desc') },
  ];
  
  const risks = [t('s9_risk1'), t('s9_risk2'), t('s9_risk3')];

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <h2 className="text-3xl font-bold text-blue-800 mb-2 text-center">{t('slide9Title')}</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">{t('s9_subtitle')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {phases.map((phase, index) => (
          <motion.div key={index} variants={item} className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">{`Phase ${index + 1}: ${phase.name}`}</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              {phase.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={item} className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center"><CheckCircle className="mr-2"/> {t('s9_outcomes_title')}</h3>
          <div className="space-y-3">
            {outcomes.map((outcome, i) => (
              <div key={i}>
                <h4 className="font-semibold text-green-700">{outcome.title}</h4>
                <p className="text-sm text-gray-600">{outcome.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-red-800 mb-3 flex items-center"><Shield className="mr-2"/> {t('s9_risk_title')}</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            {risks.map((risk, i) => <li key={i}>{risk}</li>)}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ImplementationFrameworkSlide; 