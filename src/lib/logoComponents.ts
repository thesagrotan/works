/**
 * Logo Components
 * 
 * This file exports complete logo compositions that use multiple SVG paths.
 * Each logo is a collection of related paths that work together.
 */

import { heroIconPaths, logoIconSvgs } from './svgLoader';

/**
 * Brand Logo Ellipse Paths
 * 
 * The brand logo consists of 11 concentric ellipses with alternating colors.
 * These paths are used in the LogoCirclesOverlay component.
 */
export const brandLogoEllipses = {
  // Primary color ellipses (inner to outer)
  ellipse65: heroIconPaths['ellipse-65-outer-primary'],  // Outermost primary
  ellipse66: heroIconPaths['ellipse-66-primary'],
  ellipse67: heroIconPaths['ellipse-67-primary'],
  ellipse68: heroIconPaths['ellipse-68-primary'],
  ellipse69: heroIconPaths['ellipse-69-primary'],
  ellipse70: heroIconPaths['ellipse-70-inner-primary'],  // Innermost primary
  
  // Background color ellipses (inner to outer)
  ellipse71: heroIconPaths['ellipse-71-inner-background'],  // Innermost background
  ellipse72: heroIconPaths['ellipse-72-background'],
  ellipse73: heroIconPaths['ellipse-73-background'],
  ellipse74: heroIconPaths['ellipse-74-background'],
  ellipse75: heroIconPaths['ellipse-75-outer-background'],  // Outermost background
};

/**
 * Logo mask rectangle
 */
export const brandLogoMask = logoIconSvgs['brand-rect'];

/**
 * Get data URI for logo mask
 */
export function getBrandLogoMaskUri(): string {
  return brandLogoMask ? `data:image/svg+xml,${encodeURIComponent(brandLogoMask)}` : '';
}

/**
 * Type for ellipse names
 */
export type BrandLogoEllipseName = keyof typeof brandLogoEllipses;
