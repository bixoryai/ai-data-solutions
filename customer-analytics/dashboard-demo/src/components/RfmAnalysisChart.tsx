import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { rfmSegmentColors } from '../data/mockData';

interface RfmDataPoint {
    x: number;
    y: number;
    z: number;
    segment: string;
}

interface RfmAnalysisChartProps {
    language: 'en' | 'zh';
    data: RfmDataPoint[];
}

const RfmAnalysisChart: React.FC<RfmAnalysisChartProps> = ({ language, data }) => {
    const translations = {
        en: {
            title: 'RFM (Recency, Frequency, Monetary) Analysis',
            recency: 'Recency (days ago)',
            frequency: 'Frequency (purchases)',
        },
        zh: {
            title: 'RFM (新近度, 频率, 金额) 分析',
            recency: '新近度 (天前)',
            frequency: '频率 (次购买)',
        },
    };
    const t = translations[language];
    
    // Defensive check to prevent crash if data is not yet available
    if (!data || data.length === 0) {
        return null; // or a loading indicator
    }

    // Group data by segment for the scatter plot
    const groupedData = data.reduce((acc, cur) => {
        (acc[cur.segment] = acc[cur.segment] || []).push(cur);
        return acc;
    }, {} as Record<string, typeof data>);


    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-4 dark:text-white">{t.title}</h4>
            <ResponsiveContainer width="100%" height={400}>
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name={t.recency} unit=" days" />
                    <YAxis type="number" dataKey="y" name={t.frequency} unit=" purchases" />
                    <ZAxis type="number" dataKey="z" range={[60, 400]} name="monetary" unit=" USD" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    {Object.keys(groupedData).map((segmentName) => (
                         <Scatter 
                            key={segmentName}
                            name={segmentName} 
                            data={groupedData[segmentName]} 
                            fill={rfmSegmentColors[segmentName as keyof typeof rfmSegmentColors]} 
                        />
                    ))}
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RfmAnalysisChart; 