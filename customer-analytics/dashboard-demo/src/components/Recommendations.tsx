import React, { useState, useMemo } from 'react';
import { mockCustomers, mockProducts, mockPurchaseHistory } from '../data/mockData';
import { ShoppingCart } from 'lucide-react';

const Recommendations: React.FC<{ language: 'en' | 'zh' }> = ({ language }) => {
  const [selectedCustomerId, setSelectedCustomerId] = useState(mockCustomers[0].id);

  const translations = {
    en: {
      title: 'Personalized Recommendations',
      selectCustomer: 'Select a customer to see their recommendations:',
      recommendationsFor: 'Recommendations for',
      noRecommendations: 'No specific recommendations at this time.',
    },
    zh: {
      title: '个性化推荐',
      selectCustomer: '选择一位客户以查看他们的推荐：',
      recommendationsFor: '为',
      noRecommendations: '暂时没有特别的推荐。',
    },
  };
  const t = translations[language];

  const recommendedProducts = useMemo(() => {
    const history = mockPurchaseHistory[selectedCustomerId as keyof typeof mockPurchaseHistory] || [];
    // Simple rule: if they bought a smartwatch (ID 101), recommend headphones (ID 102).
    if (history.includes(101)) {
      const headphones = mockProducts.find(p => p.id === 102);
      return headphones ? [headphones] : [];
    }
    return [];
  }, [selectedCustomerId]);

  const selectedCustomerName = mockCustomers.find(c => c.id === selectedCustomerId)?.name || '';

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">{t.title}</h3>
      <div className="mb-4">
        <label htmlFor="customer-select" className="block text-sm font-medium text-gray-700 mb-1">
          {t.selectCustomer}
        </label>
        <select
          id="customer-select"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={selectedCustomerId}
          onChange={(e) => setSelectedCustomerId(Number(e.target.value))}
        >
          {mockCustomers.map(customer => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h4 className="font-semibold text-gray-800">{t.recommendationsFor} {selectedCustomerName}:</h4>
        {recommendedProducts.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {recommendedProducts.map(product => (
              <li key={product.id} className="flex items-center p-2 bg-gray-50 rounded-md">
                <ShoppingCart className="h-5 w-5 mr-3 text-indigo-500" />
                <span>{product.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-gray-500">{t.noRecommendations}</p>
        )}
      </div>
    </div>
  );
};

export default Recommendations; 