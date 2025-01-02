'use client';

import { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';
import { Images } from '@/components/images';

interface MinerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Miner({ className, ...props }: MinerProps) {
  const { t } = useTranslation('home');
  return (
    <>
      <div
        className={cn(
          'container mb-4 flex flex-col items-center gap-4 py-6',
          className,
          {}
        )}
        {...props}
      >
        <Text intent={'heading'}>{t('miner.title')}</Text>
        <p className="text-[14px] font-[400] text-white/70 sm:mb-2 sm:text-[20px] sm:leading-[26px]">
          {t('miner.subtitle')}
        </p>
        <Button variant="xl/outline" className="hidden sm:block">
          {t('miner.action')}
        </Button>
        <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:mt-12 sm:w-fit sm:gap-6 lg:w-full lg:grid-cols-2">
          {cards?.map((card, index) => (
            <div
              key={index}
              className="flex h-[126px] items-center justify-between gap-2.5 rounded-2xl bg-black/10 p-3.5 sm:h-[200px] lg:p-5"
            >
              <div className="grid grid-cols-2 gap-2.5">
                <Img
                  src={card.imgSrc}
                  className="size-[105.9px] rounded-xl sm:size-[168px]"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <Text variant="lg/default/white">{card.label}</Text>
                    <Text variant="lg/default/white">
                      {t('miner.nft.subtitle')}
                    </Text>
                  </div>
                  <Button className="rounded-[10px] border max-sm:text-xs" full>
                    {t('miner.nft.actions.start_mining')}
                  </Button>
                </div>
              </div>
              <div className="flex h-[105.9px] flex-col justify-between rounded-[12px] bg-white bg-opacity-10 px-2 pb-2 text-center sm:h-[168px] sm:px-3 ">
                <h1 className="text-primary text-[46px] leading-none sm:text-[74px]">
                  10
                </h1>
                <p className="text-[14px] text-white opacity-70 sm:text-[20px]">
                  {t('miner.nft.available_quantity')}
                </p>
                <Button variant="sm/outline">
                  {t('miner.nft.actions.claim_rewards')}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Images.hr />
    </>
  );
}

const cards = [
  {
    label: 'Pifans',
    imgSrc: '/public/assets/images/pifans.png',
  },
  {
    label: 'PiBirds',
    imgSrc: '/public/assets/images/pibirds.png',
  },
  {
    label: 'PioneerPunks',
    imgSrc: '/public/assets/images/pioneer-punks.png',
  },
  {
    label: 'PioneerMiners',
    imgSrc: '/public/assets/images/pioneer-miners.png',
  },
];
