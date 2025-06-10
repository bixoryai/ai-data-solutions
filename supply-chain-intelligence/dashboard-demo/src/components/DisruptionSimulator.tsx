import React from 'react';
import { Zap, AlertTriangle, Factory } from 'lucide-react';

interface DisruptionSimulatorProps {
  language: 'en' | 'zh';
  onDisruption: (disruption: string) => void;
}

const DisruptionSimulator: React.FC<DisruptionSimulatorProps> = ({ language, onDisruption }) => {
  const translations = {
    title: { en: 'Disruption Simulator', zh: '中断模拟器' },
    portClosure: { en: 'Port Closure', zh: '港口关闭' },
    supplierFire: { en: 'Supplier Fire', zh: '供应商火灾' },
    demandSpike: { en: 'Demand Spike', zh: '需求激增' },
  };

  const disruptionEvents = [
    { id: 'port_closure', label: translations.portClosure[language], icon: <AlertTriangle size={18} /> },
    { id: 'supplier_fire', label: translations.supplierFire[language], icon: <Factory size={18} /> },
    { id: 'demand_spike', label: translations.demandSpike[language], icon: <Zap size={18} /> },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-bold mb-4">{translations.title[language]}</h3>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
        {disruptionEvents.map((event) => (
          <button
            key={event.id}
            onClick={() => onDisruption(event.id)}
            className="w-full flex items-center justify-center px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
          >
            {event.icon}
            <span className="ml-2">{event.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DisruptionSimulator; 