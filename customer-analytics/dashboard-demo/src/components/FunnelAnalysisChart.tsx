import React from 'react';
import { FunnelChart, Funnel, Tooltip, LabelList, ResponsiveContainer } from 'recharts';

interface FunnelData {
  value: number;
  name: string;
  fill: string;
}

interface FunnelAnalysisChartProps {
  language: 'en' | 'zh';
  data: FunnelData[];
}

const FunnelAnalysisChart: React.FC<FunnelAnalysisChartProps> = ({ language, data }) => {
    const translations = {
        en: {
            title: 'Customer Purchase Funnel',
        },
        zh: {
            title: '客户购买漏斗',
        },
    };
    const t = translations[language];

    // The data is now fully controlled by the parent. No localization mapping needed here.
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-4 dark:text-white">{t.title}</h4>
            <ResponsiveContainer width="100%" height={400}>
                <FunnelChart>
                    <Tooltip />
                    <Funnel
                        dataKey="value"
                        data={data}
                        isAnimationActive
                    >
                        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                    </Funnel>
                </FunnelChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FunnelAnalysisChart; 