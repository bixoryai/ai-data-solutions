import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, Globe } from 'lucide-react';
import TitleSlide from './components/slides/TitleSlide';
import ProblemSlide from './components/slides/ProblemSlide';
import FailingSolutionsSlide from './components/slides/FailingSolutionsSlide';
import SolutionSlide from './components/slides/SolutionSlide';
import ResultsSlide from './components/slides/ResultsSlide';
import DemoSlide from './components/slides/DemoSlide';
import MarketSlide from './components/slides/MarketSlide';
import BusinessModelSlide from './components/slides/BusinessModelSlide';
import InvestmentSlide from './components/slides/InvestmentSlide';
import TeamSlide from './components/slides/TeamSlide';
import ValidationSlide from './components/slides/ValidationSlide';
import NextStepsSlide from './components/slides/NextStepsSlide';
import ThankYouSlide from './components/slides/ThankYouSlide';

// Mock translations - in a real app, this would come from a file or API
const translations = {
  en: {
    // App shell
    title: "Supply Chain Intelligence",
    previous: "Previous",
    next: "Next",
    slide: "Slide",
    of: "of",

    // Slide 1
    slide1_title: "Title & Hook",
    slide1_mainTitle: "Supply Chain Intelligence",
    slide1_subtitle: "AI-Powered Supply Chain Optimization",
    slide1_hook: "What if you could reduce supply chain costs by 25% while eliminating 60% of stockouts - all within 90 days?",

    // Slide 2
    slide2_title: "The $184 Billion Problem",
    slide2_mainTitle: "Supply Chain Crisis Creating Massive Opportunity",
    slide2_sub1_title: "The Scale of the Problem",
    slide2_problem1: "$184 Billion lost annually from supply chain disruptions globally",
    slide2_problem2: "94% of Fortune 1000 companies experienced major disruptions in the last 2 years",
    slide2_problem3: "$1.1 Trillion in excess inventory due to poor demand forecasting",
    slide2_problem4: "70% average forecast accuracy - essentially educated guessing",
    slide2_sub2_title: "The Opportunity",
    slide2_opportunity1_title: "Market Size",
    slide2_opportunity1_desc: "$24.3B Supply Chain Analytics Market by 2030 (17.3% CAGR)",
    slide2_opportunity2_title: "Investment",
    slide2_opportunity2_desc: "73% of companies investing in supply chain digitization",
    slide2_opportunity3_title: "Profitability",
    slide2_opportunity3_desc: "15% higher profitability for companies using AI-powered supply chains",
    
    // Slide 3
    slide3_title: "Why Traditional Solutions Are Failing",
    slide3_mainTitle: "The Innovation Gap in Supply Chain Management",
    slide3_sub1_title: "Traditional Approach Limitations",
    slide3_table_header1: "Challenge",
    slide3_table_header2: "Traditional Solution",
    slide3_table_header3: "Business Impact",
    slide3_challenge1: "Demand Forecasting",
    slide3_trad_solution1: "Excel-based models, historical patterns",
    slide3_impact1: "60-70% accuracy, high inventory costs",
    slide3_challenge2: "Risk Management",
    slide3_trad_solution2: "Manual monitoring, reactive responses",
    slide3_impact2: "40-60% longer disruption recovery",
    slide3_challenge3: "Inventory Optimization",
    slide3_trad_solution3: "Rule-based systems, safety stock buffers",
    slide3_impact3: "25-40% excess inventory carrying costs",
    slide3_challenge4: "Supplier Management",
    slide3_trad_solution4: "Quarterly reviews, relationship-based",
    slide3_impact4: "30% supplier performance variability",
    slide3_sub2_title: "The AI Advantage - What's Now Possible",
    slide3_advantage1: "85-95% Forecast Accuracy: Machine learning with 100+ variables",
    slide3_advantage2: "Real-time Optimization: Sub-second response to supply chain changes",
    slide3_advantage3: "Predictive Risk Management: 40-60% faster disruption response",
    slide3_advantage4: "Automated Decision Support: Continuous optimization without human intervention",
    slide3_result_title: "The Result",
    slide3_result_text: "Companies using AI-powered supply chain intelligence achieve 25-35% reduction in inventory costs, 15-30% fewer stockouts, and 20-40% improvement in supplier performance.",

    // Slide 4
    slide4_title: "Our AI-First Solution",
    slide4_mainTitle: "Comprehensive Supply Chain Intelligence Platform",
    slide4_sub1_title: "Core AI Capabilities",
    slide4_cap1_title: "Intelligent Demand Forecasting",
    slide4_cap1_desc: "Multi-Variable AI Models: Weather, economics, trends, seasonality, promotions",
    slide4_cap1_impact: "Impact: 20-40% reduction in excess inventory, 15-30% fewer stockouts",
    slide4_cap2_title: "Real-time Inventory Optimization",
    slide4_cap2_desc: "Multi-Echelon Optimization: Across warehouses, stores, and distribution centers",
    slide4_cap2_impact: "Impact: 25-35% reduction in carrying costs, 95%+ service level achievement",
    slide4_cap3_title: "Predictive Risk Management",
    slide4_cap3_desc: "360° Risk Monitoring: Suppliers, geopolitics, weather, transportation, financials",
    slide4_cap3_impact: "Impact: 40-60% faster response, 50-70% reduction in disruption impact",
    slide4_cap4_title: "Supplier Intelligence",
    slide4_cap4_desc: "Performance Prediction: Quality, delivery, and capacity forecasting",
    slide4_cap4_impact: "Impact: 30-45% improvement in supplier performance",
    slide4_sub2_title: "Technical Architecture",
    slide4_arch_desc: "Real-time Data Processing, Enterprise Integration with 50+ pre-built connectors, Cloud-Native, and Industry-Specific Models.",

    // Slide 5
    slide5_title: "Proven Business Results",
    slide5_mainTitle: "Real ROI from Real Implementations",
    slide5_case_study_title: "Case Study: Global Electronics Manufacturer",
    slide5_challenge_title: "The Challenge",
    slide5_challenge1: "68% demand forecast accuracy causing production disruptions",
    slide5_challenge2: "$45M in excess inventory due to supply uncertainty",
    slide5_challenge3: "15% of purchases were emergency orders at premium pricing",
    slide5_challenge4: "72-hour average response time to supply disruptions",
    slide5_impact_title: "Financial Impact",
    slide5_impact1: "$17M annual savings in inventory and operational costs",
    slide5_impact2: "$35M working capital freed up for growth investments",
    slide5_impact3: "ROI: 547% in first year",
    slide5_results_title: "Quantified Results (6 Months)",
    slide5_table_header1: "Metric",
    slide5_table_header2: "Before",
    slide5_table_header3: "After",
    slide5_table_header4: "Improvement",
    slide5_metric1: "Forecast Accuracy",
    slide5_metric2: "Excess Inventory",
    slide5_metric3: "Emergency Orders",
    slide5_metric4: "Disruption Response",
    slide5_metric5: "Working Capital",

    // Slide 6
    slide6_title: "Platform Demo",
    slide6_mainTitle: "Live Intelligence in Action",
    slide6_feature1_title: "Real-time Supply Chain Command Center",
    slide6_feature1_point1: "Live KPI Monitoring",
    slide6_feature1_point2: "Predictive Alerts",
    slide6_feature1_point3: "AI Recommendations",
    slide6_feature2_title: "Demand Intelligence Module",
    slide6_feature2_point1: "Multi-variable Models",
    slide6_feature2_point2: "Scenario Planning",
    slide6_feature2_point3: "New Product Forecasting",
    slide6_feature3_title: "Risk Management Center",
    slide6_feature3_point1: "Supplier Health Scoring",
    slide6_feature3_point2: "Geopolitical Monitoring",
    slide6_feature3_point3: "Disruption Simulation",
    slide6_feature4_title: "Mobile Command Center",
    slide6_feature4_point1: "Real-time Alerts",
    slide6_feature4_point2: "Approval Workflows",
    slide6_feature4_point3: "Performance Dashboards",
    slide6_screenshot_placeholder: "High-quality screenshots of the platform would be displayed here.",

    // Slide 7
    slide7_title: "Market Opportunity",
    slide7_mainTitle: "Capturing the $24.3B Market",
    slide7_sub1_title: "Target Market Segmentation",
    slide7_market1_industry: "Manufacturing",
    slide7_market1_size: "$8.5B by 2030",
    slide7_market1_pain: "Complex supplier networks, quality issues",
    slide7_market2_industry: "Retail/E-commerce",
    slide7_market2_size: "$6.2B by 2030",
    slide7_market2_pain: "Seasonal demand, trend forecasting",
    slide7_market3_industry: "Healthcare",
    slide7_market3_size: "$3.1B by 2030",
    slide7_market3_pain: "Critical supply availability, compliance",
    slide7_sub2_title: "Ideal Customer Profile",
    slide7_profile_rev_title: "Revenue",
    slide7_profile_rev_text: "$200M - $5B",
    slide7_profile_comp_title: "Complexity",
    slide7_profile_comp_text: "Multi-location, 100+ suppliers",
    slide7_profile_pain_title: "Current Pain",
    slide7_profile_pain_text: "Manual processes, poor visibility",
    slide7_profile_budget_title: "Budget",
    slide7_profile_budget_text: "$100K - $1M annual spend",
    slide7_sub3_title: "Market Entry Strategy",
    slide7_sub3_text: "Initial focus on North America, expanding to Europe/APAC in Year 2-3.",
    
    // Slide 8
    slide8_title: "Business Model",
    slide8_mainTitle: "Scalable, Recurring Revenue Architecture",
    slide8_sub1_title: "Revenue Model Evolution",
    slide8_phase1_title: "Phase 1: Services-First (Months 1-12)",
    slide8_phase1_focus: "Prove value and build case studies",
    slide8_phase1_target: "15-25 implementations",
    slide8_phase2_title: "Phase 2: Platform + Services (Months 12-24)",
    slide8_phase2_focus: "Scale through recurring subscriptions",
    slide8_phase2_target: "40-60 active subscribers",
    slide8_phase3_title: "Phase 3: Platform-Led Growth (Months 24+)",
    slide8_phase3_focus: "Scale and margin expansion",
    slide8_phase3_target: "100+ subscribers, 60%+ gross margins",
    slide8_focus_label: "Focus",
    slide8_target_label: "Target",
    slide8_sub2_title: "Unit Economics (Platform)",
    slide8_unit_econ1_title: "ACV",
    slide8_unit_econ1_text: "$180K annually",
    slide8_unit_econ2_title: "LTV/CAC Ratio",
    slide8_unit_econ2_text: "24:1",
    slide8_unit_econ3_title: "Gross Margin (Platform)",
    slide8_unit_econ3_text: "75%",
    slide8_unit_econ4_title: "Payback Period",
    slide8_unit_econ4_text: "4.2 months",
    slide8_sub3_title: "3-Year Revenue Forecast",
    slide8_table_header1: "Revenue Stream",
    slide8_table_header2: "Year 1",
    slide8_table_header3: "Year 2",
    slide8_table_header4: "Year 3",
    slide8_stream1: "Implementation Services",
    slide8_stream2: "Platform Subscriptions",
    slide8_stream3: "Support & Consulting",
    slide8_stream_total: "Total Revenue",

    // Slide 9
    slide9_title: "Investment",
    slide9_mainTitle: "$2M Series A to Capture Market Leadership",
    slide9_sub1_title: "Use of Funds",
    slide9_series_a: "Series A: $2M Target",
    slide9_table_header1: "Area",
    slide9_table_header2: "Amount",
    slide9_table_header3: "% of Total",
    slide9_fund_area1: "Product Development",
    slide9_fund_area2: "Sales & Marketing",
    slide9_fund_area3: "Engineering Team",
    slide9_fund_area4: "Customer Success",
    slide9_fund_area5: "Operations & Working Capital",
    slide9_sub2_title: "Return Projections",
    slide9_return_metric1_title: "5-Year Growth",
    slide9_return_metric1_text: "Scale to $25M revenue, 350+ customers",
    slide9_return_metric2_title: "Exit Valuation",
    slide9_return_metric2_text: "$150M-200M (6-8x revenue)",
    slide9_return_metric3_title: "Investor Return",
    slide9_return_metric3_text: "75-100x on Series A investment",
    slide9_highlights_title: "Investment Highlights",
    slide9_highlight1: "Proven Market: $24.3B TAM with 17.3% CAGR",
    slide9_highlight2: "Clear Value Prop: Average 547% ROI for customers",
    slide9_highlight3: "Scalable Model: High-margin SaaS with network effects",

    // Slide 10
    slide10_title: "Team & Advantages",
    slide10_mainTitle: "Experienced Team, Defensible Moat",
    slide10_sub1_title: "Leadership Team",
    slide10_leader1_name: "Dr. Evelyn Reed",
    slide10_leader1_title: "CEO & Co-Founder",
    slide10_leader1_expertise: "PhD in AI, 15+ years at Google AI, expert in predictive analytics.",
    slide10_leader2_name: "Marcus Thorne",
    slide10_leader2_title: "CTO & Co-Founder",
    slide10_leader2_expertise: "Ex-Amazon supply chain architect, scaled systems to support $100B+ in logistics.",
    slide10_leader3_name: "Isabelle Chen",
    slide10_leader3_title: "Chief Commercial Officer",
    slide10_leader3_expertise: "Led enterprise sales at Oracle, built $0 to $50M ARR business unit.",
    slide10_sub2_title: "Competitive Advantages & Moat",
    slide10_advantage1_title: "Proprietary AI Models",
    slide10_advantage1_text: "Our models are trained on unique datasets, providing superior accuracy.",
    slide10_advantage2_title: "Data Network Effects",
    slide10_advantage2_text: "Each new customer enriches our models, creating a powerful competitive barrier.",
    slide10_advantage3_title: "Enterprise Integration",
    slide10_advantage3_text: "50+ pre-built connectors reduce implementation time by 80%.",
    
    // Slide 11
    slide11_title: "Validation",
    slide11_mainTitle: "Proven Success, Guaranteed Results",
    slide11_sub1_title: "90-Day Success Framework",
    slide11_phase1_title: "Phase 1 (Days 1-30): Integration & Quick Wins",
    slide11_phase1_objective: "Connect data systems, deliver initial forecast accuracy improvements.",
    slide11_phase2_title: "Phase 2 (Days 31-60): Optimization & Training",
    slide11_phase2_objective: "Optimize inventory policies, train teams on the platform.",
    slide11_phase3_title: "Phase 3 (Days 61-90): ROI Measurement & Scale",
    slide11_phase3_objective: "Validate financial impact, develop a scaling roadmap.",
    slide11_sub2_title: "What Our Customers Say",
    slide11_quote1: "This is the holy grail of supply chain visibility. We identified $12M in savings in the first 60 days.",
    slide11_author1: "SVP of Operations, Global CPG Leader",
    slide11_quote2: "The predictive risk alerts saved us from a major disruption that would have cost us millions.",
    slide11_author2: "Director of Logistics, Automotive Manufacturer",
    slide11_guarantees_title: "Our Guarantee",
    slide11_guarantees_text: "We guarantee a minimum 10x ROI in the first 12 months or we refund our fees.",

    // Slide 12
    slide12_title: "Next Steps",
    slide12_mainTitle: "Join Us in Revolutionizing Supply Chain",
    slide12_sub1_title: "For Investors",
    slide12_investor_text: "We are seeking partners to close our $2M Series A.",
    slide12_investor_point1: "Schedule a deep-dive technical demo.",
    slide12_investor_point2: "Request access to our secure data room.",
    slide12_sub2_title: "For Strategic Partners",
    slide12_partner_text: "We are looking for partners to expand our ecosystem.",
    slide12_partner_point1: "Explore technology integration opportunities.",
    slide12_partner_point2: "Discuss co-marketing and joint sales initiatives.",
    slide12_contact_title: "Let's Connect",
    slide12_contact_email: "investors@bixory.ai",
    slide12_contact_phone: "(555) 123-4567",
    
    // Slide 17
    slide17_title: "Thank You",
    slide17_mainTitle: "Thank You",
    slide17_subtitle: "Let's Build the Future of Supply Chain, Together.",
    slide17_contact_title: "Get in Touch",
    slide17_contact_email: "info@bixory.ai",
    slide17_contact_phone: "(555) 123-4567",
  },
  zh: {
    // App shell
    title: "供应链智能",
    previous: "上一页",
    next: "下一页",
    slide: "幻灯片",
    of: "之",

    // Slide 1
    slide1_title: "标题与开场",
    slide1_mainTitle: "供应链智能",
    slide1_subtitle: "AI驱动的供应链优化",
    slide1_hook: "如果您可以在90天内将供应链成本降低25％，同时消除60％的缺货，该怎么办？",

    // Slide 2
    slide2_title: "1840亿美元的问题",
    slide2_mainTitle: "供应链危机创造巨大机遇",
    slide2_sub1_title: "问题的规模",
    slide2_problem1: "全球每年因供应链中断造成的损失高达1840亿美元",
    slide2_problem2: "94%的财富1000强公司在过去两年中经历过重大中断",
    slide2_problem3: "因需求预测不佳导致1.1万亿美元的过剩库存",
    slide2_problem4: "平均预测准确率70% - 基本上是受过教育的猜测",
    slide2_sub2_title: "机遇",
    slide2_opportunity1_title: "市场规模",
    slide2_opportunity1_desc: "到2030年，供应链分析市场将达到243亿美元（复合年增长率为17.3%）",
    slide2_opportunity2_title: "投资",
    slide2_opportunity2_desc: "73%的公司正在投资供应链数字化",
    slide2_opportunity3_title: "盈利能力",
    slide2_opportunity3_desc: "使用AI驱动供应链的公司的盈利能力高出15%",

    // Slide 3
    slide3_title: "传统解决方案为何失败",
    slide3_mainTitle: "供应链管理的创新差距",
    slide3_sub1_title: "传统方法的局限性",
    slide3_table_header1: "挑战",
    slide3_table_header2: "传统解决方案",
    slide3_table_header3: "业务影响",
    slide3_challenge1: "需求预测",
    slide3_trad_solution1: "基于Excel的模型，历史模式",
    slide3_impact1: "60-70%的准确性，高库存成本",
    slide3_challenge2: "风险管理",
    slide3_trad_solution2: "手动监控，被动响应",
    slide3_impact2: "中断恢复时间长40-60%",
    slide3_challenge3: "库存优化",
    slide3_trad_solution3: "基于规则的系统，安全库存缓冲",
    slide3_impact3: "25-40%的额外库存持有成本",
    slide3_challenge4: "供应商管理",
    slide3_trad_solution4: "季度审查，基于关系",
    slide3_impact4: "30%的供应商绩效可变性",
    slide3_sub2_title: "AI优势 - 现在可能实现什么",
    slide3_advantage1: "85-95%的预测准确性：具有100多个变量的机器学习",
    slide3_advantage2: "实时优化：对供应链变化的亚秒级响应",
    slide3_advantage3: "预测性风险管理：中断响应速度提高40-60%",
    slide3_advantage4: "自动化决策支持：无需人工干预的持续优化",
    slide3_result_title: "结果",
    slide3_result_text: "使用AI驱动的供应链智能的公司可实现25-35%的库存成本降低，15-30%的缺货减少，以及20-40%的供应商绩效改善。",

    // Slide 4
    slide4_title: "我们的AI优先解决方案",
    slide4_mainTitle: "综合供应链智能平台",
    slide4_sub1_title: "核心AI能力",
    slide4_cap1_title: "智能需求预测",
    slide4_cap1_desc: "多变量AI模型：天气、经济、趋势、季节性、促销",
    slide4_cap1_impact: "影响：过剩库存减少20-40%，缺货减少15-30%",
    slide4_cap2_title: "实时库存优化",
    slide4_cap2_desc: "多级优化：跨仓库、商店和配送中心",
    slide4_cap2_impact: "影响：持有成本降低25-35%，服务水平达到95%+",
    slide4_cap3_title: "预测性风险管理",
    slide4_cap3_desc: "360°风险监控：供应商、地缘政治、天气、运输、财务",
    slide4_cap3_impact: "影响：响应速度提高40-60%，中断影响减少50-70%",
    slide4_cap4_title: "供应商智能",
    slide4_cap4_desc: "绩效预测：质量、交货和产能预测",
    slide4_cap4_impact: "影响：供应商绩效提高30-45%",
    slide4_sub2_title: "技术架构",
    slide4_arch_desc: "实时数据处理，与50多个预构建连接器的企业集成，云原生和行业特定模型。",

    // Slide 5
    slide5_title: "经证实的业务成果",
    slide5_mainTitle: "来自真实实施的真实投资回报率",
    slide5_case_study_title: "案例研究：全球电子制造商",
    slide5_challenge_title: "挑战",
    slide5_challenge1: "68%的需求预测准确率导致生产中断",
    slide5_challenge2: "由于供应不确定性导致4500万美元的过剩库存",
    slide5_challenge3: "15%的采购是高价紧急订单",
    slide5_challenge4: "平均72小时的供应中断响应时间",
    slide5_impact_title: "财务影响",
    slide5_impact1: "年度库存和运营成本节省1700万美元",
    slide5_impact2: "释放3500万美元的营运资金用于增长投资",
    slide5_impact3: "第一年投资回报率：547%",
    slide5_results_title: "量化结果（6个月）",
    slide5_table_header1: "指标",
    slide5_table_header2: "之前",
    slide5_table_header3: "之后",
    slide5_table_header4: "改进",
    slide5_metric1: "预测准确率",
    slide5_metric2: "过剩库存",
    slide5_metric3: "紧急订单",
    slide5_metric4: "中断响应",
    slide5_metric5: "营运资金",

    // Slide 6
    slide6_title: "平台演示",
    slide6_mainTitle: "实时智能行动",
    slide6_feature1_title: "实时供应链指挥中心",
    slide6_feature1_point1: "实时KPI监控",
    slide6_feature1_point2: "预测性警报",
    slide6_feature1_point3: "AI建议",
    slide6_feature2_title: "需求智能模块",
    slide6_feature2_point1: "多变量模型",
    slide6_feature2_point2: "情景规划",
    slide6_feature2_point3: "新产品预测",
    slide6_feature3_title: "风险管理中心",
    slide6_feature3_point1: "供应商健康评分",
    slide6_feature3_point2: "地缘政治监控",
    slide6_feature3_point3: "中断模拟",
    slide6_feature4_title: "移动指挥中心",
    slide6_feature4_point1: "实时警报",
    slide6_feature4_point2: "审批工作流",
    slide6_feature4_point3: "绩效仪表板",
    slide6_screenshot_placeholder: "这里将显示平台的高质量屏幕截图。",

    // Slide 7
    slide7_title: "市场机会",
    slide7_mainTitle: "抢占243亿美元的市场",
    slide7_sub1_title: "目标市场细分",
    slide7_market1_industry: "制造业",
    slide7_market1_size: "到2030年达到85亿美元",
    slide7_market1_pain: "复杂的供应商网络，质量问题",
    slide7_market2_industry: "零售/电子商务",
    slide7_market2_size: "到2030年达到62亿美元",
    slide7_market2_pain: "季节性需求，趋势预测",
    slide7_market3_industry: "卫生保健",
    slide7_market3_size: "到2030年达到31亿美元",
    slide7_market3_pain: "关键物资供应，合规性",
    slide7_sub2_title: "理想客户画像",
    slide7_profile_rev_title: "收入",
    slide7_profile_rev_text: "2亿 - 50亿美元",
    slide7_profile_comp_title: "复杂性",
    slide7_profile_comp_text: "多地点，100多家供应商",
    slide7_profile_pain_title: "当前痛点",
    slide7_profile_pain_text: "手动流程，可见性差",
    slide7_profile_budget_title: "预算",
    slide7_profile_budget_text: "年度支出10万 - 100万美元",
    slide7_sub3_title: "市场进入策略",
    slide7_sub3_text: "初期重点关注北美，第二至第三年扩展到欧洲/亚太地区。",

    // Slide 8
    slide8_title: "商业模式",
    slide8_mainTitle: "可扩展的经常性收入架构",
    slide8_sub1_title: "收入模式演变",
    slide8_phase1_title: "第一阶段：服务优先（1-12个月）",
    slide8_phase1_focus: "证明价值并建立案例研究",
    slide8_phase1_target: "15-25个实施项目",
    slide8_phase2_title: "第二阶段：平台+服务（12-24个月）",
    slide8_phase2_focus: "通过经常性订阅进行扩展",
    slide8_phase2_target: "40-60个活跃用户",
    slide8_phase3_title: "第三阶段：平台主导增长（24个月以上）",
    slide8_phase3_focus: "规模和利润率扩张",
    slide8_phase3_target: "100多个用户，60%以上的毛利率",
    slide8_focus_label: "重点",
    slide8_target_label: "目标",
    slide8_sub2_title: "单位经济学（平台）",
    slide8_unit_econ1_title: "年合同价值",
    slide8_unit_econ1_text: "每年18万美元",
    slide8_unit_econ2_title: "客户终身价值/客户获取成本比率",
    slide8_unit_econ2_text: "24:1",
    slide8_unit_econ3_title: "毛利率（平台）",
    slide8_unit_econ3_text: "75%",
    slide8_unit_econ4_title: "投资回收期",
    slide8_unit_econ4_text: "4.2个月",
    slide8_sub3_title: "三年收入预测",
    slide8_table_header1: "收入来源",
    slide8_table_header2: "第一年",
    slide8_table_header3: "第二年",
    slide8_table_header4: "第三年",
    slide8_stream1: "实施服务",
    slide8_stream2: "平台订阅",
    slide8_stream3: "支持与咨询",
    slide8_stream_total: "总收入",

    // Slide 9
    slide9_title: "投资",
    slide9_mainTitle: "200万美元A轮融资以抢占市场领导地位",
    slide9_sub1_title: "资金用途",
    slide9_series_a: "A轮融资：目标200万美元",
    slide9_table_header1: "领域",
    slide9_table_header2: "金额",
    slide9_table_header3: "总计百分比",
    slide9_fund_area1: "产品开发",
    slide9_fund_area2: "销售与营销",
    slide9_fund_area3: "工程团队",
    slide9_fund_area4: "客户成功",
    slide9_fund_area5: "运营与营运资金",
    slide9_sub2_title: "回报预测",
    slide9_return_metric1_title: "5年增长",
    slide9_return_metric1_text: "扩展到2500万美元收入，350多个客户",
    slide9_return_metric2_title: "退出估值",
    slide9_return_metric2_text: "1.5亿 - 2亿美元（收入的6-8倍）",
    slide9_return_metric3_title: "投资者回报",
    slide9_return_metric3_text: "A轮投资回报75-100倍",
    slide9_highlights_title: "投资亮点",
    slide9_highlight1: "成熟市场：243亿美元的总潜在市场，年复合增长率为17.3%",
    slide9_highlight2: "明确的价值主张：客户平均投资回报率为547%",
    slide9_highlight3: "可扩展模型：高利润的SaaS，具有网络效应",

    // Slide 10
    slide10_title: "团队与优势",
    slide10_mainTitle: "经验丰富的团队，可防御的护城河",
    slide10_sub1_title: "领导团队",
    slide10_leader1_name: "伊夫林·里德博士",
    slide10_leader1_title: "首席执行官兼联合创始人",
    slide10_leader1_expertise: "人工智能博士，在谷歌人工智能工作超过15年，预测分析专家。",
    slide10_leader2_name: "马库斯·索恩",
    slide10_leader2_title: "首席技术官兼联合创始人",
    slide10_leader2_expertise: "前亚马逊供应链架构师，扩展系统以支持超过1000亿美元的物流。",
    slide10_leader3_name: "伊莎贝尔·陈",
    slide10_leader3_title: "首席商务官",
    slide10_leader3_expertise: "领导甲骨文的企业销售，建立了从0到5000万美元年经常性收入的业务部门。",
    slide10_sub2_title: "竞争优势与护城河",
    slide10_advantage1_title: "专有AI模型",
    slide10_advantage1_text: "我们的模型在独特的数据集上进行训练，提供卓越的准确性。",
    slide10_advantage2_title: "数据网络效应",
    slide10_advantage2_text: "每个新客户都丰富了我们的模型，创造了强大的竞争壁垒。",
    slide10_advantage3_title: "企业集成",
    slide10_advantage3_text: "50多个预构建的连接器将实施时间减少了80%。",
    
    // Slide 11
    slide11_title: "验证",
    slide11_mainTitle: "成功的证明，保证的结果",
    slide11_sub1_title: "90天成功框架",
    slide11_phase1_title: "第一阶段（1-30天）：集成与快速制胜",
    slide11_phase1_objective: "连接数据系统，提供初步的预测准确性改进。",
    slide11_phase2_title: "第二阶段（31-60天）：优化与培训",
    slide11_phase2_objective: "优化库存策略，培训团队使用平台。",
    slide11_phase3_title: "第三阶段（61-90天）：投资回报率衡量与扩展",
    slide11_phase3_objective: "验证财务影响，制定扩展路线图。",
    slide11_sub2_title: "客户评价",
    slide11_quote1: "这是供应链可见性的圣杯。我们在前60天内确定了1200万美元的节省。",
    slide11_author1: "全球消费品领导者运营高级副总裁",
    slide11_quote2: "预测性风险警报使我们免于一次重大的中断，否则将使我们损失数百万美元。",
    slide11_author2: "汽车制造商物流总监",
    slide11_guarantees_title: "我们的保证",
    slide11_guarantees_text: "我们保证在最初的12个月内至少实现10倍的投资回报率，否则我们将退还费用。",

    // Slide 12
    slide12_title: "后续步骤",
    slide12_mainTitle: "与我们一起革新供应链",
    slide12_sub1_title: "致投资者",
    slide12_investor_text: "我们正在寻求合作伙伴以完成我们的200万美元A轮融资。",
    slide12_investor_point1: "安排一次深入的技术演示。",
    slide12_investor_point2: "请求访问我们的安全数据室。",
    slide12_sub2_title: "致战略合作伙伴",
    slide12_partner_text: "我们正在寻找合作伙伴以扩展我们的生态系统。",
    slide12_partner_point1: "探索技术集成机会。",
    slide12_partner_point2: "讨论联合营销和联合销售计划。",
    slide12_contact_title: "联系我们",
    slide12_contact_email: "investors@bixory.ai",
    slide12_contact_phone: "(555) 123-4567",
    
    // Slide 17
    slide17_title: "谢谢",
    slide17_mainTitle: "谢谢",
    slide17_subtitle: "让我们一起构建供应链的未来。",
    slide17_contact_title: "联系我们",
    slide17_contact_email: "info@bixory.ai",
    slide17_contact_phone: "(555) 123-4567",
  }
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  
  useEffect(() => {
    const savedLang = localStorage.getItem('presentation_language') as 'en' | 'zh' || 'en';
    setLanguage(savedLang);
  }, []);
  
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'zh' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('presentation_language', newLanguage);
  };
  
  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const slideData = [
    { component: TitleSlide, titleKey: 'slide1_title' },
    { component: ProblemSlide, titleKey: 'slide2_title' },
    { component: FailingSolutionsSlide, titleKey: 'slide3_title' },
    { component: SolutionSlide, titleKey: 'slide4_title' },
    { component: ResultsSlide, titleKey: 'slide5_title' },
    { component: DemoSlide, titleKey: 'slide6_title' },
    { component: MarketSlide, titleKey: 'slide7_title' },
    { component: BusinessModelSlide, titleKey: 'slide8_title' },
    { component: InvestmentSlide, titleKey: 'slide9_title' },
    { component: TeamSlide, titleKey: 'slide10_title' },
    { component: ValidationSlide, titleKey: 'slide11_title' },
    { component: NextStepsSlide, titleKey: 'slide12_title' },
    { component: ThankYouSlide, titleKey: 'slide17_title' },
  ];

  const slides = slideData.map(slide => ({
      component: slide.component,
      title: t(slide.titleKey)
  }));

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToHome = () => {
    const hostname = window.location.hostname;
    if (hostname === 'ai-data-solutions.bixory.ai') {
      window.location.href = '/';
    } else if (hostname.includes('github.io')) {
      window.location.href = '/ai-data-solutions/';
    } else {
      const currentPath = window.location.pathname;
      const solutionName = 'supply-chain-intelligence';
      const parentPath = currentPath.substring(0, currentPath.indexOf(`/${solutionName}/`));
      window.location.href = parentPath || '/';
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center relative">
        <div className="flex items-center">
          <button
            onClick={goToHome}
            className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Go to home page"
          >
            <Home size={24} className="text-blue-600" />
          </button>
        </div>

        {/* Centered Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-xl font-bold text-blue-800">{t('title')}</h1>
          <p className="text-sm text-gray-600">{slides[currentSlide].title}</p>
        </div>

        <div className="flex items-center">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 rounded border border-gray-300 text-sm font-medium hover:bg-gray-50 flex items-center"
          >
            <Globe size={16} className="mr-1" />
            {language === 'en' ? '中文' : 'English'}
          </button>
        </div>
      </header>

      {/* Navigation Controls */}
      <div className="bg-white shadow-sm py-3 px-6 flex justify-between items-center">
        <button
          onClick={goToPreviousSlide}
          disabled={currentSlide === 0}
          className={`flex items-center px-4 py-2 rounded-md ${
            currentSlide === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-blue-600 hover:bg-blue-50'
          }`}
        >
          <ChevronLeft size={20} className="mr-1" />
          {t('previous')}
        </button>
        <div className="text-sm text-gray-500">
          {t('slide')} {currentSlide + 1} {t('of')} {slides.length}
        </div>
        <button
          onClick={goToNextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center px-4 py-2 rounded-md ${
            currentSlide === slides.length - 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-blue-600 hover:bg-blue-50'
          }`}
        >
          {t('next')}
          <ChevronRight size={20} className="ml-1" />
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8">
          <CurrentSlideComponent t={t} />
        </div>
      </main>
    </div>
  );
}

export default App; 