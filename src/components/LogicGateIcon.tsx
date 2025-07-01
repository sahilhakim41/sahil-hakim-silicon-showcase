
import React from 'react';

interface LogicGateIconProps {
  type: 'and' | 'or' | 'not' | 'nand' | 'nor' | 'xor';
  className?: string;
}

const LogicGateIcon: React.FC<LogicGateIconProps> = ({ type, className = "w-8 h-8" }) => {
  const gates = {
    and: (
      <svg viewBox="0 0 100 60" className={className}>
        <path d="M20 10 L20 50 L50 50 Q80 50 80 30 Q80 10 50 10 Z" 
              fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="5" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="2"/>
        <line x1="5" y1="40" x2="20" y2="40" stroke="currentColor" strokeWidth="2"/>
        <line x1="80" y1="30" x2="95" y2="30" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    or: (
      <svg viewBox="0 0 100 60" className={className}>
        <path d="M20 10 Q30 30 20 50 Q50 40 80 30 Q50 20 20 10 Z" 
              fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="5" y1="20" x2="25" y2="20" stroke="currentColor" strokeWidth="2"/>
        <line x1="5" y1="40" x2="25" y2="40" stroke="currentColor" strokeWidth="2"/>
        <line x1="80" y1="30" x2="95" y2="30" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    not: (
      <svg viewBox="0 0 100 60" className={className}>
        <path d="M20 10 L20 50 L70 30 Z" 
              fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="75" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="5" y1="30" x2="20" y2="30" stroke="currentColor" strokeWidth="2"/>
        <line x1="80" y1="30" x2="95" y2="30" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    nand: (
      <svg viewBox="0 0 100 60" className={className}>
        <path d="M20 10 L20 50 L50 50 Q75 50 75 30 Q75 10 50 10 Z" 
              fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="80" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="5" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="2"/>
        <line x1="5" y1="40" x2="20" y2="40" stroke="currentColor" strokeWidth="2"/>
        <line x1="85" y1="30" x2="95" y2="30" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    nor: (
      <svg viewBox="0 0 100 60" className={className}>
        <path d="M20 10 Q30 30 20 50 Q50 40 75 30 Q50 20 20 10 Z" 
              fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="80" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="5" y1="20" x2="25" y2="20" stroke="currentColor" strokeWidth="2"/>
        <line x1="5" y1="40" x2="25" y2="40" stroke="currentColor" strokeWidth="2"/>
        <line x1="85" y1="30" x2="95" y2="30" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    xor: (
      <svg viewBox="0 0 100 60" className={className}>
        <path d="M15 10 Q25 30 15 50" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 10 Q30 30 20 50 Q50 40 80 30 Q50 20 20 10 Z" 
              fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="5" y1="20" x2="22" y2="20" stroke="currentColor" strokeWidth="2"/>
        <line x1="5" y1="40" x2="22" y2="40" stroke="currentColor" strokeWidth="2"/>
        <line x1="80" y1="30" x2="95" y2="30" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  };

  return gates[type];
};

export default LogicGateIcon;
