import { HTMLAttributes } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

export interface ImgProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
  imageClassName?: string;
}

export default async function Img({
  className,
  imageClassName,
  ...props
}: ImgProps) {
  let src;

  if (props.src.startsWith('http')) {
    const res = await fetch(props.src);
    src = props.src;
  } else {
    src = props.src.replace('/public/', '/');
  }

  return (
    <div
      className={cn('relative aspect-square w-full overflow-hidden', className)}
      {...props}
    >
      <Image
        src={src!}
        className={cn('object-contain', imageClassName)}
        alt={props.alt || ''}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
