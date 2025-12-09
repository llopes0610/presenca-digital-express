import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  hover?: boolean;
  style?: React.CSSProperties;
}

export function Card({ children, className, gradient = false, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border overflow-hidden transition-all duration-300',
        gradient
          ? 'bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 border-dark-100'
          : 'bg-white border-dark-100',
        hover && 'shadow-lg hover:shadow-2xl hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('p-6', className)}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>;
}