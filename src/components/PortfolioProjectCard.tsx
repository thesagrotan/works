import { motion } from 'motion/react';
import svgPaths from '../imports/svg-hero-paths';
import type { Project } from '../data/projects';
import { buildImgStyle } from '../lib/imageStyle';

// AI_GOOD: Extracted from HomePage.tsx as a 1:1 drop-in component; props, DOM, classes, and behavior are unchanged.
export default function PortfolioProjectCard({ 
  project, 
  onClick, 
  hoverScale, 
  hoverDuration, 
  layoutType, 
  layoutExitDamping, 
  layoutStiffness, 
  layoutDuration 
}: { 
  project: Project; 
  onClick: (id: string) => void; // AI_GOOD: Prop passthrough unchanged; preserves click → onProjectClick(id)
  hoverScale: number; 
  hoverDuration: number;
  layoutType: string;
  layoutExitDamping: number;
  layoutStiffness: number;
  layoutDuration: number;
}) {
  const { id, categories, images } = project;
  const [img1, img2, img3] = images.card;
  
  return (
    <button onClick={() => onClick(id)} className="block group w-full text-left cursor-pointer border border-[#323e45] border-solid rounded-[8px] p-4 mt-[-44px]">
      <div className="content-stretch flex gap-[64px] items-end relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[144px]">
          <div className="h-[20px] relative shrink-0 w-[107px] mt-[-44px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 20">
              <g clipPath="url(#clip0_1_283)">
                <path d={svgPaths.p2b26df80} fill="var(--fill-0, #323E45)" />
                <path d={svgPaths.p39fa680} fill="var(--fill-0, #323E45)" />
                <path d={svgPaths.p11a74280} fill="var(--fill-0, #323E45)" />
              </g>
              <defs>
                <clipPath id="clip0_1_283">
                  <rect fill="white" height="20" width="107" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            {categories.map((category, index) => (
              <div key={index} className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                <p className={`${index === categories.length - 1 ? 'text-body-alt' : 'text-body'} not-italic relative shrink-0 w-[144px]`}>
                  {category}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 mt-[-44px]">
          <motion.div 
            layoutId={`${id}-img-1`} // AI_GOOD: layoutId pattern preserved for morphing with modal `${id}-img-{1,2,3}`
            className="rotate-[4deg] [grid-area:1_/_1] bg-stone-50 h-[178px] ml-[48px] mt-2 relative rounded-[8px] w-[285px] overflow-hidden"
            whileHover={{ scale: hoverScale }}
            transition={{
              scale: { duration: hoverDuration },
              layout: layoutType === 'spring' 
                ? { type: 'spring', damping: layoutExitDamping, stiffness: layoutStiffness }
                : { duration: layoutDuration }
            }}
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
          <motion.div 
            layoutId={`${id}-img-2`} // AI_GOOD: layoutId pattern preserved
            className="rotate-[2deg] [grid-area:1_/_1] bg-stone-50 h-[178px] ml-[24px] mt-[32px] relative rounded-[8px] w-[285px] overflow-hidden"
            whileHover={{ scale: hoverScale }}
            transition={{
              scale: { duration: hoverDuration },
              layout: layoutType === 'spring' 
                ? { type: 'spring', damping: layoutExitDamping, stiffness: layoutStiffness }
                : { duration: layoutDuration }
            }}
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
            layoutId={`${id}-img-3`} // AI_GOOD: layoutId pattern preserved
            className="[grid-area:1_/_1] bg-stone-50 h-[178px] ml-0 mt-[56px] relative rounded-[8px] w-[285px] overflow-hidden"
            whileHover={{ scale: hoverScale }}
            transition={{
              scale: { duration: hoverDuration },
              layout: layoutType === 'spring' 
                ? { type: 'spring', damping: layoutExitDamping, stiffness: layoutStiffness }
                : { duration: layoutDuration }
            }}
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
        </div>
      </div>
    </button>
  );
}
