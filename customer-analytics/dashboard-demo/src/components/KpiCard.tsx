import React from 'react';
import { LucideIcon } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change?: string;
  changeType?: 'increase' | 'decrease';
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, icon: Icon, change, changeType }) => {
  const changeColor = changeType === 'increase' ? 'text-green-500' : 'text-red-500';
  const changeIcon = changeType === 'increase' ? '▲' : '▼';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
      <div className="bg-indigo-100 p-3 rounded-full">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
        {change && (
          <p className={`text-xs ${changeColor} flex items-center`}>
            <span className="mr-1">{changeIcon}</span>
            {change}
          </p>
        )}
      </div>
    </div>
  );
};

export default KpiCard; 