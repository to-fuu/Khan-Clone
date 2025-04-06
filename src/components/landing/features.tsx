"use client";
import { cn } from "@/lib/utils";
import { FeatureCardProps } from "@/types/landing-page";
import { ArrowRight, Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Constants
const SECTION_SPACING = "py-16 lg:py-44";
const CONTAINER_PADDING = "px-4 sm:px-6 xl:px-8";

export default function Features({
  features,
}: {
  features: FeatureCardProps[];
}) {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <section
      className={cn(
        SECTION_SPACING,
        CONTAINER_PADDING,
        "lg:!pt-12 lg:!pe-0 xl:!pr-8"
      )}
    >
      <div className="max-w-8xl mx-auto w-full text-base">
        <h2 className="text-4xl lg:text-5xl font-medium text- mb-4 max-w-lg leading-[1.3]">
          528Prep Helps You{" "}
          <span className="text-gradient-primary">Bridge</span> The Gap
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          voluptatum ullam explicabo repellendus officiis dolorum consectetur.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col justify-center pl-8 py-4 border-l-4 border-slate-200 transition-colors",
                  index === selectedFeature
                    ? "border-blue-500 text-foreground"
                    : "hover:border-blue-300 cursor-pointer text-muted-foreground"
                )}
                onClick={() => setSelectedFeature(index)}
              >
                <h3 className="text-xl font-semibold mb-2 transition-colors">
                  {feature.title}
                </h3>
                <p className="">{feature.description}</p>
                <Link
                  className="mt-8 font-medium text-base transition-colors text-blue-500 flex gap-2 items-center"
                  href={"#"}
                >
                  Learn More <ArrowRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-b from-slate-950 to-violet-400 via-violet-600 rounded-3xl lg:rounded-r-none xl:rounded-3xl w-full min-h-120 relative overflow-hidden">
            {features[selectedFeature].image && (
              <Image
                src={features[selectedFeature].image}
                alt={features[selectedFeature].title}
                width={800}
                height={600}
                className="object-left-top object-cover right-0 bottom-0 top-8 left-8 rounded-tl-2xl absolute  h-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
