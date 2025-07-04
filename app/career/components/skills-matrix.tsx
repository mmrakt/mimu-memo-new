'use client';

import type { Skill, SkillCategory } from '../types';

interface SkillsMatrixProps {
  skills: SkillCategory[];
}

export function SkillsMatrix({ skills }: SkillsMatrixProps) {
  const getLevelColor = (level: Skill['level']) => {
    switch (level) {
      case 'Expert':
        return 'from-emerald-500 to-emerald-600';
      case 'Advanced':
        return 'from-cyan-500 to-cyan-600';
      case 'Intermediate':
        return 'from-amber-500 to-amber-600';
      case 'Beginner':
        return 'from-slate-500 to-slate-600';
      default:
        return 'from-slate-500 to-slate-600';
    }
  };

  const getLevelWidth = (level: Skill['level']) => {
    switch (level) {
      case 'Expert':
        return 'w-full';
      case 'Advanced':
        return 'w-3/4';
      case 'Intermediate':
        return 'w-1/2';
      case 'Beginner':
        return 'w-1/4';
      default:
        return 'w-1/4';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900/50 to-slate-800/50">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-1000">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="reveal bg-slate-800/50 p-8 rounded-xl border border-indigo-600/10 hover:border-indigo-600/30 transition-all duration-300 opacity-0 translate-y-8"
              style={{ transitionDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-400">{skill.level}</span>
                        <span className="text-xs text-slate-500">
                          {skill.yearsOfExperience}yr{skill.yearsOfExperience > 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>

                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)} transition-all duration-500 ease-out rounded-full animate-slideIn`}
                        style={{
                          animationDelay: `${(categoryIndex * category.skills.length + skillIndex) * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
