import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';
import { Images } from '@/components/images';
import PieClipboardInput from '@/components/piecliboard';

interface HowToProps extends HTMLAttributes<HTMLDivElement> {}

export default function HowTo({ className, ...props }: HowToProps) {
  return (
    <>
      <div className={cn('container lg:mb-12', className, {})} {...props}>
        <div className="mb-4 flex items-center justify-center gap-2 lg:my-10 ">
          <Text intent={'title'}>如何购买</Text>{' '}
          <Img
            src="/public/assets/images/eyebox.svg"
            className="w-9 md:w-12 lg:w-16"
          />
        </div>
        <div className="space-y-3.5 lg:space-y-20">
          {cards.map((card, i) => (
            <div
              key={card.label}
              className={cn(
                'bg-primary flex items-start gap-1 rounded-2xl border px-4 py-3.5 md:px-10 md:py-6',
                i === 2 ? 'relative h-48 md:h-56 lg:h-60' : 'lg:max-h-52'
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

const cards = [
  {
    label: '第一步 创建钱包',
    icon: 'wallet.svg',
    text: '从应用商店或钱包官网免费下载欧意钱包或其他加密钱包。PC用户，通过访okx.com下载谷歌chrome扩展插件。',
  },
  {
    label: '第二步 获取SOL',
    icon: 'sol.png',
    text: '在钱包里存一些SOL 以兑换PIE。如果你没有任何SOL，你可以直接在OKX上购买，从另一个钱包转账,或者在另一个交易所购买并发送到你的钱包。',
  },
  {
    label: '第三步 使用OKX钱包',
    icon: 'pie.svg',
    text: '可以直接在钱包中的“兑换”按钮中进行SOL和PIE兑换。提醒：因为链上交易费会有波动，所以注意手续费和滑点。',
  },
];
