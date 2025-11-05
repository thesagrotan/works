/**
 * SVG Loader Utility
 * 
 * This module provides utilities to dynamically load and manage SVG assets
 * from the /src/assets/icons directory.
 * 
 * Instead of hardcoding paths in large objects, SVGs are now stored as
 * individual files and loaded on demand using Vite's import.meta.glob.
 */

// Import SVG files as raw strings
const sharedIcons = import.meta.glob<{ default: string }>(
  '/src/assets/icons/shared/*.svg',
  { query: '?raw', eager: true }
);

const heroIcons = import.meta.glob<{ default: string }>(
  '/src/assets/icons/hero/*.svg',
  { query: '?raw', eager: true }
);

// Carousel icons are complete SVG files (not just paths)
const carouselIconsRaw = import.meta.glob<{ default: string }>(
  '/src/assets/icons/carousel/*.svg',
  { query: '?raw', eager: true }
);

const logoIcons = import.meta.glob<{ default: string }>(
  '/src/assets/icons/logo/*.svg',
  { query: '?raw', eager: true }
);

/**
 * Extract the path data from an SVG string
 * This gets the 'd' attribute from the first <path> element
 */
function extractPathFromSvg(svgString: string): string {
  const match = svgString.match(/d="([^"]*)"/);
  return match ? match[1] : '';
}

/**
 * Process glob imports into a record of icon names to path strings (extracts only path data)
 */
function processIconPaths(iconModules: Record<string, { default: string }>): Record<string, string> {
  const paths: Record<string, string> = {};
  
  for (const [filePath, module] of Object.entries(iconModules)) {
    const fileName = filePath.split('/').pop()?.replace('.svg', '') || '';
    paths[fileName] = extractPathFromSvg(module.default);
  }
  
  return paths;
}

/**
 * Process glob imports into a record of icon names to full SVG strings
 */
function processFullSvg(iconModules: Record<string, { default: string }>): Record<string, string> {
  const svgs: Record<string, string> = {};
  
  for (const [filePath, module] of Object.entries(iconModules)) {
    const fileName = filePath.split('/').pop()?.replace('.svg', '') || '';
    svgs[fileName] = module.default;
  }
  
  return svgs;
}

/**
 * Processed icon paths organized by category (path data only)
 * Hero includes shared icons for backward compatibility
 */
const sharedIconPaths = processIconPaths(sharedIcons);
export const heroIconPaths = { ...sharedIconPaths, ...processIconPaths(heroIcons) };
export const logoIconPaths = processIconPaths(logoIcons);

/**
 * Carousel icons as full SVG strings (they are complete logo SVGs)
 */
export const carouselIconSvgs = processFullSvg(carouselIconsRaw);

/**
 * Full SVG strings for logo icons (for use with mask-image or data URIs)
 */
const sharedIconSvgs = processFullSvg(sharedIcons);
export const logoIconSvgs = { ...sharedIconSvgs, ...processFullSvg(logoIcons) };

/**
 * @deprecated Use carouselIconSvgs instead - carousel icons are full SVGs, not paths
 */
export const carouselIconPaths = {};

/**
 * Get an SVG path from a specific category
 */
export function getSvgPath(
  category: 'hero' | 'logo',
  name: string
): string | undefined {
  const maps = {
    hero: heroIconPaths,
    logo: logoIconPaths,
  };
  
  return maps[category]?.[name];
}

/**
 * Get a full SVG string from carousel or logo icons
 */
export function getSvgContent(
  category: 'carousel' | 'logo',
  name: string
): string | undefined {
  const maps = {
    carousel: carouselIconSvgs,
    logo: logoIconSvgs,
  };
  
  return maps[category]?.[name];
}

/**
 * Get all available icon names from a category
 */
export function getAvailableIcons(category: 'hero' | 'carousel' | 'logo'): string[] {
  const maps = {
    hero: heroIconPaths,
    carousel: carouselIconSvgs,
    logo: logoIconPaths,
  };
  
  return Object.keys(maps[category]);
}

/**
 * Type-safe icon names for each category
 */
export type HeroIconName = keyof typeof heroIconPaths;
export type CarouselIconName = keyof typeof carouselIconSvgs;
export type LogoIconName = keyof typeof logoIconPaths;
