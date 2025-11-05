import { motion, LayoutGroup } from 'motion/react';
import InfiniteCarousel from './InfiniteCarousel';
import PortfolioProjectCard from './PortfolioProjectCard';
import { useAnimationControls } from './AnimationControls';
import { projects } from '../data/projects';
import { siteContent, parseBold } from '../data/siteContent';
import ProjectLink from './ProjectLink';
import BrandLogo from './BrandLogo';
import { COLORS, SHADOWS, CLASSES } from '../config/tokens';

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
      <div className={`${CLASSES.pageBg} min-h-screen w-full overflow-x-hidden`}>
      <div className={CLASSES.container}>
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-16 mb-24 py-8 md:py-24">
          <BrandLogo />
          <div className={`${CLASSES.textBlock} flex flex-col gap-12`}>
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
              className={`${CLASSES.buttonBg} flex ${CLASSES.button} rounded-lg ${SHADOWS.button} cursor-pointer`}
              whileHover={{ scale: buttonHoverScale, backgroundColor: COLORS.buttonHover }}
              transition={{ duration: buttonHoverDuration }}
            >
              <p className="text-button text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{siteContent.hero.cta}</p>
            </motion.a>
          </div>
        </section>

        {/* Infinite Carousel */}
        <div className="mb-24 -mx-4 md:-mx-8 lg:-mx-16 flex justify-center">
          <div className={`${CLASSES.carouselContainer} w-full`}>
            <InfiniteCarousel />
          </div>
        </div>

        {/* Selected Work */}
        <section className={CLASSES.contentSection}>
          <div className={`flex flex-col gap-10 ${CLASSES.textBlock} w-full mb-20`}>
            <h2 className="text-heading md:text-xl mb-12">{siteContent.selectedWork}</h2>
            <div className={`flex flex-col ${CLASSES.cardGap}`}>
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
          <div className={`mb-20 ${CLASSES.textBlock}`}>
            <h2 className="text-heading md:text-xl mb-8">{siteContent.helpWith.heading}</h2>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {siteContent.helpWith.links.map((column, idx) => (
                <div key={idx} className={`flex flex-col ${CLASSES.linkColumn}`}>
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
