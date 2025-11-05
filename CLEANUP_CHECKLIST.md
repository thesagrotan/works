# Cleanup Checklist

After successfully migrating to the folder-based SVG system, you can safely remove the old files.

## Safe to Delete

These old files are no longer used:

```bash
# Old SVG path objects (no longer imported anywhere)
src/imports/svg-hero-paths.ts
src/imports/svg-carousel-icon-paths.ts  
src/imports/svg-logo-paths.tsx

# Remove them:
rm src/imports/svg-hero-paths.ts
rm src/imports/svg-carousel-icon-paths.ts
rm src/imports/svg-logo-paths.tsx

# If the imports directory is now empty:
rmdir src/imports
```

## Verification Before Deletion

Double-check nothing imports them:

```bash
# Should return no results:
grep -r "from.*imports/svg" src/
grep -r "import.*svg.*paths" src/
```

## After Cleanup

Your SVG system will be fully migrated:

**Before:**
```
src/imports/
├── svg-hero-paths.ts (3000+ lines)
├── svg-carousel-icon-paths.ts (2000+ lines)
└── svg-logo-paths.tsx (100+ lines)
```

**After:**
```
src/assets/icons/
├── hero/ (48 individual SVG files)
├── carousel/ (34 individual SVG files)
└── logo/ (1 SVG file)

src/lib/
├── svgLoader.ts (dynamic loader)
└── logoComponents.ts (grouped compositions)
```

## Build Status

✅ Production build works: `npm run build`  
✅ All tests pass: `npm test`  
⚠️ TypeScript errors from old files (will go away after deletion)

## Next Steps

1. **Delete old files** (see commands above)
2. **Optional**: Rename SVG files from `p1d34c480.svg` to descriptive names like `arrow-left.svg`
3. **Optional**: Create more logo compositions in `logoComponents.ts` if you have other multi-part logos

The new system is production-ready! 🎉
