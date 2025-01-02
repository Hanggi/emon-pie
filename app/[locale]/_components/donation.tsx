import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';
import ClipboardInput from '@/components/clipboard';
import { Images } from '@/components/images';
import ProgressBar from '@/components/progress';

interface DonationProps extends HTMLAttributes<HTMLDivElement> {}

export default function Donation({ className, ...props }: DonationProps) {
  return (
    <>
      <div
        className={cn(
          'container mb-8 flex flex-col items-center gap-4',
          className,
          {}
        )}
        {...props}
      >
        <Text intent={'heading'}>集体捐赠</Text>
        <div className="relative">
          <div className="absolute -top-5 left-10">
            <Img
              src="/public/assets/images/white-cloud.png"
              className="size-16 md:size-24"
            />
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="flex items-center sm:mb-8">
              <span className="text-primary text-stroke text-[120px] leading-3 md:text-[180px]">
                100
              </span>
              <span className="text-primary text-stroke mt-6 text-[40px] md:text-[50px]">
                亿
              </span>
            </div>
            <Text variant="sm/default/white" className="opacity-70">
              PIE捐赠池总币量
            </Text>
            <ProgressBar progress={10} label="0.1亿" />
            <div className="w-[319px] sm:w-[631px]">
              <p className="text-[16px] text-white sm:text-[24px]">
                凡是捐赠的用户共同瓜分100亿PIE。
              </p>
              <p className="text-[16px] text-white sm:text-[24px]">
                2025年1月1日3点14分开始-2025年1月10日3点14分截止
              </p>
            </div>
            <ClipboardInput />
            <div className="w-[380px] px-10 md:px-0">
              <Button full className="border" variant="lg/default">
                链接钱包
              </Button>
            </div>
          </div>
          <div className="absolute right-0 top-0 flex flex-col items-center md:-right-24">
            <Img
              src="/public/assets/images/right-cloud.png"
              className="size-16 sm:size-24"
            />
            <Img
              src="/public/assets/images/box.png"
              className="size-12 sm:size-16"
            />
          </div>
          <div className="absolute -right-10 top-24 flex flex-col items-center opacity-50 md:-right-64">
            <Img
              src="/public/assets/images/right-cloud.png"
              className="size-16 sm:size-24"
            />
            <Img
              src="/public/assets/images/box.png"
              className="size-12 sm:size-16"
            />
          </div>

          <div className="absolute -top-16 left-0 flex flex-col items-center opacity-50 md:-left-24">
            <Img
              src="/public/assets/images/right-cloud.png"
              className="size-16 sm:size-24"
            />
          </div>
          <div className="absolute -left-10 top-24 flex flex-col items-center md:-left-64">
            <Img
              src="/public/assets/images/right-cloud.png"
              className="size-16 sm:size-24"
            />
            <Img
              src="/public/assets/images/box.png"
              className="size-12 sm:size-16"
            />
          </div>
        </div>
      </div>
      <Images.hr reverse />
    </>
  );
}
