'use client';

import { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';
import { Images } from '@/components/images';

interface AboutProps extends HTMLAttributes<HTMLDivElement> {}

export default function About({ className, ...props }: AboutProps) {
  const { t } = useTranslation('home');
  return (
    <>
      <div
        className={cn(
          '-ml-12 grid grid-cols-2 items-center gap-7 px-4 md:container lg:mb-32',
          className,
          {}
        )}
        {...props}
      >
        <Img
          src="/public/assets/images/lifebuoy.png"
          className="lg:max-w-[490px]"
        />
        <div>
          <Text className="mb-2 " intent={'title'}>
            {t('about.title')}
          </Text>
          <ul className="list-disc marker:text-white lg:space-y-2">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Text key={idx} as={'li'} variant="sm/default/white">
                {t(`about.points.${idx}`)}
              </Text>
            ))}
          </ul>
        </div>
      </div>
      <Images.hr reverse />
    </>
  );
}
