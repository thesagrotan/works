import { motion, LayoutGroup } from 'motion/react';
import InfiniteCarousel from './InfiniteCarousel';
import PortfolioProjectCard from './PortfolioProjectCard';
import { useAnimationControls } from './AnimationControls';
import { projects } from '../data/projects';
import ProjectLink from './ProjectLink';
import BrandLogo from './BrandLogo';

interface HomePageProps {
  onProjectClick: (projectId: string) => void;
}

const HELP_LINKS = [
  ['Product Design ', 'Web Design ', 'Visual Identity'],
  ['Design Systems', 'Framer', 'Prototypes'],
];

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
        <section className="flex flex-col items-center gap-16 mb-24">
          <BrandLogo />
          <div className="max-w-[424px] flex flex-col gap-12">
            <div className="flex flex-col gap-8 text-primary text-xs md:text-xl tracking-sm leading-none">
              <p className="text-hero">
                <span>{`I'm Daniel Campagne, `}</span>
                <span className="font-semibold">{`a product designer `}</span>
                who transforms complex systems into intuitive experiences while helping brands tell their stories effectively.
              </p>
              <p className="text-hero font-bold whitespace-pre-wrap">
                <span className="font-semibold">With over 15 years of experience</span>
                <span className="font-regular">{` for the last years helping startups on b2b and b2c solutions  in the areas fo mobility, fintech, DeFi, and digital health.`}</span>
              </p>
            </div>
            <motion.a
              href="mailto:dcampagne@gmail.com"
              aria-label="Email Daniel"
              className="bg-stone-800 flex px-[18px] py-[15px] rounded-lg shadow-[0px_76px_21px_0px_rgba(47,62,70,0),0px_49px_20px_0px_rgba(47,62,70,0.02),0px_27px_16px_0px_rgba(47,62,70,0.08),0px_12px_12px_0px_rgba(47,62,70,0.13),0px_3px_7px_0px_rgba(47,62,70,0.15)] cursor-pointer"
              whileHover={{ scale: buttonHoverScale, backgroundColor: '#44403c' }}
              transition={{ duration: buttonHoverDuration }}
            >
              <p className="text-button text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>Get in touch</p>
            </motion.a>
          </div>
        </section>

        {/* Infinite Carousel */}
        <div className="mb-24 -mx-4 md:-mx-8 lg:-mx-16 flex justify-center">
          <div className="max-w-[458px] w-full">
            <InfiniteCarousel />
          </div>
        </div>

        {/* Selected Work */}
        <section className="max-w-[1200px] mx-auto flex flex-col items-center">
          <div className="flex flex-col gap-10 max-w-[424px] w-full mb-20">
            <h2 className="text-heading md:text-xl mb-12">Selected Work</h2>
            <div className="flex flex-col gap-[88px]">
              {projects.map((project) => (
                <PortfolioProjectCard 
                  key={project.id}
                  project={project}
                  onClick={onProjectClick}
                  animation={{
                    hover: { scale: cardHoverScale, duration: cardHoverDuration },
                    layout: { type: layoutType, damping: layoutExitDamping, stiffness: layoutStiffness, duration: layoutDuration }
                  }}
                />
              ))}
            </div>
          </div>

          {/* Here to help you with */}
          <div className="mb-20 max-w-[420px]">
            <h2 className="text-heading md:text-xl mb-8">Here to help you with...</h2>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {HELP_LINKS.map((column, idx) => (
                <div key={idx} className="flex flex-col w-[194px]">
                  {column.map((label) => <ProjectLink key={label} label={label} />)}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
    </LayoutGroup>
  );
}
