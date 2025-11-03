// AI_GOOD: Pure function tests for getModalVariants to lock exact keys and parameter propagation.
import { describe, it, expect } from 'vitest';
import { getModalVariants } from '../animation/modalVariants';

describe('getModalVariants', () => {
  it('returns correct shapes for fade', () => {
    const v = getModalVariants('fade', 0.8, 15);
    expect(Object.keys(v)).toEqual(['initial', 'animate', 'exit']);
    expect(v.initial).toEqual({ opacity: 0 });
    expect(v.animate).toEqual({ opacity: 1 });
    expect(v.exit).toEqual({ opacity: 0 });
  });

  it('returns correct shapes for scale with provided scaleFrom', () => {
    const v = getModalVariants('scale', 0.75, 0);
    expect(v.initial).toEqual({ opacity: 0, scale: 0.75 });
    expect(v.animate).toEqual({ opacity: 1, scale: 1 });
    expect(v.exit).toEqual({ opacity: 0, scale: 0.75 });
  });

  it('returns correct shapes for rotate with provided rotateFrom and scaleFrom', () => {
    const v = getModalVariants('rotate', 0.9, 25);
    expect(v.initial).toEqual({ opacity: 0, scale: 0.9, rotate: 25 });
    expect(v.animate).toEqual({ opacity: 1, scale: 1, rotate: 0 });
    expect(v.exit).toEqual({ opacity: 0, scale: 0.9, rotate: 25 });
  });

  it('returns correct shapes for popup', () => {
    const v = getModalVariants('popup', 0.5, 0);
    expect(v.initial).toEqual({ opacity: 0, scale: 0.5, y: 20 });
    expect(v.animate).toEqual({ opacity: 1, scale: 1, y: 0 });
    expect(v.exit).toEqual({ opacity: 0, scale: 0.5, y: 20 });
  });

  it('returns slide-up by default (unknown effect)', () => {
    const v = getModalVariants('unknown-sentinel', 1, 0);
    expect(v.initial).toEqual({ y: '100%' });
    expect(v.animate).toEqual({ y: 0 });
    expect(v.exit).toEqual({ y: '100%' });
  });

  it('returns slide-up explicitly for slide-up', () => {
    const v = getModalVariants('slide-up', 1, 0);
    expect(v.initial).toEqual({ y: '100%' });
    expect(v.animate).toEqual({ y: 0 });
    expect(v.exit).toEqual({ y: '100%' });
  });
});
