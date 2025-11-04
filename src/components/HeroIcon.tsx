import { motion, type MotionProps } from 'motion/react';
import { svgPaths } from '../imports/svg-hero-paths';

/**
 * Valid hero icon names that can be used with the HeroIcon component.
 * These are the keys from the svgPaths object.
 */
export type HeroIconName = keyof typeof svgPaths;

/**
 * Props for the HeroIcon component
 */
interface HeroIconProps extends Omit<MotionProps, 'children'> {
  /** The name of the icon to display, must be one of the keys from svgPaths */
  name: HeroIconName;
  /** Optional CSS class name(s) to apply to the SVG element */
  className?: string;
  /** Optional title for accessibility - if provided, sets aria-hidden=false */
  title?: string;
  /** Width in pixels. If not specified, uses size */
  width?: number;
  /** Height in pixels. If not specified, uses size */
  height?: number;
  /** Size in pixels (applies to both width and height if width/height not set). Default: 32 */
  size?: number;
  /** Optional custom viewBox for the SVG. Default: "0 0 32 32" */
  viewBox?: string;
}

/**
 * A reusable hero icon component that renders SVG paths consistently.
 * Uses currentColor for fill, allowing color control via CSS.
 * Supports Framer Motion animation props.
 *
 * @example
 * ```jsx
 * <HeroIcon name="p123" size={24} className="text-blue-500" />
 * <HeroIcon name="p456" title="Settings" whileHover={{ scale: 1.1 }} />
 * ```
 */
export function HeroIcon({ 
  name, 
  className = '', 
  title, 
  size = 32,
  width,
  height,
  viewBox = "0 0 32 32",
  ...motionProps
}: HeroIconProps) {
  const path = svgPaths[name];
  if (!path) return null;

  return (
    <motion.svg
      width={width || size}
      height={height || size}
      viewBox={viewBox}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={!title}
      role={title ? 'img' : 'presentation'}
      {...motionProps}
    >
      {title && <title>{title}</title>}
      <path d={path} />
    </motion.svg>
  );
}