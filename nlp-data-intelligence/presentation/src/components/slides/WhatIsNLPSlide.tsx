import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Search, BarChart, ShieldCheck, FileCheck } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const WhatIsNLPSlide: React.FC<SlideProps> = ({ t }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const capabilities = [
    { icon: BrainCircuit, titleKey: 'capabilityTitle1', contentKey: 'capabilityContent1' },
    { icon: FileCheck, titleKey: 'capabilityTitle2', contentKey: 'capabilityContent2' },
    { icon: Search, titleKey: 'capabilityTitle3', contentKey: 'capabilityContent3' },
    { icon: BarChart, titleKey: 'capabilityTitle4', contentKey: 'capabilityContent4' },
    { icon: ShieldCheck, titleKey: 'capabilityTitle5', contentKey: 'capabilityContent5' },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">{t('slide3Title')}</h2>
      <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">{t('slide3Definition')}</motion.p>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {capabilities.map((capability, index) => {
          const Icon = capability.icon;
          return (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-center mb-3">
                <Icon className="h-8 w-8 text-blue-600 mr-4" />
                <h3 className="text-xl font-semibold text-blue-700">{t(capability.titleKey)}</h3>
              </div>
              <p className="text-gray-700">{t(capability.contentKey)}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default WhatIsNLPSlide; 