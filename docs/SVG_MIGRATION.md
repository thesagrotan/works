# SVG Migration Guide

This document explains the new SVG management system and how to migrate from the old path-based approach.

## Old System (❌ Don't use)

Previously, SVGs were stored as large objects with cryptic hash keys:

```tsx
// src/imports/svg-hero-paths.ts
export default {
  p11a74280: "M26.0255 7.83245C26.54...",
  p1471b3f0: "M35.9963 19.047C38.6679...",
  // ... hundreds more
}
```

**Problems:**
- Hard to identify what each icon is
- Difficult to manage and update
- Large bundle size
- No code organization

## New System (✅ Use this)

SVGs are now individual files in organized folders:

```
src/assets/icons/
├── hero/
│   ├── user-profile.svg
│   ├── settings.svg
│   └── ...
├── carousel/
│   ├── arrow-left.svg
│   └── ...
└── logo/
    └── brand-mark.svg
```

**Benefits:**
- Easy to find and edit icons
- Better organization
- Descriptive names
- Can be optimized individually
- Smaller bundle (tree-shakeable)

## Migration Steps

### 1. Run the Migration Script

```bash
npm run migrate-svgs
# or
tsx scripts/migrate-svgs.ts
```

This will create SVG files from your existing path objects.

### 2. Rename Files (Optional but Recommended)

The script creates files with hash names. Rename them to be descriptive:

```bash
# Before
src/assets/icons/hero/p11a74280.svg

# After  
src/assets/icons/hero/user-profile.svg
```

### 3. Update Your Components

**Before:**
```tsx
import svgPaths from '../imports/svg-hero-paths';

function MyComponent() {
  return <path d={svgPaths.p11a74280} />;
}
```

**After:**
```tsx
import { HeroIcon } from '@/components/HeroIcon';

function MyComponent() {
  return <HeroIcon name="user-profile" size={24} />;
}

// Or if you need just the path:
import { getSvgPath } from '@/lib/svgLoader';

function MyComponent() {
  const path = getSvgPath('hero', 'user-profile');
  return <path d={path} />;
}
```

### 4. Using the SVG Loader Directly

The loader automatically imports all SVGs from the icons folder:

```tsx
import { 
  heroIconPaths,
  carouselIconPaths,
  getSvgPath,
  getAvailableIcons 
} from '@/lib/svgLoader';

// Get a specific icon
const userIcon = getSvgPath('hero', 'user-profile');

// List all available icons
const allHeroIcons = getAvailableIcons('hero');

// Direct access
const path = heroIconPaths['user-profile'];
```

### 5. Component Updates

The `HeroIcon` component now automatically works with the new system:

```tsx
// No changes needed in your usage!
<HeroIcon name="user-profile" size={32} className="text-blue-500" />
```

Update the component import if needed:

```tsx
// src/components/HeroIcon.tsx
import { heroIconPaths, type HeroIconName } from '../lib/svgLoader';

// Use heroIconPaths instead of the old svgPaths import
```

## Adding New Icons

1. Add an SVG file to the appropriate folder:
   ```
   src/assets/icons/hero/new-icon.svg
   ```

2. The icon is automatically available:
   ```tsx
   <HeroIcon name="new-icon" />
   ```

That's it! No need to update any mapping files.

## File Format

SVG files should follow this format:

```xml
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M..." fill="currentColor"/>
</svg>
```

- Use `currentColor` for fills to allow CSS color control
- Include appropriate viewBox
- Remove unnecessary attributes
- Optimize with SVGO if needed

## Cleanup

Once migration is complete and tested:

1. Remove old import files:
   ```bash
   rm src/imports/svg-hero-paths.ts
   rm src/imports/svg-carousel-icon-paths.ts
   rm src/imports/svg-logo-paths.tsx
   ```

2. Remove the imports directory if empty

## Troubleshooting

### Icons not loading?

Make sure Vite is configured to handle SVG imports. Check `vite.config.ts`:

```ts
// vite.config.ts should already have this, but verify:
export default defineConfig({
  // ... other config
})
```

### TypeScript errors?

The loader exports types:
```tsx
import type { HeroIconName } from '@/lib/svgLoader';

// Use the type for your props
interface Props {
  icon: HeroIconName;
}
```

### Want to use SVGs as React components?

Install `vite-plugin-svgr`:

```bash
npm install -D vite-plugin-svgr
```

Then you can do:
```tsx
import UserIcon from '@/assets/icons/hero/user-profile.svg?react';

<UserIcon className="w-6 h-6" />
```

## Best Practices

1. **Name files descriptively**: `user-profile.svg`, not `icon1.svg`
2. **Use kebab-case**: `arrow-left.svg`, not `ArrowLeft.svg`
3. **Keep viewBox consistent**: Use the same viewBox for icons in the same set
4. **Optimize SVGs**: Use SVGO to remove unnecessary data
5. **Use currentColor**: Allows CSS color control
6. **Document icons**: Add comments in the SVG if needed

## Example SVG Template

```xml
<!-- src/assets/icons/hero/user-profile.svg -->
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- User head -->
  <circle cx="12" cy="8" r="4" fill="currentColor"/>
  <!-- User body -->
  <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" fill="currentColor"/>
</svg>
```

## Questions?

Check the `src/lib/svgLoader.ts` file for implementation details or open an issue.
