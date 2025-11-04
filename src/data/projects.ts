// Import project data from JSON
import projectsData from './projects.json';

// Import project images
import credcoreImg1 from "figma:asset/134c3db483b4b26b18d1476639bb29eed1406f6e.png";
import credcoreImg2 from "figma:asset/9f9d823d9cb3790fd8d4d58478235c3f7a1e4355.png";
import credcoreImg3 from "figma:asset/975174df45461a4ebd49039bd564317f1bdd66f8.png";

type ObjectFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

export interface ProjectImageSettings {
  objectFit?: ObjectFit;
  objectPosition?: string;
  scale?: number;
  translateX?: string;
  translateY?: string;
}

export interface ProjectImage extends ProjectImageSettings {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  year?: string;
  categories: string[];
  shortDescription?: string;
  longDescription: string;
  logo?: string; // Brand/logo asset for cards
  logoText?: string; // Alternative text logo
  images: {
    card: [ProjectImage, ProjectImage, ProjectImage];
    detail: [ProjectImage, ProjectImage, ProjectImage];
  };
}

// Figma asset mappings - extend behind tests (see projects.test.ts)
const FIGMA_ASSETS: Record<string, string> = {
  "figma:asset/134c3db483b4b26b18d1476639bb29eed1406f6e.png": credcoreImg1,
  "figma:asset/9f9d823d9cb3790fd8d4d58478235c3f7a1e4355.png": credcoreImg2,
  "figma:asset/975174df45461a4ebd49039bd564317f1bdd66f8.png": credcoreImg3,
};

const BASE_URL = (() => {
  const b = (import.meta as any).env?.BASE_URL ?? '/';
  return b.endsWith('/') ? b : b + '/';
})();

// Resolve public assets (respects Vite BASE_URL)
const resolvePath = (p: string): string => {
  if (!p || /^https?:\/\//i.test(p)) return p;
  return BASE_URL + p.replace(/^\//, '').replace(/^public\//, '');
};

// Resolve image (figma asset, public asset, or pass-through)
const resolveImg = (path: string): string =>
  FIGMA_ASSETS[path] || (path.match(/^\/?(?:public|images)\//) ? resolvePath(path) : path);

// Transform image with context (card/detail)
const transformImg = (img: any, ctx: 'card' | 'detail'): ProjectImage => ({
  src: resolveImg(img.src),
  alt: img.alt,
  ...img[ctx],
});

// Transform JSON data to typed projects with resolved image imports
export const projects: Project[] = projectsData.projects.map((project) => ({
  ...project,
  logo: project.logo ? resolvePath(project.logo) : project.logo,
  images: {
    card: project.images.map((img) => transformImg(img, 'card')) as [ProjectImage, ProjectImage, ProjectImage],
    detail: project.images.map((img) => transformImg(img, 'detail')) as [ProjectImage, ProjectImage, ProjectImage],
  },
}));

// Helper function to get project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
