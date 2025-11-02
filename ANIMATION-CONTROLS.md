# Animation Controls Panel

This project now includes a testing panel powered by [Leva](https://github.com/pmndrs/leva) for controlling and testing animations in real-time.

## Features

The animation control panel allows you to adjust the following parameters:

### Carousel Animation Controls
- **Enable Carousel Animation**: Toggle the infinite carousel animation on/off
- **Carousel Duration (s)**: Adjust the speed of the carousel (5-60 seconds)

### Card Hover Effects
- **Card Hover Scale**: Control how much the project cards scale on hover (1.0-1.3x)
- **Card Hover Duration (s)**: Adjust the speed of the hover animation (0.1-1.0 seconds)

## How to Use

1. **Access the Panel**: When you run the development server (`npm run dev`), the Leva control panel appears in the top-right corner of the screen.

2. **Adjust Parameters**: Use the sliders and toggles to modify animation values in real-time.

3. **Test Animations**: 
   - Hover over project cards to see the hover effects
   - Watch the technology carousel animate with your custom settings
   - Toggle the carousel on/off to freeze/unfreeze it

## Implementation Details

### Components

- **`AnimationControls.tsx`**: Custom React hook that wraps Leva controls
- **`HomePage.tsx`**: Consumes animation controls for project card hover effects
- **`InfiniteCarousel.tsx`**: Consumes animation controls for carousel speed and enable/disable
- **`App.tsx`**: Includes the `<Leva />` component to render the control panel

### Library Used

**Leva** - A GUI controls library for React
- GitHub: https://github.com/pmndrs/leva
- Provides a lightweight, customizable control panel
- Perfect for testing and tweaking parameters during development

## Customizing the Controls

To add new animation controls, edit `src/components/AnimationControls.tsx`:

```tsx
export function useAnimationControls() {
  const controls = useControls('Animation Controls', {
    // Add your new control here
    myNewControl: {
      value: 1.0,
      min: 0,
      max: 2,
      step: 0.1,
      label: 'My New Control',
    },
    // ... existing controls
  });

  return {
    myNewControl: controls.myNewControl,
    // ... existing returns
  };
}
```

Then use it in any component:

```tsx
import { useAnimationControls } from './AnimationControls';

function MyComponent() {
  const { myNewControl } = useAnimationControls();
  // Use myNewControl in your animations
}
```

## Production Build

For production builds, you may want to hide the Leva panel. You can do this by:

1. Setting the `hidden` prop on the Leva component:
```tsx
<Leva collapsed={false} hidden={process.env.NODE_ENV === 'production'} />
```

2. Or removing the `<Leva />` component from `App.tsx` entirely before deploying.

## Benefits

- **Faster Development**: No need to edit code and refresh to test different animation values
- **Visual Feedback**: See changes immediately
- **Easy Experimentation**: Try different combinations to find the perfect settings
- **Testing Tool**: Great for QA and design review sessions
