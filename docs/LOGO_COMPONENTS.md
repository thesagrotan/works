# Logo Components Guide

## Problem

Some visual elements (like the brand logo) use multiple SVG paths that work together. The individual SVG files have cryptic hash names like `p1d34c480.svg`, making it hard to understand which parts belong together.

## Solution: logoComponents.ts

This file groups related SVG parts into logical compositions with meaningful names.

### Brand Logo Example

The brand logo consists of **11 concentric ellipses** with alternating colors:

```tsx
import { brandLogoEllipses, getBrandLogoMaskUri } from '@/lib/logoComponents';

// Instead of:
// heroIconPaths.p1d34c480
// heroIconPaths.p2646ea00
// ...

// Use descriptive names:
const ellipses = brandLogoEllipses;
ellipses.ellipse65  // Outermost primary color
ellipses.ellipse66
ellipses.ellipse67
// ... etc
ellipses.ellipse75  // Outermost background color
```

### Benefits

1. **Meaningful Names**: `ellipse65` instead of `p1d34c480`
2. **Grouped Together**: All related paths in one object
3. **Documented**: Comments explain what each part is
4. **Type-Safe**: TypeScript knows exactly what ellipses are available

### Structure

```typescript
// src/lib/logoComponents.ts
export const brandLogoEllipses = {
  // Primary color ellipses
  ellipse65: heroIconPaths.p1d34c480,  // Maps to actual SVG file
  ellipse66: heroIconPaths.p2646ea00,
  // ... 11 total ellipses
};

export const brandLogoMask = logoIconSvgs['brand-rect'];

export function getBrandLogoMaskUri(): string {
  return brandLogoMask 
    ? `data:image/svg+xml,${encodeURIComponent(brandLogoMask)}` 
    : '';
}
```

### Usage in Components

```tsx
// src/components/BrandLogo.tsx
import { brandLogoEllipses, getBrandLogoMaskUri } from '../lib/logoComponents';
import { COLORS } from '../config/tokens';

const paths = brandLogoEllipses;
const maskUri = getBrandLogoMaskUri();

function LogoCirclesOverlay() {
  return (
    <svg>
      <path d={paths.ellipse65} stroke={COLORS.primary} />
      <path d={paths.ellipse66} stroke={COLORS.primary} />
      {/* ... etc */}
    </svg>
  );
}
```

## Adding New Logo Compositions

If you have other multi-part logos, add them to `logoComponents.ts`:

```typescript
export const newLogoComponents = {
  part1: heroIconPaths['some-icon'],
  part2: heroIconPaths['another-icon'],
  // ... etc
};
```

## File Mapping

The actual SVG files still exist in `/src/assets/icons/hero/` but now have a more organized access layer:

```
Physical files:          Logical grouping:
hero/p1d34c480.svg  →   brandLogoEllipses.ellipse65
hero/p2646ea00.svg  →   brandLogoEllipses.ellipse66
hero/p1d76dc60.svg  →   brandLogoEllipses.ellipse67
...                 →   ...
```

This provides:
- **File level**: Individual SVG files for editing
- **Import level**: Grouped compositions with meaningful names
