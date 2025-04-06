import React, { useState } from 'react';
import { PlusCircle, Trash2, Info } from 'lucide-react';

interface DataProfilerProps {
  language: 'en' | 'zh';
}

type ColumnType = 'numeric' | 'categorical' | 'date' | 'text';
type Distribution = 'normal' | 'uniform' | 'exponential' | 'custom';

interface Column {
  name: string;
  type: ColumnType;
  distribution?: Distribution;
  min?: number;
  max?: number;
  mean?: number;
  stdDev?: number;
  categories?: string[];
  dateFormat?: string;
}

const DataProfiler: React.FC<DataProfilerProps> = ({ language }) => {
  const [columns, setColumns] = useState<Column[]>([
    { 
      name: 'age', 
      type: 'numeric', 
      distribution: 'normal',
      min: 18,
      max: 90,
      mean: 45,
      stdDev: 15
    },
    { 
      name: 'gender', 
      type: 'categorical',
      categories: ['male', 'female', 'non-binary']
    }
  ]);
  
  const [sampleSize, setSampleSize] = useState<number>(1000);
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);
  
  // Translations
  const translations = {
    en: {
      title: 'Data Profile Configuration',
      description: 'Define the structure and characteristics of your synthetic data',
      columnName: 'Column Name',
      columnType: 'Type',
      distribution: 'Distribution',
      parameters: 'Parameters',
      actions: 'Actions',
      addColumn: 'Add Column',
      sampleSize: 'Sample Size',
      advancedOptions: 'Advanced Options',
      generateData: 'Generate Data',
      numeric: 'Numeric',
      categorical: 'Categorical',
      date: 'Date',
      text: 'Text',
      normal: 'Normal',
      uniform: 'Uniform',
      exponential: 'Exponential',
      custom: 'Custom',
      min: 'Min',
      max: 'Max',
      mean: 'Mean',
      stdDev: 'Std Dev',
      categories: 'Categories',
      dateFormat: 'Date Format',
      addCategory: 'Add Category',
      delete: 'Delete',
      relationships: 'Define Relationships',
      missingValues: 'Missing Values',
      noiseLevel: 'Noise Level',
      none: 'None',
      low: 'Low',
      medium: 'Medium',
      high: 'High'
    },
    zh: {
      title: '数据配置文件',
      description: '定义合成数据的结构和特征',
      columnName: '列名',
      columnType: '类型',
      distribution: '分布',
      parameters: '参数',
      actions: '操作',
      addColumn: '添加列',
      sampleSize: '样本大小',
      advancedOptions: '高级选项',
      generateData: '生成数据',
      numeric: '数值型',
      categorical: '分类型',
      date: '日期型',
      text: '文本型',
      normal: '正态分布',
      uniform: '均匀分布',
      exponential: '指数分布',
      custom: '自定义',
      min: '最小值',
      max: '最大值',
      mean: '平均值',
      stdDev: '标准差',
      categories: '类别',
      dateFormat: '日期格式',
      addCategory: '添加类别',
      delete: '删除',
      relationships: '定义关系',
      missingValues: '缺失值',
      noiseLevel: '噪声水平',
      none: '无',
      low: '低',
      medium: '中',
      high: '高'
    }
  };
  
  const t = translations[language];
  
  // Add a new column
  const addColumn = () => {
    setColumns([...columns, { name: '', type: 'numeric' }]);
  };
  
  // Remove a column
  const removeColumn = (index: number) => {
    const newColumns = [...columns];
    newColumns.splice(index, 1);
    setColumns(newColumns);
  };
  
  // Update column properties
  const updateColumn = (index: number, updates: Partial<Column>) => {
    const newColumns = [...columns];
    newColumns[index] = { ...newColumns[index], ...updates };
    setColumns(newColumns);
  };
  
  // Render parameters based on column type
  const renderParameters = (column: Column, index: number) => {
    switch (column.type) {
      case 'numeric':
        return (
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">{t.distribution}</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                value={column.distribution || 'normal'}
                onChange={(e) => updateColumn(index, { distribution: e.target.value as Distribution })}
              >
                <option value="normal">{t.normal}</option>
                <option value="uniform">{t.uniform}</option>
                <option value="exponential">{t.exponential}</option>
                <option value="custom">{t.custom}</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">{t.min}</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  value={column.min || 0}
                  onChange={(e) => updateColumn(index, { min: Number(e.target.value) })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">{t.max}</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  value={column.max || 100}
                  onChange={(e) => updateColumn(index, { max: Number(e.target.value) })}
                />
              </div>
              {column.distribution === 'normal' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">{t.mean}</label>
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      value={column.mean || 50}
                      onChange={(e) => updateColumn(index, { mean: Number(e.target.value) })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">{t.stdDev}</label>
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      value={column.stdDev || 10}
                      onChange={(e) => updateColumn(index, { stdDev: Number(e.target.value) })}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        );
        
      case 'categorical':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700">{t.categories}</label>
            <div className="mt-1 space-y-2">
              {column.categories?.map((category, catIndex) => (
                <div key={catIndex} className="flex items-center">
                  <input
                    type="text"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    value={category}
                    onChange={(e) => {
                      const newCategories = [...(column.categories || [])];
                      newCategories[catIndex] = e.target.value;
                      updateColumn(index, { categories: newCategories });
                    }}
                  />
                  <button
                    className="ml-2 p-1 text-red-500 hover:text-red-700"
                    onClick={() => {
                      const newCategories = [...(column.categories || [])];
                      newCategories.splice(catIndex, 1);
                      updateColumn(index, { categories: newCategories });
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <button
                className="flex items-center text-primary-600 hover:text-primary-800"
                onClick={() => {
                  const newCategories = [...(column.categories || []), ''];
                  updateColumn(index, { categories: newCategories });
                }}
              >
                <PlusCircle size={16} className="mr-1" />
                <span>{t.addCategory}</span>
              </button>
            </div>
          </div>
        );
        
      case 'date':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700">{t.dateFormat}</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              value={column.dateFormat || 'YYYY-MM-DD'}
              onChange={(e) => updateColumn(index, { dateFormat: e.target.value })}
            />
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">{t.min}</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  onChange={(e) => updateColumn(index, { min: new Date(e.target.value).getTime() })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">{t.max}</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  onChange={(e) => updateColumn(index, { max: new Date(e.target.value).getTime() })}
                />
              </div>
            </div>
          </div>
        );
        
      case 'text':
        return (
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">{t.min}</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                value={column.min || 5}
                onChange={(e) => updateColumn(index, { min: Number(e.target.value) })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{t.max}</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                value={column.max || 50}
                onChange={(e) => updateColumn(index, { max: Number(e.target.value) })}
              />
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="card">
        <div className="card-header">
          <h2 className="text-xl font-semibold text-gray-800">{t.title}</h2>
          <p className="mt-1 text-sm text-gray-600">{t.description}</p>
        </div>
        
        <div className="card-body">
          <div className="mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.columnName}
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.columnType}
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.parameters}
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.actions}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {columns.map((column, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        value={column.name}
                        onChange={(e) => updateColumn(index, { name: e.target.value })}
                        placeholder={`${t.columnName} ${index + 1}`}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        value={column.type}
                        onChange={(e) => updateColumn(index, { type: e.target.value as ColumnType })}
                      >
                        <option value="numeric">{t.numeric}</option>
                        <option value="categorical">{t.categorical}</option>
                        <option value="date">{t.date}</option>
                        <option value="text">{t.text}</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      {renderParameters(column, index)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() => removeColumn(index)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="mt-4">
              <button
                className="flex items-center text-primary-600 hover:text-primary-800"
                onClick={addColumn}
              >
                <PlusCircle size={18} className="mr-1" />
                <span>{t.addColumn}</span>
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center mb-4">
              <label className="block text-sm font-medium text-gray-700 mr-4">
                {t.sampleSize}:
              </label>
              <input
                type="number"
                className="block w-32 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                value={sampleSize}
                onChange={(e) => setSampleSize(Number(e.target.value))}
                min="1"
                max="100000"
              />
            </div>
            
            <div className="mb-4">
              <button
                className="flex items-center text-primary-600 hover:text-primary-800"
                onClick={() => setShowAdvanced(!showAdvanced)}
              >
                <Info size={18} className="mr-1" />
                <span>{t.advancedOptions}</span>
              </button>
              
              {showAdvanced && (
                <div className="mt-4 p-4 bg-gray-50 rounded-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        {t.relationships}
                      </label>
                      {/* Relationship configuration UI would go here */}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        {t.missingValues} (%)
                      </label>
                      <input
                        type="range"
                        className="w-full"
                        min="0"
                        max="30"
                        step="1"
                        defaultValue="0"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>0%</span>
                        <span>15%</span>
                        <span>30%</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        {t.noiseLevel}
                      </label>
                      <div className="mt-2 flex items-center space-x-4">
                        <label className="inline-flex items-center">
                          <input type="radio" className="form-radio" name="noise" value="none" defaultChecked />
                          <span className="ml-2">{t.none}</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="radio" className="form-radio" name="noise" value="low" />
                          <span className="ml-2">{t.low}</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="radio" className="form-radio" name="noise" value="medium" />
                          <span className="ml-2">{t.medium}</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input type="radio" className="form-radio" name="noise" value="high" />
                          <span className="ml-2">{t.high}</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  // Generate data logic would go here
                  console.log('Generating data with:', { columns, sampleSize });
                }}
              >
                {t.generateData}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProfiler;
