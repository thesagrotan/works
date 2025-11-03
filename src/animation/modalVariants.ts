// Extracted from ProjectModal.tsx — preserves exact semantics and return shapes.
// AI_GOOD: This is a 1:1 move of the original getModalVariants logic with no behavior changes.

export function getModalVariants(effect: string, scaleFrom: number, rotateFrom: number) {
  // AI_GOOD: Keep local transitionConfig even if unused by callers to match original scope and potential future wiring.
  const transitionConfig = {
    spring: { type: 'spring', damping: 30, stiffness: 300 },
    tween: { duration: 0.5 }
  };

  switch (effect) {
    case 'fade':
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
      } as const;
    case 'scale':
      return {
        initial: { opacity: 0, scale: scaleFrom },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: scaleFrom }
      } as const;
    case 'rotate':
      return {
        initial: { opacity: 0, scale: scaleFrom, rotate: rotateFrom },
        animate: { opacity: 1, scale: 1, rotate: 0 },
        exit: { opacity: 0, scale: scaleFrom, rotate: rotateFrom }
      } as const;
    case 'popup':
      return {
        initial: { opacity: 0, scale: 0.5, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.5, y: 20 }
      } as const;
    case 'slide-up':
    default:
      // AI_CLARIFY: Default branch returns 'slide-up' behavior; upstream Leva default is 'fade'. Keeping original default here.
      return {
        initial: { y: '100%' },
        animate: { y: 0 },
        exit: { y: '100%' }
      } as const;
  }
}

export type ModalVariants = ReturnType<typeof getModalVariants>;
