import React from 'react';
import { Rocket, CheckCircle, MessageSquare } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const ValidationSlide: React.FC<SlideProps> = ({ t }) => {
  const frameworkPhases = [
    { title: t('slide11_phase1_title'), objective: t('slide11_phase1_objective') },
    { title: t('slide11_phase2_title'), objective: t('slide11_phase2_objective') },
    { title: t('slide11_phase3_title'), objective: t('slide11_phase3_objective') },
  ];
  
  const testimonials = [
    { quote: t('slide11_quote1'), author: t('slide11_author1') },
    { quote: t('slide11_quote2'), author: t('slide11_author2') },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">{t('slide11_mainTitle')}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
            <Rocket className="mr-2" /> {t('slide11_sub1_title')}
          </h3>
          <div className="space-y-4">
            {frameworkPhases.map((phase, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold text-blue-800">{phase.title}</p>
                <p className="text-sm text-gray-700">{phase.objective}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
            <MessageSquare className="mr-2" /> {t('slide11_sub2_title')}
          </h3>
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                <p className="italic text-gray-700">"{testimonial.quote}"</p>
                <cite className="block text-right mt-2 text-sm text-gray-600 not-italic">— {testimonial.author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
       <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3 text-center">{t('slide11_guarantees_title')}</h3>
            <p className="text-center text-blue-700">{t('slide11_guarantees_text')}</p>
        </div>
    </div>
  );
};

export default ValidationSlide; 