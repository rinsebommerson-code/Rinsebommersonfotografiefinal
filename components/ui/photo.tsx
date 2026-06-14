import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * next/image-wrapper. Lazy loading is standaard (behalve met `priority`).
 * - intrinsiek (width/height): voor de masonry-portfolio.
 * - fill: voor art-directed vlakken (caller bepaalt aspect-ratio via className).
 */
type PhotoProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
};

export function Photo({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes = '100vw',
  priority = false,
  className,
  imgClassName,
}: PhotoProps) {
  if (fill) {
    return (
      <div className={cn('relative overflow-hidden bg-wolk', className)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn('object-cover', imgClassName)}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={cn('h-auto w-full bg-wolk', imgClassName, className)}
    />
  );
}
