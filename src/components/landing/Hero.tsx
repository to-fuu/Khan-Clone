"use client";

import HeroImage from "@/../public/images/HeroImage.png";
import type { HeroProps } from "@/types/landing-page";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  imagePlaceholder,
}: HeroProps) {
  return (
    <div className="relative py-12 xl:min-h-screen overflow-hidden flex flex-col justify-center">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroImage}
          alt="Student studying MCAT CARS"
          fill
          priority
          className="object-cover object-center brightness-[0.85]"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-700/30" />
      </div>
      
      {/* Hero content */}
      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-semibold tracking-tight leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 space-y-4 text-base text-white/90 font-medium sm:text-lg md:text-xl"
          >
            <p className="flex items-center gap-3">
              <span className="flex items-center justify-center bg-green-500/20 rounded-full p-1.5">
                <Check className="size-5 text-green-400" />
              </span>
              Unmatched adaptive practice
            </p>
            <p className="flex items-center gap-3">
              <span className="flex items-center justify-center bg-green-500/20 rounded-full p-1.5">
                <Check className="size-5 text-green-400" />
              </span>
              No Gimmicks, Just results
            </p>
            <p className="flex items-center gap-3">
              <span className="flex items-center justify-center bg-green-500/20 rounded-full p-1.5">
                <Check className="size-5 text-green-400" />
              </span>
              Active Learning + AI Insight
            </p>
          </motion.div>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-start gap-4">
            <Button className="h-12 lg:h-14 rounded-full tracking-wider px-6 bg-orange-500 hover:bg-orange-600 shadow-lg transition-all duration-300 flex items-center gap-2 group">
              {primaryCTA.text}
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button className="h-12 lg:h-14 rounded-full tracking-wider px-6 bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300">
              {secondaryCTA.text}
            </Button>
          </div>

          <div className="mt-10 flex items-center">
            <div className="flex -space-x-5 mr-4">
              <Avatar className="border-2 border-slate-800 h-10 w-10">
                <AvatarImage
                  src="/images/testimonials/albert.jpg"
                  className="object-top object-cover"
                />
              </Avatar>
              <Avatar className="border-2 border-slate-800 h-10 w-10">
                <AvatarImage
                  src="/images/testimonials/jurica.jpg"
                  className="object-top object-cover"
                />
              </Avatar>
              <Avatar className="border-2 border-slate-800 h-10 w-10">
                <AvatarImage
                  src="/images/testimonials/jassir.jpg"
                  className="object-top object-cover"
                />
              </Avatar>
              <Avatar className="border-2 border-slate-800 h-10 w-10">
                <AvatarImage
                  src="/images/testimonials/vicky.jpg"
                  className="object-top object-cover"
                />
              </Avatar>
            </div>
            <p className="text-sm font-medium text-white/80">
              Join <span className="text-white font-bold">1,000+</span> others who
              scored <span className="text-orange-400 font-bold">4+ points higher</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
