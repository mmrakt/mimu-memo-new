'use client';

import { ArrowRight, Briefcase, Code, ExternalLink, FileText, Globe, User } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  ABOUT_ME,
  ABOUT_SITE,
  GITHUB_URL_PREFIX,
  MY_NAME,
  QIITA_URL_PREFIX,
  SCRAPBOX_URL_PREFIX,
  SNS_ID,
  WANTEDLY_URL_PREFIX,
  X_ID,
  X_URL_PREFIX,
  ZENN_URL_PREFIX,
} from '@/config';

const quickNavItems = [
  {
    href: '/memo',
    title: 'Memo',
    description: '技術的な学びや知見を共有',
    icon: FileText,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    href: '/career',
    title: 'Career',
    description: '経歴とスキルセット',
    icon: Briefcase,
    color: 'from-purple-500 to-pink-600',
  },
  {
    href: '/portfolio',
    title: 'Portfolio',
    description: 'プロジェクトと成果物',
    icon: Code,
    color: 'from-indigo-500 to-cyan-500',
  },
];

const externalLinks = [
  {
    name: 'X (Twitter)',
    href: `${X_URL_PREFIX}/${X_ID}`,
    icon: '𝕏',
  },
  {
    name: 'GitHub',
    href: `${GITHUB_URL_PREFIX}/${SNS_ID}`,
    icon: '⚡',
  },
  {
    name: 'Scrapbox',
    href: `${SCRAPBOX_URL_PREFIX}/mimu`,
    icon: '📝',
  },
  {
    name: 'Zenn',
    href: `${ZENN_URL_PREFIX}/${SNS_ID}`,
    icon: '📚',
  },
  {
    name: 'Qiita',
    href: `${QIITA_URL_PREFIX}/${SNS_ID}`,
    icon: '💡',
  },
  {
    name: 'Wantedly',
    href: `${WANTEDLY_URL_PREFIX}/id/mimura_akito`,
    icon: '🤝',
  },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-pulse-slow animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse-slow animation-delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-8 py-20 relative overflow-hidden">
          {/* Complex Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Orbiting Elements */}
            <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-60 animate-orbit"></div>
            <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-40 animate-orbit animation-delay-1000"></div>
            <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-50 animate-orbit animation-delay-2000"></div>

            {/* Spiral Elements */}
            <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-500 animate-spiral"></div>
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 animate-spiral animation-delay-500"></div>

            {/* Morphing Shapes */}
            <div className="absolute top-1/5 right-1/5 w-12 h-12 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 animate-morphing"></div>
            <div className="absolute bottom-1/5 left-1/5 w-8 h-8 bg-gradient-to-br from-purple-500/30 to-pink-500/30 animate-morphing animation-delay-1000"></div>

            {/* Magnetic Floating Elements */}
            <div className="absolute top-1/6 left-1/2 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-magnetic"></div>
            <div className="absolute bottom-1/6 right-1/2 w-3 h-3 bg-amber-400 rounded-full opacity-50 animate-magnetic animation-delay-300"></div>

            {/* Particle Trail */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent animate-pulse-slow"></div>
            <div className="absolute top-1/2 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-pulse-slow animation-delay-1000"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Animated Title with Glitch Effect */}
              <div className="relative mb-6 group">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-500 via-cyan-400 to-amber-500 bg-clip-text text-transparent animate-gradient-x hover:scale-105 transition-transform duration-500 cursor-default">
                  Hi, I'm {MY_NAME}
                </h1>
                <h1 className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-red-500 bg-clip-text text-transparent opacity-0 group-hover:opacity-30 group-hover:animate-glitch transition-all duration-300">
                  Hi, I'm {MY_NAME}
                </h1>
              </div>

              {/* Typewriter Effect Subtitle */}
              <div className="relative mb-8">
                <p
                  className={`text-xl md:text-2xl text-slate-400 font-space-grotesk transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '300ms' }}
                >
                  <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-indigo-400 animate-typewriter">
                    {ABOUT_ME[0]}
                  </span>
                  <br className="hidden md:block" />
                  <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-cyan-400 animate-typewriter animation-delay-2000">
                    {ABOUT_ME[1]}
                  </span>
                </p>
              </div>

              {/* Enhanced Buttons with Magnetic Effect */}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <Link
                  href="/career"
                  className="group relative flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full hover:from-indigo-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-indigo-500/50 animate-pulse-slow overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x"></div>
                  <User
                    size={20}
                    className="relative z-10 group-hover:rotate-12 transition-transform duration-300"
                  />
                  <span className="relative z-10">About Me</span>
                  <ArrowRight
                    size={16}
                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/portfolio"
                  className="group relative flex items-center gap-2 px-8 py-3 border border-indigo-500/30 rounded-full hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Globe
                    size={20}
                    className="relative z-10 group-hover:rotate-12 transition-transform duration-300"
                  />
                  <span className="relative z-10">View Work</span>
                  <ArrowRight
                    size={16}
                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div
              className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <div className="relative">
                <div className="w-6 h-10 border-2 border-indigo-400/50 rounded-full p-1 animate-pulse-slow">
                  <div className="w-1 h-3 bg-indigo-400 rounded-full mx-auto animate-bounce"></div>
                </div>
                <div className="absolute inset-0 w-6 h-10 border-2 border-cyan-400/30 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Site Overview */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-200">About this site</h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-12">
              {ABOUT_SITE[0]}
              <br className="hidden md:block" />
              {ABOUT_SITE[1]}
            </p>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-200">
              Navigation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quickNavItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group block p-8 bg-slate-800/50 backdrop-blur-sm border border-indigo-500/10 rounded-2xl hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 opacity-0 animate-fade-in-up`}
                    style={{
                      animationDelay: `${index * 200}ms`,
                      animationFillMode: 'forwards',
                    }}
                  >
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 mb-4">{item.description}</p>
                    <div className="flex items-center text-indigo-400 group-hover:text-cyan-400 transition-colors">
                      <span className="text-sm font-medium">Read more</span>
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* External Links */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-200">
              External links
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {externalLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block p-6 bg-slate-800/50 backdrop-blur-sm border border-indigo-500/10 rounded-xl hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 text-center opacity-0 animate-fade-in-up`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <h3 className="text-sm font-semibold mb-2 text-slate-100 group-hover:text-indigo-400 transition-colors">
                    {link.name}
                  </h3>
                  <ExternalLink
                    size={12}
                    className="mx-auto text-indigo-400 group-hover:text-cyan-400 transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
