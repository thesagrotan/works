import { motion, LayoutGroup } from 'motion/react';
import svgPaths from '../imports/svg-hero-paths';
import { imgGroup14 } from "../imports/svg-logo-paths";
import InfiniteCarousel from './InfiniteCarousel';
import PortfolioProjectCard from './PortfolioProjectCard'; // AI_GOOD: Imported extracted drop-in component; API unchanged.
import { useAnimationControls } from './AnimationControls';
import { projects, type Project } from '../data/projects';
import ProjectLink from './ProjectLink';
import BrandLogo from './BrandLogo'; // AI_GOOD: Drop-in replacement for previously inline BrandLogo; DOM/classes unchanged.

interface HomePageProps {
  onProjectClick: (projectId: string) => void;
}

// AI_GOOD: PortfolioProjectCard inline definition removed; now imported as a module to keep HomePage smaller without behavior changes.

export default function HomePage({ onProjectClick }: HomePageProps) {
  const { 
    cardHoverScale, 
    cardHoverDuration, 
    buttonHoverScale, 
    buttonHoverDuration,
    layoutType,
    layoutDamping,
    layoutStiffness,
    layoutExitDamping,
    layoutDuration
  } = useAnimationControls();
  
  return (
    <LayoutGroup>
      <div className="bg-[#edefeb] min-h-screen w-full overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-24">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-16 mb-24">
          <BrandLogo />
          
          <div className="max-w-[424px] w-full">
            <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[32px] items-start leading-none not-italic relative shrink-0 text-primary text-xs tracking-sm w-full">
                <p className="text-hero relative shrink-0 md:text-xl w-full">
                  <span>{`I'm Daniel Campagne, `}</span>
                  <span className="font-semibold not-italic">{`a product designer `}</span>who transforms complex systems into intuitive experiences<span>{` while `}</span>helping brands tell their stories effectively.
                </p>
                <p className="text-hero font-bold relative shrink-0 md:text-xl w-full whitespace-pre-wrap">
                  <span className="font-semibold not-italic">With over 15 years of experience</span> <span className="font-regular not-italic">{`for the last years helping startups on b2b and b2c solutions  in the areas fo mobility, fintech, DeFi, and digital health.`}</span>
                </p>
              </div>
              <motion.div 
                className="bg-stone-800 box-border content-stretch flex gap-[13px] items-start px-[18px] py-[15px] relative rounded-[8px] shadow-[0px_76px_21px_0px_rgba(47,62,70,0),0px_49px_20px_0px_rgba(47,62,70,0.02),0px_27px_16px_0px_rgba(47,62,70,0.08),0px_12px_12px_0px_rgba(47,62,70,0.13),0px_3px_7px_0px_rgba(47,62,70,0.15)] shrink-0 cursor-pointer"
                whileHover={{ scale: buttonHoverScale, backgroundColor: '#44403c' }}
                transition={{ duration: buttonHoverDuration }}
              >
                <div className="flex flex-col justify-center leading-none relative shrink-0 text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="text-button whitespace-pre">Get in touch</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Infinite Carousel */}
        <div className="mb-24 -mx-4 md:-mx-8 lg:-mx-16 flex justify-center">
          <div className="max-w-[458px] w-full">
            <InfiniteCarousel />
          </div>
        </div>

        {/* Selected Work */}
        <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center">
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 max-w-[424px] w-full mb-20">
            <p className="text-heading not-italic relative shrink-0 md:text-xl w-full">Selected Work</p>
            <div className="content-stretch flex flex-col gap-[88px] items-start relative shrink-0 w-full">
              {projects.map((project) => (
                <PortfolioProjectCard 
                  key={project.id}
                  project={project}
                  onClick={onProjectClick} 
                  hoverScale={cardHoverScale} 
                  hoverDuration={cardHoverDuration}
                  layoutType={layoutType}
                  layoutExitDamping={layoutExitDamping}
                  layoutStiffness={layoutStiffness}
                  layoutDuration={layoutDuration}
                />
              ))}
            </div>
          </div>

          {/* Here to help you with */}
          <div className="mb-20" style={{ maxWidth: 420 }}>
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full max-w-[458px]">
              <p className="text-heading not-italic relative shrink-0 md:text-xl">Here to help you with...</p>
              <div className="content-stretch flex flex-wrap gap-x-8 gap-y-4 items-center relative shrink-0">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[194px]">
                  <ProjectLink label="Product Design " />
                  <ProjectLink label="Web Design " />
                  <ProjectLink label="Visual Identity" />
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[194px]">
                  <ProjectLink label="Design Systems" />
                  <ProjectLink label="Framer" />
                  <ProjectLink label="Prototypes" />
                </div>
              </div>
            </div>
          </div>

          {/* About me */}
          <div className="w-[242px] mx-auto">
            {/* <div className="content-stretch flex flex-col gap-[32px] items-start leading-normal not-italic relative shrink-0 text-primary w-full mb-10 ml-2 mr-2">
              <p className="text-heading relative shrink-0 md:text-xl w-full">About me</p>
              <p className="text-hero relative shrink-0 w-full">I approach projects from a tactical standpoint and make decisions based on my intuition</p>
            </div> */}
            <motion.div 
              className="bg-stone-800 box-border content-stretch flex gap-[13px] items-center justify-center px-[18px] py-[15px] relative rounded-[8px] shadow-[0px_76px_21px_0px_rgba(47,62,70,0),0px_49px_20px_0px_rgba(47,62,70,0.02),0px_27px_16px_0px_rgba(47,62,70,0.08),0px_12px_12px_0px_rgba(47,62,70,0.13),0px_3px_7px_0px_rgba(47,62,70,0.15)] shrink-0 cursor-pointer"
              whileHover={{ scale: buttonHoverScale, backgroundColor: '#44403c' }}
              transition={{ duration: buttonHoverDuration }}
            >
              <div className="flex flex-col items-center justify-center leading-none relative shrink-0 text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="text-button whitespace-pre text-center">Get in touch</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </LayoutGroup>
  );
}
