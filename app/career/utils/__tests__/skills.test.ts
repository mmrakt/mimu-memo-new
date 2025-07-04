import { describe, expect, it } from 'vitest';
import { convertNumericSkillLevel } from '../skills';

describe('Skills Utils', () => {
  describe('convertNumericSkillLevel', () => {
    it('should convert level 5 to Expert', () => {
      expect(convertNumericSkillLevel(5)).toBe('Expert');
    });

    it('should convert level 4 to Expert', () => {
      expect(convertNumericSkillLevel(4)).toBe('Expert');
    });

    it('should convert level 3 to Advanced', () => {
      expect(convertNumericSkillLevel(3)).toBe('Advanced');
    });

    it('should convert level 2 to Intermediate', () => {
      expect(convertNumericSkillLevel(2)).toBe('Intermediate');
    });

    it('should convert level 1 to Beginner', () => {
      expect(convertNumericSkillLevel(1)).toBe('Beginner');
    });

    it('should default to Beginner for invalid levels', () => {
      expect(convertNumericSkillLevel(0)).toBe('Beginner');
      expect(convertNumericSkillLevel(6)).toBe('Beginner');
      expect(convertNumericSkillLevel(-1)).toBe('Beginner');
    });
  });
});
