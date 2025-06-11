import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const TitleSlide: React.FC<SlideProps> = ({ t }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-blue-800">
          {t('slide1Title')}
        </h1>
        <p className="mt-4 text-2xl md:text-3xl text-gray-600">
          {t('slide1Subtitle')}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12"
      >
        <div className="inline-block bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center">
                <Zap size={40} className="text-yellow-500" />
                <span className="ml-4 text-2xl font-semibold text-gray-700">{t('slide1Hook')}</span>
            </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-12 text-gray-500"
      >
        <p>{t('companyName')}</p>
        <p className="text-sm">{t('tagline')}</p>
      </motion.div>
    </div>
  );
};

export default TitleSlide; 