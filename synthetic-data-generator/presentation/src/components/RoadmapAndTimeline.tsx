import React from 'react';

interface RoadmapAndTimelineProps {
  language: 'en' | 'zh';
}

const RoadmapAndTimeline: React.FC<RoadmapAndTimelineProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Roadmap & Timeline',
      subtitle: 'Development & Go-to-Market Strategy:',
      phases: [
        {
          name: 'Phase 1: Foundation (6 months)',
          milestones: [
            'Core technology development',
            'MVP for tabular data generation',
            'Initial privacy validation framework',
            'Alpha testing with 2-3 design partners'
          ]
        },
        {
          name: 'Phase 2: Market Entry (6 months)',
          milestones: [
            'Beta release with expanded data types',
            'Cloud deployment option',
            'Initial sales to financial services',
            'Marketing content & case studies'
          ]
        },
        {
          name: 'Phase 3: Growth (12 months)',
          milestones: [
            'Full product launch across industries',
            'Advanced features (time-series, images)',
            'Channel partner program',
            'International expansion'
          ]
        },
        {
          name: 'Phase 4: Expansion (12+ months)',
          milestones: [
            'Data marketplace launch',
            'Industry-specific solution packages',
            'Strategic partnerships & integrations',
            'Potential M&A opportunities'
          ]
        }
      ],
      keyMetrics: {
        title: 'Key Success Metrics:',
        metrics: [
          { name: 'Year 1', value: '5 enterprise clients, $1.2M ARR' },
          { name: 'Year 2', value: '15 clients, $4.5M ARR, 275% growth' },
          { name: 'Year 3', value: '35 clients, $12M ARR, 166% growth' },
          { name: 'Year 5', value: '100+ clients, $40M+ ARR, market leadership' }
        ]
      }
    },
    zh: {
      title: '路线图和时间线',
      subtitle: '开发和市场进入策略:',
      phases: [
        {
          name: '第1阶段: 基础 (6个月)',
          milestones: [
            '核心技术开发',
            '表格数据生成的最小可行产品',
            '初始隐私验证框架',
            '与2-3个设计合作伙伴进行Alpha测试'
          ]
        },
        {
          name: '第2阶段: 市场进入 (6个月)',
          milestones: [
            '扩展数据类型的Beta版本',
            '云部署选项',
            '向金融服务业的初始销售',
            '营销内容和案例研究'
          ]
        },
        {
          name: '第3阶段: 增长 (12个月)',
          milestones: [
            '跨行业全面产品发布',
            '高级功能（时间序列、图像）',
            '渠道合作伙伴计划',
            '国际扩张'
          ]
        },
        {
          name: '第4阶段: 扩展 (12+个月)',
          milestones: [
            '数据市场发布',
            '特定行业解决方案包',
            '战略合作伙伴关系和集成',
            '潜在的并购机会'
          ]
        }
      ],
      keyMetrics: {
        title: '关键成功指标:',
        metrics: [
          { name: '第1年', value: '5个企业客户，120万美元年度经常性收入' },
          { name: '第2年', value: '15个客户，450万美元年度经常性收入，275%增长' },
          { name: '第3年', value: '35个客户，1200万美元年度经常性收入，166%增长' },
          { name: '第5年', value: '100+客户，4000万+美元年度经常性收入，市场领导地位' }
        ]
      }
    }
  };

  const { title, subtitle, phases, keyMetrics } = content[language];

  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">{title}</h2>
      <p className="text-xl text-center mb-8">{subtitle}</p>
      
      <div className="relative mb-12">
        {/* Timeline visualization */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-500 transform md:translate-x-0"></div>
        
        {phases.map((phase, index) => (
          <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto md:pr-8' : 'md:ml-auto md:mr-0 md:pl-8'} md:w-1/2 pl-8 md:pl-0`}>
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-yellow-400 transform -translate-x-1.5 md:-translate-x-2"></div>
            
            {/* Content */}
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold text-primary-400 mb-4">{phase.name}</h3>
              <ul className="space-y-2">
                {phase.milestones.map((milestone, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>{milestone}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 mb-8">
        <h3 className="text-xl font-bold text-primary-400 mb-4 text-center">{keyMetrics.title}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {keyMetrics.metrics.map((metric, index) => (
            <div key={index} className="text-center p-4 bg-primary-900 bg-opacity-30 rounded-lg border border-primary-800">
              <div className="font-bold mb-2">{metric.name}</div>
              <div className="text-yellow-300">{metric.value}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-r from-yellow-900 to-yellow-700 bg-opacity-50 rounded-lg border border-yellow-800">
        <p className="text-center text-xl">
          {language === 'en' 
            ? "Our phased approach balances technological development with market penetration, ensuring sustainable growth and competitive advantage."
            : "我们的分阶段方法平衡了技术开发和市场渗透，确保可持续增长和竞争优势。"}
        </p>
      </div>
    </div>
  );
};

export default RoadmapAndTimeline;
