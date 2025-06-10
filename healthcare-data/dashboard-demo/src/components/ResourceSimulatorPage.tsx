import React, { useState, useEffect } from 'react';
import { SlidersHorizontal, Users, Bed, Timer, Activity, DollarSign } from 'lucide-react';

interface PageProps {
  language: 'en' | 'zh';
}

const translations = {
  en: {
    title: 'Resource Optimization Simulator',
    subtitle: 'Adjust the resource levels below to see the AI-predicted impact on hospital operations.',
    controlsTitle: 'Simulation Controls',
    nurses: 'Number of Nurses',
    doctors: 'Number of Doctors',
    beds: 'Surgical Ward Beds',
    resultsTitle: 'AI-Predicted Outcomes',
    waitTime: 'Average Patient Wait Time',
    burnoutRisk: 'Staff Burnout Risk',
    opCost: 'Projected Operational Cost',
    minutes: 'min',
    perDay: '/ day',
  },
  zh: {
    title: '资源优化模拟器',
    subtitle: '调整下面的资源水平，查看AI预测对医院运营的影响。',
    controlsTitle: '模拟控制器',
    nurses: '护士数量',
    doctors: '医生数量',
    beds: '外科病房床位数',
    resultsTitle: 'AI预测结果',
    waitTime: '平均患者等待时间',
    burnoutRisk: '员工倦怠风险',
    opCost: '预计运营成本',
    minutes: '分钟',
    perDay: '/天',
  }
};

const ResourceSimulatorPage: React.FC<PageProps> = ({ language }) => {
  const t = translations[language];

  const [nurses, setNurses] = useState(20);
  const [doctors, setDoctors] = useState(10);
  const [beds, setBeds] = useState(30);

  const [waitTime, setWaitTime] = useState(0);
  const [burnoutRisk, setBurnoutRisk] = useState(0);
  const [opCost, setOpCost] = useState(0);

  useEffect(() => {
    // Simple simulation logic
    const patientLoad = 150; 
    const staffPower = (nurses * 1.5) + (doctors * 3);
    
    // Wait Time: increases as staff power per patient decreases
    const rawWaitTime = Math.max(10, 60 - ((staffPower / patientLoad) * 100));
    setWaitTime(Math.round(rawWaitTime));

    // Burnout Risk: increases as staff are overworked
    const burnout = Math.min(95, Math.max(15, (patientLoad / staffPower) * 40));
    setBurnoutRisk(Math.round(burnout));

    // Operational Cost: simple calculation based on resources
    const cost = (nurses * 500) + (doctors * 1200) + (beds * 200);
    setOpCost(cost);

  }, [nurses, doctors, beds]);

  const Slider = ({ label, value, setValue, min, max, icon }: any) => (
    <div className="mb-4">
      <label className="flex items-center text-lg font-semibold mb-2">
        {icon}
        <span className="ml-2">{label}</span>
      </label>
      <div className="flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <span className="ml-4 font-bold text-xl w-16 text-center">{value}</span>
      </div>
    </div>
  );

  const ResultCard = ({ label, value, unit, icon, color }: any) => (
    <div className={`p-6 rounded-lg shadow-lg flex items-center ${color}`}>
      <div className="mr-4">{icon}</div>
      <div>
        <p className="text-lg font-semibold text-white">{label}</p>
        <p className="text-3xl font-bold text-white">
          {value}
          <span className="text-lg ml-2">{unit}</span>
        </p>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
      <p className="text-gray-600 mb-8">{t.subtitle}</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 flex items-center"><SlidersHorizontal className="mr-3 text-blue-600"/>{t.controlsTitle}</h2>
          <Slider label={t.nurses} value={nurses} setValue={setNurses} min={5} max={40} icon={<Users className="w-6 h-6 text-blue-500" />} />
          <Slider label={t.doctors} value={doctors} setValue={setDoctors} min={3} max={20} icon={<Users className="w-6 h-6 text-purple-500" />} />
          <Slider label={t.beds} value={beds} setValue={setBeds} min={10} max={50} icon={<Bed className="w-6 h-6 text-green-500" />} />
        </div>

        {/* Results */}
        <div className="p-8 rounded-xl bg-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center">{t.resultsTitle}</h2>
          <div className="space-y-4">
            <ResultCard label={t.waitTime} value={waitTime} unit={t.minutes} icon={<Timer size={40} />} color="bg-blue-500" />
            <ResultCard label={t.burnoutRisk} value={`${burnoutRisk}%`} unit="" icon={<Activity size={40} />} color="bg-red-500" />
            <ResultCard label={t.opCost} value={`$${opCost.toLocaleString()}`} unit={t.perDay} icon={<DollarSign size={40} />} color="bg-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceSimulatorPage; 