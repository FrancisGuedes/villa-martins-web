import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
  EmblaEventType,
  UseEmblaCarouselType,
} from 'embla-carousel-react';
import Autoplay, {
  AutoplayType,
  AutoplayOptionsType,
} from 'embla-carousel-autoplay';

import { NextButton, PrevButton } from './carousel-buttons/carouselButtons';
import { functionalityAlias } from '../../utils/strings';
import { createClassName } from '../../utils/utility';
import { CarouselModule } from '../../lib/interfaces/contentful/ihome';
import CarouselSlide from './carousel-slide/carouselSlide';
import CarouselDots from './carousel-dots/carouselDots';

import './carousel.module.scss';

interface CarouselProps {
  children?: React.ReactNode | React.ReactNode[] | undefined;
  slides: React.ReactNode[] | CarouselModule.IFields[];
  className?: string | undefined;
  emblaOptions?: EmblaOptionsType | undefined;
  autoplayOptions?: AutoplayOptionsType | undefined;
}

type LabelCarousel = {
  defaultClassName: string;
}

const Carousel = ({
  children,
  slides,
  className,
  autoplayOptions,
  emblaOptions, 
}: CarouselProps) => {
  const autoplay: React.MutableRefObject<AutoplayType> = useRef(Autoplay(autoplayOptions));
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, );//[autoplay.current]
  const [prevBtnEnabled, setPrevBtnEnabled] = useState<boolean>(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const labelCarousel: LabelCarousel = {...functionalityAlias.component.carousel};
  let classes: string = createClassName(labelCarousel.defaultClassName, className);

  const scrollTo: (index: number) => void | undefined = useCallback((index: number) => 
  emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const scrollNext: () => void = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollPrev: () => void = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const onSelect:() => void = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  console.log('slides carousel: ', slides)
  
  return (
    <>
      <div className="embla">         
        <div className="embla_viewport" ref={emblaRef}>
          <CarouselSlide
            slides={slides}
          />
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <CarouselDots 
        active
        scrollSnaps={scrollSnaps}
        selectedIndex={selectedIndex}
        scrollTo={scrollTo}
      />
    </>
  );
}

export default Carousel;