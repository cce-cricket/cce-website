import React from 'react';
import { cn } from '../../utils/cn';

interface TurfOptionsProps {
  selectedOption: 'half' | 'full' | null;
  onOptionChange: (option: 'half' | 'full') => void;
}

export default function TurfOptions({ selectedOption, onOptionChange }: TurfOptionsProps) {
  return (
    <div className="space-y-3">
      <h4 className="font-medium text-dark">Select Turf Option</h4>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => onOptionChange('half')}
          className={cn(
            "p-4 rounded-lg border transition-all",
            selectedOption === 'half'
              ? "border-primary bg-primary/10 text-primary"
              : "border-gray-200 hover:border-primary/50"
          )}
        >
          <h5 className="font-semibold mb-1">Half Field</h5>
          <p className="text-sm text-dark-light mb-2">Perfect for practice sessions</p>
          <p className="text-lg font-bold text-primary">₹1,500/hr</p>
        </button>

        <button
          onClick={() => onOptionChange('full')}
          className={cn(
            "p-4 rounded-lg border transition-all",
            selectedOption === 'full'
              ? "border-primary bg-primary/10 text-primary"
              : "border-gray-200 hover:border-primary/50"
          )}
        >
          <h5 className="font-semibold mb-1">Full Field</h5>
          <p className="text-sm text-dark-light mb-2">Ideal for matches</p>
          <p className="text-lg font-bold text-primary">₹2,500/hr</p>
        </button>
      </div>
    </div>
  );
}