import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import svgPaths from '../imports/svg-navigation-paths';
import imgAttachment from "figma:asset/975174df45461a4ebd49039bd564317f1bdd66f8.png";
import imgAttachment1 from "figma:asset/9f9d823d9cb3790fd8d4d58478235c3f7a1e4355.png";
import imgAttachment2 from "figma:asset/134c3db483b4b26b18d1476639bb29eed1406f6e.png";
import { useAnimationControls } from './AnimationControls';

// Get animation variants based on selected effect
function getModalVariants(effect: string, scaleFrom: number, rotateFrom: number) {
  const transitionConfig = {
    spring: { type: 'spring', damping: 30, stiffness: 300 },
    tween: { duration: 0.5 }
  };

  switch (effect) {
    case 'fade':
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
      };
    case 'scale':
      return {
        initial: { opacity: 0, scale: scaleFrom },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: scaleFrom }
      };
    case 'rotate':
      return {
        initial: { opacity: 0, scale: scaleFrom, rotate: rotateFrom },
        animate: { opacity: 1, scale: 1, rotate: 0 },
        exit: { opacity: 0, scale: scaleFrom, rotate: rotateFrom }
      };
    case 'popup':
      return {
        initial: { opacity: 0, scale: 0.5, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.5, y: 20 }
      };
    case 'slide-up':
    default:
      return {
        initial: { y: '100%' },
        animate: { y: 0 },
        exit: { y: '100%' }
      };
  }
}

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
    iconButtonDuration,
    closeButtonScale
  } = useAnimationControls();
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
                whileHover={{ scale: closeButtonScale, backgroundColor: '#ffffff' }}
                transition={{ duration: iconButtonDuration }}
              >
                <ArrowLeft className="w-6 h-6 text-stone-800" />
              </motion.button>
            </div>

            {/* Project Info and Description */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-32">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full lg:w-[180px]">
                <div className="content-stretch flex flex-col gap-[8px] items-start leading-[28px] not-italic relative shrink-0 text-[20px] md:text-[24px] text-black tracking-[0.036px] w-full">
                  <p className="font-semibold relative shrink-0 w-full">CredCore</p>
                  <p className="font-display-regular relative shrink-0 w-full">2023-2025</p>
                </div>
                
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                      <p className="font-display-regular leading-[28px] not-italic relative shrink-0 text-[#323e45] text-[18px] tracking-[0.027px]">UX/UI Design</p>
                    </div>
                    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                      <p className="font-display-regular leading-[28px] not-italic relative shrink-0 text-[#323e45] text-[18px] tracking-[0.027px]">Design Systems</p>
                    </div>
                    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                      <p className="font-display-regular leading-[26px] not-italic relative shrink-0 text-[#323e45] text-[18px] tracking-[0.027px]">Framer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full lg:max-w-[940px]">
                <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
                  <div className="font-display-regular leading-[0] not-italic relative shrink-0 text-[#323e45] text-[0px] tracking-[0.036px] w-full">

                    <p className="leading-[28px] text-[20px] md:text-[24px]">
                      <span>CredCore is an AI-powered fintech platform transforming how enterprises manage complex debt agreements. <br /> <br /> Through iterative exploration, I designed and tested new ways to organize and visualize intricate financial data. In parallel, I built and maintained the platform's marketing website in Framer, ensuring design fidelity and high performance. I also created a unified design system that integrates shadcn/ui, bridging design and engineering under a refreshed brand while establishing consistent patterns across all product touchpoints.</span>
                    </p>
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
                  transition={
                    layoutType === 'spring' 
                      ? { type: 'spring', damping: layoutDamping, stiffness: layoutStiffness }
                      : { duration: layoutDuration }
                  }
                  className="bg-stone-50 relative rounded-[8px]"
                >
                  <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                    <div className="aspect-[162/105.11] relative shrink-0 w-full">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[170.42%] left-[-9.25%] max-w-none top-[-0.17%] w-[170.12%]" src={imgAttachment} />
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#323e45] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[41px_57px_20px_0px_rgba(47,62,70,0),26px_37px_18px_0px_rgba(47,62,70,0.01),15px_21px_15px_0px_rgba(47,62,70,0.05),7px_9px_11px_0px_rgba(47,62,70,0.09),2px_2px_6px_0px_rgba(47,62,70,0.1)]" />
                </motion.div>
                
                <motion.div 
                  layoutId={`${projectId}-img-2`}
                  transition={
                    layoutType === 'spring' 
                      ? { type: 'spring', damping: layoutDamping, stiffness: layoutStiffness }
                      : { duration: layoutDuration }
                  }
                  className="bg-stone-50 relative rounded-[8px]"
                  style={{ paddingBottom: 'min(64.89%, 100%)' }}
                >
                  <div className="absolute inset-0 overflow-clip rounded-[inherit]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[225%] left-[-16.64%] max-w-none top-[0.52%] w-[346.68%]" src={imgAttachment1} />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#323e45] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[41px_57px_20px_0px_rgba(47,62,70,0),26px_37px_18px_0px_rgba(47,62,70,0.01),15px_21px_15px_0px_rgba(47,62,70,0.05),7px_9px_11px_0px_rgba(47,62,70,0.09),2px_2px_6px_0px_rgba(47,62,70,0.1)]" />
                </motion.div>
                
                <motion.div 
                  layoutId={`${projectId}-img-1`}
                  transition={
                    layoutType === 'spring' 
                      ? { type: 'spring', damping: layoutDamping, stiffness: layoutStiffness }
                      : { duration: layoutDuration }
                  }
                  className="bg-stone-50 relative rounded-[8px]"
                >
                  <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                    <div className="aspect-[104/67.4783] relative shrink-0 w-full">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[138.3%] left-[0.13%] max-w-none top-[0.12%] w-[138.05%]" src={imgAttachment2} />
                      </div>
                    </div>
                  </div>
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
