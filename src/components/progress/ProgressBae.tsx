import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: 'primary' | 'success' | 'error' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  ariaLabel?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  max = 100,
  variant = 'primary',
  size = 'md',
  showLabel = false,
  ariaLabel = 'Progress indicator',
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const variantClasses = {
    primary: 'bg-primary-500',
    success: 'bg-success-500',
    error: 'bg-error-500',
    warning: 'bg-warning-500',
  };
  
  const sizeClasses = {
    sm: 'h-2 text-xs',
    md: 'h-4 text-sm',
    lg: 'h-6 text-base',
  };
  
  return (
    <div className="w-full" role="region" aria-live="polite">
      {showLabel && (
        <div className="flex justify-between mb-1">
          <span className={`${sizeClasses[size]} font-medium text-gray-700`}>
            Progress
          </span>
          <span className={`${sizeClasses[size]} font-medium text-gray-700`}>
            {percentage}%
          </span>
        </div>
      )}
      <div 
        className={`w-full ${sizeClasses[size]} rounded-full bg-gray-200`}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel}
      >
        <div
          className={`${variantClasses[variant]} ${sizeClasses[size]} rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
