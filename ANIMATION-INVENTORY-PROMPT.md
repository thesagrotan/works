# Animation Inventory & Integration Prompt

## Task: Add All Current Animations to the Leva Control Panel

Add controls for every animation currently used in the project to the existing Leva animation control panel.

---

## Current Animations in the Project

### 1. **Infinite Carousel Animation** ✅ (Already Implemented)
**Location:** `src/components/InfiniteCarousel.tsx`
- **Type:** Continuous horizontal scroll
- **Properties:** 
  - `animate.x`: `[0, -804]`
  - `transition.duration`: Currently controlled (20s default, 5-60s range)
  - `transition.ease`: `"linear"`
  - `transition.repeat`: `Infinity`
- **Current Controls:** ✅ Duration slider, Enable/disable toggle

---

### 2. **Project Card Hover Scale** ✅ (Already Implemented)
**Location:** `src/components/HomePage.tsx` - `PortfolioProjectCard` component
- **Type:** Scale on hover (3 images per card)
- **Properties:**
  - `whileHover.scale`: Currently controlled (1.05 default, 1.0-1.3 range)
  - `transition.duration`: Currently controlled (0.3s default, 0.1-1.0s range)
- **Current Controls:** ✅ Scale slider, Duration slider

---

### 3. **Project Modal Backdrop Fade** ❌ (Not Implemented)
**Location:** `src/components/ProjectModal.tsx` - Backdrop overlay
- **Type:** Fade in/out
- **Properties:**
  - `initial.opacity`: `0`
  - `animate.opacity`: `1`
  - `exit.opacity`: `0`
  - `transition.duration`: `0.2` (hardcoded)
- **Suggested Controls:**
  - Backdrop fade duration: 0.1-1.0s slider
  - Backdrop opacity: 0.2-0.8 slider (for the final opacity when visible)

---

### 4. **Project Modal Slide Up** ❌ (Not Implemented)
**Location:** `src/components/ProjectModal.tsx` - Main modal container
- **Type:** Slide up from bottom (spring animation)
- **Properties:**
  - `initial.y`: `'100%'`
  - `animate.y`: `0`
  - `exit.y`: `'100%'`
  - `transition.type`: `'spring'`
  - `transition.damping`: `30` (hardcoded)
  - `transition.stiffness`: `300` (hardcoded)
- **Suggested Controls:**
  - Modal spring damping: 10-50 slider
  - Modal spring stiffness: 100-500 slider

---

### 5. **Project Modal Layout Animations** ❌ (Not Implemented)
**Location:** `src/components/ProjectModal.tsx` - Image grid (3 images)
- **Type:** Shared layout animation (layoutId)
- **Properties:**
  - Uses `layoutId` to animate images from HomePage cards to modal
  - Each image has a layoutId: `${projectId}-img-1`, `${projectId}-img-2`, `${projectId}-img-3`
  - No explicit transition config (uses Framer Motion defaults)
- **Suggested Controls:**
  - Layout transition duration: 0.3-1.5s slider
  - Layout transition type: Dropdown ("spring" | "tween")
  - Layout spring damping: 15-40 slider (only when type is spring)
  - Layout spring stiffness: 100-400 slider (only when type is spring)

---

### 6. **Button Hover Transitions** ❌ (Not Implemented)
**Location:** `src/components/HomePage.tsx` - "Chat with me" buttons (2 instances)
- **Type:** CSS transition on hover
- **Properties:**
  - `hover:bg-stone-700`
  - `transition-colors` (CSS class, not Framer Motion)
  - Default duration: ~150ms (Tailwind default)
- **Suggested Controls:**
  - Button hover duration: 0.1-0.5s slider
  - Button hover scale: 1.0-1.1x slider (add scale effect)
  - Convert to motion.button for control

---

### 7. **Back Button Hover** ❌ (Not Implemented)
**Location:** `src/components/ProjectModal.tsx` - Back button SVG
- **Type:** CSS transition on hover
- **Properties:**
  - `group-hover:fill-stone-600`
  - `transition-colors` (CSS class)
- **Suggested Controls:**
  - Back button hover duration: 0.1-0.5s slider
  - Convert to motion.svg for control

---

### 8. **Close Button Hover** ❌ (Not Implemented)
**Location:** `src/components/ProjectModal.tsx` - X close button
- **Type:** CSS transition on hover
- **Properties:**
  - `hover:bg-stone-200`
  - `transition-colors` (CSS class)
  - `rounded-full`
- **Suggested Controls:**
  - Close button hover duration: 0.1-0.5s slider
  - Close button hover scale: 1.0-1.2x slider
  - Convert to motion.button for control

---

## Implementation Instructions

### Step 1: Update AnimationControls.tsx

Add new controls to the existing `useAnimationControls` function:

```tsx
export function useAnimationControls() {
  const controls = useControls({
    // ===== Carousel (Existing) =====
    'Carousel': folder({
      carouselEnabled: { value: true, label: 'Enable' },
      carouselDuration: { value: 20, min: 5, max: 60, step: 1, label: 'Duration (s)' },
    }),
    
    // ===== Card Hover (Existing) =====
    'Card Hover': folder({
      cardHoverScale: { value: 1.05, min: 1.0, max: 1.3, step: 0.01, label: 'Scale' },
      cardHoverDuration: { value: 0.3, min: 0.1, max: 1.0, step: 0.05, label: 'Duration (s)' },
    }),
    
    // ===== Modal Backdrop (New) =====
    'Modal Backdrop': folder({
      backdropFadeDuration: { value: 0.2, min: 0.1, max: 1.0, step: 0.05, label: 'Fade Duration (s)' },
      backdropOpacity: { value: 0.4, min: 0.2, max: 0.8, step: 0.05, label: 'Opacity' },
    }),
    
    // ===== Modal Slide (New) =====
    'Modal Slide': folder({
      modalDamping: { value: 30, min: 10, max: 50, step: 1, label: 'Spring Damping' },
      modalStiffness: { value: 300, min: 100, max: 500, step: 10, label: 'Spring Stiffness' },
    }),
    
    // ===== Layout Animations (New) =====
    'Layout Transition': folder({
      layoutDuration: { value: 0.5, min: 0.3, max: 1.5, step: 0.05, label: 'Duration (s)' },
      layoutType: { value: 'spring', options: ['spring', 'tween'], label: 'Type' },
      layoutDamping: { value: 25, min: 15, max: 40, step: 1, label: 'Spring Damping' },
      layoutStiffness: { value: 250, min: 100, max: 400, step: 10, label: 'Spring Stiffness' },
    }),
    
    // ===== Button Effects (New) =====
    'Button Hover': folder({
      buttonHoverDuration: { value: 0.15, min: 0.1, max: 0.5, step: 0.05, label: 'Duration (s)' },
      buttonHoverScale: { value: 1.02, min: 1.0, max: 1.1, step: 0.01, label: 'Scale' },
    }),
    
    // ===== Close/Back Buttons (New) =====
    'Icon Buttons': folder({
      iconButtonDuration: { value: 0.15, min: 0.1, max: 0.5, step: 0.05, label: 'Duration (s)' },
      closeButtonScale: { value: 1.1, min: 1.0, max: 1.2, step: 0.05, label: 'Close Scale' },
    }),
  });

  return controls;
}
```

### Step 2: Update ProjectModal.tsx

**Backdrop:**
```tsx
const { backdropFadeDuration, backdropOpacity } = useAnimationControls();

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: backdropOpacity }}
  exit={{ opacity: 0 }}
  transition={{ duration: backdropFadeDuration }}
  className="fixed inset-0 bg-black z-40 backdrop-blur-sm"
  style={{ backgroundColor: `rgba(0, 0, 0, ${backdropOpacity})` }}
  onClick={onClose}
/>
```

**Modal Slide:**
```tsx
const { modalDamping, modalStiffness } = useAnimationControls();

<motion.div
  initial={{ y: '100%' }}
  animate={{ y: 0 }}
  exit={{ y: '100%' }}
  transition={{ 
    type: 'spring', 
    damping: modalDamping, 
    stiffness: modalStiffness 
  }}
  className="fixed inset-0 z-50 overflow-y-auto"
>
```

**Layout Animations:**
```tsx
const { layoutDuration, layoutType, layoutDamping, layoutStiffness } = useAnimationControls();

<motion.div 
  layoutId={`${projectId}-img-3`}
  transition={
    layoutType === 'spring' 
      ? { type: 'spring', damping: layoutDamping, stiffness: layoutStiffness }
      : { duration: layoutDuration }
  }
  className="bg-stone-50 h-auto relative rounded-[8px] shrink-0 w-full lg:w-[calc(60%-20px)]"
>
```

**Buttons:**
```tsx
const { iconButtonDuration, closeButtonScale } = useAnimationControls();

<motion.button 
  onClick={onClose} 
  whileHover={{ scale: closeButtonScale }}
  transition={{ duration: iconButtonDuration }}
  className="p-2 hover:bg-stone-200 rounded-full"
>
  <X className="w-6 h-6 text-stone-800" />
</motion.button>
```

### Step 3: Update HomePage.tsx Buttons

**Convert "Chat with me" buttons:**
```tsx
const { buttonHoverDuration, buttonHoverScale } = useAnimationControls();

<motion.div 
  whileHover={{ scale: buttonHoverScale }}
  transition={{ duration: buttonHoverDuration }}
  className="bg-stone-800 box-border content-stretch flex gap-[13px] items-start px-[18px] py-[15px] relative rounded-[14px] shadow-[...] shrink-0 cursor-pointer"
>
  <div className="flex flex-col justify-center leading-none relative shrink-0 text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
    <p className="text-button whitespace-pre">Chat with me</p>
  </div>
</motion.div>
```

### Step 4: Add LayoutGroup for Better Control

Wrap HomePage in LayoutGroup to control shared layout animations:

```tsx
import { LayoutGroup } from 'motion/react';

export default function HomePage({ onProjectClick }: HomePageProps) {
  return (
    <LayoutGroup>
      {/* existing content */}
    </LayoutGroup>
  );
}
```

---

## Testing Checklist

After implementation, verify each control works:

- [ ] Carousel speed changes dynamically
- [ ] Carousel can be toggled on/off
- [ ] Card hover scale adjusts
- [ ] Card hover duration adjusts
- [ ] Modal backdrop fade speed changes
- [ ] Modal backdrop opacity changes
- [ ] Modal slide spring damping affects bounce
- [ ] Modal slide spring stiffness affects speed
- [ ] Layout transition duration works (if using tween)
- [ ] Layout spring settings work (if using spring)
- [ ] Button hover scale changes
- [ ] Button hover duration changes
- [ ] Close button hover scale changes
- [ ] Icon button durations change

---

## Notes

- Use the `folder` helper from Leva to organize controls into collapsible sections
- Add `key` props where needed to force re-renders when values change (like with the carousel)
- For layout animations, may need to wrap in `LayoutGroup` with a key based on settings
- Consider adding a "Reset to Defaults" button in Leva
- Some animations may need component remounts to apply changes - use keys strategically
