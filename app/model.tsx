'use client';

import React, { HTMLAttributes } from 'react';
import Image from 'next/image';
import { Cell, Pie, PieChart } from 'recharts';

import { cn } from '@/lib/utils';
import { Text } from '@/components/ui/text';

interface ModelProps extends HTMLAttributes<HTMLDivElement> {}

const data = [
  { label: '私募 100亿', value: 100, color: '#F4436D' },
  { label: '空投 50亿', value: 50, color: '#C2F443' },
  { label: '交易池 50亿', value: 50, color: '#BB43F4' },
  { label: '挖矿 650亿', value: 650, color: '#F48B42' },
  { label: '项目方保留 50亿', value: 50, color: '#27D06B' },
  { label: '100亿于2025年解锁', value: 100, color: '#438AF5' },
];

export default function Model({ className, ...props }: ModelProps) {
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
        <div className="mt-6 grid grid-cols-4 gap-4">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: entry.color }}
              ></div>
              <Text variant="sm/default/white">{entry.label}</Text>
            </div>
          ))}
        </div>

        <div className="relative bg-white/5 rounded-full my-10">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={110}
              outerRadius={160}
              dataKey="value"
              label={(entry: { label: any }) => `${entry.label}`}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke="#000"
                  strokeWidth={2}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="absolute top-1/3 left-1/3 flex flex-col items-center">
            <Image
              alt=""
              src="/assets/images/pie-model.png"
              width={100}
              height={100}
              className="w-[140px] h-[100px]"
            />
            <p className="text-white text-xl">总量1000亿</p>
          </div>
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
