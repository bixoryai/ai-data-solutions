import React from 'react';
import { Database, Cpu, Gauge, Zap, Search, Activity, BarChart2, Star } from 'lucide-react';

interface SlideProps {
  t: (key: string) => string;
}

const TechnologyOverviewSlide: React.FC<SlideProps> = ({ t }) => {
  const architectureLayers = [
    {
      icon: Database,
      titleKey: 'layer1Title',
      points: ['layer1Point1', 'layer1Point2', 'layer1Point3'],
      color: 'blue'
    },
    {
      icon: Cpu,
      titleKey: 'layer2Title',
      points: ['layer2Point1', 'layer2Point2', 'layer2Point3'],
      color: 'purple'
    },
    {
      icon: Gauge,
      titleKey: 'layer3Title',
      points: ['layer3Point1', 'layer3Point2', 'layer3Point3'],
      color: 'green'
    },
    {
      icon: Zap,
      titleKey: 'layer4Title',
      points: ['layer4Point1', 'layer4Point2', 'layer4Point3'],
      color: 'orange'
    }
  ];

  const coreCapabilities = [
    {
      icon: Search,
      titleKey: 'capability1Title',
      points: ['capability1Point1', 'capability1Point2', 'capability1Point3']
    },
    {
      icon: Activity,
      titleKey: 'capability2Title',
      points: ['capability2Point1', 'capability2Point2', 'capability2Point3', 'capability2Point4']
    },
    {
      icon: Star,
      titleKey: 'capability3Title',
      points: ['capability3Point1', 'capability3Point2', 'capability3Point3', 'capability3Point4']
    },
    {
      icon: BarChart2,
      titleKey: 'capability4Title',
      points: ['capability4Point1', 'capability4Point2', 'capability4Point3', 'capability4Point4']
    },
  ];

  const colorClasses = {
    blue: {
      border: 'border-blue-400',
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      bullet: 'text-blue-500',
      title: 'text-blue-700'
    },
    purple: {
      border: 'border-purple-400',
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      bullet: 'text-purple-500',
      title: 'text-purple-700'
    },
    green: {
      border: 'border-green-400',
      bg: 'bg-green-100',
      text: 'text-green-600',
      bullet: 'text-green-500',
      title: 'text-green-700'
    },
    orange: {
      border: 'border-orange-400',
      bg: 'bg-orange-100',
      text: 'text-orange-600',
      bullet: 'text-orange-500',
      title: 'text-orange-700'
    },
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">{t('slide6Title')}</h2>
      <p className="text-xl text-center text-gray-600 mb-8">{t('slide6Subtitle')}</p>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg mb-12 shadow-inner">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{t('architectureTitle')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectureLayers.map((layer, index) => {
            const colors = colorClasses[layer.color as keyof typeof colorClasses];
            return (
              <div key={index} className={`bg-white shadow-md rounded-lg p-5 border-t-4 ${colors.border}`}>
                <div className="flex items-center mb-3">
                  <div className={`${colors.bg} p-2 rounded-full mr-3`}>
                    <layer.icon size={24} className={colors.text} />
                  </div>
                  <h4 className={`font-semibold ${colors.title}`}>{t(layer.titleKey)}</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {layer.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-start">
                      <span className={`${colors.bullet} mr-2 mt-1`}>•</span>
                      <span>{t(point)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{t('capabilitiesTitle')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreCapabilities.map((capability, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-300">
              <div className="flex items-center mb-3">
                <capability.icon className="text-blue-600 mr-3" size={24} />
                <h4 className="font-semibold text-blue-800 text-lg">{t(capability.titleKey)}</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {capability.points.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-start">
                     <span className="text-blue-500 mr-2 mt-1">✓</span>
                    <span>{t(point)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyOverviewSlide; 