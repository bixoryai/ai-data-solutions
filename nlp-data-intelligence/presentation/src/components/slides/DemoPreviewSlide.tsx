import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, UploadCloud, Search, BarChart } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const DemoPreviewSlide: React.FC<SlideProps> = ({ t }) => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const demoPoints = [
    { icon: UploadCloud, text: t('s11_point1') },
    { icon: Search, text: t('s11_point2') },
    { icon: BarChart, text: t('s11_point3') },
  ];

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">{t('slide11Title')}</h2>
      
      <motion.div variants={item} className="mb-8">
        <a href="#" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors shadow-lg">
          <div className="flex items-center">
            <PlayCircle className="mr-3"/>
            <span>{t('s11_cta')}</span>
          </div>
        </a>
      </motion.div>
      
      <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {demoPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <motion.div key={index} variants={item} className="bg-gray-50 p-6 rounded-lg">
              <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-700">{point.text}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default DemoPreviewSlide; 