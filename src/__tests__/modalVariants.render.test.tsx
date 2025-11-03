// AI_GOOD: Render-time smoke test per effect to ensure ProjectModal mounts without errors for each variant.
import { describe, it, beforeEach, expect, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import * as ControlsModule from '../components/AnimationControls';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/projects';

// Prepare a helper to stub the controls with a given effect
const baseControls = {
  backdropFadeDuration: 0.2,
  backdropOpacity: 0.4,
  modalDamping: 30,
  modalStiffness: 300,
  modalScaleFrom: 0.9,
  modalRotateFrom: 15,
  layoutDuration: 0.3,
  layoutType: 'spring' as const,
  layoutDamping: 20,
  layoutStiffness: 300,
  layoutExitDamping: 25,
  iconButtonDuration: 0.15,
  closeButtonScale: 1.05
};

describe('ProjectModal renders for each modalAppearanceEffect', () => {
  const effects = ['fade', 'scale', 'rotate', 'popup', 'slide-up'] as const;

  beforeEach(() => {
    cleanup();
  });

  for (const effect of effects) {
    it(`renders with effect: ${effect}`, async () => {
      // Spy on hook and mock return values
      const spy = vi.spyOn(ControlsModule, 'useAnimationControls');
      spy.mockReturnValue({
        ...baseControls,
        modalAppearanceEffect: effect
      } as unknown as ReturnType<typeof ControlsModule.useAnimationControls>);

      const project = projects[0];
      const onClose = vi.fn();
      const { container } = render(
        <ProjectModal projectId={project.id} onClose={onClose} />
      );

      // Backdrop should be present; style contains background-color rgba with mocked opacity
      const backdrop = container.querySelector('[style*="rgba(0, 0, 0, 0.4)"]');
      expect(backdrop).toBeInTheDocument();

      // Title should be present to confirm content rendered
      expect(screen.getByText(project.title)).toBeInTheDocument();

      spy.mockRestore();
    });
  }
});
