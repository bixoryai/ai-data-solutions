import React from 'react';

interface CaseStudiesSlideProps {
  t: (key: string) => string;
}

const CaseStudiesSlide: React.FC<CaseStudiesSlideProps> = ({ t }) => {
  // Slide-specific translations
  const content = {
    en: {
      title: "Real-World Success Stories",
      subtitle: "Case studies of predictive maintenance implementation",
      cases: [
        {
          industry: "Manufacturing",
          company: "Global Automotive Manufacturer",
          challenge: "High costs from unplanned downtime of critical assembly line equipment",
          solution: "Implemented IoT sensors and machine learning to predict equipment failures 48 hours in advance",
          results: [
            "73% reduction in unplanned downtime",
            "$3.2 million saved annually in production losses",
            "Maintenance costs reduced by 29%",
            "Extended equipment lifecycle by 2-3 years"
          ],
          quote: "The ROI exceeded our expectations. We've transformed from reactive to proactive maintenance while significantly improving our operational efficiency."
        },
        {
          industry: "Energy",
          company: "Wind Farm Operator",
          challenge: "Difficulty predicting optimal maintenance schedules for remote wind turbines",
          solution: "AI-driven system analyzing weather data, vibration patterns, and operational metrics to optimize maintenance timing",
          results: [
            "Energy production increased by 18%",
            "Maintenance trips reduced by 42%",
            "Annual maintenance costs reduced by $1.7 million",
            "Improved technician safety with fewer emergency repairs"
          ],
          quote: "We've eliminated almost all emergency repairs while increasing uptime. The solution paid for itself within the first eight months."
        },
        {
          industry: "Transportation",
          company: "Railway Network",
          challenge: "Unpredictable track and signal failures causing service disruptions and safety concerns",
          solution: "Deployed distributed acoustic and vibration sensors with machine learning models to detect early warning signals",
          results: [
            "89% of potential failures identified before impact on service",
            "Customer satisfaction increased by 23%",
            "Maintenance efficiency improved by 35%",
            "Regulatory penalties reduced by $4.8 million"
          ],
          quote: "This technology has fundamentally changed how we approach infrastructure management. We're now preventing problems before they become visible to human inspectors."
        },
        {
          industry: "Healthcare",
          company: "Regional Hospital Network",
          challenge: "Critical medical equipment failures impacting patient care and creating unexpected expenses",
          solution: "Implemented predictive analytics platform integrating equipment usage patterns with performance data",
          results: [
            "Equipment availability increased to 99.2%",
            "Emergency repair costs reduced by 64%",
            "Patient care delays reduced by 87%",
            "Maintenance staff efficiency increased by 41%"
          ],
          quote: "Beyond the cost savings, which have been substantial, the real impact has been on patient care quality. Our equipment is available when needed, which is invaluable."
        }
      ],
      implementation: {
        title: "Implementation Insights",
        steps: [
          "Start with high-value, critical equipment to demonstrate ROI",
          "Begin with basic condition monitoring before advanced predictions",
          "Involve maintenance technicians in solution development",
          "Ensure proper data collection and quality from the beginning",
          "Plan for continuous model improvement with feedback loops"
        ]
      }
    },
    zh: {
      title: "真实世界的成功案例",
      subtitle: "预测性维护实施的案例研究",
      cases: [
        {
          industry: "制造业",
          company: "全球汽车制造商",
          challenge: "关键装配线设备计划外停机造成的高额成本",
          solution: "实施物联网传感器和机器学习，提前48小时预测设备故障",
          results: [
            "计划外停机减少73%",
            "生产损失每年节省320万美元",
            "维护成本降低29%",
            "设备生命周期延长2-3年"
          ],
          quote: "投资回报率超出了我们的预期。我们已经从被动维护转变为主动维护，同时显著提高了运营效率。"
        },
        {
          industry: "能源",
          company: "风电场运营商",
          challenge: "难以预测远程风力涡轮机的最佳维护计划",
          solution: "人工智能驱动系统分析天气数据、振动模式和运营指标，优化维护时间",
          results: [
            "能源生产增加18%",
            "维护出行减少42%",
            "年度维护成本减少170万美元",
            "减少紧急维修，提高技术人员安全性"
          ],
          quote: "我们几乎消除了所有紧急维修，同时增加了运行时间。该解决方案在前八个月内就收回了成本。"
        },
        {
          industry: "交通运输",
          company: "铁路网络",
          challenge: "不可预测的轨道和信号故障导致服务中断和安全问题",
          solution: "部署分布式声学和振动传感器，配合机器学习模型检测早期预警信号",
          results: [
            "89%的潜在故障在影响服务前被识别",
            "客户满意度提高23%",
            "维护效率提高35%",
            "监管处罚减少480万美元"
          ],
          quote: "这项技术从根本上改变了我们处理基础设施管理的方式。我们现在能够在问题被人类检查员发现之前就预防问题。"
        },
        {
          industry: "医疗保健",
          company: "区域医院网络",
          challenge: "关键医疗设备故障影响患者护理并产生意外支出",
          solution: "实施预测分析平台，整合设备使用模式与性能数据",
          results: [
            "设备可用性提高到99.2%",
            "紧急维修成本降低64%",
            "患者护理延误减少87%",
            "维护人员效率提高41%"
          ],
          quote: "除了成本节约（已经很可观）外，真正的影响是在患者护理质量上。我们的设备在需要时可用，这是无价的。"
        }
      ],
      implementation: {
        title: "实施洞见",
        steps: [
          "从高价值、关键设备开始，以证明投资回报",
          "在进行高级预测之前，先进行基本状态监控",
          "让维护技术人员参与解决方案开发",
          "从一开始就确保适当的数据收集和质量",
          "通过反馈循环计划持续模型改进"
        ]
      }
    }
  };

  const language = t('language') === 'zh' ? 'zh' : 'en';

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">{content[language].title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {content[language].subtitle}
        </p>
      </div>
      
      {/* Case Studies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {content[language].cases.map((caseStudy, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">{caseStudy.company}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {caseStudy.industry}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {language === 'en' ? 'Challenge' : '挑战'}
                </h4>
                <p className="text-gray-700">{caseStudy.challenge}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {language === 'en' ? 'Solution' : '解决方案'}
                </h4>
                <p className="text-gray-700">{caseStudy.solution}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {language === 'en' ? 'Results' : '结果'}
                </h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {caseStudy.results.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4 italic text-gray-600 border-l-4 border-blue-500 pl-4 py-2">
                "{caseStudy.quote}"
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Implementation Insights */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow p-6 mt-8">
        <h3 className="text-xl font-bold text-blue-800 mb-4">
          {content[language].implementation.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {content[language].implementation.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute top-0 left-4 -ml-px h-full w-0.5 bg-blue-200" 
                   style={{ display: index === content[language].implementation.steps.length - 1 ? 'none' : 'block' }}></div>
              <div className="relative flex items-start space-x-3">
                <div>
                  <div className="relative px-1">
                    <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center ring-8 ring-white">
                      <span className="text-white font-medium">{index + 1}</span>
                    </div>
                  </div>
                </div>
                <div className="min-w-0 flex-1 py-1.5">
                  <p className="text-sm text-gray-700">{step}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSlide; 