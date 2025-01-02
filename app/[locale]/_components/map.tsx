'use client';

import { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';
import { Images } from '@/components/images';
import Motion from '@/components/motion';

interface MapProps extends HTMLAttributes<HTMLDivElement> {}

export default function Map({ className, ...props }: MapProps) {
  const { t } = useTranslation('home');
  const images = [
    {
      image: 'insect.svg',
      className: '[&>div]:md:scale-[1.15]',
    },
    {
      text: t('map.roadmap'),
    },
    {
      image: 'pie-cat.svg',
      className: '[&>div]:scale-[1.2] ',
    },
    {
      image: 'pie-frog.svg',
      className: 'relative -z-20 -ml-5',
    },
    {
      image: 'pie-dog.svg',
      className: '[&>div]:scale-[1.2] -ml-4 ',
    },
  ];
  return (
    <>
      <Images.hr reverse />
      <div className={cn('container lg:mt-12', className, {})} {...props}>
        <div className="-mb-1 flex md:-mb-5 md:gap-14 md:pr-12 lg:gap-20">
          {images.map((item, i) => (
            <div key={i}>
              {item.image && (
                <Motion
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  key={item.image!}
                  className={cn(item.className)}
                >
                  <Img
                    src={'/public/assets/images/' + item.image}
                    className="h-16 w-20 md:h-36 md:w-28 lg:h-48 lg:w-40"
                  />
                </Motion>
              )}
              {item.text && (
                <Text
                  key={item.text}
                  intent={'heading'}
                  className="mt-4 grow whitespace-nowrap text-center max-[380px]:text-base  lg:mt-8"
                >
                  {item.text}
                </Text>
              )}
            </div>
          ))}
        </div>
        <div className="bg-primary rounded-2xl border  px-5 py-8 max-md:space-y-5 md:flex md:gap-11 md:p-12 lg:justify-evenly">
          {(
            t('map.texts', { returnObjects: true }) as {
              label: string;
              text: string;
            }[]
          ).map((item, idx) => (
            <div
              key={item.label}
              className="flex items-start gap-3 md:flex-col md:items-center md:text-center "
            >
              <p className=" w-8 bg-gradient-to-t from-transparent to-white bg-clip-text text-6xl font-normal leading-9 text-transparent md:-translate-y-3 lg:w-16 lg:translate-y-4 lg:text-[120px] lg:leading-[3rem] ">
                {idx + 1}
              </p>
              <div>
                <Text
                  variant="lg/default/default"
                  className=" md:-translate-y-5"
                >
                  {item.label}
                </Text>
                <Text
                  variant="default/default/default"
                  className="md:max-w-[200px] md:text-xl"
                >
                  <span className="whitespace-pre-line">{item.text}</span>
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <Images.hr />
    </>
  );
}
