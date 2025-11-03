import { describe, it, expect } from 'vitest';
import { buildImgStyle } from '../lib/imageStyle';
import type { ProjectImage } from '../data/projects';

describe('buildImgStyle', () => {
  it('maps full image settings exactly (cover fallback)', () => {
    const img: ProjectImage = {
      src: 'x',
      alt: 'a',
      objectFit: 'contain',
      objectPosition: 'top left',
      scale: 1.25,
      translateX: '10px',
      translateY: '-5px',
    };

    const style = buildImgStyle(img, 'cover');

    expect(style).toEqual({
      objectFit: 'contain',
      objectPosition: 'top left',
      transform: 'scale(1.25) translate(10px, -5px)',
      transformOrigin: 'top left',
    });
  });

  it('applies defaults when fields are missing (cover fallback)', () => {
    const img: ProjectImage = {
      src: 'x',
      alt: 'a',
    };

    const style = buildImgStyle(img); // default fallbackFit = 'cover'

    expect(style).toEqual({
      objectFit: 'cover',
      objectPosition: 'center',
      transform: 'scale(1) translate(0, 0)',
      transformOrigin: 'center',
    });
  });

  it('uses fallbackFit="none" for modal parity', () => {
    const img: ProjectImage = {
      src: 'x',
      alt: 'a',
    };

    const style = buildImgStyle(img, 'none');

    expect(style).toEqual({
      objectFit: 'none',
      objectPosition: 'center',
      transform: 'scale(1) translate(0, 0)',
      transformOrigin: 'center',
    });
  });
});
