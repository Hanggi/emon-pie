import React, { HTMLAttributes } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';

interface ChartProps extends HTMLAttributes<HTMLDivElement> {}

const data = [
  { label: '募捐100亿', value: 100, color: '#F4436D' },
  { label: '空投 50亿', value: 50, color: '#C2F443' },
  { label: '交易池 50亿', value: 50, color: '#BB43F4' },
  { label: '挖矿 650亿', value: 650, color: '#F48B42' },
  { label: '项目方保留 50亿', value: 50, color: '#27D06B' },
  {
    label: '100亿于2025年6月28日后解锁并跨链到Pichain',
    value: 100,
    color: '#438AF5',
  },
];

export default function Chart({ className, ...props }: ChartProps) {
  return (
    <>
      <div
        className={cn(
          'container relative mb-4 flex flex-col items-center gap-4',
          className
        )}
        {...props}
      >
        <Text intent="heading">代币模型</Text>

        {/* Legend Section */}
        <div className="mt-6 flex w-[380px] flex-wrap justify-center gap-x-5 gap-y-6 sm:w-[800px] sm:gap-x-10">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="size-2 rounded-full border border-black sm:size-4"
                style={{ backgroundColor: entry.color }}
              ></div>
              <Text variant="sm/default/white">{entry.label}</Text>
            </div>
          ))}
        </div>

        <div className="py-14 sm:py-20">
          <Img
            src="/public/assets/images/chart-pc.png"
            className="hidden h-[480px] w-[700px] sm:block md:w-[860px]"
          />
          <Img
            src="/public/assets/images/chart-mobile.png"
            className="block h-[215px] w-[380px] sm:hidden"
          />
        </div>

        <Image
          alt=""
          src="/assets/images/model-cartoon.png"
          width={100}
          height={100}
          className="absolute bottom-0 left-0 h-[94px] w-[67px] sm:bottom-10 sm:left-36 sm:h-[195px] sm:w-[140px]"
        />
      </div>
      {/* <Images.hr /> */}
    </>
  );
}
