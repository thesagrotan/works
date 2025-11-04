import { motion, LayoutGroup } from 'motion/react';
import InfiniteCarousel from './InfiniteCarousel';
import PortfolioProjectCard from './PortfolioProjectCard';
import { useAnimationControls } from './AnimationControls';
import { projects } from '../data/projects';
import { siteContent, parseBold } from '../data/siteContent';
import ProjectLink from './ProjectLink';
import BrandLogo from './BrandLogo';

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
        <section className="flex flex-col items-center gap-16 mb-24">
          <BrandLogo />
          <div className="max-w-[424px] flex flex-col gap-12">
            <div className="flex flex-col gap-8 text-primary text-xs md:text-xl tracking-sm leading-none">
              {[siteContent.hero.intro, siteContent.hero.experience].map((text, idx) => (
                <p key={idx} className={`text-hero ${idx === 1 ? 'font-bold whitespace-pre-wrap' : ''}`}>
                  {parseBold(text).map(({ text: t, bold, key }) => (
                    <span key={key} className={bold ? 'font-semibold' : 'font-regular'}>{t}</span>
                  ))}
                </p>
              ))}
            </div>
            <motion.a
              href={`mailto:${siteContent.hero.email}`}
              aria-label="Email Daniel"
              className="bg-stone-800 flex px-[18px] py-[15px] rounded-lg shadow-[0px_76px_21px_0px_rgba(47,62,70,0),0px_49px_20px_0px_rgba(47,62,70,0.02),0px_27px_16px_0px_rgba(47,62,70,0.08),0px_12px_12px_0px_rgba(47,62,70,0.13),0px_3px_7px_0px_rgba(47,62,70,0.15)] cursor-pointer"
              whileHover={{ scale: buttonHoverScale, backgroundColor: '#44403c' }}
              transition={{ duration: buttonHoverDuration }}
            >
              <p className="text-button text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{siteContent.hero.cta}</p>
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
            <h2 className="text-heading md:text-xl mb-12">{siteContent.selectedWork}</h2>
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
            <h2 className="text-heading md:text-xl mb-8">{siteContent.helpWith.heading}</h2>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {siteContent.helpWith.links.map((column, idx) => (
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
