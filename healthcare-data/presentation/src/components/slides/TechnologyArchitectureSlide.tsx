import React from 'react';
import { ArrowDown, Database, Cpu, Share2, Presentation } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const TechnologyArchitectureSlide: React.FC<SlideProps> = ({ t }) => {
  const layers = [
    { icon: <Database size={32} className="text-blue-500" />, title: t('s9_layer1'), description: t('s9_layer1_desc') },
    { icon: <Cpu size={32} className="text-purple-500" />, title: t('s9_layer2'), description: t('s9_layer2_desc') },
    { icon: <Share2 size={32} className="text-green-500" />, title: t('s9_layer3'), description: t('s9_layer3_desc') },
    { icon: <Presentation size={32} className="text-orange-500" />, title: t('s9_layer4'), description: t('s9_layer4_desc') },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">{t('s9_title')}</h2>
      <p className="text-lg text-center text-gray-600 mb-12">{t('s9_subheader')}</p>
      
      <div className="flex flex-col items-center">
        {layers.map((layer, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center p-6 bg-white rounded-xl shadow-lg w-full md:w-3/4 lg:w-1/2 border border-gray-200">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                {layer.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{layer.title}</h3>
                <p className="text-gray-600">{layer.description}</p>
              </div>
            </div>
            {index < layers.length - 1 && (
              <ArrowDown size={32} className="text-gray-400 my-4" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TechnologyArchitectureSlide; 