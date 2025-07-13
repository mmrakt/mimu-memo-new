import { Linkedin } from 'lucide-react';
import { GitHubIcon } from '@/_components/icons/GitHubIcon';
import { XIcon } from '@/_components/icons/XIcon';
import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL, X_PROFILE_URL } from '@/config';

const socialLinks = [
  {
    name: 'GitHub',
    href: GITHUB_PROFILE_URL,
    icon: GitHubIcon,
    ariaLabel: 'GitHub profile',
  },
  {
    name: 'LinkedIn',
    href: LINKEDIN_PROFILE_URL,
    icon: Linkedin,
    ariaLabel: 'LinkedIn profile',
  },
  {
    name: 'X',
    href: X_PROFILE_URL,
    icon: XIcon,
    ariaLabel: 'X profile',
  },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4 mt-6">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-indigo-500/10 border border-indigo-500/30 rounded-full flex items-center justify-center text-slate-200 hover:bg-indigo-500 hover:border-indigo-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
            aria-label={social.ariaLabel}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
