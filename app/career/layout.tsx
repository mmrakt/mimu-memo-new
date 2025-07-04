import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career | mimu-memo',
  description:
    'Professional journey and experience as a full-stack developer specializing in modern web technologies.',
  openGraph: {
    title: 'Career | mimu-memo',
    description:
      'Professional journey and experience as a full-stack developer specializing in modern web technologies.',
    type: 'website',
  },
};

export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
