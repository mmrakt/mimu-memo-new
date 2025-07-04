import { CAREER_CONFIG } from '../config/constants';
import type { Skill } from '../types';

export function convertNumericSkillLevel(level: number): Skill['level'] {
  return (
    CAREER_CONFIG.SKILLS.LEVEL_MAPPING[level as keyof typeof CAREER_CONFIG.SKILLS.LEVEL_MAPPING] ||
    'Beginner'
  );
}
