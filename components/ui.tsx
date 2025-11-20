import React from 'react';
import { LucideIcon } from 'lucide-react';

// --- BUTTON ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";
  const radius = "rounded-xl"; // 10px-ish radius
  
  const variants = {
    primary: "bg-ship-gradient text-white hover:shadow-lg hover:shadow-brand-magenta/20 border border-transparent",
    secondary: "bg-transparent border-2 border-brand-grape text-brand-grape dark:text-brand-magenta dark:border-brand-magenta hover:bg-brand-grape/5 dark:hover:bg-brand-magenta/10",
    white: "bg-white text-brand-grape hover:bg-gray-50 shadow-md border border-gray-100",
    ghost: "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${radius} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="ml-2 w-5 h-5" />}
    </button>
  );
};

// --- CARD ---
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div className={`
      bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 
      rounded-2xl overflow-hidden
      ${hoverEffect ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : 'shadow-sm'}
      ${className}
    `}>
      {children}
    </div>
  );
};

// --- BADGE ---
export const Badge: React.FC<{ children: React.ReactNode; color?: 'brand' | 'gray' }> = ({ children, color = 'brand' }) => {
  const styles = color === 'brand' 
    ? "bg-brand-grape/10 text-brand-grape dark:text-brand-magenta dark:bg-brand-magenta/10 border-brand-grape/20"
    : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 border-gray-200";
    
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles}`}>
      {children}
    </span>
  );
};

// --- PROGRESS BAR ---
export const ProgressBar: React.FC<{ percentage?: number; className?: string }> = ({ percentage = 30, className = '' }) => {
  return (
    <div className={`h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden ${className}`}>
      <div 
        className="h-full bg-ship-gradient rounded-full" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

// --- SECTION HEADER ---
export const SectionHeader: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'left' }) => {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white tracking-tight">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-ship-gradient rounded-full mt-3 mb-4 ${align === 'center' ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`text-lg text-gray-600 dark:text-gray-400 ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-3xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};