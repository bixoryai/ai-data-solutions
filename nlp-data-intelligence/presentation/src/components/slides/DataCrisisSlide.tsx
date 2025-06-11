import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Database, AlertTriangle } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const DataCrisisSlide: React.FC<SlideProps> = ({ t }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{t('slide2Title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
            <FileText className="mr-3" /> {t('dataImbalanceTitle')}
          </h3>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li>{t('dataImbalancePoint1')}</li>
            <li>{t('dataImbalancePoint2')}</li>
            <li>{t('dataImbalancePoint3')}</li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-yellow-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-yellow-800 mb-4 flex items-center">
            <Database className="mr-3" /> {t('costOfIgnoranceTitle')}
          </h3>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li>{t('costOfIgnorancePoint1')}</li>
            <li>{t('costOfIgnorancePoint2')}</li>
            <li>{t('costOfIgnorancePoint3')}</li>
            <li>{t('costOfIgnorancePoint4')}</li>
          </ul>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mt-8 bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
        <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
          <AlertTriangle className="mr-3" /> {t('invisibleIntelligenceTitle')}
        </h3>
        <p className="text-gray-700">{t('invisibleIntelligenceExamples')}</p>
      </motion.div>
      
      <motion.p variants={itemVariants} className="mt-6 text-center text-lg font-semibold text-gray-800">
        {t('slide2BottomLine')}
      </motion.p>
    </motion.div>
  );
};

export default DataCrisisSlide; 