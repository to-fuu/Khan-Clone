"use client";

import type { HeroProps } from "@/types/landing-page";
import { motion } from "framer-motion";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Check } from "lucide-react";
import Preview from "@/../public/images/dashboard.png";
import Image from "next/image";

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  imagePlaceholder,
}: HeroProps) {
  return (
    <div className="relative overflow-hidden flex flex-col xl:flex-row container max-w-8xl mx-auto gap-8 lg:gap-24 px-4 2xl:px-0 pt-10 sm:pt-12 sm:px-6 lg:pt-16 xl:pt-20">
      <div className="flex-1">
        <div className="relative z-10 bg-white mx-auto max-w-3xl lg:w-full">
          <main className="">
            <div className="text-center xl:text-left">
              <div className="flex justify-center xl:justify-start items-center [&>span]:-mr-4 lg:[&>span]:-mr-5 [&>span]:border-2 [&>span]:border-background [&>span]:size-8 lg:[&>span]:size-10 mb-4 lg:mb-6">
                <Avatar>
                  <AvatarImage
                    src="/images/testimonials/albert.jpg"
                    className="object-top object-cover"
                  />
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="/images/testimonials/jurica.jpg"
                    className="object-top object-cover"
                  />
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="/images/testimonials/jassir.jpg"
                    className="object-top object-cover"
                  />
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="/images/testimonials/vicky.jpg"
                    className="object-top object-cover"
                  />
                </Avatar>
                <p className="ml-8 text-sm text-muted-foreground">
                  Join <span className="text-foreground">1,000+</span> other who
                  signed up
                </p>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl tracking-tight leading-tight font-medium text-gray-900 sm:text-5xl md:text-6xl"
              >
                {title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                {subtitle}
              </motion.p>

              <div className="mt-5 sm:mt-8 p-2 rounded-full flex items-center lg:justify-start bg-zinc-50 text-base max-w-lg mx-auto xl:mx-0">
                <Input
                  className="border-0 bg-transparent h-12 lg:h-14 shadow-none rounded-full placeholder:text-muted-foreground/60 placeholder:text-base"
                  placeholder="Email address"
                />
                <Button className="h-12 lg:h-14 rounded-full tracking-wider px-6 bg-blue-500 shadow">
                  Book a Demo
                </Button>
              </div>

              <ul className="space-y-2 mt-8 lg:mt-12 text-muted-foreground flex flex-col items-center xl:items-start">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-600" /> Unmatched adaptive
                  practice
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-600" />
                  No Gimmicks, Just results
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-green-600" />
                  Avtive Learning + AI Insight
                </li>
              </ul>
            </div>
          </main>
        </div>
      </div>
      <div className="flex-1 flex">
        <div className="w-full h-full rounded-xl lg:rounded-[3rem] bg-gradient-to-b from-violet-950 to-violet-300 via-blue-800 via-30% px-4 pt-4 lg:pr-0 lg:pt-10 lg:pl-10 overflow-hidden">
          <Image
            alt="Dashboard Preview"
            src={Preview}
            width={Preview.width}
            height={Preview.height}
            className="h-full w-full object-cover object-left-top rounded-t-lg lg:rounded-tr-none lg:rounded-tl-4xl lg:rounded-br-4xl shadow-2xl min-h-64 rounded-b-none"
          />
        </div>
      </div>
    </div>
  );
}
