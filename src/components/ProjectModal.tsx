import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import svgPaths from '../imports/svg-navigation-paths';
import { useAnimationControls } from './AnimationControls';
import { getProjectById } from '../data/projects';
import { getModalVariants } from '../animation/modalVariants'; // AI_GOOD: Using extracted function preserves behavior and return shape.
import { buildImgStyle } from '../lib/imageStyle';

// AI_GOOD: getModalVariants moved to src/animation/modalVariants.ts with identical cases and defaults.

interface ProjectModalProps {
  projectId: string;
  onClose: () => void;
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const { 
    backdropFadeDuration, 
    backdropOpacity,
    modalDamping,
    modalStiffness,
    modalAppearanceEffect,
    modalScaleFrom,
    modalRotateFrom,
    layoutDuration,
    layoutType,
    layoutDamping,
    layoutStiffness,
    layoutExitDamping,
    iconButtonDuration,
    closeButtonScale
  } = useAnimationControls();
  
  // Get project data
  const project = getProjectById(projectId);
  
  // If project not found, don't render
  if (!project) {
    return null;
  }
  
  const { title, year, categories, longDescription, images } = project;
  const [img1, img2, img3] = images.detail;
  
  // Split longDescription by double newlines to create paragraphs, filter out empty ones
  const paragraphs = longDescription.split('\n\n').filter(p => p.trim().length > 0);
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: backdropOpacity }}
        exit={{ opacity: 0 }}
        transition={{ duration: backdropFadeDuration }}
        className="fixed inset-0 bg-black z-40 backdrop-blur-sm"
        style={{ backgroundColor: `rgba(0, 0, 0, ${backdropOpacity})` }}
        onClick={onClose}
      />
      
      <motion.div
        {...getModalVariants(modalAppearanceEffect, modalScaleFrom, modalRotateFrom)}
        transition={{ type: 'spring', damping: modalDamping, stiffness: modalStiffness }}
        className="fixed inset-0 z-50 overflow-y-auto"
        style={{ transformOrigin: 'center center' }}
      >
        <div className="bg-[#edefeb] min-h-screen w-full">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16">
            {/* Back button and Chat button */}
            <div className="flex justify-between items-center mb-16">
              <motion.button 
                onClick={onClose} 
                className="p-2 rounded-full"
                initial={{ backgroundColor: 'transparent' }}
                whileHover={{ scale: closeButtonScale, backgroundColor: '#ffffff' }}
                transition={{ duration: iconButtonDuration }}
              >
                <ArrowLeft className="w-6 h-6 text-stone-800" />
              </motion.button>
            </div>

            {/* Project Info and Description */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start justify-center mb-32">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full lg:w-[180px]">
                <div className="content-stretch flex flex-col gap-[8px] items-start leading-[28px] not-italic relative shrink-0 text-[20px] md:text-[24px] text-black tracking-[0.036px] w-full">
                  <p className="font-semibold relative shrink-0 w-full">{title}</p>
                  <p className="font-display-regular relative shrink-0 w-full">{year}</p>
                </div>
                
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    {categories.map((category, index) => (
                      <div key={index} className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                        <p className="font-display-regular leading-[28px] not-italic relative shrink-0 text-[#323e45] text-[18px] tracking-[0.027px]">
                          {category}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col gap-[40px] items-start relative w-full lg:max-w-[720px]">
                <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full">
                  <div className="font-display-regular leading-[0] not-italic relative shrink-0 text-[#323e45] text-[0px] tracking-[0.036px] w-full flex flex-col gap-[32px]">
                    {paragraphs.map((paragraph, index) => (
                      <p key={index} className="leading-[28px] text-[20px] md:text-[24px]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div 
              className="w-full"
              style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr',
                gap: '32px'
              }}
            >
              <style>{`
                @media (min-width: 1024px) {
                  .image-grid-container {
                    grid-template-columns: 3fr 2fr !important;
                  }
                  .image-grid-container > :nth-child(3) {
                    grid-column: 1 / -1;
                  }
                }
              `}</style>
              <div 
                className="image-grid-container w-full"
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr',
                  gap: '32px'
                }}
              >
                <motion.div 
                  layoutId={`${projectId}-img-3`}
                  transition={{
                    layout: layoutType === 'spring' 
                      ? { type: 'spring', damping: layoutDamping, stiffness: layoutStiffness }
                      : { duration: layoutDuration }
                  }}
                  className="bg-stone-50 relative rounded-[8px] overflow-hidden h-[320px] md:h-[420px] lg:h-[520px]"
                >
                  <img 
                    alt={img3.alt} 
                    className="h-full w-full"
                    // Constrain both axes so object-fit/object-position can take effect
                    style={buildImgStyle(img3, 'contain')}
                    src={img3.src} 
                  />
                  <div aria-hidden="true" className="absolute border border-[#323e45] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[41px_57px_20px_0px_rgba(47,62,70,0),26px_37px_18px_0px_rgba(47,62,70,0.01),15px_21px_15px_0px_rgba(47,62,70,0.05),7px_9px_11px_0px_rgba(47,62,70,0.09),2px_2px_6px_0px_rgba(47,62,70,0.1)]" />
                </motion.div>
                
                <motion.div 
                  layoutId={`${projectId}-img-2`}
                  transition={{
                    layout: layoutType === 'spring' 
                      ? { type: 'spring', damping: layoutDamping, stiffness: layoutStiffness }
                      : { duration: layoutDuration }
                  }}
                  className="bg-stone-50 relative rounded-[8px] overflow-hidden h-[320px] md:h-[420px] lg:h-[520px]"
                >
                  <img 
                    alt={img2.alt} 
                    className="h-full w-full"
                    // Constrain both axes so object-fit/object-position can take effect
                    style={buildImgStyle(img2, 'contain')}
                    src={img2.src} 
                  />
                  <div aria-hidden="true" className="absolute border border-[#323e45] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[41px_57px_20px_0px_rgba(47,62,70,0),26px_37px_18px_0px_rgba(47,62,70,0.01),15px_21px_15px_0px_rgba(47,62,70,0.05),7px_9px_11px_0px_rgba(47,62,70,0.09),2px_2px_6px_0px_rgba(47,62,70,0.1)]" />
                </motion.div>
                
                <motion.div 
                  layoutId={`${projectId}-img-1`}
                  transition={{
                    layout: layoutType === 'spring' 
                      ? { type: 'spring', damping: layoutDamping, stiffness: layoutStiffness }
                      : { duration: layoutDuration }
                  }}
                  className="bg-stone-50 relative rounded-[8px] overflow-hidden h-[320px] md:h-[420px] lg:h-[520px]"
                >
                  <img 
                    alt={img1.alt} 
                    className="h-full w-full"
                    // Constrain both axes so object-fit/object-position can take effect
                    style={buildImgStyle(img1, 'contain')}
                    src={img1.src} 
                  />
                  <div aria-hidden="true" className="absolute border border-[#323e45] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[41px_57px_20px_0px_rgba(47,62,70,0),26px_37px_18px_0px_rgba(47,62,70,0.01),15px_21px_15px_0px_rgba(47,62,70,0.05),7px_9px_11px_0px_rgba(47,62,70,0.09),2px_2px_6px_0px_rgba(47,62,70,0.1)]" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
