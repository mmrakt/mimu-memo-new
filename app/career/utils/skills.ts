import { CAREER_CONFIG } from '@/career/config/constants';
import type { Skill } from '@/career/types';

export function convertNumericSkillLevel(level: number): Skill['level'] {
  return (
    CAREER_CONFIG.SKILLS.LEVEL_MAPPING[level as keyof typeof CAREER_CONFIG.SKILLS.LEVEL_MAPPING] ||
    'Beginner'
  );
}
