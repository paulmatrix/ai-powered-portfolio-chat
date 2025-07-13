import React from "react";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center space-x-2 mt-2">
    <span className="block flex-1">{message}</span>
    {onRetry && (
      <button
        onClick={onRetry}
        className="ml-2 px-3 py-1 bg-red-200 text-red-800 rounded hover:bg-red-300 transition-colors text-sm font-medium"
      >
        Retry
      </button>
    )}
  </div>
); 