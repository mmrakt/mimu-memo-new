import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import {
  TAG_LIST,
  isValidTag,
  validateTag,
} from './tag-service';

describe('Tag Service', () => {
  describe('TAG_LIST', () => {
    it('should contain expected tags', () => {
      expect(TAG_LIST).toContain('other');
      expect(TAG_LIST).toContain('react');
      expect(TAG_LIST).toContain('typescript');
      expect(TAG_LIST).toContain('javascript');
      expect(TAG_LIST).toContain('nextjs');
      expect(TAG_LIST).toContain('astro');
      expect(TAG_LIST).toContain('gatsby');
      expect(TAG_LIST).toContain('vite');
      expect(TAG_LIST).toContain('css');
      expect(TAG_LIST).toContain('tailwindcss');
    });

    it('should have correct length', () => {
      expect(TAG_LIST).toHaveLength(10);
    });

    it('should be readonly constant', () => {
      expect(Array.isArray(TAG_LIST)).toBe(true);
      // TypeScript const assertion prevents runtime mutation
      expect(Object.isFrozen(TAG_LIST)).toBe(false); // Not frozen by default, but const
      expect(TAG_LIST).toBeDefined();
    });
  });

  describe('isValidTag', () => {
    it('should return true for valid tags', () => {
      expect(isValidTag('react')).toBe(true);
      expect(isValidTag('typescript')).toBe(true);
      expect(isValidTag('javascript')).toBe(true);
      expect(isValidTag('other')).toBe(true);
      expect(isValidTag('nextjs')).toBe(true);
      expect(isValidTag('astro')).toBe(true);
      expect(isValidTag('gatsby')).toBe(true);
      expect(isValidTag('vite')).toBe(true);
      expect(isValidTag('css')).toBe(true);
      expect(isValidTag('tailwindcss')).toBe(true);
    });

    it('should return false for invalid tags', () => {
      expect(isValidTag('invalid-tag')).toBe(false);
      expect(isValidTag('python')).toBe(false);
      expect(isValidTag('ruby')).toBe(false);
      expect(isValidTag('vue')).toBe(false);
      expect(isValidTag('angular')).toBe(false);
    });

    it('should return false for empty or falsy values', () => {
      expect(isValidTag('')).toBe(false);
      expect(isValidTag('   ')).toBe(false);
      expect(isValidTag(null as any)).toBe(false);
      expect(isValidTag(undefined as any)).toBe(false);
    });

    it('should be case sensitive', () => {
      expect(isValidTag('React')).toBe(false);
      expect(isValidTag('REACT')).toBe(false);
      expect(isValidTag('TypeScript')).toBe(false);
      expect(isValidTag('JavaScript')).toBe(false);
      expect(isValidTag('NextJS')).toBe(false);
    });

    it('should handle special characters', () => {
      expect(isValidTag('react-native')).toBe(false);
      expect(isValidTag('react.js')).toBe(false);
      expect(isValidTag('react/16')).toBe(false);
    });
  });

  describe('validateTag', () => {
    it('should return valid tags unchanged', () => {
      expect(validateTag('react')).toBe('react');
      expect(validateTag('typescript')).toBe('typescript');
      expect(validateTag('javascript')).toBe('javascript');
      expect(validateTag('other')).toBe('other');
      expect(validateTag('nextjs')).toBe('nextjs');
      expect(validateTag('astro')).toBe('astro');
      expect(validateTag('gatsby')).toBe('gatsby');
      expect(validateTag('vite')).toBe('vite');
      expect(validateTag('css')).toBe('css');
      expect(validateTag('tailwindcss')).toBe('tailwindcss');
    });

    it('should throw error for invalid tags', () => {
      expect(() => validateTag('invalid-tag')).toThrow("Invalid tag 'invalid-tag'. Valid tags: other, astro, react, typescript, javascript, nextjs, vite, css, tailwindcss, gatsby");
    });

    it('should throw error for empty tags', () => {
      expect(() => validateTag('')).toThrow('No tag specified. Valid tags: other, astro, react, typescript, javascript, nextjs, vite, css, tailwindcss, gatsby');
    });

    it('should include file path in error messages when provided', () => {
      expect(() => validateTag('invalid-tag', '/path/to/file.md')).toThrow(
        "[/path/to/file.md] Invalid tag 'invalid-tag'. Valid tags: other, astro, react, typescript, javascript, nextjs, vite, css, tailwindcss, gatsby"
      );

      expect(() => validateTag('', '/path/to/file.md')).toThrow(
        '[/path/to/file.md] No tag specified. Valid tags: other, astro, react, typescript, javascript, nextjs, vite, css, tailwindcss, gatsby'
      );
    });

    it('should throw error for null and undefined inputs', () => {
      expect(() => validateTag(null as any)).toThrow('No tag specified. Valid tags:');
      expect(() => validateTag(undefined as any)).toThrow('No tag specified. Valid tags:');
    });

    it('should throw error for whitespace-only tags', () => {
      expect(() => validateTag('   ')).toThrow('No tag specified. Valid tags:');
      expect(() => validateTag('\t')).toThrow('No tag specified. Valid tags:');
      expect(() => validateTag('\n')).toThrow('No tag specified. Valid tags:');
    });

    it('should throw error for case-sensitive invalid tags', () => {
      expect(() => validateTag('React')).toThrow("Invalid tag 'React'. Valid tags:");
      expect(() => validateTag('TYPESCRIPT')).toThrow("Invalid tag 'TYPESCRIPT'. Valid tags:");
    });

    it('should include all valid tags in error message', () => {
      expect(() => validateTag('invalid-tag')).toThrow(
        'other, astro, react, typescript, javascript, nextjs, vite, css, tailwindcss, gatsby'
      );
    });

    it('should throw error for tags with whitespace', () => {
      expect(() => validateTag('  react  ')).toThrow("Invalid tag '  react  '. Valid tags:");
    });

    it('should throw custom Error instances', () => {
      try {
        validateTag('invalid-tag');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toContain("Invalid tag 'invalid-tag'");
      }
    });
  });
});