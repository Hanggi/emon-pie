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
        className="relative w-[332px] sm:w-[500px] h-6 sm:h-9 bg-[#8348CC] rounded-full overflow-hidden"
      >
        <motion.div
          className="absolute left-0 top-0 h-full bg-primary rounded-full flex items-center justify-center shadow-md border border-black"
          initial={{ width: '20%' }}
          animate={{ width: isInView ? `${progress}%` : '20%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <span className="text-black font-bold text-lg sm:text-2xl absolute right-1 sm:right-3">
            {label}
          </span>
          <span className="absolute left-5 sm:left-6 text-yellow-600 opacity-50 text-xs sm:text-lg scale-150 tracking-[2px] sm:tracking-[3px]">
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
