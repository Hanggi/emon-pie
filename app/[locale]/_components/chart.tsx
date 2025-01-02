'use client';

import React, { HTMLAttributes } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';

interface ChartProps extends HTMLAttributes<HTMLDivElement> {}

export default function Chart({ className, ...props }: ChartProps) {
  const { t } = useTranslation('home');
  return (
    <>
      <div
        className={cn(
          'container relative mb-4 flex flex-col items-center gap-4',
          className
        )}
        {...props}
      >
        <Text intent="heading">{t('chart.title')}</Text>

        {/* Legend Section */}
        <div className="mt-6 flex w-[380px] flex-wrap justify-center gap-x-5 gap-y-6 sm:w-[800px] sm:gap-x-10">
          {(
            t('chart.data', { returnObjects: true }) as {
              label: string;
              color: string;
            }[]
          ).map((entry, index) => (
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
