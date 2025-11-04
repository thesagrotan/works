import { motion } from 'motion/react';
import { useState, useCallback } from 'react';
import { buildImgStyle } from '../lib/imageStyle';
import type { ProjectImage } from '../data/projects';

interface ProjectImageStackProps {
  images: ProjectImage[];
  projectId: string;
  layout: 'card' | 'modal';
  hover?: {
    scale: number;
    duration: number;
  };
  transition: {
    type: 'spring' | 'tween';
    damping?: number;
    stiffness?: number;
    duration?: number;
  };
  sizing?: {
    baseWidth?: number;
    maxHeight?: number;
    useAutoHeight?: boolean;
  };
  className?: string;
}

// Shared shadow style between card and modal views
const shadowStyle = "shadow-[41px_57px_20px_0px_rgba(47,62,70,0),26px_37px_18px_0px_rgba(47,62,70,0.01),15px_21px_15px_0px_rgba(47,62,70,0.05),7px_9px_11px_0px_rgba(47,62,70,0.09),2px_2px_6px_0px_rgba(47,62,70,0.1)]";

// Card view rotation angles
const cardRotations = ['rotate-[4deg]', 'rotate-[2deg]', ''];

// Card view margins
const cardMargins: Record<number, string> = {
  1: 'ml-[48px] mt-2',
  2: 'ml-[24px] mt-[32px]',
  3: 'ml-0 mt-[56px]'
};

export default function ProjectImageStack({ 
  images, 
  projectId, 
  layout,
  hover,
  transition,
  sizing = {},
  className = ''
}: ProjectImageStackProps) {
  const { baseWidth = 285, maxHeight = 186, useAutoHeight = false } = sizing;
  
  // For maintaining aspect ratios in card view
  const [ratios, setRatios] = useState<number[]>(Array(3).fill(baseWidth / maxHeight));
  
  const handleLoad = useCallback((index: number) => (e: React.SyntheticEvent<HTMLImageElement>) => {
    const el = e.currentTarget;
    if (el.naturalWidth && el.naturalHeight) {
      setRatios(prev => {
        const next = [...prev];
        next[index] = el.naturalWidth / el.naturalHeight;
        return next;
      });
    }
  }, []);

  const layoutTransition = transition.type === 'spring'
    ? { type: 'spring' as const, damping: transition.damping, stiffness: transition.stiffness }
    : { duration: transition.duration };

  const containerClass = layout === 'card'
    ? 'grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0'
    : 'w-full grid gap-8 grid-cols-1';

  return (
    <div className={`${containerClass} ${className}`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          layoutId={`${projectId}-img-${index + 1}`}
          className={`
            ${layout === 'card' ? '[grid-area:1_/_1]' : ''} 
            bg-stone-50 relative rounded-[8px] overflow-hidden
            ${layout === 'card' ? `${cardRotations[index]} ${cardMargins[index + 1]}` : ''}
          `}
          whileHover={hover ? { scale: hover.scale } : undefined}
          transition={hover ? {
            scale: { duration: hover.duration },
            layout: layoutTransition
          } : {
            layout: layoutTransition
          }}
          style={{
            width: layout === 'card' ? baseWidth : '100%',
            height: useAutoHeight 
              ? 'auto' 
              : layout === 'card'
                ? Math.min(baseWidth / ratios[index], maxHeight)
                : 'h-[320px] md:h-[420px] lg:h-[520px]',
            maxHeight: layout === 'card' ? maxHeight : undefined
          }}
        >
          <img
            alt={image.alt}
            className={useAutoHeight ? 'w-full h-auto block' : 'h-full w-full'}
            style={buildImgStyle(image, 'contain')}
            src={image.src}
            onLoad={layout === 'card' ? handleLoad(index) : undefined}
          />
          <div 
            aria-hidden="true" 
            className={`absolute border border-[#323e45] border-solid inset-0 pointer-events-none rounded-[8px] ${shadowStyle}`} 
          />
        </motion.div>
      ))}
    </div>
  );
}