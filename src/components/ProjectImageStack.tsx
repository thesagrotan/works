import { motion } from 'motion/react';
import { useState, useCallback } from 'react';
import { buildImgStyle } from '../lib/imageStyle';
import type { ProjectImage } from '../data/projects';

interface AnimationConfig {
  hover: { scale: number; duration: number };
  layout: { type: string; damping: number; stiffness: number; duration: number };
}

interface ProjectImageStackProps {
  images: ProjectImage[];
  projectId: string;
  animation: AnimationConfig;
  className?: string;
}

// Card layout configuration constants
const CARD_BASE_WIDTH = 285;
const CARD_MAX_HEIGHT = 186;

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
  animation,
  className = ''
}: ProjectImageStackProps) {
  // For maintaining aspect ratios in card view
  const [ratios, setRatios] = useState<number[]>(Array(3).fill(CARD_BASE_WIDTH / CARD_MAX_HEIGHT));
  
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

  const layoutTransition = animation.layout.type === 'spring'
    ? { type: 'spring' as const, damping: animation.layout.damping, stiffness: animation.layout.stiffness }
    : { duration: animation.layout.duration };

  return (
    <div className={`grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 ${className}`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          layoutId={`${projectId}-img-${index + 1}`}
          className={`[grid-area:1_/_1] bg-stone-50 relative rounded-[8px] overflow-hidden ${cardRotations[index]} ${cardMargins[index + 1]}`}
          whileHover={{ scale: animation.hover.scale }}
          transition={{
            scale: { duration: animation.hover.duration },
            layout: layoutTransition
          }}
          style={{
            width: CARD_BASE_WIDTH,
            height: Math.min(CARD_BASE_WIDTH / ratios[index], CARD_MAX_HEIGHT),
            maxHeight: CARD_MAX_HEIGHT
          }}
        >
          <img
            alt={image.alt}
            className="h-full w-full"
            style={buildImgStyle(image, 'contain')}
            src={image.src}
            onLoad={handleLoad(index)}
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