"use client";

import { cn } from "@/lib/utils";
import type { FeatureCardProps } from "@/types/landing-page";
import { motion } from "framer-motion";
import { FC, useState } from "react";

const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  image,
  className,
  delay = 0,
  component,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "bg-slate-50 rounded-3xl overflow-hidden p-8 text-start",
        className
      )}
    >
      <div className="h-44 relative">
        {component}
        {/* <div className="absolute bottom inset-x-0 h-full bg-gradient-to-t from-slate-50 to-transparent z-10"></div> */}
      </div>
      <h3 className="text-3xl font-medium text-slate-700 mb-4 relative z-10">{title}</h3>
      <p className="text-muted-foreground text-lg tracking-wide leading-8">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
