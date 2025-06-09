import React, { useState } from 'react';
import KpiCard from './KpiCard';
import LiveScenarioMap from './LiveScenarioMap';
import AiInsightPanel from './AiInsightPanel';
import DisruptionSimulator from './DisruptionSimulator';
import { Truck, Package, CheckCircle, Clock } from 'lucide-react';

const initialInsight = { 
  en: 'Potential disruption detected. High-volume shipments from Supplier B are correlated with a 15% increase in customs delays over the past 30 days.',
  zh: '检测到潜在中断。过去30天，来自供应商B的大批量货物与海关延误增加15%相关。'
};

const initialRecommendation = {
  en: 'Diversify 20% of upcoming shipments from Supplier B to Supplier C to mitigate risk of delay. Review customs documentation for high-volume shipments.',
  zh: '将即将到来的供应商B的20%货物分散给供应商C，以减轻延误风险。审查大批量货物的报关文件。'
};

const disruptionScenarios = {
  port_closure: {
    insight: {
      en: 'CRITICAL ALERT: Port of Singapore is closed due to severe weather. All shipments within 200km are affected.',
      zh: '紧急警报：新加坡港因恶劣天气关闭。200公里内的所有货物均受影响。'
    },
    recommendation: {
      en: 'Reroute Ship-789 via Strait of Malacca. Immediately notify affected customers of potential 1-2 day delay.',
      zh: '将789号船改道至马六甲海峡。立即通知受影响的客户可能出现1-2天的延误。'
    }
  },
  supplier_fire: {
    insight: {
      en: 'CRITICAL ALERT: Fire reported at Supplier A primary facility. Production of component X-12 is halted.',
      zh: '紧急警报：供应商A主要设施报告火灾。X-12部件已停产。'
    },
    recommendation: {
      en: 'Source component X-12 from alternate Supplier D. Increase short-term orders from Supplier C by 30% to cover deficit.',
      zh: '从备用供应商D处采购X-12部件。将供应商C的短期订单增加30%以弥补短缺。'
    }
  },
  demand_spike: {
    insight: {
      en: 'OPPORTUNITY: Sudden 200% spike in demand for Product Y in the European market detected.',
      zh: '机会：检测到欧洲市场对Y产品的需求突然激增200%。'
    },
    recommendation: {
      en: 'Expedite air freight for 5,000 units from WH-East to EU distribution center. Adjust marketing spend to capitalize on trend.',
      zh: '从东部仓库空运5000件产品至欧盟配送中心。调整营销支出以利用此趋势。'
    }
  }
};

interface DashboardPageProps {
  language: 'en' | 'zh';
}

const DashboardPage: React.FC<DashboardPageProps> = ({ language }) => {
  const [insight, setInsight] = useState(initialInsight);
  const [recommendation, setRecommendation] = useState(initialRecommendation);

  const handleDisruption = (disruption: string) => {
    const scenario = disruptionScenarios[disruption as keyof typeof disruptionScenarios];
    if (scenario) {
      setInsight(scenario.insight);
      setRecommendation(scenario.recommendation);
    }
  };

  const translations = {
    title: {
      en: 'Mission Control Dashboard',
      zh: '指挥中心仪表板',
    },
    kpi: {
      onTimeDelivery: { en: 'On-Time Delivery', zh: '准时交货率' },
      inventoryTurnover: { en: 'Inventory Turnover', zh: '库存周转率' },
      orderFulfillmentRate: { en: 'Order Fulfillment Rate', zh: '订单履行率' },
      supplierLeadTime: { en: 'Supplier Lead Time', zh: '供应商交货时间' },
    },
    mapTitle: {
      en: 'Live Scenario Map',
      zh: '实时情景地图',
    },
    mapContent: {
      en: 'Interactive map will be rendered here...',
      zh: '交互式地图将在此处呈现...',
    },
    aiInsight: {
      title: { en: 'AI-Powered Alert', zh: 'AI驱动的警报' },
    }
  };

  const kpis = [
    { title: translations.kpi.onTimeDelivery[language], value: '98.2%', icon: <Truck size={24} /> },
    { title: translations.kpi.inventoryTurnover[language], value: '5.4', icon: <Package size={24} /> },
    { title: translations.kpi.orderFulfillmentRate[language], value: '99.1%', icon: <CheckCircle size={24} /> },
    { title: translations.kpi.supplierLeadTime[language], value: '14 Days', icon: <Clock size={24} /> },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{translations.title[language]}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {kpis.map((kpi, index) => (
          <KpiCard key={index} title={kpi.title} value={kpi.value} icon={kpi.icon} />
        ))}
      </div>

      <AiInsightPanel 
        language={language}
        title={translations.aiInsight.title[language]}
        insight={insight[language]}
        recommendation={recommendation[language]}
      />

      <DisruptionSimulator language={language} onDisruption={handleDisruption} />

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-bold mb-4">{translations.mapTitle[language]}</h2>
        <LiveScenarioMap />
      </div>
    </div>
  );
};

export default DashboardPage; 