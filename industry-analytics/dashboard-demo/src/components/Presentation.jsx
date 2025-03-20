import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import { 
  Brain, 
  ChartLine, 
  DollarSign, 
  AlertTriangle, 
  Eye, 
  Wrench, 
  Monitor,
  BarChart2,
  Lightbulb,
  ChartPie,
  Map,
  Rocket
} from 'lucide-react';

const Presentation = () => {
  useEffect(() => {
    const deck = new Reveal({
      hash: true,
      slideNumber: true,
      controls: true,
      progress: true,
      center: true,
      transition: 'slide',
      width: 960,
      height: 540,
      margin: 0.04,
      plugins: []
    });

    deck.initialize();
  }, []);

  return (
    <div className="reveal">
      <div className="slides">
        {/* Title Slide */}
        <section>
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 bg-indigo-500/30 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-indigo-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Industry-specific AI Analytics</h1>
          <h3 className="text-2xl text-indigo-400">Transforming Manufacturing with AI-Powered Insights</h3>
          <div className="mt-12">
            <p className="text-white">BixoryAI</p>
            <p className="text-white">March 2024</p>
          </div>
        </section>

        {/* Market & Challenges */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-white mb-6">
            <ChartLine className="w-6 h-6 mr-2" />
            Market Opportunity & Challenges
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
              <div className="w-10 h-10 bg-indigo-500/30 rounded-full flex items-center justify-center mb-3">
                <DollarSign className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">Market Potential</h3>
              <p className="text-white/90"><span className="text-indigo-400 font-bold">$7B</span> market by 2030</p>
              <p className="text-white/90"><span className="text-indigo-400">3X higher ROI</span> vs. generic solutions</p>
              <p className="text-white/90">Growing at 24% CAGR</p>
            </div>
            <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
              <div className="w-10 h-10 bg-indigo-500/30 rounded-full flex items-center justify-center mb-3">
                <AlertTriangle className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">Key Challenges</h3>
              <p className="text-white/90">Complex decision making</p>
              <p className="text-white/90">Predictive gaps in quality control</p>
              <p className="text-white/90">Operational inefficiencies</p>
              <p className="text-white/90">Data silos and integration issues</p>
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-white mb-6">
            <Brain className="w-6 h-6 mr-2" />
            AI-Powered Solutions
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
              <div className="w-10 h-10 bg-indigo-500/30 rounded-full flex items-center justify-center mb-3">
                <Eye className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">Computer Vision</h3>
              <p className="text-white/90"><span className="text-indigo-400">6-10x earlier</span> defect detection</p>
              <p className="text-white/90">99.9% accuracy in flaw detection</p>
              <p className="text-white/90">Real-time quality monitoring</p>
              <p className="text-white/90">Automated inspection reports</p>
            </div>
            <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
              <div className="w-10 h-10 bg-indigo-500/30 rounded-full flex items-center justify-center mb-3">
                <Wrench className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">Predictive Maintenance</h3>
              <p className="text-white/90"><span className="text-indigo-400">93% accurate</span> failure prediction</p>
              <p className="text-white/90"><span className="text-indigo-400 font-bold">32%</span> cost reduction</p>
              <p className="text-white/90">ML-based anomaly detection</p>
              <p className="text-white/90">Automated maintenance scheduling</p>
            </div>
            <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
              <div className="w-10 h-10 bg-indigo-500/30 rounded-full flex items-center justify-center mb-3">
                <Monitor className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">Digital Twin</h3>
              <p className="text-white/90">Virtual process simulation</p>
              <p className="text-white/90">Real-time optimization</p>
              <p className="text-white/90">Scenario planning</p>
              <p className="text-white/90">Performance optimization</p>
            </div>
            <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
              <div className="w-10 h-10 bg-indigo-500/30 rounded-full flex items-center justify-center mb-3">
                <BarChart2 className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">Analytics Dashboard</h3>
              <p className="text-white/90">Real-time insights</p>
              <p className="text-white/90">Interactive visualization</p>
              <p className="text-white/90">Custom reporting</p>
              <p className="text-white/90">KPI tracking</p>
            </div>
          </div>
        </section>

        {/* Performance & Journey */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-white mb-6">
            <ChartLine className="w-6 h-6 mr-2" />
            Performance & Implementation
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
              <h3 className="text-lg font-semibold text-indigo-400 mb-4">Performance Metrics</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-indigo-500/30">
                    <th className="p-2 text-left">Metric</th>
                    <th className="p-2 text-left">Our Solution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-indigo-500/20">
                    <td className="p-2">Defect Prediction</td>
                    <td className="p-2 text-indigo-400">87% accuracy</td>
                  </tr>
                  <tr className="border-t border-indigo-500/20">
                    <td className="p-2">Cost Reduction</td>
                    <td className="p-2 text-indigo-400 font-bold">32%</td>
                  </tr>
                  <tr className="border-t border-indigo-500/20">
                    <td className="p-2">Implementation</td>
                    <td className="p-2">8 weeks</td>
                  </tr>
                  <tr className="border-t border-indigo-500/20">
                    <td className="p-2">ROI Timeline</td>
                    <td className="p-2">6-12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
              <h3 className="text-lg font-semibold text-indigo-400 mb-4">90-Day Journey</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="text-indigo-400 font-semibold">Weeks 1-4: Discovery & Assessment</h4>
                    <ul className="text-white/90 text-sm mt-1">
                      <li>• Process analysis</li>
                      <li>• Data collection</li>
                      <li>• Requirements gathering</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="text-indigo-400 font-semibold">Weeks 5-8: Deployment & Validation</h4>
                    <ul className="text-white/90 text-sm mt-1">
                      <li>• System integration</li>
                      <li>• Model training</li>
                      <li>• Initial testing</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="text-indigo-400 font-semibold">Weeks 9-12: Integration & Optimization</h4>
                    <ul className="text-white/90 text-sm mt-1">
                      <li>• Performance tuning</li>
                      <li>• User training</li>
                      <li>• Full deployment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="flex items-center text-2xl font-bold text-white mb-6">
            <ChartLine className="w-6 h-6 mr-2" />
            Next Steps
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
              <div className="w-10 h-10 bg-indigo-500/30 rounded-full flex items-center justify-center mb-3">
                <Lightbulb className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">Discovery Workshop</h3>
              <p className="text-white/90">2-hour session to identify opportunities</p>
              <p className="text-white/90">Process mapping</p>
              <p className="text-white/90">ROI assessment</p>
            </div>
            <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
              <div className="w-10 h-10 bg-indigo-500/30 rounded-full flex items-center justify-center mb-3">
                <ChartPie className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">Value Assessment</h3>
              <p className="text-white/90">2-week analysis of your environment</p>
              <p className="text-white/90">Data quality check</p>
              <p className="text-white/90">Infrastructure review</p>
            </div>
            <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
              <div className="w-10 h-10 bg-indigo-500/30 rounded-full flex items-center justify-center mb-3">
                <Map className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">Implementation Plan</h3>
              <p className="text-white/90">Detailed roadmap for your priorities</p>
              <p className="text-white/90">Resource allocation</p>
              <p className="text-white/90">Timeline development</p>
            </div>
            <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
              <div className="w-10 h-10 bg-indigo-500/30 rounded-full flex items-center justify-center mb-3">
                <Rocket className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">Pilot Deployment</h3>
              <p className="text-white/90">8-week implementation</p>
              <p className="text-white/90">First use case deployment</p>
              <p className="text-white/90">Performance monitoring</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Presentation; 