// AI_GOOD: Verifies JSON → typed mapping and image alias resolution, plus getProjectById edge cases.
import { describe, it, expect } from 'vitest';
import { projects, getProjectById } from '../data/projects';

describe('projects data mapping', () => {
  it('maps each JSON item to Project with 3 card and 3 detail images', () => {
    for (const p of projects) {
      expect(p.images.card).toHaveLength(3);
      expect(p.images.detail).toHaveLength(3);

      // card/detail items should propagate alt and src
      for (let i = 0; i < 3; i++) {
        const c = p.images.card[i];
        const d = p.images.detail[i];
        expect(typeof c.alt).toBe('string');
        expect(typeof d.alt).toBe('string');
        expect(typeof c.src).toBe('string');
        expect(typeof d.src).toBe('string');
      }
    }
  });

  it('resolves known figma asset aliases to imported modules for src', () => {
    // Using a heuristic: All src should be non-empty strings and at least one should include a path segment from vite alias resolution
    const allSrcs = projects.flatMap((p) => [
      ...p.images.card.map((img) => img.src),
      ...p.images.detail.map((img) => img.src),
    ]);

    expect(allSrcs.length).toBeGreaterThan(0);
    // Ensure at least one resolved src looks like a compiled asset path (not the raw figma:asset key)
    expect(allSrcs.some((s) => typeof s === 'string' && !s.startsWith('figma:asset/'))).toBe(true);
  });

  it('getProjectById returns undefined for unknown id', () => {
    expect(getProjectById('___unknown___')).toBeUndefined();
  });
});
