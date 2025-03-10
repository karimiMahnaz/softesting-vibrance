
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  icon,
  iconPosition = 'right',
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-softesting-accent";
  
  const variants = {
    primary: "bg-softesting-accent text-white hover:bg-softesting-accent/90 shadow-sm shadow-softesting-accent/20",
    secondary: "bg-softesting-muted text-white hover:bg-softesting-muted/80",
    outline: "border border-white/20 bg-transparent hover:bg-white/5",
    ghost: "bg-transparent hover:bg-white/5",
  };
  
  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        iconPosition === 'right' ? 'flex-row' : 'flex-row-reverse',
        "group",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {icon && (
        <span className={cn(
          "transition-transform",
          iconPosition === 'right' ? 'ml-2 group-hover:translate-x-1' : 'mr-2 group-hover:-translate-x-1'
        )}>
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
