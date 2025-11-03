import { motion, LayoutGroup } from 'motion/react';
import svgPaths from '../imports/svg-hero-paths';
import imgAttachment from "figma:asset/134c3db483b4b26b18d1476639bb29eed1406f6e.png";
import imgAttachment1 from "figma:asset/9f9d823d9cb3790fd8d4d58478235c3f7a1e4355.png";
import imgAttachment2 from "figma:asset/975174df45461a4ebd49039bd564317f1bdd66f8.png";
import { imgGroup14 } from "../imports/svg-logo-paths";
import InfiniteCarousel from './InfiniteCarousel';
import { useAnimationControls } from './AnimationControls';

interface HomePageProps {
  onProjectClick: (projectId: string) => void;
}

// Reusable components from the Figma import
function LogoCirclesOverlay() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] h-[64px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-16px_0px] mask-size-[32px_64px] ml-[16px] mt-0 relative w-[32px]" style={{ maskImage: `url('${imgGroup14}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 64">
          <g id="Group 14">
            <path d={svgPaths.p1d34c480} id="Ellipse 65" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
            <path d={svgPaths.p2646ea00} id="Ellipse 66" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
            <path d={svgPaths.p1d76dc60} id="Ellipse 67" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
            <path d={svgPaths.p350a7680} id="Ellipse 68" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
            <path d={svgPaths.p2f4d2600} id="Ellipse 69" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
            <path d={svgPaths.p171c1700} id="Ellipse 70" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
            <path d={svgPaths.p37f60000} id="Ellipse 71" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
            <path d={svgPaths.p26c95400} id="Ellipse 72" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
            <path d={svgPaths.p21da900} id="Ellipse 73" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
            <path d={svgPaths.p3451a000} id="Ellipse 74" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
            <path d={svgPaths.p2c665800} id="Ellipse 75" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ConcentricCircles() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[64px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Group 13">
          <circle cx="32" cy="32" id="Ellipse 65" r="31" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 66" r="26.2" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 67" r="21.4" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 68" r="16.6" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 69" r="11.8" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 70" r="7" stroke="var(--stroke-0, #323E45)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 71" r="10.2" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 72" r="15" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 73" r="19.8" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 74" r="24.6" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
          <circle cx="32" cy="32" id="Ellipse 75" r="29.4" stroke="var(--stroke-0, #EDEFEB)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BrandLogo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 max-w-[424px] w-full">
      <ConcentricCircles />
      <LogoCirclesOverlay />
    </div>
  );
}

// Portfolio project card component with image preview
function PortfolioProjectCard({ id, title, onClick, hoverScale, hoverDuration }: { id: string; title: string; onClick: (id: string) => void; hoverScale: number; hoverDuration: number }) {
  return (
    <button onClick={() => onClick(id)} className="block group w-full text-left cursor-pointer bg-[hsl(105,11%,96%)]">
      <div className="content-stretch flex gap-[64px] items-end relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[144px]">
          <div className="h-[20px] relative shrink-0 w-[107px]">
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
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
              <p className="text-body not-italic relative shrink-0 w-[144px]">UX/UI Design</p>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
              <p className="text-body not-italic relative shrink-0 w-[144px]">Design Systems</p>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
              <p className="text-body-alt not-italic relative shrink-0 w-[144px]">Framer</p>
            </div>
          </div>
        </div>
        
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <motion.div 
            layoutId={`${id}-img-1`}
            className="[grid-area:1_/_1] bg-stone-50 h-[178px] ml-[48px] mt-0 relative rounded-[8px] w-[285px]"
            whileHover={{ scale: hoverScale }}
            transition={{ duration: hoverDuration }}
          >
            <div className="content-stretch flex flex-col h-[178px] items-start overflow-clip relative rounded-[inherit] w-[285px]">
              <div className="aspect-[104/67.4783] relative shrink-0 w-full">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[235.91%] left-[-11.36%] max-w-none top-[0.41%] w-[235.49%]" src={imgAttachment2} />
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#323e45] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[41px_57px_20px_0px_rgba(47,62,70,0),26px_37px_18px_0px_rgba(47,62,70,0.01),15px_21px_15px_0px_rgba(47,62,70,0.05),7px_9px_11px_0px_rgba(47,62,70,0.09),2px_2px_6px_0px_rgba(47,62,70,0.1)]" />
          </motion.div>
          <motion.div 
            layoutId={`${id}-img-2`}
            className="[grid-area:1_/_1] bg-stone-50 h-[178px] ml-[24px] mt-[29px] relative rounded-[8px] w-[285px]"
            whileHover={{ scale: hoverScale }}
            transition={{ duration: hoverDuration }}
          >
            <div className="content-stretch flex flex-col h-[178px] items-start overflow-clip relative rounded-[inherit] w-[285px]">
              <div className="aspect-[141.794/92]  relative shrink-0 w-full">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[347.31%] left-[-16.64%] max-w-none top-[0.52%] w-[346.68%]" src={imgAttachment1} />
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#323e45] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[41px_57px_20px_0px_rgba(47,62,70,0),26px_37px_18px_0px_rgba(47,62,70,0.01),15px_21px_15px_0px_rgba(47,62,70,0.05),7px_9px_11px_0px_rgba(47,62,70,0.09),2px_2px_6px_0px_rgba(47,62,70,0.1)]" />
          </motion.div>
          <motion.div 
            layoutId={`${id}-img-3`}
            className="[grid-area:1_/_1] bg-stone-50 h-[178px] ml-0 mt-[57px] relative rounded-[8px] w-[285px]"
            whileHover={{ scale: hoverScale }}
            transition={{ duration: hoverDuration }}
          >
            <div className="content-stretch flex flex-col h-[178px] items-start overflow-clip relative rounded-[inherit] w-[285px]">
              <div className="aspect-[162/105.11] relative shrink-0 w-full">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[170.42%] left-[-9.25%] max-w-none top-[-0.17%] w-[170.12%]" src={imgAttachment} />
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#323e45] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[41px_57px_20px_0px_rgba(47,62,70,0),26px_37px_18px_0px_rgba(47,62,70,0.01),15px_21px_15px_0px_rgba(47,62,70,0.05),7px_9px_11px_0px_rgba(47,62,70,0.09),2px_2px_6px_0px_rgba(47,62,70,0.1)]" />
          </motion.div>
        </div>
      </div>
    </button>
  );
}

export default function HomePage({ onProjectClick }: HomePageProps) {
  const { cardHoverScale, cardHoverDuration, buttonHoverScale, buttonHoverDuration } = useAnimationControls();
  
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
        <div className="mmax-w-[1200px] mx-auto flex flex-col justify-center items-center">
          <div className="content-stretch flex flex-col items-center gap-[40px] items-start relative shrink-0 max-w-[424px] w-full mb-20">
            <p className="text-heading not-italic relative shrink-0 md:text-xl w-full">Selected Work</p>
            <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-full">
              <PortfolioProjectCard id="credcore" title="CredCore" onClick={onProjectClick} hoverScale={cardHoverScale} hoverDuration={cardHoverDuration} />
              <PortfolioProjectCard id="credcore-2" title="CredCore" onClick={onProjectClick} hoverScale={cardHoverScale} hoverDuration={cardHoverDuration} />
            </div>
          </div>

          {/* Here to help you with */}
          <div className="mb-20">
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full max-w-[458px]">
              <p className="text-heading not-italic relative shrink-0 md:text-xl">Here to help you with...</p>
              <div className="content-stretch flex flex-wrap gap-x-8 gap-y-4 items-center relative shrink-0">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[207px]">
                  <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-0 py-[2px] relative shrink-0 w-full">
                    <p className="text-hero not-italic relative shrink-0 text-nowrap whitespace-pre">{`Product Design `}</p>
                    <div className="h-0 relative shrink-0 w-full">
                      <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(50, 62, 69, 1)" } as React.CSSProperties}>
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                          <line stroke="var(--stroke-0, #323E45)" strokeDasharray="1 3" x2="207" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-0 py-[2px] relative shrink-0 w-full">
                    <p className="text-hero not-italic relative shrink-0 text-nowrap whitespace-pre">{`Web Design `}</p>
                    <div className="h-0 relative shrink-0 w-full">
                      <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(50, 62, 69, 1)" } as React.CSSProperties}>
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                          <line stroke="var(--stroke-0, #323E45)" strokeDasharray="1 3" x2="207" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-0 py-[2px] relative shrink-0 w-full">
                    <p className="text-hero not-italic relative shrink-0 text-nowrap whitespace-pre">Visual Identity</p>
                    <div className="h-0 relative shrink-0 w-full">
                      <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(50, 62, 69, 1)" } as React.CSSProperties}>
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                          <line stroke="var(--stroke-0, #323E45)" strokeDasharray="1 3" x2="207" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[207px]">
                  <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-0 py-[2px] relative shrink-0 w-full">
                    <p className="text-hero not-italic relative shrink-0 text-nowrap whitespace-pre">Design Systems</p>
                    <div className="h-0 relative shrink-0 w-full">
                      <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(50, 62, 69, 1)" } as React.CSSProperties}>
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                          <line stroke="var(--stroke-0, #323E45)" strokeDasharray="1 3" x2="207" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-0 py-[2px] relative shrink-0 w-full">
                    <p className="text-hero not-italic relative shrink-0 text-nowrap whitespace-pre">Framer</p>
                    <div className="h-0 relative shrink-0 w-full">
                      <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(50, 62, 69, 1)" } as React.CSSProperties}>
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                          <line stroke="var(--stroke-0, #323E45)" strokeDasharray="1 3" x2="207" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-0 py-[2px] relative shrink-0 w-full">
                    <p className="text-hero relative shrink-0 text-nowrap whitespace-pre">Prototypes</p>
                    <div className="h-0 relative shrink-0 w-full">
                      <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(50, 62, 69, 1)" } as React.CSSProperties}>
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                          <line stroke="var(--stroke-0, #323E45)" strokeDasharray="1 3" x2="207" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About me */}
          <div className="max-w-[458px]">
            <div className="content-stretch flex flex-col gap-[32px] items-start leading-normal not-italic relative shrink-0 text-primary w-full mb-10">
              <p className="text-heading relative shrink-0 md:text-xl w-full">About me</p>
              <p className="text-hero relative shrink-0 w-full">I approach projects from a tactical standpoint and make decisions based on my intuition</p>
            </div>
            <motion.div 
              className="bg-stone-800 box-border content-stretch flex gap-[13px] items-start px-[18px] py-[15px] relative rounded-[8px] shadow-[0px_76px_21px_0px_rgba(47,62,70,0),0px_49px_20px_0px_rgba(47,62,70,0.02),0px_27px_16px_0px_rgba(47,62,70,0.08),0px_12px_12px_0px_rgba(47,62,70,0.13),0px_3px_7px_0px_rgba(47,62,70,0.15)] shrink-0 cursor-pointer"
              whileHover={{ scale: buttonHoverScale, backgroundColor: '#44403c' }}
              transition={{ duration: buttonHoverDuration }}
            >
              <div className="flex flex-col justify-center leading-none relative shrink-0 text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="text-button whitespace-pre center">Get in touch</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </LayoutGroup>
  );
}
