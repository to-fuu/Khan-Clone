"use client";

import type { TestimonialGridProps } from "@/types/landing-page";
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const TestimonialGrid: FC<TestimonialGridProps> = ({ testimonials }) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="md:columns-2 lg:columns-3 gap-0 md:space-x-4 space-y-4 h-max relative">
        {testimonials.map((testimonial, index) => {
          return (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 h-auto break-inside-avoid"
            >
              <div className="flex items-center shrink-0 font-medium gap-4">
                <Avatar className="size-12">
                  <AvatarImage
                    className="object-cover object-top"
                    src={testimonial.avatar}
                  />
                  <AvatarFallback>
                    {getInitials(testimonial.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg">{testimonial.name}</h4>
                  <p className="text-muted-foreground">
                    {testimonial.achievement}
                  </p>
                </div>
              </div>
              <p className="tracking-wide mt-4">{testimonial.quote}</p>
            </div>
          );
        })}

        <div className="absolute top-0 bg-gradient-to-b from-transparent to-background via-50% via-transparent inset-0 z-10 pointer-events-none"></div>
      </div>
      <Button
        className="-mt-24 z-20 text-lg h-12 rounded-2xl bg-blue-500"
        size={"lg"}
      >
        Join 1,000+ Students
      </Button>
    </div>
  );
};

export default TestimonialGrid;
