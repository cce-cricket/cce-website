import React from 'react';
import { motion } from 'framer-motion';
import { buttonHover } from '../../constants/animations';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold';
  size?: 'default' | 'large';
}

export default function Button({ 
  children, 
  className, 
  variant = 'primary',
  size = 'default',
  ...props 
}: ButtonProps) {
  const baseStyles = "px-8 rounded-full font-semibold transition-colors";
  
  const variantStyles = {
    primary: "bg-emerald hover:bg-emerald-dark text-white",
    secondary: "bg-grey-dark text-white hover:bg-grey",
    gold: "bg-gold hover:bg-gold-dark text-grey-dark",
  };

  const sizeStyles = {
    default: "py-3",
    large: "py-4 text-lg",
  };

  return (
    <motion.button
      {...buttonHover}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}