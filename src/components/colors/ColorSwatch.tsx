import React from 'react';

interface ColorSwatchProps {
  name: string;
  value: string;
  isDark?: boolean;
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ 
  name, 
  value, 
  isDark = false 
}) => {
  return (
    <div 
      className={`p-4 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-md`}
      data-testid="color-swatch"
    >
      <div 
        className="w-full h-16 rounded-md mb-2 border border-gray-200"
        style={{ backgroundColor: value }}
        aria-label={`Color sample for ${name}`}
      />
      <div className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <div className="font-medium">{name}</div>
        <div className="text-gray-500">{value}</div>
      </div>
    </div>
  );
};
