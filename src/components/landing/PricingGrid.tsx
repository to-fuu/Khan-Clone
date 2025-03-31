"use client";

import { cn } from "@/lib/utils";
import type { PricingGridProps } from "@/types/landing-page";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { FC } from "react";
import { Button } from "../ui/button";

const PricingGrid: FC<PricingGridProps> = ({ plans }) => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-3xl divide-x border overflow-hidden">
        {plans.map((plan, index) => (
          <motion.div
            key={`plan-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-background flex flex-col px-6 pt-10 pb-6 ${
              plan.featured
                ? "shadow-2xl shadow-violet-500/60 transform z-10 dark text-foreground bg-gradient-to-b from-slate-900 to-violet-400 via-violet-600"
                : ""
            }`}
          >
            {plan.featured && (
              <div className="w-fit lg:w-auto ms-2 lg:ms-0 lg:absolute dark bg-slate-50 lg:bg-slate-900 text-black lg:text-foreground top-0 -translate-y-full mt-px -translate-x-6 px-3 py-1.5 lg:rounded-tr-lg font-medium text-sm">
                Most Popular
              </div>
            )}
            <div className="flex flex-col flex-1">
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>

              <p className="text-foreground/80 mb-6">
                The perfect starting place for your learning journey.{" "}
                <span className="text-foreground text-xl font-medium">
                  {plan.price === 0 ? "Free forever" : `${plan.price}$ only`}!
                </span>
              </p>

              <ul className="space-y-3 mb-12">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={`feature-${featureIndex}`}
                    className={cn(
                      "text-foreground/70 flex items-baseline text-sm",
                      plan.featured && "text-foreground"
                    )}
                  >
                    {feature.icon && (
                      <span className="mr-2 translate-y-1 [&_svg]:size-4">
                        {feature.icon}
                      </span>
                    )}
                    {feature.title}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? "secondary" : "default"}
                size={"lg"}
                className={cn(
                  `w-full rounded-2xl mt-auto text-base h-12 justify-between`,
                  plan.featured
                    ? "bg-white text-blue-500 hover:bg-white/90"
                    : "bg-blue-500"
                )}
              >
                {plan.price === 0
                  ? "Start Learning "
                  : plan.featured
                  ? "Get Started with AI"
                  : "Get Started"}
                <ArrowRight />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingGrid;
