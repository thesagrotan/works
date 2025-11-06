import type { Project } from '../data/projects';
import ProjectImageStack from './ProjectImageStack';
import { HeroIcon } from './HeroIcon';
import { SPACING, CLASSES } from '../config/tokens';

interface AnimationConfig {
  hover: { scale: number; duration: number };
  layout: { type: string; damping: number; stiffness: number; duration: number };
}

interface PortfolioProjectCardProps {
  project: Project;
  onClick: (id: string) => void;
  animation: AnimationConfig;
}

function ProjectLogo({ project }: { project: Project }) {
  if (project.logoText) return <span className="block h-[20px] leading-[20px] text-[16px] font-semibold text-[#323e45] truncate">{project.logoText}</span>;
  if (project.logo) return <img src={project.logo} alt={`${project.title} logo`} className="block h-full w-auto" />;
  return <HeroIcon name="p11a74280" width={SPACING.logo.width} height={SPACING.logo.height} viewBox="0 0 107 20" className="block size-full" />;
}

export default function PortfolioProjectCard({ project, onClick, animation }: PortfolioProjectCardProps) {
  const { id, categories, images } = project;
  
  return (
    <button onClick={() => onClick(id)} className="focus:outline-none focus:ring-0 block group w-full text-left cursor-pointer border border-[#323e45] rounded-[8px] p-4 mt-[-44px]">
      <div className="flex gap-16 items-end w-full">
        <div className={`flex flex-col gap-6 ${CLASSES.categoryColumn}`}>
          <div className={`${CLASSES.logoSize} mt-[-44px]`}><ProjectLogo project={project} /></div>
          <div className="flex flex-col">
            {categories.map((cat, i) => <p key={i} className={`${i === categories.length - 1 ? 'text-body-alt' : 'text-body'} ${CLASSES.categoryColumn}`}>{cat}</p>)}
          </div>
        </div>
        <ProjectImageStack
          images={images.card}
          projectId={id}
          animation={animation}
          className="mt-[-44px]"
        />
      </div>
    </button>
  );
}
