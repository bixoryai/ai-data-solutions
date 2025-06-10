import React, { useState } from 'react';
import { Download, FileText, Database, Code, Copy, Check, ExternalLink } from 'lucide-react';

interface ExportOptionsProps {
  language: 'en' | 'zh';
}

type ExportFormat = 'csv' | 'json' | 'sql' | 'excel' | 'parquet' | 'code';
type CodeLanguage = 'python' | 'r' | 'javascript';

const ExportOptions: React.FC<ExportOptionsProps> = ({ language }) => {
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>('csv');
  const [codeLanguage, setCodeLanguage] = useState<CodeLanguage>('python');
  const [includeMetadata, setIncludeMetadata] = useState<boolean>(true);
  const [includeSchema, setIncludeSchema] = useState<boolean>(true);
  const [compressionEnabled, setCompressionEnabled] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  
  // Translations
  const translations = {
    en: {
      title: 'Export Options',
      description: 'Configure and export your synthetic data',
      format: 'Export Format',
      options: 'Export Options',
      codeLanguage: 'Code Language',
      includeMetadata: 'Include Metadata',
      includeSchema: 'Include Schema',
      enableCompression: 'Enable Compression',
      exportData: 'Export Data',
      copyCode: 'Copy Code',
      copied: 'Copied!',
      downloadAll: 'Download All Files',
      previewData: 'Preview Data',
      csvFormat: 'CSV Format',
      jsonFormat: 'JSON Format',
      sqlFormat: 'SQL Format',
      excelFormat: 'Excel Format',
      parquetFormat: 'Parquet Format',
      codeFormat: 'Code Snippet',
      pythonLang: 'Python',
      rLang: 'R',
      javascriptLang: 'JavaScript',
      metadataDesc: 'Include generation parameters and privacy metrics',
      schemaDesc: 'Include data types and constraints',
      compressionDesc: 'Compress output files (ZIP format)',
      previewTitle: 'Data Preview',
      rows: 'rows',
      columns: 'columns',
      viewDocs: 'View Documentation'
    },
    zh: {
      title: '导出选项',
      description: '配置和导出您的合成数据',
      format: '导出格式',
      options: '导出选项',
      codeLanguage: '代码语言',
      includeMetadata: '包含元数据',
      includeSchema: '包含架构',
      enableCompression: '启用压缩',
      exportData: '导出数据',
      copyCode: '复制代码',
      copied: '已复制！',
      downloadAll: '下载所有文件',
      previewData: '预览数据',
      csvFormat: 'CSV格式',
      jsonFormat: 'JSON格式',
      sqlFormat: 'SQL格式',
      excelFormat: 'Excel格式',
      parquetFormat: 'Parquet格式',
      codeFormat: '代码片段',
      pythonLang: 'Python',
      rLang: 'R',
      javascriptLang: 'JavaScript',
      metadataDesc: '包含生成参数和隐私指标',
      schemaDesc: '包含数据类型和约束',
      compressionDesc: '压缩输出文件（ZIP格式）',
      previewTitle: '数据预览',
      rows: '行',
      columns: '列',
      viewDocs: '查看文档'
    }
  };
  
  const t = translations[language];
  
  // Sample data for preview
  const sampleData = [
    { id: 1, name: 'John Doe', age: 32, gender: 'male', income: 75000 },
    { id: 2, name: 'Jane Smith', age: 28, gender: 'female', income: 82000 },
    { id: 3, name: 'Alex Johnson', age: 45, gender: 'non-binary', income: 95000 },
    { id: 4, name: 'Maria Garcia', age: 37, gender: 'female', income: 68000 },
    { id: 5, name: 'Wei Chen', age: 29, gender: 'male', income: 79000 }
  ];
  
  // Get code snippet based on selected language
  const getCodeSnippet = (): string => {
    switch (codeLanguage) {
      case 'python':
        return `import pandas as pd
import numpy as np
from datetime import datetime

# Load the synthetic data
synthetic_data = pd.read_csv('synthetic_data.csv')

# Display basic statistics
print(synthetic_data.describe())

# Example: Filter data and create visualization
import matplotlib.pyplot as plt

# Age distribution
plt.figure(figsize=(10, 6))
synthetic_data['age'].hist(bins=20)
plt.title('Age Distribution in Synthetic Data')
plt.xlabel('Age')
plt.ylabel('Count')
plt.savefig('age_distribution.png')
plt.show()`;
        
      case 'r':
        return `# Load required libraries
library(tidyverse)
library(ggplot2)

# Load the synthetic data
synthetic_data <- read.csv("synthetic_data.csv")

# Display basic statistics
summary(synthetic_data)

# Example: Filter data and create visualization
# Age distribution
ggplot(synthetic_data, aes(x = age)) +
  geom_histogram(bins = 20, fill = "steelblue", color = "white") +
  labs(title = "Age Distribution in Synthetic Data",
       x = "Age",
       y = "Count") +
  theme_minimal()

# Save plot
ggsave("age_distribution.png")`;
        
      case 'javascript':
        return `// Using D3.js for data visualization
const d3 = require('d3');
const fs = require('fs');

// Load the synthetic data (assuming it's in JSON format)
const syntheticData = JSON.parse(fs.readFileSync('synthetic_data.json'));

// Display basic statistics
const ages = syntheticData.map(d => d.age);
const ageMin = Math.min(...ages);
const ageMax = Math.max(...ages);
const ageMean = d3.mean(ages);

console.log('Age Statistics:');
console.log(\`Min: \${ageMin}, Max: \${ageMax}, Mean: \${ageMean.toFixed(2)}\`);

// Example: Filter data for analysis
const highIncomeData = syntheticData.filter(d => d.income > 80000);
console.log(\`Number of high income individuals: \${highIncomeData.length}\`);`;
        
      default:
        return '';
    }
  };
  
  // Handle copy code
  const handleCopyCode = () => {
    navigator.clipboard.writeText(getCodeSnippet());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  // Render format options
  const renderFormatOptions = () => {
    if (selectedFormat === 'code') {
      return (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.codeLanguage}
          </label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="codeLanguage"
                value="python"
                checked={codeLanguage === 'python'}
                onChange={() => setCodeLanguage('python')}
              />
              <span className="ml-2">{t.pythonLang}</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="codeLanguage"
                value="r"
                checked={codeLanguage === 'r'}
                onChange={() => setCodeLanguage('r')}
              />
              <span className="ml-2">{t.rLang}</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="codeLanguage"
                value="javascript"
                checked={codeLanguage === 'javascript'}
                onChange={() => setCodeLanguage('javascript')}
              />
              <span className="ml-2">{t.javascriptLang}</span>
            </label>
          </div>
          
          <div className="mt-4 relative">
            <div className="bg-gray-800 rounded-md p-4 text-white overflow-x-auto">
              <pre className="text-sm"><code>{getCodeSnippet()}</code></pre>
            </div>
            <button
              className="absolute top-2 right-2 p-2 bg-gray-700 rounded-md text-white hover:bg-gray-600 transition-colors"
              onClick={handleCopyCode}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span className="sr-only">{copied ? t.copied : t.copyCode}</span>
            </button>
          </div>
        </div>
      );
    }
    
    return null;
  };
  
  // Render data preview
  const renderDataPreview = () => {
    if (selectedFormat === 'code') return null;
    
    return (
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{t.previewTitle}</h3>
        <p className="text-sm text-gray-500 mb-4">
          {sampleData.length} {t.rows}, 5 {t.columns}
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {Object.keys(sampleData[0]).map((key) => (
                  <th
                    key={key}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sampleData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, valueIndex) => (
                    <td key={valueIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-header">
          <h2 className="text-xl font-semibold text-gray-800">{t.title}</h2>
          <p className="mt-1 text-sm text-gray-600">{t.description}</p>
        </div>
        
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium text-gray-900 mb-4">{t.format}</h3>
              
              <div className="space-y-3">
                <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="format"
                    value="csv"
                    checked={selectedFormat === 'csv'}
                    onChange={() => setSelectedFormat('csv')}
                    className="form-radio h-4 w-4 text-primary-600"
                  />
                  <div className="ml-3">
                    <span className="block text-sm font-medium text-gray-900">{t.csvFormat}</span>
                    <span className="block text-xs text-gray-500">
                      {language === 'en' ? 'Comma-separated values format' : '逗号分隔值格式'}
                    </span>
                  </div>
                  <FileText size={20} className="ml-auto text-gray-400" />
                </label>
                
                <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="format"
                    value="json"
                    checked={selectedFormat === 'json'}
                    onChange={() => setSelectedFormat('json')}
                    className="form-radio h-4 w-4 text-primary-600"
                  />
                  <div className="ml-3">
                    <span className="block text-sm font-medium text-gray-900">{t.jsonFormat}</span>
                    <span className="block text-xs text-gray-500">
                      {language === 'en' ? 'JavaScript Object Notation format' : 'JavaScript对象表示法格式'}
                    </span>
                  </div>
                  <Code size={20} className="ml-auto text-gray-400" />
                </label>
                
                <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="format"
                    value="sql"
                    checked={selectedFormat === 'sql'}
                    onChange={() => setSelectedFormat('sql')}
                    className="form-radio h-4 w-4 text-primary-600"
                  />
                  <div className="ml-3">
                    <span className="block text-sm font-medium text-gray-900">{t.sqlFormat}</span>
                    <span className="block text-xs text-gray-500">
                      {language === 'en' ? 'SQL database insert statements' : 'SQL数据库插入语句'}
                    </span>
                  </div>
                  <Database size={20} className="ml-auto text-gray-400" />
                </label>
                
                <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="format"
                    value="excel"
                    checked={selectedFormat === 'excel'}
                    onChange={() => setSelectedFormat('excel')}
                    className="form-radio h-4 w-4 text-primary-600"
                  />
                  <div className="ml-3">
                    <span className="block text-sm font-medium text-gray-900">{t.excelFormat}</span>
                    <span className="block text-xs text-gray-500">
                      {language === 'en' ? 'Microsoft Excel spreadsheet format' : 'Microsoft Excel电子表格格式'}
                    </span>
                  </div>
                  <FileText size={20} className="ml-auto text-gray-400" />
                </label>
                
                <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="format"
                    value="parquet"
                    checked={selectedFormat === 'parquet'}
                    onChange={() => setSelectedFormat('parquet')}
                    className="form-radio h-4 w-4 text-primary-600"
                  />
                  <div className="ml-3">
                    <span className="block text-sm font-medium text-gray-900">{t.parquetFormat}</span>
                    <span className="block text-xs text-gray-500">
                      {language === 'en' ? 'Columnar storage format' : '列式存储格式'}
                    </span>
                  </div>
                  <Database size={20} className="ml-auto text-gray-400" />
                </label>
                
                <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="format"
                    value="code"
                    checked={selectedFormat === 'code'}
                    onChange={() => setSelectedFormat('code')}
                    className="form-radio h-4 w-4 text-primary-600"
                  />
                  <div className="ml-3">
                    <span className="block text-sm font-medium text-gray-900">{t.codeFormat}</span>
                    <span className="block text-xs text-gray-500">
                      {language === 'en' ? 'Code to load and analyze the data' : '加载和分析数据的代码'}
                    </span>
                  </div>
                  <Code size={20} className="ml-auto text-gray-400" />
                </label>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">{t.options}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="includeMetadata"
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary-600"
                        checked={includeMetadata}
                        onChange={() => setIncludeMetadata(!includeMetadata)}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="includeMetadata" className="font-medium text-gray-700">
                        {t.includeMetadata}
                      </label>
                      <p className="text-gray-500">{t.metadataDesc}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="includeSchema"
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary-600"
                        checked={includeSchema}
                        onChange={() => setIncludeSchema(!includeSchema)}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="includeSchema" className="font-medium text-gray-700">
                        {t.includeSchema}
                      </label>
                      <p className="text-gray-500">{t.schemaDesc}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="compressionEnabled"
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary-600"
                        checked={compressionEnabled}
                        onChange={() => setCompressionEnabled(!compressionEnabled)}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="compressionEnabled" className="font-medium text-gray-700">
                        {t.enableCompression}
                      </label>
                      <p className="text-gray-500">{t.compressionDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              {renderFormatOptions()}
              {renderDataPreview()}
              
              <div className="mt-6 flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-4">
                <button className="btn btn-primary flex items-center justify-center">
                  <Download size={18} className="mr-1" />
                  <span>{selectedFormat === 'code' ? t.copyCode : t.exportData}</span>
                </button>
                
                {selectedFormat !== 'code' && (
                  <button className="btn btn-secondary flex items-center justify-center">
                    <Download size={18} className="mr-1" />
                    <span>{t.downloadAll}</span>
                  </button>
                )}
                
                <a 
                  href="#" 
                  className="text-primary-600 hover:text-primary-800 flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} className="mr-1" />
                  <span>{t.viewDocs}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportOptions;
