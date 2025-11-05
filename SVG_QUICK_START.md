# Quick Start: New SVG System

## TL;DR
Your SVG icons are now in folders instead of hardcoded objects. Everything still works!

## File Locations

```
src/assets/icons/
├── hero/       (48 icons)
├── carousel/   (34 icons)
└── logo/       (1 icon)
```

## How to Use

### Import in Components
```tsx
import { heroIconPaths, carouselIconPaths, logoIconSvgs } from '@/lib/svgLoader';

// Get a specific icon path
const path = heroIconPaths['p11a74280'];

// Use in JSX
<path d={path} fill="currentColor" />
```

### Use HeroIcon Component
```tsx
import { HeroIcon } from '@/components/HeroIcon';

<HeroIcon name="p11a74280" size={32} />
```

## Adding New Icons

1. Save your SVG file to the appropriate folder:
```bash
cp my-icon.svg src/assets/icons/hero/
```

2. Use it immediately:
```tsx
<HeroIcon name="my-icon" size={32} />
```

That's it! No config files to update.

## Renaming Icons

Currently icons have hash names like `p11a74280.svg`. To rename:

```bash
cd src/assets/icons/hero
mv p11a74280.svg arrow-left.svg
```

Then update your code:
```tsx
// Before
<HeroIcon name="p11a74280" />

// After  
<HeroIcon name="arrow-left" />
```

## Build & Test

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm test         # Run tests
```

## Status: ✅ Ready to Use

Your project builds successfully and all components work with the new system!

---

For more details, see:
- `MIGRATION_SUMMARY.md` - Complete overview
- `docs/SVG_MIGRATION.md` - Full migration guide
- `src/assets/icons/README.md` - Usage examples
