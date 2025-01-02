'use client';

import { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';
import { Images } from '@/components/images';
import PieClipboardInput from '@/components/piecliboard';

interface HowToProps extends HTMLAttributes<HTMLDivElement> {}

export default function HowTo({ className, ...props }: HowToProps) {
  const { t } = useTranslation('home');
  return (
    <>
      <div className={cn('container lg:mb-12', className, {})} {...props}>
        <div className="mb-4 flex items-center justify-center gap-2 lg:my-10 ">
          <Text intent={'title'}>{t('howTo.title')}</Text>{' '}
          <Img
            src="/public/assets/images/eyebox.svg"
            className="w-9 md:w-12 lg:w-16"
          />
        </div>
        <div className="space-y-3.5 lg:space-y-20">
          {(
            t('howTo.options', { returnObjects: true }) as {
              label: string;
              icon: string;
              text: string;
            }[]
          ).map((card, i) => (
            <div
              key={card.label}
              className={cn(
                'bg-primary flex flex-col items-start gap-1 rounded-2xl border px-4 py-3.5 sm:flex-row md:px-10 md:py-6',
                i === 2 ? 'relative h-64 md:h-56 lg:h-60' : 'lg:max-h-52'
              )}
            >
              <Img
                src={'/public/assets/images/' + card.icon}
                className="size-20 shrink-0 -translate-x-2 md:size-40 md:-translate-x-7 lg:h-56 lg:w-48 lg:-translate-y-16"
              />
              <div>
                <Text variant="lg/default/default">{card.label}</Text>
                <Text className="lg:text-2xl">{card.text}</Text>
                {i === 2 && (
                  <div className="absolute bottom-4 hidden sm:block md:w-8/12 lg:bottom-6 lg:w-9/12">
                    <PieClipboardInput />
                  </div>
                )}
              </div>
              {i === 2 && (
                <div className="absolute bottom-4 block w-11/12 sm:hidden">
                  <PieClipboardInput />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Images.hr />
    </>
  );
}
