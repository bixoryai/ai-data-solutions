import React from 'react';

interface CoreActivitiesProps {
  language: 'en' | 'zh';
}

const CoreActivities: React.FC<CoreActivitiesProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Core Activities & Benefits',
      tableHeader: {
        activity: 'Activity',
        description: 'Description',
        benefits: 'Benefits'
      },
      activities: [
        {
          activity: 'Data Pattern Analysis',
          description: 'Examine statistical patterns and relationships',
          benefits: [
            'Preserve real-world complexity',
            'Enable accurate generation'
          ]
        },
        {
          activity: 'Privacy-preserving Generation',
          description: 'Create data without exposing original information',
          benefits: [
            'Eliminate PII/PHI exposure',
            'Achieve regulatory compliance'
          ]
        },
        {
          activity: 'Data Augmentation',
          description: 'Extend limited datasets with synthetic records',
          benefits: [
            'Address data scarcity',
            'Improve model training'
          ]
        },
        {
          activity: 'Edge Case Simulation',
          description: 'Generate rare but important scenarios',
          benefits: [
            'Enhance testing coverage',
            'Increase model robustness'
          ]
        },
        {
          activity: 'Time Series Synthesis',
          description: 'Create realistic time sequences of data',
          benefits: [
            'Enable predictive modeling',
            'Maintain temporal patterns'
          ]
        }
      ]
    },
    zh: {
      title: '核心活动与收益',
      tableHeader: {
        activity: '活动',
        description: '描述',
        benefits: '收益'
      },
      activities: [
        {
          activity: '数据模式分析',
          description: '检查统计模式和关系',
          benefits: [
            '保留现实世界复杂性',
            '实现准确生成'
          ]
        },
        {
          activity: '隐私保护生成',
          description: '创建不暴露原始信息的数据',
          benefits: [
            '消除PII/PHI暴露',
            '实现法规合规'
          ]
        },
        {
          activity: '数据增强',
          description: '用合成记录扩展有限数据集',
          benefits: [
            '解决数据稀缺',
            '改进模型训练'
          ]
        },
        {
          activity: '边缘案例模拟',
          description: '生成罕见但重要的场景',
          benefits: [
            '增强测试覆盖',
            '提高模型健壮性'
          ]
        },
        {
          activity: '时间序列合成',
          description: '创建真实的时间数据序列',
          benefits: [
            '实现预测建模',
            '维持时间模式'
          ]
        }
      ]
    }
  };

  const { title, tableHeader, activities } = content[language];

  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">{title}</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-primary-900 bg-opacity-70">
              <th className="px-6 py-3 text-left text-lg font-semibold text-white">{tableHeader.activity}</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-white">{tableHeader.description}</th>
              <th className="px-6 py-3 text-left text-lg font-semibold text-white">{tableHeader.benefits}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {activities.map((activity, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-800 bg-opacity-30' : 'bg-gray-800 bg-opacity-50'}>
                <td className="px-6 py-4 text-lg font-medium text-primary-300">{activity.activity}</td>
                <td className="px-6 py-4 text-lg">{activity.description}</td>
                <td className="px-6 py-4">
                  <ul className="list-disc pl-5">
                    {activity.benefits.map((benefit, i) => (
                      <li key={i} className="text-green-300">{benefit}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-primary-900 bg-opacity-30 p-4 rounded-lg border border-primary-800 flex flex-col items-center">
          <div className="text-4xl mb-2">🔍</div>
          <div className="text-center">
            {language === 'en' ? 'Analyze' : '分析'}
          </div>
        </div>
        <div className="bg-primary-900 bg-opacity-30 p-4 rounded-lg border border-primary-800 flex flex-col items-center">
          <div className="text-4xl mb-2">⚙️</div>
          <div className="text-center">
            {language === 'en' ? 'Generate' : '生成'}
          </div>
        </div>
        <div className="bg-primary-900 bg-opacity-30 p-4 rounded-lg border border-primary-800 flex flex-col items-center">
          <div className="text-4xl mb-2">✅</div>
          <div className="text-center">
            {language === 'en' ? 'Validate' : '验证'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreActivities;
