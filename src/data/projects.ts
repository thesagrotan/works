// Import project data from JSON
import projectsData from './projects.json';

// Import project images
import credcoreImg1 from "figma:asset/134c3db483b4b26b18d1476639bb29eed1406f6e.png";
import credcoreImg2 from "figma:asset/9f9d823d9cb3790fd8d4d58478235c3f7a1e4355.png";
import credcoreImg3 from "figma:asset/975174df45461a4ebd49039bd564317f1bdd66f8.png";

export interface ProjectImageSettings {
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string; // e.g., "center", "top left", "50% 50%"
  scale?: number; // Scale multiplier (e.g., 1.5 = 150%, 0.8 = 80%)
  translateX?: string; // Horizontal offset (e.g., "10px", "5%", "-20px")
  translateY?: string; // Vertical offset (e.g., "10px", "5%", "-20px")
}

export interface ProjectImage {
  src: string;
  alt: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  scale?: number;
  translateX?: string;
  translateY?: string;
}

export interface Project {
  id: string;
  title: string;
  year?: string;
  categories: string[];
  shortDescription?: string;
  longDescription: string;
  // Optional per-project brand/logo asset shown in cards
  logo?: string;
  images: {
    card: [ProjectImage, ProjectImage, ProjectImage];
    detail: [ProjectImage, ProjectImage, ProjectImage];
  };
}

/**
 * AI_CLARIFY: Asset alias mapping policy
 * - This map intentionally resolves exactly three known figma assets to their imported modules.
 * - Any image src not listed here will pass through unchanged (fallback behavior preserved).
 * - If additional assets are introduced, extend this map behind tests (see src/__tests__/projects.test.ts)
 *   and keep behavior documented with AI_* tags per the Five Laws of Code Restructuring.
 */
// Map of image paths to imported modules
const imageMap: Record<string, string> = {
  "figma:asset/134c3db483b4b26b18d1476639bb29eed1406f6e.png": credcoreImg1,
  "figma:asset/9f9d823d9cb3790fd8d4d58478235c3f7a1e4355.png": credcoreImg2,
  "figma:asset/975174df45461a4ebd49039bd564317f1bdd66f8.png": credcoreImg3,
};

// Helper function to resolve image paths from JSON to imported modules
function resolveImagePath(imagePath: string): string {
  return imageMap[imagePath] || imagePath;
}

// Transform JSON data to typed projects with resolved image imports
export const projects: Project[] = projectsData.projects.map((project) => ({
  ...project,
  images: {
    card: project.images.map((img) => ({
      src: resolveImagePath(img.src),
      alt: img.alt,
      ...img.card,
    })) as [ProjectImage, ProjectImage, ProjectImage],
    detail: project.images.map((img) => ({
      src: resolveImagePath(img.src),
      alt: img.alt,
      ...img.detail,
    })) as [ProjectImage, ProjectImage, ProjectImage],
  },
}));

// Helper function to get project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
