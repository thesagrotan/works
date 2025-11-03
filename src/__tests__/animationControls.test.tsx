// AI_GOOD: Locks default values returned by useAnimationControls without rendering Leva UI.
import { describe, it, expect, vi } from 'vitest';
import React, { useRef } from 'react';
import { render } from '@testing-library/react';

// Mock leva to emulate returning defaults declared in schema.
vi.mock('leva', () => {
  // folder just returns its inner object; labels/metadata ignored for tests
  const folder = (obj: Record<string, any>) => obj;
  const useControls = (_name: string, schema: Record<string, any>) => {
    // schema has groups created via folder(); flatten to a single object extracting .value
    const output: Record<string, any> = {};
    for (const groupKey of Object.keys(schema)) {
      const group = (schema as any)[groupKey];
      for (const controlKey of Object.keys(group)) {
        const control = group[controlKey];
        // If control is a plain value (unlikely), use as-is; otherwise prefer .value
        output[controlKey] = control && typeof control === 'object' && 'value' in control ? control.value : control;
      }
    }
    return output;
  };
  return { folder, useControls };
});

import { useAnimationControls } from '../components/AnimationControls';

function Probe({ onValue }: { onValue: (v: any) => void }) {
  const ref = useRef<any>(null);
  const v = useAnimationControls();
  ref.current = v;
  onValue(v);
  return null;
}

describe('useAnimationControls defaults', () => {
  it('returns expected default values from schema', () => {
    let captured: any = null;
    render(<Probe onValue={(v) => (captured = v)} />);

    // Spot-check a representative set of defaults rather than every field
    expect(captured.carouselEnabled).toBe(true);
    expect(captured.carouselDuration).toBe(80);

    expect(captured.cardHoverScale).toBeCloseTo(1.05);
    expect(captured.cardHoverDuration).toBeCloseTo(0.3);

    expect(captured.backdropFadeDuration).toBeCloseTo(0.2);
    expect(captured.backdropOpacity).toBeCloseTo(0.4);

    expect(captured.modalDamping).toBe(30);
    expect(captured.modalStiffness).toBe(300);

    expect(captured.modalAppearanceEffect).toBe('fade');
    expect(captured.modalScaleFrom).toBeCloseTo(0.9);
    expect(Math.abs(captured.modalRotateFrom)).toBe(5);

    expect(captured.layoutType).toBe('spring');
    expect(captured.layoutDuration).toBeCloseTo(0.5);
    expect(captured.layoutDamping).toBe(30);
    expect(captured.layoutStiffness).toBe(250);
    expect(captured.layoutExitDamping).toBe(25);

    expect(captured.buttonHoverDuration).toBeCloseTo(0.15);
    expect(captured.buttonHoverScale).toBeCloseTo(1.02);

    expect(captured.iconButtonDuration).toBeCloseTo(0.15);
    expect(captured.closeButtonScale).toBeCloseTo(1.1);
  });
});
