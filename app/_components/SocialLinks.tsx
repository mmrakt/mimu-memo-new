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
            className="social-link w-10 h-10 rounded-full flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--primary)',
              color: 'var(--text-primary)',
              border: '1px solid',
            }}
            aria-label={social.ariaLabel}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
