import Studying from "@/../public/images/studying.jpg";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Hero from "@/components/landing/Hero";
import {
  FeatureSkeleton,
  HeroSkeleton,
} from "@/components/landing/LoadingSkeletons";
import { landingPageData } from "@/data/landing-page";
import type { Feature, FeatureCardProps } from "@/types/landing-page";
import { BookOpen, GraduationCap, NotebookPen, Rocket } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";

// Constants
const SECTION_SPACING = "py-16 lg:py-44";
const CONTAINER_PADDING = "px-4 sm:px-6 lg:px-8";

// Dynamic imports for below-the-fold content with consistent import paths
const FeatureCard = dynamic<FeatureCardProps>(
  () => import("@/components/landing/FeatureCard")
);

const DetailedFeatures = dynamic(
  () => import("@/components/landing/DetailedFeatures")
);
const PricingGrid = dynamic(() => import("@/components/landing/PricingGrid"));
const TestimonialGrid = dynamic(
  () => import("@/components/landing/TestimonialGrid")
);

export default function LandingPage() {
  const {
    hero,
    features,
    detailedFeatures,
    stats,
    pricingPlans,
    testimonials,
  } = landingPageData;

  return (
    <div className="min-h-screen bg-white padding-navbar">
      <main id="main-content">
        <ErrorBoundary fallback={<div>Error loading hero section</div>}>
          <Suspense fallback={<HeroSkeleton />}>
            <Hero {...hero} />
          </Suspense>
        </ErrorBoundary>

        <section className={`${SECTION_SPACING} ${CONTAINER_PADDING}`}>
          <div className="max-w-8xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-medium text-center mb-4 max-w-5xl mx-auto">
              Learn <span className="text-gradient-primary">smarter</span>,{" "}
              <span className="text-gradient-primary">personalize</span> your
              prep, <span className="text-gradient-primary">achieve</span>{" "}
              results.
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Experience the most effective way to master MCAT CARS
            </p>
            <ErrorBoundary fallback={<div>Error loading feature cards</div>}>
              <Suspense
                fallback={
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {[...Array(3)].map((_, i) => (
                      <FeatureSkeleton key={i} />
                    ))}
                  </div>
                }
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="rounded-3xl sm:col-span-2 md:col-span-1 overflow-hidden relative aspect-square md:aspect-auto">
                    <Image
                      src={Studying}
                      width={Studying.width}
                      height={Studying.height}
                      alt="Students studying"
                      className="size-full object-cover absolute inset-0"
                    />
                  </div>
                  {features.map((feature: Feature, index) => (
                    <FeatureCard
                      key={`feature-${index}`}
                      {...feature}
                      delay={index * 0.1}
                    />
                  ))}
                  <div className="lg:col-span-2 rounded-3xl overflow-hidden justify-stretch relative bg-gradient-to-b dark text-foreground from-slate-900 to-violet-400 via-violet-600 flex flex-col p-8">
                    <h3 className="text-2xl lg:text-3xl font-medium mb-4">
                      Our Impact in numbers
                    </h3>
                    <hr />
                    <div className="flex items-center text-lg lg:text-xl py-4 gap-6">
                      <BookOpen className="size-8 stroke-2 rotate-[30deg]" />
                      <div className="text-foreground/75">
                        <span className="text-xl lg:text-2xl font-medium text-foreground w-16 inline-block">
                          550+
                        </span>{" "}
                        Practice Passages
                      </div>
                    </div>
                    <hr />
                    <div className="flex items-center text-lg lg:text-xl py-4 gap-6">
                      <NotebookPen className="size-8 stroke-2 rotate-[30deg]" />
                      <div className="text-foreground/75">
                        <span className="text-xl lg:text-2xl font-medium text-foreground w-16 inline-block">
                          150+
                        </span>{" "}
                        Skill Drills
                      </div>
                    </div>
                    <hr />
                    <div className="flex items-center text-lg lg:text-xl py-4 gap-6">
                      <Rocket className="size-8 stroke-2" />
                      <div className="text-foreground/75">
                        <span className="text-xl lg:text-2xl font-medium text-foreground w-16 inline-block">
                          4pt+
                        </span>{" "}
                        Average Score Improvement
                      </div>
                    </div>
                    <hr />
                    <div className="flex items-center text-lg lg:text-xl py-4 gap-6">
                      <GraduationCap className="size-8 stroke-2 rotate-[30deg]" />
                      <div className="text-foreground/75">
                        <span className="text-xl lg:text-2xl font-medium text-foreground w-16 inline-block">
                          94%
                        </span>{" "}
                        Student Success Rate
                      </div>
                    </div>
                  </div>
                </div>
              </Suspense>
            </ErrorBoundary>
          </div>
        </section>

        {/* <section
          className={`${SECTION_SPACING} ${CONTAINER_PADDING} bg-gray-50`}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              {`Join thousands of successful students who've improved their CARS scores`}
            </p>
            <ErrorBoundary fallback={<div>Error loading stats</div>}>
              <Suspense fallback={<div>Loading stats...</div>}>
                <StatsGrid stats={stats} />
              </Suspense>
            </ErrorBoundary>
          </div>
        </section> */}

        <section
          className={`${SECTION_SPACING} ${CONTAINER_PADDING} bg-slate-50 border-t border-t-slate-200 `}
        >
          <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-12 relative z-10">
            <div className="md:sticky top-40 h-fit">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 max-w-lg leading-normal">
                <span className="text-gradient-primary">All-In-One</span> CARS
                Prep Course
              </h2>
              <p className="text-xl text-foreground/70">
                Everything you need to succeed in MCAT CARS
              </p>
            </div>

            <ErrorBoundary
              fallback={<div>Error loading detailed features</div>}
            >
              <Suspense fallback={<div>Loading detailed features...</div>}>
                <DetailedFeatures features={detailedFeatures} />
              </Suspense>
            </ErrorBoundary>
          </div>
        </section>

        <section
          id="pricing"
          className={`${SECTION_SPACING} ${CONTAINER_PADDING} bg-slate-50 pt-12 scroll-mt-32`}
        >
          <div className="max-w-8xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium lg:text-center mb-4">
              Smart Learning,{" "}
              <span className="text-gradient-primary">Smart Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 lg:text-center mb-20 max-w-3xl mx-auto">
              Find the perfect plan for your MCAT CARS preparation
            </p>
            <ErrorBoundary fallback={<div>Error loading pricing plans</div>}>
              <Suspense fallback={<div>Loading pricing plans...</div>}>
                <PricingGrid plans={pricingPlans} />
              </Suspense>
            </ErrorBoundary>
          </div>
        </section>

        <section className={`${SECTION_SPACING} ${CONTAINER_PADDING}`}>
          <div className="max-w-8xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium lg:text-center mb-4">
              Hear from Our{" "}
              <span className="text-gradient-primary">Successful</span> Students
            </h2>
            <p className="text-xl text-gray-600 lg:text-center mb-12 max-w-3xl mx-auto">
              {`Real stories from students who've achieved their CARS goals`}
            </p>
            <ErrorBoundary fallback={<div>Error loading testimonials</div>}>
              <Suspense fallback={<div>Loading testimonials...</div>}>
                <TestimonialGrid testimonials={testimonials} />
              </Suspense>
            </ErrorBoundary>
          </div>
        </section>
      </main>
    </div>
  );
}
