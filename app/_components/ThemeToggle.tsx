'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/_providers/ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const themes: { value: Theme; label: string; icon: string }[] = [
    { value: 'light', label: 'Light', icon: '/tagIcon/icon-light-theme.svg' },
    { value: 'dark', label: 'Dark', icon: '/tagIcon/icon-dark-theme.svg' },
    { value: 'system', label: 'System', icon: '/tagIcon/icon-system-theme.svg' },
  ];

  const currentIcon =
    theme === 'system'
      ? '/tagIcon/icon-system-theme.svg'
      : resolvedTheme === 'light'
        ? '/tagIcon/icon-light-theme.svg'
        : '/tagIcon/icon-dark-theme.svg';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 transition-colors"
        aria-label="Toggle theme"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Image src={currentIcon} alt="Theme toggle" width={20} height={20} className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-200 shadow-lg z-50">
          <div className="py-1">
            {themes.map((themeOption) => (
              <button
                type="button"
                key={themeOption.value}
                onClick={() => {
                  setTheme(themeOption.value);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-2 text-sm hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-100 transition-colors ${
                  theme === themeOption.value
                    ? 'text-indigo-400 dark:text-indigo-400 light:text-indigo-600'
                    : 'text-slate-300 dark:text-slate-300 light:text-slate-700'
                }`}
              >
                <Image
                  src={themeOption.icon}
                  alt={themeOption.label}
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                {themeOption.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
