import { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const Carousel = lazy(() => 
  import('@/components/ui/carousel').then(module => ({
    default: module.Carousel
  }))
);

const CarouselContent = lazy(() =>
  import('@/components/ui/carousel').then(module => ({
    default: module.CarouselContent
  }))
);

const CarouselItem = lazy(() =>
  import('@/components/ui/carousel').then(module => ({
    default: module.CarouselItem
  }))
);

interface LazyCarouselProps {
  plugins?: any[];
  opts?: any;
  className?: string;
  children: React.ReactNode;
}

const CarouselFallback = () => (
  <div className="flex space-x-4">
    {Array.from({ length: 4 }).map((_, i) => (
      <Skeleton key={i} className="h-20 md:h-24 w-24 md:w-32 rounded-lg" />
    ))}
  </div>
);

export const LazyCarousel = ({ plugins, opts, className, children }: LazyCarouselProps) => (
  <Suspense fallback={<CarouselFallback />}>
    <Carousel plugins={plugins} opts={opts} className={className}>
      {children}
    </Carousel>
  </Suspense>
);

export const LazyCarouselContent = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <Suspense fallback={<CarouselFallback />}>
    <CarouselContent className={className}>
      {children}
    </CarouselContent>
  </Suspense>
);

export const LazyCarouselItem = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <Suspense fallback={<Skeleton className="h-20 md:h-24 w-24 md:w-32 rounded-lg" />}>
    <CarouselItem className={className}>
      {children}
    </CarouselItem>
  </Suspense>
);