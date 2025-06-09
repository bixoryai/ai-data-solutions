import React, { useState } from 'react';
import { nlpData, ClinicalNote, PatientFeedback } from '../data/nlpData';
import { FileText, Lightbulb, ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';

interface PageProps {
  language: 'en' | 'zh';
}

const translations = {
  en: {
    title: 'NLP for Clinical Intelligence',
    subtitle: 'Unlock structured insights from unstructured clinical text and patient feedback.',
    summarizerTitle: 'Clinical Note Summarizer',
    generateSummary: 'Generate AI Summary',
    generatingSummary: 'Generating Summary...',
    extractedEntities: 'Key Entities Extracted:',
    feedbackAnalysisTitle: 'Patient Feedback Analysis',
    sentiment: {
      Positive: 'Positive',
      Negative: 'Negative',
      Neutral: 'Neutral'
    }
  },
  zh: {
    title: '临床智能NLP',
    subtitle: '从非结构化的临床文本和患者反馈中解锁结构化见解。',
    summarizerTitle: '临床记录摘要器',
    generateSummary: '生成AI摘要',
    generatingSummary: '正在生成摘要...',
    extractedEntities: '提取的关键实体：',
    feedbackAnalysisTitle: '患者反馈分析',
    sentiment: {
      Positive: '正面',
      Negative: '负面',
      Neutral: '中性'
    }
  }
};

const sentimentStyles = {
  Positive: { icon: <ThumbsUp className="text-green-500" />, color: 'text-green-600', bg: 'bg-green-100' },
  Negative: { icon: <ThumbsDown className="text-red-500" />, color: 'text-red-600', bg: 'bg-red-100' },
  Neutral: { icon: <MessageCircle className="text-gray-500" />, color: 'text-gray-600', bg: 'bg-gray-100' },
};

const NlpIntelligencePage: React.FC<PageProps> = ({ language }) => {
  const t = translations[language];
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [summary, setSummary] = useState<ClinicalNote['summary'] | null>(null);

  const handleSummarize = () => {
    setIsSummarizing(true);
    setSummary(null);

    // Simulate AI processing
    setTimeout(() => {
      setSummary(nlpData.clinicalNotes[0].summary);
      setIsSummarizing(false);
    }, 1500);
  };
  
  const clinicalNote = nlpData.clinicalNotes[0];

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
      <p className="text-gray-600 mb-6">{t.subtitle}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Clinical Note Summarizer */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 flex items-center"><FileText className="mr-3 text-blue-500" />{t.summarizerTitle}</h2>
          
          <div className="bg-gray-50 p-4 rounded-lg border h-48 overflow-y-auto mb-4">
            <h3 className="font-bold mb-2">{clinicalNote.title}</h3>
            <p className="text-sm text-gray-700">{clinicalNote.content}</p>
          </div>
          
          <button
            onClick={handleSummarize}
            disabled={isSummarizing}
            className="w-full flex items-center justify-center px-4 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400 transition-all"
          >
            <Lightbulb className={`mr-3 ${isSummarizing ? 'animate-pulse' : ''}`} />
            {isSummarizing ? t.generatingSummary : t.generateSummary}
          </button>
          
          {summary && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-xl font-bold mb-3">{t.extractedEntities}</h3>
              {Object.entries(summary).map(([key, values]) => (
                <div key={key} className="mb-2">
                  <h4 className="font-semibold text-blue-800">{key}:</h4>
                  <ul className="list-disc list-inside ml-4">
                    {values.map((value, i) => <li key={i} className="text-sm text-gray-800">{value}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Patient Feedback Analysis */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{t.feedbackAnalysisTitle}</h2>
          <div className="space-y-3">
            {nlpData.patientFeedback.map(fb => {
              const sentiment = fb.sentiment;
              return (
                <div key={fb.id} className={`p-4 rounded-lg border-l-4 ${sentimentStyles[sentiment].bg}`}>
                  <div className="flex items-start">
                    <span className="mr-3 mt-1">{sentimentStyles[sentiment].icon}</span>
                    <div>
                      <p className="text-sm text-gray-800">{fb.comment}</p>
                      <p className={`text-xs font-bold mt-1 ${sentimentStyles[sentiment].color}`}>{fb.department} - {t.sentiment[sentiment]}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NlpIntelligencePage; 