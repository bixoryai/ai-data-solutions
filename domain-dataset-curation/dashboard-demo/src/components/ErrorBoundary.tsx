import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

interface Props {
  children: ReactNode;
  language: 'en' | 'zh';
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-6 bg-red-50 rounded-lg">
          <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
          <h2 className="text-xl font-semibold text-red-800 mb-2">
            {this.props.language === 'en' ? 'Something went wrong' : '出错了'}
          </h2>
          <p className="text-red-600 mb-4">
            {this.props.language === 'en' 
              ? 'We apologize for the inconvenience. Please try refreshing the page.'
              : '抱歉给您带来不便。请尝试刷新页面。'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            {this.props.language === 'en' ? 'Refresh Page' : '刷新页面'}
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 