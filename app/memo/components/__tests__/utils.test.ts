import { describe, expect, it } from 'vitest';
import { getTagIconPath } from '../utils';

describe('Component Utils', () => {
  describe('getTagIconPath', () => {
    it('should return correct icon path for supported tags', () => {
      expect(getTagIconPath('react')).toBe('/images/react.svg');
      expect(getTagIconPath('typescript')).toBe('/images/typescript.svg');
      expect(getTagIconPath('nextjs')).toBe('/images/nextjs.svg');
      expect(getTagIconPath('astro')).toBe('/images/astro.svg');
    });

    it('should handle case insensitive tags', () => {
      expect(getTagIconPath('REACT')).toBe('/images/react.svg');
      expect(getTagIconPath('React')).toBe('/images/react.svg');
      expect(getTagIconPath('rEaCt')).toBe('/images/react.svg');
    });

    it('should return favicon for unsupported tags', () => {
      expect(getTagIconPath('unknown')).toBe('/images/favicon.png');
      expect(getTagIconPath('random-tag')).toBe('/images/favicon.png');
      expect(getTagIconPath('')).toBe('/images/favicon.png');
    });

    it('should handle all supported technology tags', () => {
      const supportedTags = [
        'vite',
        'react',
        'nextjs',
        'javascript',
        'typescript',
        'css',
        'html',
        'sass',
        'tailwindcss',
        'astro',
        'gatsby',
      ];

      supportedTags.forEach((tag) => {
        const result = getTagIconPath(tag);
        expect(result).toBe(`/images/${tag}.svg`);
        expect(result).not.toBe('/images/favicon.png');
      });
    });

    it('should handle special characters and numbers', () => {
      expect(getTagIconPath('react-18')).toBe('/images/favicon.png');
      expect(getTagIconPath('vue.js')).toBe('/images/favicon.png');
      expect(getTagIconPath('node_js')).toBe('/images/favicon.png');
    });
  });
});
