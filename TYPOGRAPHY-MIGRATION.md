# Typography Migration Reference

## Quick Class Mapping

This document provides a quick reference for migrating from inline font styles to the new unified typography classes.

### Common Pattern Replacements

#### 1. Body Text (18px, Regular, 28px line-height)
**Before:**
```tsx
className="font-['SF_Pro_Display:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#323e45] text-[18px] tracking-[0.027px]"
```
**After:**
```tsx
className="text-body not-italic relative shrink-0"
```

#### 2. Body Text Alternative (18px, Regular, 26px line-height)
**Before:**
```tsx
className="font-['SF_Pro_Display:Regular',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#323e45] text-[18px] tracking-[0.027px]"
```
**After:**
```tsx
className="text-body-alt not-italic relative shrink-0"
```

#### 3. Heading Text (20-24px, Semibold)
**Before:**
```tsx
className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#323e45] text-[20px] md:text-[24px] tracking-[0.036px]"
```
**After:**
```tsx
className="text-heading not-italic relative shrink-0 md:text-xl"
```

#### 4. Large Heading (25px, Semibold)
**Before:**
```tsx
className="font-['SF_Pro_Display:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#323e45] text-[25px] tracking-[0.0375px]"
```
**After:**
```tsx
className="text-heading-lg not-italic relative shrink-0"
```

#### 5. Hero Text (20-24px, Regular)
**Before:**
```tsx
className="font-['SF_Pro_Display:Regular',sans-serif] leading-[28px] relative shrink-0 text-[20px] md:text-[24px]"
```
**After:**
```tsx
className="text-hero relative shrink-0 md:text-xl"
```

#### 6. Button Text (18px, Medium, Tight tracking)
**Before:**
```tsx
className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[0] relative shrink-0 text-[#edefeb] text-[18px] text-nowrap tracking-[-0.18px]"
```
**After:**
```tsx
className="text-button relative shrink-0 text-nowrap"
```

#### 7. Project Title (24px, Semibold, Black)
**Before:**
```tsx
className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-black text-[24px] tracking-[0.036px]"
```
**After:**
```tsx
className="text-project-title not-italic relative shrink-0"
```

#### 8. Project Date (24px, Regular, Black)
**Before:**
```tsx
className="font-['SF_Pro_Display:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-black text-[24px] tracking-[0.036px]"
```
**After:**
```tsx
className="text-project-date not-italic relative shrink-0"
```

### Inline Span Styles

#### Semibold Emphasis
**Before:**
```tsx
<span className="font-['SF_Pro_Display:Semibold',sans-serif] not-italic">important text</span>
```
**After:**
```tsx
<span className="font-semibold not-italic">important text</span>
```

#### Regular Emphasis
**Before:**
```tsx
<span className="font-['SF_Pro_Display:Regular',sans-serif] not-italic">normal text</span>
```
**After:**
```tsx
<span className="font-regular not-italic">normal text</span>
```

#### Bold Emphasis
**Before:**
```tsx
<span className="font-['SF_Pro_Display:Bold',sans-serif] not-italic">bold text</span>
```
**After:**
```tsx
<span className="font-bold not-italic">bold text</span>
```

### Container Styles

#### Text Container with Base Styles
**Before:**
```tsx
className="content-stretch flex flex-col gap-[32px] items-start leading-[0] not-italic relative shrink-0 text-[#323e45] text-[0px] tracking-[0.036px] w-full"
```
**After:**
```tsx
className="content-stretch flex flex-col gap-[32px] items-start leading-none not-italic relative shrink-0 text-primary text-xs tracking-sm w-full"
```

#### Text Container with Normal Line Height
**Before:**
```tsx
className="content-stretch flex flex-col gap-[32px] items-start leading-[28px] not-italic relative shrink-0 text-[#323e45] w-full"
```
**After:**
```tsx
className="content-stretch flex flex-col gap-[32px] items-start leading-normal not-italic relative shrink-0 text-primary w-full"
```

## CSS Custom Properties Reference

### Use in Styles
You can also use CSS custom properties directly in your stylesheets:

```css
.custom-text {
  font-family: var(--font-sf-pro-display);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-sm);
  color: var(--text-primary);
}
```

### Use in Inline Styles (React)
```tsx
<div style={{ 
  fontSize: 'var(--text-xl)',
  fontWeight: 'var(--font-semibold)',
  color: 'var(--text-primary)'
}}>
  Custom styled text
</div>
```

## Tips for Migration

1. **Search and Replace**: Use your editor's find/replace with regex to batch replace common patterns
2. **Visual Inspection**: Always check the rendered output to ensure styles match
3. **Incremental Approach**: Migrate one component at a time
4. **Test Responsive**: Check styles at different breakpoints (especially md: prefix)
5. **Remove Unused**: Clean up any remaining inline font declarations

## Components Already Migrated

- ✅ `src/components/HomePage.tsx` - Fully migrated with new typography classes

## Components To Migrate

- ⏳ `src/imports/DesktopHomePage.tsx`
- ⏳ `src/imports/DesktopProjectPage.tsx`
- ⏳ Other component files with inline font styles
