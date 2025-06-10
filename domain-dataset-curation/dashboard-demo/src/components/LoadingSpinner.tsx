import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  language: 'en' | 'zh';
  size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ language, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <Loader2 className={`${sizeClasses[size]} text-blue-600 animate-spin`} />
      <p className="mt-4 text-gray-600">
        {language === 'en' ? 'Loading...' : '加载中...'}
      </p>
    </div>
  );
};

export default LoadingSpinner; 