import React, { useState, useMemo } from 'react';
import { mockDocuments, Document } from '../data/mock-documents';

interface SearchProps {
  language: 'en' | 'zh';
}

const Search: React.FC<SearchProps> = ({ language }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const translations = {
    en: {
      title: 'Intelligent Search',
      placeholder: 'Search across documents...',
      results: 'results',
      result: 'result',
      found: 'found',
    },
    zh: {
      title: '智能搜索',
      placeholder: '在文档中搜索...',
      results: '个结果',
      result: '个结果',
      found: '已找到',
    },
  };

  const t = translations[language];

  const filteredDocuments = useMemo(() => {
    if (!searchQuery.trim()) {
      return mockDocuments;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    return mockDocuments.filter(doc =>
      doc.title.toLowerCase().includes(lowerCaseQuery) ||
      doc.content.toLowerCase().includes(lowerCaseQuery)
    );
  }, [searchQuery]);

  const resultsText = () => {
    const count = filteredDocuments.length;
    if (language === 'zh') {
      return `${t.found} ${count} ${t.result}`;
    }
    return `${count} ${count === 1 ? t.result : t.results} ${t.found}`;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{t.title}</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <input
          type="text"
          placeholder={t.placeholder}
          className="w-full p-2 border rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">
          {resultsText()}
        </h3>
        <div className="space-y-4">
          {filteredDocuments.map(doc => (
            <div key={doc.id} className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-indigo-600 mb-1">{doc.title}</h4>
              <p className="text-gray-700">{doc.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search; 