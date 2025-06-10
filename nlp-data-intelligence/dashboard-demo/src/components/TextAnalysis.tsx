import React, { useState } from 'react';
import { sampleText, mockAnalysis, AnalysisResult } from '../data/mock-analysis';

interface TextAnalysisProps {
  language: 'en' | 'zh';
}

const TextAnalysis: React.FC<TextAnalysisProps> = ({ language }) => {
  const [text, setText] = useState(sampleText);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(mockAnalysis);

  const translations = {
    en: {
      title: 'Text Analysis',
      inputText: 'Input Text',
      placeholder: 'Paste your text here for analysis...',
      analyze: 'Analyze',
      summary: 'Summary',
      sentiment: 'Sentiment Analysis',
      confidence: 'Confidence',
      namedEntities: 'Named Entities',
      keywords: 'Keywords',
      positive: 'Positive',
      negative: 'Negative',
    },
    zh: {
      title: '文本分析',
      inputText: '输入文本',
      placeholder: '在此处粘贴文本进行分析...',
      analyze: '分析',
      summary: '摘要',
      sentiment: '情绪分析',
      confidence: '置信度',
      namedEntities: '命名实体',
      keywords: '关键词',
      positive: '正面',
      negative: '负面',
    },
  };

  const t = translations[language];

  const handleAnalyze = () => {
    // In a real app, this would make an API call with the 'text' content.
    // For this demo, we just re-apply the mock analysis.
    if (text.trim() === '') {
      setAnalysis(null);
    } else {
      setAnalysis(mockAnalysis);
    }
  };

  const getEntityTypeColor = (type: string) => {
    switch (type) {
      case 'Person': return 'bg-blue-100 text-blue-800';
      case 'Organization': return 'bg-green-100 text-green-800';
      case 'Location': return 'bg-purple-100 text-purple-800';
      case 'Date': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{t.title}</h2>
      {/* Input Area */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-2">{t.inputText}</h3>
        <textarea
          className="w-full h-40 p-2 border rounded-md"
          placeholder={t.placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          onClick={handleAnalyze}
          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          {t.analyze}
        </button>
      </div>

      {/* Results Area */}
      {analysis && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Summarization */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{t.summary}</h3>
            <p className="text-gray-700">{analysis.summary}</p>
          </div>

          {/* Sentiment Analysis */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{t.sentiment}</h3>
            <p className="text-gray-700">
              <span className={`font-bold ${analysis.sentiment.label === 'Positive' ? 'text-green-600' : 'text-red-600'}`}>
                {analysis.sentiment.label === 'Positive' ? t.positive : t.negative}
              </span>
              ({t.confidence}: {analysis.sentiment.score * 100}%)
            </p>
          </div>

          {/* Named Entity Recognition */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{t.namedEntities}</h3>
            <div className="flex flex-wrap gap-2">
              {analysis.entities.map((entity, index) => (
                <div key={index} className={`px-2 py-1 rounded-md text-sm ${getEntityTypeColor(entity.type)}`}>
                  <strong>{entity.text}</strong> ({entity.type})
                </div>
              ))}
            </div>
          </div>

          {/* Keyword Extraction */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{t.keywords}</h3>
            <div className="flex flex-wrap gap-2">
              {analysis.keywords.map((keyword, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextAnalysis; 