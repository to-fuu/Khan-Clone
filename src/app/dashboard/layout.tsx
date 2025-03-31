
import DashboardNavigation from '@/components/DashboardNavigation';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '528Prep Dashboard',
  description: 'MCAT CARS Preparation Dashboard',
};

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <DashboardNavigation aria-label="Dashboard Navigation" />
      {children}
    </>
  );
} 