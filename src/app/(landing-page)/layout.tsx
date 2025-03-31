
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '528Prep - MCAT CARS Mastery Platform',
  description:
    'Master MCAT CARS with 528Prep. Personalized study plans, adaptive practice, and expert guidance to help you achieve your target score.',
  openGraph: {
    title: '528Prep - MCAT CARS Mastery Platform',
    description:
      'Master MCAT CARS with 528Prep. Personalized study plans, adaptive practice, and expert guidance to help you achieve your target score.',
    type: 'website',
  },
};
export default function LandingPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Navigation aria-label="Main navigation" />
      {children}
      <Footer />
    </>
  );
} 