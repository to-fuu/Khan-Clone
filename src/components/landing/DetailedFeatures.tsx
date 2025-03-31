'use client';


import { motion } from 'framer-motion';
import type { DetailedFeaturesGridProps } from '@/types/landing-page';
import { FC } from 'react';

const DetailedFeatures: FC<DetailedFeaturesGridProps> = ({ features }) => {
  return (
    <div className="grid gap-14 gap-y-20">
      {features.map((feature, index) => (
        <motion.div
          key={`detailed-feature-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="" 
        >
          <div className="flex flex-col mb-4 items-start">
            <div className="flex-shrink-0 h-16 rounded-full flex items-center justify-center text-blue-600">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold">{feature.title}</h3>
          </div>
          <p className="text-foreground/75 max-w-md">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default DetailedFeatures; 