import { ReactNode } from "react";

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  image?: string;
  component?: ReactNode;
}

export interface DetailedFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Stat {
  icon: ReactNode;
  label: string;
  value: string;
}

export interface TestimonialType {
  name: string;
  achievement: string;
  quote: string;
}

export interface PlanFeature {
  icon: ReactNode;
  title: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  features: PlanFeature[];
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  achievement: string;
  quote: string;
  avatar: string;
}

export interface HeroProps {
  title: ReactNode | string;
  subtitle: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  imagePlaceholder: string;
}

export interface FeatureCardProps extends Feature {
  delay?: number;
  className?: string;
}

export interface StatsGridProps {
  stats: Stat[];
}

export interface PricingGridProps {
  plans: PricingPlan[];
}

export interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export interface DetailedFeaturesGridProps {
  features: DetailedFeature[];
}
