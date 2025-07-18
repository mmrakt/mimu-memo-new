import AnimatedBackground from '@/_components/AnimatedBackground';
import { ExternalLinks, HeroSection, QuickNavigation, SiteOverview } from '@/_components/ui';

export default function Home() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      <AnimatedBackground variant="pulse" />
      <div className="relative z-10">
        <HeroSection />
        <SiteOverview />
        <QuickNavigation />
        <ExternalLinks />
      </div>
    </div>
  );
}
