'use client';

import { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';
import { Images } from '@/components/images';

interface PledgeProps extends HTMLAttributes<HTMLDivElement> {}

export default function Pledge({ className, ...props }: PledgeProps) {
  const { t } = useTranslation('home');
  return (
    <>
      <div
        className={cn(
          'container mb-4 flex flex-col items-center  gap-4',
          className,
          {}
        )}
        {...props}
      >
        <Text intent={'heading'}>{t('title')}</Text>
        <Button variant="lg/outline">{t('action')}</Button>
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 lg:flex lg:w-full lg:justify-between">
          {(
            t('howTo.options', { returnObjects: true }) as {
              label: string;
              tag: string;
              action: string;
            }[]
          ).map((card) => (
            <div
              key={card.tag}
              className="flex flex-col items-center gap-2.5 rounded-2xl bg-black/10 p-3.5 lg:p-5"
            >
              <Img
                src="/public/assets/images/pie.svg"
                className="-mt-12 h-24 w-32 lg:-mt-20 lg:h-40 lg:w-56"
              />
              <Text
                variant="sm/default/white"
                className="bg-background rounded-full px-3 ring-2 ring-white"
              >
                {card.tag}
              </Text>
              <Text variant="lg/default/white" className="text-center">
                {card.label}
              </Text>
              <Button className="rounded-[10px] border max-sm:text-xs" full>
                {card.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Images.hr />
    </>
  );
}
