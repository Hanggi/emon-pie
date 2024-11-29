import React, { HTMLAttributes } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';

interface ChartProps extends HTMLAttributes<HTMLDivElement> {}

const data = [
  { label: '私募 100亿', value: 100, color: '#F4436D' },
  { label: '空投 50亿', value: 50, color: '#C2F443' },
  { label: '交易池 50亿', value: 50, color: '#BB43F4' },
  { label: '挖矿 650亿', value: 650, color: '#F48B42' },
  { label: '项目方保留 50亿', value: 50, color: '#27D06B' },
  { label: '100亿于2025年解锁', value: 100, color: '#438AF5' },
];

export default function Chart({ className, ...props }: ChartProps) {
  return (
    <>
      <div
        className={cn(
          'container mb-4 flex flex-col items-center gap-4 relative',
          className
        )}
        {...props}
      >
        <Text intent="heading">代币模型</Text>

        {/* Legend Section */}
        <div className="mt-6 w-[380px] sm:w-[800px] flex flex-wrap justify-center gap-x-5 sm:gap-x-10 gap-y-6">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-2 sm:w-4 h-2 sm:h-4 rounded-full border border-black"
                style={{ backgroundColor: entry.color }}
              ></div>
              <Text variant="sm/default/white">{entry.label}</Text>
            </div>
          ))}
        </div>

        <div className='py-14 sm:py-20'>
          <Img
            src="/public/assets/images/chart-pc.png"
            className="w-[700px] md:w-[860px] h-[480px] hidden sm:block"
          />
          <Img
            src="/public/assets/images/chart-mobile.png"
            className="w-[380px] h-[215px] block sm:hidden"
          />
        </div>

        <Image
          alt=""
          src="/assets/images/model-cartoon.png"
          width={100}
          height={100}
          className="w-[67px] sm:w-[140px] h-[94px] sm:h-[195px] absolute bottom-0 sm:bottom-10 left-0 sm:left-36"
        />
      </div>
      {/* <Images.hr /> */}
    </>
  );
}
