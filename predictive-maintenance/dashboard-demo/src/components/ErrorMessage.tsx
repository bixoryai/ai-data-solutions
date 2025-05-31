import React from 'react';

interface ErrorMessageProps {
  title?: string;
  message: string;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title = 'Error Loading Data',
  message,
  className = ''
}) => {
  return (
    <div className={`p-4 bg-red-50 text-red-700 rounded-lg ${className}`}>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2">{message}</p>
    </div>
  );
};

export default ErrorMessage; 