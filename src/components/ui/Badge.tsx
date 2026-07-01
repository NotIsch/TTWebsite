import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'gold' | 'navy' | 'green' | 'red' | 'blue' | 'purple';
}

const variants = {
  gold: 'bg-gold-500/20 text-gold-400 border-gold-500/30',
  navy: 'bg-navy-500/50 text-navy-200 border-navy-400/30',
  green: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  red: 'bg-red-500/20 text-red-400 border-red-500/30',
  blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

export function Badge({ children, variant = 'navy' }: BadgeProps) {
  return (
    <span className={`badge ${variants[variant]} border`}>
      {children}
    </span>
  );
}
