import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, BarChart2, Users } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ROISlide: React.FC<SlideProps> = ({ t }) => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const returns = [
    { title: t('s10_returns1_title'), desc: t('s10_returns1_desc') },
    { title: t('s10_returns2_title'), desc: t('s10_returns2_desc') },
  ];

  const successStories = [
    { org: t('s10_story1_org'), challenge: t('s10_story1_challenge'), result: t('s10_story1_result') },
    { org: t('s10_story2_org'), challenge: t('s10_story2_challenge'), result: t('s10_story2_result') },
    { org: t('s10_story3_org'), challenge: t('s10_story3_challenge'), result: t('s10_story3_result') },
  ];

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">{t('slide10Title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {returns.map((ret, index) => (
          <motion.div key={index} variants={item} className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
              <DollarSign className="mr-2"/> {ret.title}
            </h3>
            <p className="text-gray-700">{ret.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div variants={item}>
        <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center justify-center">
            <Users className="mr-3" /> {t('s10_stories_title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {successStories.map((story, i) => (
            <motion.div key={i} variants={item} className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-gray-800">{story.org}</h4>
              <p className="text-sm text-gray-600 my-2"><strong className="text-gray-700">{t('s10_story_challenge_label')}</strong> {story.challenge}</p>
              <p className="text-sm text-gray-600"><strong className="text-gray-700">{t('s10_story_result_label')}</strong> {story.result}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </motion.div>
  );
};

export default ROISlide; 