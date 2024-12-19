import React from 'react';
import { images } from '../constants/images';
import { cn } from '../utils/cn';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img 
        src={images.logo} 
        alt="Cricket Center of Excellence Logo" 
        className="w-8 h-8 object-contain"
      />
      <span className="text-xl font-bold text-dark">Cricket Center of Excellence</span>
    </div>
  );
}