# Carousel Icons System Update

## Summary
Updated the carousel icon system to dynamically extract and display icons from the `/src/assets/icons/carousel/` folder instead of using hardcoded technology icons.

## Changes Made

### 1. Updated `src/lib/svgLoader.ts`
- Added `carouselIconSvgs` export that loads complete SVG files from the carousel folder
- Added `getSvgContent()` function to retrieve full SVG content
- Updated type definitions to support the new carousel icon system
- Deprecated `carouselIconPaths` since carousel icons are complete SVG files, not just paths

**Key Changes:**
```typescript
// New: Load carousel icons as complete SVG files
const carouselIconsRaw = import.meta.glob<{ default: string }>(
  '/src/assets/icons/carousel/*.svg',
  { query: '?raw', eager: true }
);

// Export full SVG content for carousel icons
export const carouselIconSvgs = processFullSvg(carouselIconsRaw);
```

### 2. Updated `src/components/InfiniteCarousel.tsx`
- Replaced hardcoded technology icon components with dynamic icon loading
- Created `CarouselIcon` component that renders SVG content from the carousel folder
- Created `IconsRow` component that dynamically maps all available carousel icons
- Automatically calculates carousel width based on number of icons
- Filters out utility/shared icon fragments (rounded-rect, vercel parts, ruby parts, photoshop parts)

**Key Changes:**
```typescript
// New dynamic icon component
function CarouselIcon({ name }: CarouselIconProps) {
  const svgContent = carouselIconSvgs[name];
  return (
    <div className="bg-[#edefeb] box-border relative rounded-[7px] shrink-0 size-[48px]">
      <div dangerouslySetInnerHTML={{ __html: svgContent }} />
    </div>
  );
}

// Dynamic icon row generation
function IconsRow() {
  const iconNames = getAvailableIcons('carousel').filter((name: string) => 
    !name.includes('rounded-rect') && 
    !name.includes('vercel-') &&
    !name.includes('ruby-part') &&
    !name.includes('photoshop-')
  );
  
  return (
    <div className="flex gap-[8px] items-center">
      {iconNames.map((iconName: string) => (
        <CarouselIcon key={iconName} name={iconName} />
      ))}
    </div>
  );
}
```

## Current Carousel Icons
The carousel folder (`/src/assets/icons/carousel/`) now contains 14 company/brand logos:
1. abarth.svg
2. aesthetic curators.svg
3. cathworks.svg
4. credcore.svg
5. emmpact.svg
6. fiat.svg
7. neurobrave.svg
8. orchestra.svg
9. photoshield.svg
10. planpolitik.svg
11. primak.svg
12. queue.svg
13. uto.svg
14. vay.svg

## Benefits

1. **Dynamic Loading**: Icons are automatically loaded from the carousel folder - no need to update component code when adding/removing icons
2. **Easy Maintenance**: Simply add or remove SVG files in `/src/assets/icons/carousel/` to update the carousel
3. **Type Safety**: TypeScript types are automatically generated from the available icons
4. **Clean Code**: Removed 300+ lines of hardcoded component definitions
5. **Flexible**: Carousel width and animation automatically adjust based on the number of icons

## Usage

### To Add a New Icon to the Carousel:
1. Place your SVG file in `/src/assets/icons/carousel/`
2. The icon will automatically appear in the carousel
3. No code changes required!

### To Remove an Icon:
1. Delete the SVG file from `/src/assets/icons/carousel/`
2. The icon will automatically be removed from the carousel
3. No code changes required!

## Technical Notes

- Carousel icons are rendered as complete SVG elements using `dangerouslySetInnerHTML`
- Icons maintain their original viewBox and styling from the SVG files
- Each icon is wrapped in a consistent container with border and background
- The carousel animation speed adjusts automatically based on the number of icons
- Icons are filtered to exclude internal utility SVG fragments

## Next Steps

If you want to use the old technology icons (React, Vite, TypeScript, etc.), you can:
1. Move them to the carousel folder as individual SVG files, or
2. Keep them in a separate folder and update the import path in `svgLoader.ts`
