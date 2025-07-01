
import React from 'react';

interface SiliconDieIconProps {
  className?: string;
  animated?: boolean;
}

const SiliconDieIcon: React.FC<SiliconDieIconProps> = ({ className = "w-12 h-12", animated = false }) => {
  return (
    <svg viewBox="0 0 100 100" className={`${className} ${animated ? 'animate-pulse-neon' : ''}`}>
      {/* Silicon die outer boundary */}
      <rect x="10" y="10" width="80" height="80" 
            fill="none" stroke="currentColor" strokeWidth="2" rx="2"/>
      
      {/* Internal die structure */}
      <g stroke="currentColor" strokeWidth="1" fill="none">
        {/* Core blocks */}
        <rect x="20" y="20" width="25" height="25" rx="1"/>
        <rect x="55" y="20" width="25" height="25" rx="1"/>
        <rect x="20" y="55" width="25" height="25" rx="1"/>
        <rect x="55" y="55" width="25" height="25" rx="1"/>
        
        {/* Interconnect lines */}
        <line x1="45" y1="32.5" x2="55" y2="32.5"/>
        <line x1="32.5" y1="45" x2="32.5" y2="55"/>
        <line x1="67.5" y1="45" x2="67.5" y2="55"/>
        <line x1="45" y1="67.5" x2="55" y2="67.5"/>
        
        {/* Bond pads */}
        <circle cx="50" cy="15" r="2" fill="currentColor"/>
        <circle cx="50" cy="85" r="2" fill="currentColor"/>
        <circle cx="15" cy="50" r="2" fill="currentColor"/>
        <circle cx="85" cy="50" r="2" fill="currentColor"/>
        
        {/* Corner pads */}
        <circle cx="25" cy="25" r="1.5" fill="currentColor"/>
        <circle cx="75" cy="25" r="1.5" fill="currentColor"/>
        <circle cx="25" cy="75" r="1.5" fill="currentColor"/>
        <circle cx="75" cy="75" r="1.5" fill="currentColor"/>
      </g>
      
      {/* Wire bonds */}
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <path d="M50 15 Q50 5 50 0"/>
        <path d="M50 85 Q50 95 50 100"/>
        <path d="M15 50 Q5 50 0 50"/>
        <path d="M85 50 Q95 50 100 50"/>
      </g>
    </svg>
  );
};

export default SiliconDieIcon;
