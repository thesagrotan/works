import { motion } from 'motion/react';
import { useState, useCallback } from 'react';
import { buildImgStyle } from '../lib/imageStyle';
import { DIMENSIONS, CLASSES } from '../config/tokens';
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

export default function ProjectImageStack({ 
  images, 
  projectId, 
  animation,
  className = ''
}: ProjectImageStackProps) {
  // For maintaining aspect ratios in card view
  const [ratios, setRatios] = useState<number[]>(
    Array(3).fill(DIMENSIONS.card.baseWidth / DIMENSIONS.card.maxHeight)
  );
  
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
          className={`[grid-area:1_/_1] bg-stone-50 relative rounded-[8px] overflow-hidden ${CLASSES.cardRotation[index]} ${CLASSES.cardMargins[index + 1 as 1 | 2 | 3]}`}
          whileHover={{ scale: animation.hover.scale }}
          transition={{
            scale: { duration: animation.hover.duration },
            layout: layoutTransition
          }}
          style={{
            width: DIMENSIONS.card.baseWidth,
            height: Math.min(DIMENSIONS.card.baseWidth / ratios[index], DIMENSIONS.card.maxHeight),
            maxHeight: DIMENSIONS.card.maxHeight
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
            className={`absolute ${CLASSES.cardBorder} inset-0 pointer-events-none ${CLASSES.cardShadow}`} 
          />
        </motion.div>
      ))}
    </div>
  );
}