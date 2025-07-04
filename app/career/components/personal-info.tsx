import { ExternalLink, Github, MapPin, Twitter } from 'lucide-react';
import { CAREER_CONFIG } from '../config/constants';
import type { RawCareerData } from '../types';

interface PersonalInfoProps {
  personalInfo: RawCareerData['personalInfo'];
}

export function PersonalInfo({ personalInfo }: PersonalInfoProps) {
  return (
    <div
      className="mt-16 text-center animate-fadeInUp"
      style={{ animationDelay: CAREER_CONFIG.ANIMATION.HERO_DELAY }}
    >
      {/* Location */}
      <div className="flex items-center justify-center gap-2 text-slate-400 mb-6">
        <MapPin className="w-4 h-4" />
        <span>{personalInfo.contact.location}</span>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href={personalInfo.contact.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
          aria-label="Visit website"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
        <a
          href={personalInfo.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
          aria-label="View GitHub profile"
        >
          <Github className="w-5 h-5" />
        </a>
        {personalInfo.contact.x && (
          <a
            href={personalInfo.contact.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
            aria-label="Follow on X"
          >
            <Twitter className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}
