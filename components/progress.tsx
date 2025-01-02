'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  label: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex items-center justify-center">
      <div
        ref={ref}
        className="relative h-6 w-[332px] overflow-hidden rounded-full bg-[#8348CC] sm:h-9 sm:w-[500px]"
      >
        <motion.div
          className="bg-primary absolute left-0 top-0 flex h-full items-center justify-center rounded-full border border-black shadow-md"
          initial={{ width: '20%' }}
          animate={{ width: isInView ? `${progress}%` : '20%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <span className="absolute right-1 text-lg font-bold text-black sm:right-3 sm:text-2xl">
            {label}
          </span>
          <span className="absolute left-5 scale-150 text-xs tracking-[2px] text-yellow-600 opacity-50 sm:left-6 sm:text-lg sm:tracking-[3px]">
            {'>'}
            {'>'}
            {'>'}
            {'>'}
            {'>'}
            {'>'}
            {'>'}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;
