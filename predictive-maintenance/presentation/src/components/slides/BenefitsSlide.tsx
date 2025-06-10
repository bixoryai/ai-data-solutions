import React from 'react';

interface BenefitsSlideProps {
  t: (key: string) => string;
}

const BenefitsSlide: React.FC<BenefitsSlideProps> = ({ t }) => {
  // Slide-specific translations
  const content = {
    en: {
      title: "Benefits of Predictive Maintenance",
      subtitle: "Key advantages over traditional maintenance approaches",
      mainBenefits: [
        {
          title: "Reduced Downtime",
          description: "Minimize unplanned equipment failures by identifying potential issues before they cause disruptions. Predictive maintenance can reduce downtime by 30-50% compared to reactive maintenance.",
          metrics: "30-50% reduction in unplanned downtime"
        },
        {
          title: "Cost Savings",
          description: "Optimize maintenance resources by performing maintenance only when needed, rather than on a fixed schedule. This approach reduces both labor costs and parts expenses.",
          metrics: "25-30% reduction in maintenance costs"
        },
        {
          title: "Extended Equipment Life",
          description: "Maintain optimal equipment condition by addressing issues before they cause additional damage. This extends asset lifespan and delays capital expenditure on replacements.",
          metrics: "20-40% increase in equipment lifespan"
        },
        {
          title: "Improved Safety",
          description: "Prevent catastrophic equipment failures that could pose safety risks to personnel. Early detection of potential issues helps maintain a safer working environment.",
          metrics: "20% reduction in safety incidents"
        }
      ],
      secondaryBenefits: [
        {
          title: "Enhanced Productivity",
          description: "Maintain consistent production rates with fewer interruptions, leading to higher throughput and improved capacity utilization."
        },
        {
          title: "Higher Quality Output",
          description: "Properly maintained equipment produces more consistent results, reducing defects and improving overall product quality."
        },
        {
          title: "Better Resource Planning",
          description: "Accurately forecast maintenance needs, allowing for better planning of staff schedules, inventory management, and budgeting."
        },
        {
          title: "Environmental Impact",
          description: "Reduce energy consumption and waste through more efficient equipment operation and extended asset lifecycles."
        }
      ],
      roi: {
        title: "Return on Investment",
        description: "Organizations implementing predictive maintenance typically see ROI within 3-9 months, with returns ranging from 10x to 30x the initial investment over a 5-year period.",
        factors: [
          "Implementation costs vary based on existing infrastructure, equipment criticality, and monitoring complexity",
          "The most substantial returns come from critical equipment with high failure costs",
          "Continuous improvement yields increasing returns as the system learns and becomes more accurate"
        ]
      }
    },
    zh: {
      title: "预测性维护的益处",
      subtitle: "相比传统维护方法的主要优势",
      mainBenefits: [
        {
          title: "减少停机时间",
          description: "通过在设备故障造成中断前识别潜在问题，最大限度地减少计划外设备故障。与被动维护相比，预测性维护可将停机时间减少30-50%。",
          metrics: "计划外停机时间减少30-50%"
        },
        {
          title: "成本节约",
          description: "通过仅在需要时进行维护而非按固定计划进行维护，优化维护资源。这种方法既减少了人工成本，也减少了零件费用。",
          metrics: "维护成本减少25-30%"
        },
        {
          title: "延长设备寿命",
          description: "通过在问题导致额外损坏前解决问题，保持设备最佳状态。这延长了资产寿命并推迟了更换设备的资本支出。",
          metrics: "设备寿命增加20-40%"
        },
        {
          title: "提高安全性",
          description: "防止可能对人员造成安全风险的灾难性设备故障。早期检测潜在问题有助于维持更安全的工作环境。",
          metrics: "安全事故减少20%"
        }
      ],
      secondaryBenefits: [
        {
          title: "提高生产力",
          description: "减少中断，保持稳定的生产率，从而提高生产量和改善产能利用率。"
        },
        {
          title: "更高质量的产出",
          description: "妥善维护的设备产生更一致的结果，减少缺陷并提高整体产品质量。"
        },
        {
          title: "更好的资源规划",
          description: "准确预测维护需求，能更好地规划员工日程、库存管理和预算。"
        },
        {
          title: "环境影响",
          description: "通过更高效的设备运行和延长资产生命周期，减少能源消耗和废物产生。"
        }
      ],
      roi: {
        title: "投资回报率",
        description: "实施预测性维护的组织通常在3-9个月内见到投资回报，在5年期间内回报率为初始投资的10-30倍。",
        factors: [
          "实施成本根据现有基础设施、设备关键性和监控复杂性而有所不同",
          "最大的回报来自具有高故障成本的关键设备",
          "随着系统学习和变得更加准确，持续改进产生越来越多的回报"
        ]
      }
    }
  };

  const language = t('language') === 'zh' ? 'zh' : 'en';

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">{content[language].title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {content[language].subtitle}
        </p>
      </div>
      
      {/* Main Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content[language].mainBenefits.map((benefit, index) => (
          <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-blue-600 px-6 py-3">
              <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-4">{benefit.description}</p>
              <div className="bg-blue-50 rounded p-3">
                <p className="text-lg font-bold text-blue-800 text-center">{benefit.metrics}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Secondary Benefits */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {content[language].secondaryBenefits.map((benefit, index) => (
            <div key={index} className="p-4 border border-blue-100 rounded bg-blue-50">
              <h4 className="text-lg font-bold text-blue-800 mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* ROI Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow p-6 text-white">
        <h3 className="text-2xl font-bold mb-3">{content[language].roi.title}</h3>
        <p className="text-white mb-4">{content[language].roi.description}</p>
        <div className="bg-white/20 rounded-lg p-4">
          <ul className="space-y-2">
            {content[language].roi.factors.map((factor, index) => (
              <li key={index} className="text-sm flex items-start">
                <span className="inline-block bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0 font-bold">
                  {index + 1}
                </span>
                {factor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSlide; 