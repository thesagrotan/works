import { motion, LayoutGroup } from 'motion/react';
import InfiniteCarousel from './InfiniteCarousel';
import PortfolioProjectCard from './PortfolioProjectCard';
import { useAnimationControls } from './AnimationControls';
import { projects } from '../data/projects';
import ProjectLink from './ProjectLink';
import BrandLogo from './BrandLogo';

// Content configuration for easy maintenance and i18n
const CONTENT = {
  hero: {
    intro: ["I'm Daniel Campagne, ", "a product designer ", "who transforms complex systems into intuitive experiences while helping brands tell their stories effectively."],
    experience: ["With over 15 years of experience", "for the last years helping startups on b2b and b2c solutions  in the areas fo mobility, fintech, DeFi, and digital health."]
  },
  email: "dcampagne@gmail.com",
  services: ["Product Design ", "Web Design ", "Visual Identity", "Design Systems", "Framer", "Prototypes"]
};

interface HomePageProps {
  onProjectClick: (projectId: string) => void;
}

export default function HomePage({ onProjectClick }: HomePageProps) {
  const { 
    cardHoverScale, 
    cardHoverDuration, 
    buttonHoverScale, 
    buttonHoverDuration,
    layoutType,
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
                  <span>{CONTENT.hero.intro[0]}</span>
                  <span className="font-semibold not-italic">{CONTENT.hero.intro[1]}</span>
                  {CONTENT.hero.intro[2]}
                </p>
                <p className="text-hero font-bold relative shrink-0 md:text-xl w-full whitespace-pre-wrap">
                  <span className="font-semibold not-italic">{CONTENT.hero.experience[0]}</span>
                  {' '}
                  <span className="font-regular not-italic">{CONTENT.hero.experience[1]}</span>
                </p>
              </div>
              <motion.a
                href={`mailto:${CONTENT.email}`}
                aria-label="Email Daniel"
                className="bg-stone-800 box-border content-stretch flex gap-[13px] items-start px-[18px] py-[15px] relative rounded-[8px] shadow-[0px_76px_21px_0px_rgba(47,62,70,0),0px_49px_20px_0px_rgba(47,62,70,0.02),0px_27px_16px_0px_rgba(47,62,70,0.08),0px_12px_12px_0px_rgba(47,62,70,0.13),0px_3px_7px_0px_rgba(47,62,70,0.15)] shrink-0 cursor-pointer"
                whileHover={{ scale: buttonHoverScale, backgroundColor: '#44403c' }}
                transition={{ duration: buttonHoverDuration }}
              >
                <div className="flex flex-col justify-center leading-none relative shrink-0 text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="text-button whitespace-pre">Get in touch</p>
                </div>
              </motion.a>
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
            <p className="text-heading not-italic relative shrink-0 md:text-xl w-full mb-12">Selected Work</p>
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
                {[0, 1].map((colIndex) => (
                  <div key={colIndex} className="content-stretch flex flex-col items-start relative shrink-0 w-[194px]">
                    {CONTENT.services.slice(colIndex * 3, (colIndex + 1) * 3).map((service) => (
                      <ProjectLink key={service} label={service} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </LayoutGroup>
  );
}
