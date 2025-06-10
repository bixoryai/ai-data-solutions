import React from 'react';

interface FutureTrendsSlideProps {
  t: (key: string) => string;
}

const FutureTrendsSlide: React.FC<FutureTrendsSlideProps> = ({ t }) => {
  // Slide-specific translations
  const content = {
    en: {
      title: "Future Trends in Predictive Maintenance",
      subtitle: "Emerging technologies and developments shaping the future",
      trends: [
        {
          title: "Advanced AI and Machine Learning",
          description: "Next-generation algorithms will enable more accurate predictions with less historical data, adapting faster to new equipment and conditions.",
          timeline: "Next 1-3 years",
          impact: "High"
        },
        {
          title: "Edge Computing Integration",
          description: "Processing data closer to sensors reduces latency and enables real-time decision making, even in environments with limited connectivity.",
          timeline: "Already emerging",
          impact: "Medium to High"
        },
        {
          title: "Digital Twin Technology",
          description: "Creating virtual replicas of physical assets enables simulation-based predictions and testing of maintenance scenarios before implementation.",
          timeline: "Next 2-5 years",
          impact: "Transformative"
        },
        {
          title: "Self-Healing Systems",
          description: "AI-driven systems that can automatically reconfigure themselves or adjust operations to mitigate detected issues before they require manual intervention.",
          timeline: "Next 5-10 years",
          impact: "Revolutionary"
        }
      ],
      enablers: [
        {
          title: "5G and Advanced Connectivity",
          description: "Higher bandwidth and lower latency networks enable more comprehensive real-time monitoring across distributed operations."
        },
        {
          title: "Augmented Reality for Maintenance",
          description: "AR interfaces will guide technicians through complex maintenance procedures with real-time data overlay and remote expert assistance."
        },
        {
          title: "Quantum Computing",
          description: "Will eventually enable complex simulations and predictions that are currently computationally unfeasible."
        },
        {
          title: "Cross-Industry Data Sharing",
          description: "Anonymized equipment performance data shared across industries will improve predictive models for all participants."
        }
      ],
      challenges: [
        "Data privacy and security concerns with more connected systems",
        "Implementation costs and ROI justification for smaller operations",
        "Workforce skill gaps in AI, data science, and advanced analytics",
        "Integration with legacy equipment and systems",
        "Standards development for interoperability across platforms and vendors"
      ],
      conclusion: "Organizations that invest in predictive maintenance capabilities today are positioning themselves to more easily adopt these future innovations as they mature."
    },
    zh: {
      title: "预测性维护的未来趋势",
      subtitle: "塑造未来的新兴技术和发展",
      trends: [
        {
          title: "高级人工智能和机器学习",
          description: "下一代算法将能够以更少的历史数据进行更准确的预测，更快地适应新设备和条件。",
          timeline: "未来1-3年",
          impact: "高"
        },
        {
          title: "边缘计算集成",
          description: "将数据处理靠近传感器可以减少延迟并实现实时决策，即使在连接有限的环境中也是如此。",
          timeline: "已经出现",
          impact: "中到高"
        },
        {
          title: "数字孪生技术",
          description: "创建物理资产的虚拟副本，实现基于模拟的预测，并在实施前测试维护场景。",
          timeline: "未来2-5年",
          impact: "变革性"
        },
        {
          title: "自愈系统",
          description: "人工智能驱动的系统，能够在需要人工干预之前自动重新配置或调整操作以缓解检测到的问题。",
          timeline: "未来5-10年",
          impact: "革命性"
        }
      ],
      enablers: [
        {
          title: "5G和先进连接",
          description: "更高带宽和更低延迟的网络使分布式操作中更全面的实时监控成为可能。"
        },
        {
          title: "用于维护的增强现实",
          description: "AR界面将通过实时数据覆盖和远程专家协助指导技术人员完成复杂的维护程序。"
        },
        {
          title: "量子计算",
          description: "最终将实现目前在计算上不可行的复杂模拟和预测。"
        },
        {
          title: "跨行业数据共享",
          description: "跨行业共享的匿名设备性能数据将改善所有参与者的预测模型。"
        }
      ],
      challenges: [
        "更多互联系统带来的数据隐私和安全问题",
        "小型企业的实施成本和投资回报率证明",
        "人工智能、数据科学和高级分析方面的劳动力技能差距",
        "与传统设备和系统的集成",
        "跨平台和供应商互操作性的标准开发"
      ],
      conclusion: "今天投资预测性维护能力的组织正在为自己定位，以便在这些未来创新成熟时更容易采用它们。"
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
      
      {/* Major Trends */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content[language].trends.map((trend, index) => (
          <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3">
              <h3 className="text-xl font-bold text-white">{trend.title}</h3>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-4">{trend.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 rounded p-3">
                  <span className="text-xs text-indigo-500 font-semibold block mb-1">TIMELINE</span>
                  <p className="text-sm font-bold text-indigo-800">{trend.timeline}</p>
                </div>
                <div className="bg-purple-50 rounded p-3">
                  <span className="text-xs text-purple-500 font-semibold block mb-1">IMPACT</span>
                  <p className="text-sm font-bold text-purple-800">{trend.impact}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Enabling Technologies */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-4">
          {language === 'en' ? 'Enabling Technologies' : '促成技术'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {content[language].enablers.map((enabler, index) => (
            <div key={index} className="p-4 border border-indigo-100 rounded bg-indigo-50">
              <h4 className="text-lg font-bold text-indigo-800 mb-2">{enabler.title}</h4>
              <p className="text-sm text-gray-600">{enabler.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Challenges */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-4">
          {language === 'en' ? 'Implementation Challenges' : '实施挑战'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {content[language].challenges.map((challenge, index) => (
            <div key={index} className="flex items-start p-3 bg-red-50 rounded">
              <span className="flex-shrink-0 bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                !
              </span>
              <p className="text-sm text-gray-700">{challenge}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Conclusion */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow p-6 text-white">
        <p className="text-lg font-medium">
          {content[language].conclusion}
        </p>
      </div>
    </div>
  );
};

export default FutureTrendsSlide; 