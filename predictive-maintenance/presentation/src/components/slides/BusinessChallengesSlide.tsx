import React from 'react';
import { AlertTriangle, Clock, DollarSign, Loader, BatteryWarning } from 'lucide-react';

interface BusinessChallengesSlideProps {
  t: (key: string) => string;
}

const BusinessChallengesSlide: React.FC<BusinessChallengesSlideProps> = ({ t }) => {
  // Slide-specific translations
  const content = {
    en: {
      title: "Business Challenges in Maintenance",
      subtitle: "Organizations face significant challenges with traditional maintenance approaches, resulting in higher costs and lower efficiency.",
      unplannedDowntime: "Unplanned Downtime",
      unplannedDowntimeDesc: "Equipment failures cause production losses and unscheduled maintenance with average costs of $50k-$100k per hour in manufacturing environments.",
      inefficientScheduling: "Inefficient Maintenance Scheduling",
      inefficientSchedulingDesc: "Reactive maintenance leads to 30% higher costs than necessary, while preventive maintenance often services equipment that doesn't yet need attention.",
      sparePartsInventory: "Spare Parts Inventory Costs",
      sparePartsInventoryDesc: "Excessive inventory ties up capital, while insufficient inventory can extend downtime. Optimizing this balance is a constant challenge.",
      resourceAllocation: "Resource Allocation",
      resourceAllocationDesc: "Maintenance staff are often misallocated, either sitting idle or overwhelmed by emergency repairs, creating significant inefficiencies.",
      highImpact: "High Impact",
      mediumImpact: "Medium Impact",
      costTitle: "The Cost of Reactive Maintenance",
      costDesc: "Studies show that reactive maintenance costs 3-4 times more than predictive maintenance approaches, with 85% of equipment failing despite having fixed maintenance schedules."
    },
    zh: {
      title: "维护中的业务挑战",
      subtitle: "组织在传统维护方法方面面临重大挑战，导致成本更高，效率更低。",
      unplannedDowntime: "计划外停机",
      unplannedDowntimeDesc: "设备故障导致生产损失和计划外维护，在制造环境中平均成本为每小时5万至10万美元。",
      inefficientScheduling: "低效的维护调度",
      inefficientSchedulingDesc: "被动维护的成本比必要的高30%，而预防性维护常常会维修尚不需要关注的设备。",
      sparePartsInventory: "备件库存成本",
      sparePartsInventoryDesc: "过多的库存占用资本，而库存不足会延长停机时间。优化这种平衡是一个持续的挑战。",
      resourceAllocation: "资源分配",
      resourceAllocationDesc: "维护人员经常被错误分配，要么闲置，要么被紧急维修任务压垮，造成重大低效。",
      highImpact: "高影响",
      mediumImpact: "中等影响",
      costTitle: "被动维护的成本",
      costDesc: "研究表明，被动维护的成本比预测性维护方法高3-4倍，尽管有固定的维护计划，但85%的设备仍会发生故障。"
    }
  };

  const language = t('language') === 'zh' ? 'zh' : 'en';
  
  const challenges = [
    {
      icon: <AlertTriangle size={32} className="text-red-600" />,
      title: content[language].unplannedDowntime,
      description: content[language].unplannedDowntimeDesc,
      impact: language === 'en' ? content[language].highImpact : content[language].highImpact,
      color: "red"
    },
    {
      icon: <Clock size={32} className="text-orange-600" />,
      title: content[language].inefficientScheduling,
      description: content[language].inefficientSchedulingDesc,
      impact: language === 'en' ? content[language].mediumImpact : content[language].mediumImpact,
      color: "orange"
    },
    {
      icon: <DollarSign size={32} className="text-yellow-600" />,
      title: content[language].sparePartsInventory,
      description: content[language].sparePartsInventoryDesc,
      impact: language === 'en' ? content[language].mediumImpact : content[language].mediumImpact,
      color: "yellow"
    },
    {
      icon: <Loader size={32} className="text-blue-600" />,
      title: content[language].resourceAllocation,
      description: content[language].resourceAllocationDesc,
      impact: language === 'en' ? content[language].mediumImpact : content[language].mediumImpact,
      color: "blue"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-3">{content[language].title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {content[language].subtitle}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges.map((challenge, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow p-6 border border-gray-100"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg bg-${challenge.color}-100`}>
                {challenge.icon}
              </div>
              <div>
                <h3 className={`text-xl font-bold text-${challenge.color}-700 mb-2`}>{challenge.title}</h3>
                <p className="text-gray-600 mb-3">{challenge.description}</p>
                <div className={`py-1 px-3 rounded-full text-sm font-medium inline-flex items-center bg-${challenge.color}-100 text-${challenge.color}-800 border border-${challenge.color}-200`}>
                  {challenge.impact}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-red-50 rounded-lg p-6 border border-red-100 mt-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="p-4 rounded-full bg-red-100 shrink-0">
            <AlertTriangle size={32} className="text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-red-800 mb-2">{content[language].costTitle}</h3>
            <p className="text-gray-700">
              {content[language].costDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessChallengesSlide; 