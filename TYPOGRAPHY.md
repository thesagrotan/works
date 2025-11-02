# Typography System Documentation

## Overview

This project now has a unified typography system defined in `/src/styles/typography.css`. All text properties (font families, sizes, weights, line heights, letter spacing, and colors) are centralized using CSS custom properties and utility classes.

## Usage

### Import

The typography styles are automatically imported in `src/main.tsx`:

```tsx
import "./styles/typography.css";
```

### CSS Custom Properties (Design Tokens)

You can use these CSS variables directly in your styles:

#### Font Families
- `--font-sf-pro`: SF Pro font family
- `--font-sf-pro-display`: SF Pro Display font family

#### Font Sizes
- `--text-xs`: 0px
- `--text-sm`: 18px
- `--text-base`: 20px
- `--text-lg`: 22px
- `--text-xl`: 24px (25px on screens ≥768px)
- `--text-2xl`: 25px

#### Line Heights
- `--leading-none`: 0
- `--leading-tight`: 18px
- `--leading-snug`: 26px
- `--leading-normal`: 28px

#### Letter Spacing (Tracking)
- `--tracking-tight`: -0.18px
- `--tracking-xs`: 0.027px
- `--tracking-sm`: 0.036px
- `--tracking-base`: 0.0375px

#### Font Weights
- `--font-regular`: 400
- `--font-medium`: 500
- `--font-semibold`: 510
- `--font-bold`: 700

#### Text Colors
- `--text-primary`: #323e45 (dark gray)
- `--text-secondary`: #edefeb (light cream)
- `--text-black`: #000000

### Utility Classes

#### Font Families
```html
<p class="font-sf-pro">Text with SF Pro</p>
<p class="font-sf-pro-display">Text with SF Pro Display</p>
```

#### Font Weights
```html
<p class="font-regular">Regular weight text</p>
<p class="font-medium">Medium weight text</p>
<p class="font-semibold">Semibold weight text</p>
<p class="font-bold">Bold weight text</p>
```

#### Font Sizes
```html
<p class="text-xs">Extra small text</p>
<p class="text-sm">Small text (18px)</p>
<p class="text-base">Base text (20px)</p>
<p class="text-lg">Large text (22px)</p>
<p class="text-xl">Extra large text (24px)</p>
<p class="text-2xl">2XL text (25px)</p>
```

#### Line Heights
```html
<p class="leading-none">No line height</p>
<p class="leading-tight">Tight line height (18px)</p>
<p class="leading-snug">Snug line height (26px)</p>
<p class="leading-normal">Normal line height (28px)</p>
```

#### Letter Spacing
```html
<p class="tracking-tight">Tight tracking</p>
<p class="tracking-xs">Extra small tracking</p>
<p class="tracking-sm">Small tracking</p>
<p class="tracking-base">Base tracking</p>
```

#### Text Colors
```html
<p class="text-primary">Primary color text</p>
<p class="text-secondary">Secondary color text</p>
<p class="text-black">Black text</p>
```

### Composite Typography Classes

These classes combine multiple properties for common text styles:

#### Hero Text
```html
<!-- Regular hero text (24px, regular weight) -->
<p class="text-hero">Large display text for hero sections</p>

<!-- Bold hero text (24px, semibold weight) -->
<p class="text-hero-bold">Bold hero text</p>
```

#### Headings
```html
<!-- Standard heading (24px, semibold) -->
<h2 class="text-heading">Section Heading</h2>

<!-- Large heading (25px, semibold) -->
<h1 class="text-heading-lg">Main Heading</h1>
```

#### Body Text
```html
<!-- Standard body text (18px, line-height: 28px) -->
<p class="text-body">This is body text with normal line height.</p>

<!-- Alternative body text (18px, line-height: 26px) -->
<p class="text-body-alt">Body text with tighter line height.</p>
```

#### Button/CTA Text
```html
<!-- Button text (18px, semibold, tight tracking) -->
<button>
  <span class="text-button">Click Me</span>
</button>
```

#### Project Information
```html
<!-- Project title (24px, semibold, black) -->
<h3 class="text-project-title">Project Name</h3>

<!-- Project date (24px, regular, black) -->
<p class="text-project-date">2023-2025</p>
```

## Before and After Examples

### Before (Inline Styles)
```tsx
<p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#323e45] text-[18px] tracking-[0.027px] w-[144px]">
  UX/UI Design
</p>
```

### After (Unified Classes)
```tsx
<p className="text-body not-italic relative shrink-0 w-[144px]">
  UX/UI Design
</p>
```

### Benefits
1. **Consistency**: All text styles follow the same design system
2. **Maintainability**: Change font sizes, weights, or colors in one place
3. **Readability**: Shorter, more semantic class names
4. **Flexibility**: Mix and match utility classes as needed
5. **Performance**: Reusable CSS classes reduce bundle size

## Customization

To modify the typography system, edit `/src/styles/typography.css`:

1. **Change font sizes**: Update the `--text-*` custom properties
2. **Add new styles**: Create new composite classes
3. **Adjust spacing**: Modify `--tracking-*` or `--leading-*` values
4. **Update colors**: Change `--text-*` color values

## Responsive Typography

The system includes responsive adjustments:

```css
@media (width >= 48rem) {
  :root {
    --text-xl: 25px; /* Increases from 24px on larger screens */
  }
}
```

## Migration Guide

To migrate existing components:

1. Identify inline font styles
2. Find the matching composite class or combination of utility classes
3. Replace the inline styles with the appropriate classes
4. Test the visual appearance
5. Remove unused inline style properties

Example component already migrated:
- `src/components/HomePage.tsx` - Uses new typography classes throughout

## Additional Resources

- Original styles: `/src/index.css` (Tailwind CSS utilities)
- Global styles: `/src/styles/globals.css`
- Typography system: `/src/styles/typography.css` (new)
