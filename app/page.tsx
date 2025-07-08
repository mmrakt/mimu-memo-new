import {
  AnimatedBackground,
  ExternalLinks,
  HeroSection,
  QuickNavigation,
  SiteOverview,
} from '@/_components/ui';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <HeroSection />
        <SiteOverview />
        <QuickNavigation />
        <ExternalLinks />
      </div>
    </div>
  );
}
