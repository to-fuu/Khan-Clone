import { ErrorBoundary } from "@/components/ErrorBoundary";
import Features from "@/components/landing/features";
import Hero from "@/components/landing/Hero";
import { HeroSkeleton } from "@/components/landing/LoadingSkeletons";
import { landingPageData } from "@/data/landing-page";
import { cn } from "@/lib/utils";
import type { FeatureCardProps } from "@/types/landing-page";
import {
  ArrowLeftRight,
  BookOpen,
  Circle,
  GraduationCap,
  NotebookPen,
  Rocket,
} from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Constants
const SECTION_SPACING = "py-16 lg:py-32";
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
    <div className="min-h-screen bg-white">
      <main id="main-content">
        <ErrorBoundary fallback={<div>Error loading hero section</div>}>
          <Suspense fallback={<HeroSkeleton />}>
            <Hero {...hero} />
          </Suspense>
        </ErrorBoundary>

        <section className={cn(SECTION_SPACING, CONTAINER_PADDING)}>
          <div className="max-w-6xl mx-auto w-full text-sm">
            <div className="grid lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col">
                <h2 className="text-4xl lg:text-5xl font-medium mb-4 max-w-xl leading-[1.3]">
                  Cars is Hard! It requires a{" "}
                  <span className="text-gradient-primary">
                    different kind of Analysis
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-lg">
                  {`You've honed your scientific reasonning skills - CARS demands them in a new arena.`}
                </p>
              </div>
              <div className="flex flex-col w-full max-w-4xl mx-auto isolate">
                <div className="flex gap-4">
                  <div className="flex flex-col flex-1">
                    <span className="border px-4 py-3 rounded-xl bg-slate-50 w-full">
                      Sientific Reading
                    </span>
                    <div className="h-4 border-l mx-auto border-dashed" />
                    <span className="border px-4 py-3 rounded-xl bg-slate-50 w-full">
                      Experimental Design
                    </span>
                    <div className="h-4 border-l mx-auto border-dashed" />
                    <span className="border px-4 py-3 rounded-xl bg-slate-50 w-full">
                      Pattern Recognition
                    </span>
                  </div>
                  <div className="h-full right-0 border-l flex items-center shrink-0">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-px bg-border shrink-0"></div>
                      <div
                        className="whitespace-nowrap text-blue-500 tracking-widest uppercase font-mono text-xs"
                        style={{ writingMode: "vertical-lr" }}
                      >
                        Premed Skills
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-6 border-l ml-4 border-dashed" />

                <div className="flex items-center gap-4 text-sm text-muted-foreground -my-2">
                  <div className="size-10 rounded-full grid place-content-center -ml-1 bg-blue-500">
                    <ArrowLeftRight className="size-4 stroke-2 stroke-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-blue-600 tracking-widest font-mono uppercase">
                      Transition
                    </h3>
                    <p>Same Skills, New arena</p>
                  </div>
                  <div className="h-full right-0 border-l flex items-center shrink-0 gap-2">
                    <div className="w-6 h-px bg-border shrink-0"></div>
                    <div
                      className="whitespace-nowrap text-blue-600 scale-105 tracking-widest uppercase font-mono text-xs font-bold"
                      style={{ writingMode: "vertical-lr" }}
                    >
                      528PREP
                    </div>
                  </div>
                </div>

                <div className="h-6 border-l ml-4 border-dashed border-blue-500" />

                <div className="flex gap-4">
                  <div className="flex flex-col flex-1">
                    <span className="border px-4 py-3 rounded-xl bg-slate-50 w-full border-blue-300 text-blue-600">
                      Passage Analysis
                    </span>
                    <div className="h-4 border-l mx-auto border-dashed" />
                    <span className="border px-4 py-3 rounded-xl bg-slate-50 w-full border-blue-300 text-blue-600">
                      Evaluating Arguments
                    </span>
                    <div className="h-4 border-l mx-auto border-dashed" />
                    <span className="border px-4 py-3 rounded-xl bg-slate-50 w-full border-blue-300 text-blue-600">
                      Drawing Conclusions
                    </span>
                  </div>
                  <div className="h-full right-0 border-l flex items-center shrink-0">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-px bg-border shrink-0"></div>
                      <div
                        className="whitespace-nowrap text-blue-500 tracking-widest uppercase font-mono text-xs"
                        style={{ writingMode: "vertical-lr" }}
                      >
                        CARS Skills
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={cn(SECTION_SPACING, CONTAINER_PADDING, "lg:!pt-0")}>
          <div className="max-w-6xl mx-auto">
            <ErrorBoundary fallback={<div>Error loading feature cards</div>}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div
                  className={cn(
                    "bg-slate-50 rounded-3xl overflow-hidden p-8 text-start"
                  )}
                >
                  <div className="h-32 relative -mx-8">
                    <div className="flex flex- items-center isolate absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                      <div className="h-12 w-40 px-4 bg-slate-100 rounded-2xl grid place-content-center -ml-12 border border-slate-50"></div>
                      <div className="h-12 w-fit whitespace-nowrap px-6 bg-slate-200 rounded-2xl grid place-content-center text-slate-600 font-medium border border-slate-50">
                        Scientific Reasoning
                      </div>
                      <div className="size-5 -mx-2.5 rounded-full bg-slate-50 relative shrink-0">
                        <div className="rounded-full absolute inset-1 bg-blue-500" />
                      </div>
                      <div className="h-12 w-fit px-6 -rotate-3 text-lg font-medium bg-blue-500 rounded-2xl text-white frid place-content-center text-center z-10 shadow-lg relative">
                        528Prep
                        <svg
                          className="absolute -top-4 -right-4 origin-bottom-left size-6 text-blue-500"
                          viewBox="0 0 63 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.5 30.5L12.5 1.5M27 39.5L54 21.5M38.5 62H63"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                        </svg>
                        <svg
                          className="absolute -bottom-4 -left-4 size-6 rotate-180 text-blue-500"
                          viewBox="0 0 63 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.5 30.5L12.5 1.5M27 39.5L54 21.5M38.5 62H63"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                        </svg>
                      </div>
                      <div className="size-5 -mx-2.5 rounded-full bg-slate-50 relative shrink-0">
                        <div className="rounded-full absolute inset-1 bg-blue-500 z-20" />
                      </div>
                      <div className="h-12 whitespace-nowrap shrink-0 w-fit px-6 bg-slate-200 rounded-2xl grid place-content-center text-slate-600 font-medium border border-slate-50">
                        CARS Skills
                      </div>
                      <div className="h-12 w-40 px-6 bg-slate-100 rounded-2xl grid place-content-center border border-slate-50"></div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-medium text-slate-700 mb-4 relative z-10">
                    {`You don't lack ability - Just the right approach`}
                  </h3>
                  <p className="text-xl tracking-wide leading-8 font-semibold text-blue-500 mb-4">
                    525Prep helps you build that bridge!
                  </p>
                  <p className="text-muted-foreground text-lg tracking-wide leading-8">
                    525Prep helps thousands of students like you build the
                    skills and confidence to tackle the CARS section.
                  </p>
                </div>
                <div className="rounded-3xl overflow-hidden justify-stretch relative bg-gradient-to-b dark text-foreground from-slate-900 to-violet-400 via-violet-600 flex flex-col p-8">
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
            </ErrorBoundary>
          </div>
        </section>

        <Features features={features} />

        <section
          className={`${SECTION_SPACING} ${CONTAINER_PADDING} bg-slate-50 border-t border-t-slate-200 `}
        >
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 relative z-10">
            <div className="md:sticky top-40 h-fit">
              <h2 className="text-4xl lg:text-5xl font-medium mb-4 max-w-lg leading-[1.3]">
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
