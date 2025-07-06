import { describe, expect, it } from 'vitest';
import { getSlugFromFilename, isPostFile } from '../file-utils';

describe('File Utils', () => {
  describe('isPostFile', () => {
    it('should return true for .md files', () => {
      expect(isPostFile('test.md')).toBe(true);
      expect(isPostFile('long-filename.md')).toBe(true);
    });

    it('should return true for .mdx files', () => {
      expect(isPostFile('test.mdx')).toBe(true);
      expect(isPostFile('long-filename.mdx')).toBe(true);
    });

    it('should return false for other file types', () => {
      expect(isPostFile('test.txt')).toBe(false);
      expect(isPostFile('test.js')).toBe(false);
      expect(isPostFile('test.json')).toBe(false);
      expect(isPostFile('README')).toBe(false);
    });

    it('should handle files without extensions', () => {
      expect(isPostFile('test')).toBe(false);
      expect(isPostFile('.hidden')).toBe(false);
    });

    it('should handle case sensitivity', () => {
      expect(isPostFile('test.MD')).toBe(false); // Should be false as our constants are lowercase
      expect(isPostFile('test.MDX')).toBe(false);
    });
  });

  describe('getSlugFromFilename', () => {
    it('should remove .md extension', () => {
      expect(getSlugFromFilename('test-post.md')).toBe('test-post');
      expect(getSlugFromFilename('simple.md')).toBe('simple');
    });

    it('should remove .mdx extension', () => {
      expect(getSlugFromFilename('test-post.mdx')).toBe('test-post');
      expect(getSlugFromFilename('simple.mdx')).toBe('simple');
    });

    it('should handle complex filenames', () => {
      expect(getSlugFromFilename('my-awesome-blog-post.md')).toBe('my-awesome-blog-post');
      expect(getSlugFromFilename('2024-01-15-update.mdx')).toBe('2024-01-15-update');
    });

    it('should handle filenames with dots in the name', () => {
      expect(getSlugFromFilename('v1.0.0-release.md')).toBe('v1.0.0-release');
      expect(getSlugFromFilename('config.file.mdx')).toBe('config.file');
    });
  });
});
