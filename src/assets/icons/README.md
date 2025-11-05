# SVG Icons

This directory contains all SVG icon assets used in the application.

## Organized by Category

Icons are automatically loaded from:
- `hero/` - Hero section icons
- `carousel/` - Technology carousel icons
- `logo/` - Logo and branding assets

## Logo Components

Some logos are composed of multiple SVG parts that work together. Instead of accessing individual paths, use the pre-configured logo compositions from `logoComponents.ts`:

```tsx
import { brandLogoEllipses, getBrandLogoMaskUri } from '@/lib/logoComponents';

// Brand logo has 11 ellipses with descriptive names
const paths = brandLogoEllipses;
<path d={paths.ellipse65} /> // Clearer than p1d34c480
<path d={paths.ellipse66} />
// ... etc

// Get the mask URI
const maskUri = getBrandLogoMaskUri();
```

This groups related SVG parts together and provides meaningful names instead of cryptic hashes.

## Usage

Import SVGs using the helper utility:

```tsx
import { getSvgPath } from '@/lib/svgLoader';

// Get a specific icon path
const iconPath = getSvgPath('hero', 'icon-name');

// Or import directly from components
import { HeroIcon } from '@/components/HeroIcon';
<HeroIcon name="icon-name" />
```

## Adding New Icons

1. Add your SVG file to the appropriate folder
2. Name it descriptively (e.g., `user-profile.svg`)
3. The icon will be automatically available through the loader
