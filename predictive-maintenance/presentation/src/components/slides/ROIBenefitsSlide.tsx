import React from 'react';
import { TrendingUp, DollarSign, Clock, Award, BarChart2, Zap } from 'lucide-react';

interface ROIBenefitsSlideProps {
  t: (key: string) => string;
}

const ROIBenefitsSlide: React.FC<ROIBenefitsSlideProps> = ({ t }) => {
  // Slide-specific translations
  const content = {
    en: {
      title: "ROI & Benefits",
      subtitle: "Quantifiable business value from AI-powered predictive maintenance",
      costSavings: "Cost Savings",
      maintenanceCosts: "Reduced Maintenance Costs",
      maintenanceCostsDesc: "25-30% reduction in overall maintenance costs",
      inventory: "Optimized Inventory",
      inventoryDesc: "20-25% reduction in spare parts inventory costs",
      labor: "Enhanced Labor Efficiency",
      laborDesc: "15-20% increase in maintenance staff productivity",
      businessImpact: "Business Impact",
      uptime: "Increased Uptime",
      uptimeDesc: "10-15% improvement in equipment availability",
      failures: "Reduced Unexpected Failures",
      failuresDesc: "70-75% reduction in unexpected breakdowns",
      lifecycle: "Extended Asset Lifecycle",
      lifecycleDesc: "15-20% increase in equipment operational lifetime",
      timeframe: "Typical ROI Timeframe",
      roi3: "3-6 Months",
      roi3Desc: "Initial detection capabilities & quick wins",
      roi9: "9-12 Months",
      roi9Desc: "Full system integration & process optimization",
      roi18: "18-24 Months",
      roi18Desc: "Advanced analytics & predictive capabilities",
      caseStudy: "Case Study Highlights",
      company1: "Manufacturing Company",
      company1Result: "$2.5M annual savings, 45% fewer failures",
      company2: "Energy Provider",
      company2Result: "92% prediction accuracy, 30% maintenance cost reduction",
      company3: "Transportation Fleet",
      company3Result: "Vehicle downtime reduced by 35%, 28% lower parts costs"
    },
    zh: {
      title: "投资回报率和收益",
      subtitle: "AI 驱动的预测性维护带来的可量化商业价值",
      costSavings: "成本节约",
      maintenanceCosts: "降低维护成本",
      maintenanceCostsDesc: "总体维护成本降低 25-30%",
      inventory: "库存优化",
      inventoryDesc: "备件库存成本降低 20-25%",
      labor: "提高劳动效率",
      laborDesc: "维护人员生产力提高 15-20%",
      businessImpact: "业务影响",
      uptime: "增加运行时间",
      uptimeDesc: "设备可用性提高 10-15%",
      failures: "减少意外故障",
      failuresDesc: "意外故障减少 70-75%",
      lifecycle: "延长资产生命周期",
      lifecycleDesc: "设备运行寿命增加 15-20%",
      timeframe: "典型投资回报时间表",
      roi3: "3-6 个月",
      roi3Desc: "初步检测能力和快速成果",
      roi9: "9-12 个月",
      roi9Desc: "完整系统集成和流程优化",
      roi18: "18-24 个月",
      roi18Desc: "高级分析和预测能力",
      caseStudy: "案例研究亮点",
      company1: "制造公司",
      company1Result: "年节省 250 万美元，故障减少 45%",
      company2: "能源供应商",
      company2Result: "预测准确率 92%，维护成本降低 30%",
      company3: "运输车队",
      company3Result: "车辆停机时间减少 35%，零部件成本降低 28%"
    }
  };

  const language = t('language') === 'zh' ? 'zh' : 'en';

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-3">{content[language].title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {content[language].subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cost Savings Section */}
        <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
          <div className="flex items-center mb-4">
            <DollarSign size={24} className="text-green-600 mr-3" />
            <h3 className="text-xl font-bold text-green-800">{content[language].costSavings}</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-green-50 rounded-lg">
              <div className="mr-3 flex-shrink-0">
                <TrendingUp size={20} className="text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-green-800">{content[language].maintenanceCosts}</h4>
                <p className="text-sm text-gray-600">{content[language].maintenanceCostsDesc}</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-green-50 rounded-lg">
              <div className="mr-3 flex-shrink-0">
                <BarChart2 size={20} className="text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-green-800">{content[language].inventory}</h4>
                <p className="text-sm text-gray-600">{content[language].inventoryDesc}</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-green-50 rounded-lg">
              <div className="mr-3 flex-shrink-0">
                <Zap size={20} className="text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-green-800">{content[language].labor}</h4>
                <p className="text-sm text-gray-600">{content[language].laborDesc}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Business Impact Section */}
        <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
          <div className="flex items-center mb-4">
            <Award size={24} className="text-blue-600 mr-3" />
            <h3 className="text-xl font-bold text-blue-800">{content[language].businessImpact}</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
              <div className="mr-3 flex-shrink-0">
                <Clock size={20} className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-blue-800">{content[language].uptime}</h4>
                <p className="text-sm text-gray-600">{content[language].uptimeDesc}</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
              <div className="mr-3 flex-shrink-0">
                <TrendingUp size={20} className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-blue-800">{content[language].failures}</h4>
                <p className="text-sm text-gray-600">{content[language].failuresDesc}</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
              <div className="mr-3 flex-shrink-0">
                <Zap size={20} className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-blue-800">{content[language].lifecycle}</h4>
                <p className="text-sm text-gray-600">{content[language].lifecycleDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* ROI Timeframe Section */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-purple-800 mb-4">{content[language].timeframe}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-800 mb-2">{content[language].roi3}</div>
            <p className="text-sm text-gray-600">{content[language].roi3Desc}</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-800 mb-2">{content[language].roi9}</div>
            <p className="text-sm text-gray-600">{content[language].roi9Desc}</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-800 mb-2">{content[language].roi18}</div>
            <p className="text-sm text-gray-600">{content[language].roi18Desc}</p>
          </div>
        </div>
      </div>
      
      {/* Case Study Section */}
      <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
        <h3 className="text-xl font-bold text-blue-800 mb-4">{content[language].caseStudy}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-blue-700 mb-2">{content[language].company1}</h4>
            <p className="text-sm text-gray-700">{content[language].company1Result}</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-blue-700 mb-2">{content[language].company2}</h4>
            <p className="text-sm text-gray-700">{content[language].company2Result}</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-blue-700 mb-2">{content[language].company3}</h4>
            <p className="text-sm text-gray-700">{content[language].company3Result}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROIBenefitsSlide; 