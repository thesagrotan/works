import { useControls, folder } from 'leva';

export function useAnimationControls() {
  const controls = useControls('Animation Controls', {
    // ===== Carousel =====
    'Carousel': folder({
      carouselEnabled: { value: true, label: 'Enable' },
      carouselDuration: { value: 80, min: 5, max: 60, step: 1, label: 'Duration (s)' },
    }),
    
    // ===== Card Hover =====
    'Card Hover': folder({
      cardHoverScale: { value: 1.05, min: 1.0, max: 1.3, step: 0.01, label: 'Scale' },
      cardHoverDuration: { value: 0.3, min: 0.1, max: 1.0, step: 0.05, label: 'Duration (s)' },
    }),
    
    // ===== Modal Backdrop =====
    'Modal Backdrop': folder({
      backdropFadeDuration: { value: 0.2, min: 0.1, max: 1.0, step: 0.05, label: 'Fade Duration (s)' },
      backdropOpacity: { value: 0.4, min: 0.2, max: 0.8, step: 0.05, label: 'Opacity' },
    }),
    
    // ===== Modal Slide =====
    'Modal Slide': folder({
      modalDamping: { value: 30, min: 10, max: 50, step: 1, label: 'Spring Damping' },
      modalStiffness: { value: 300, min: 100, max: 500, step: 10, label: 'Spring Stiffness' },
    }),

    // ===== Modal Appearance Effect =====
    'Modal Appearance Effect': folder({
      modalAppearanceEffect: { 
        value: 'fade', 
        options: ['slide-up', 'fade', 'scale', 'rotate', 'popup'],
        label: 'Effect Type' 
      },
      modalScaleFrom: { value: 0.9, min: 0.5, max: 1.0, step: 0.05, label: 'Scale Start' },
      modalRotateFrom: { value: -5, min: -45, max: 45, step: 1, label: 'Rotate Start (deg)' },
    }),
    
    // ===== Layout Animations =====
    'Layout Transition': folder({
      layoutDuration: { value: 0.5, min: 0.3, max: 1.5, step: 0.05, label: 'Duration (s)' },
      layoutType: { value: 'spring', options: ['spring', 'tween'], label: 'Type' },
      layoutDamping: { value: 25, min: 15, max: 40, step: 1, label: 'Spring Damping' },
      layoutStiffness: { value: 250, min: 100, max: 400, step: 10, label: 'Spring Stiffness' },
    }),
    
    // ===== Button Effects =====
    'Button Hover': folder({
      buttonHoverDuration: { value: 0.15, min: 0.1, max: 0.5, step: 0.05, label: 'Duration (s)' },
      buttonHoverScale: { value: 1.02, min: 1.0, max: 1.1, step: 0.01, label: 'Scale' },
    }),
    
    // ===== Close/Back Buttons =====
    'Icon Buttons': folder({
      iconButtonDuration: { value: 0.15, min: 0.1, max: 0.5, step: 0.05, label: 'Duration (s)' },
      closeButtonScale: { value: 1.1, min: 1.0, max: 1.2, step: 0.05, label: 'Close Scale' },
    }),
  });

  return controls;
}
