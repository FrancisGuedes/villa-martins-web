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
import { combineObjects, createClassName } from '../../utils/utility';
import { CarouselModule } from '../../lib/interfaces/contentful/ihome';
import CarouselSlide from './carousel-slide/carouselSlide';
import CarouselDots from './carousel-dots/carouselDots';

import './carousel.module.scss';
import { StayWithUsImageModule } from '../../lib/interfaces/contentful/istayWithUs';
import { ReviewModule } from '../../lib/interfaces/contentful/ireview';

interface CarouselProps {
  children?: React.ReactNode | 
    React.ReactNode[] | 
    undefined;
  slides: React.ReactNode[] | 
    CarouselModule.IFields[] | 
    StayWithUsImageModule.IImageMedia[] | 
    ReviewModule.ICardReview[];
  className?: LabelCarouselClassName | undefined;
  emblaOptions?: EmblaOptionsType | undefined;
  autoplayOptions?: AutoplayOptionsType | undefined;
  isPrevBtnEnabled: boolean;
  isNextBtnEnabled: boolean;
  isDotsActive: boolean;
  classNameDots?: string | undefined;
  isSlideImageActive: boolean;
  classNameTextSlide?: LabelCarouselSlideTextClassName | undefined;
}

export type LabelCarouselClassName = {
  [key: string]: string | number,
  embla: string,
  embla_viewport: string,
  embla_container: string,
  embla_slide: string,
  embla_slide_inner: string,
  embla_slide_img: string,
}

export type LabelDots = {
  defaultClassName: string
}

export type LabelButton = {
  rel: string
}

export type LabelCarouselSlideTextClassName = {
  [key: string]: string | number,
  header: string,
  title: string,
  rating: string,
  date: string,
  description: string
}

const Carousel = ({
  children,
  slides,
  className,
  autoplayOptions,
  emblaOptions,
  isPrevBtnEnabled,
  isNextBtnEnabled,
  isDotsActive,
  classNameDots,
  isSlideImageActive,
  classNameTextSlide
}: CarouselProps) => {
  const autoplay: React.MutableRefObject<AutoplayType> = useRef(Autoplay(autoplayOptions));
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [autoplay.current]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState<boolean>(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [classNameObj, setClassNameObj] = useState<LabelCarouselClassName>();

  const labelCarousel: LabelCarouselClassName = {...functionalityAlias.component.carousel.main};
  const labelCarouselDots: LabelDots = {...functionalityAlias.component.carousel.carouselDots};
  const labelCarouselButton: LabelButton = {...functionalityAlias.component.carousel.button};
  const labelTextSlide: LabelCarouselSlideTextClassName = {...functionalityAlias.component.carousel.cardReview}
  let classes: LabelCarouselClassName = combineObjects(labelCarousel, className);
  let classeDots: string = createClassName(labelCarouselDots.defaultClassName, classNameDots);
  let classesTextSlide: LabelCarouselSlideTextClassName = combineObjects(labelTextSlide, classNameTextSlide);

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
    validateClassName();
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  function validateClassName(): void {
    className === undefined ? setClassNameObj(labelCarousel) : setClassNameObj(className);
  }
  
  return (
    <>
      <div className={classes.embla}>         
        <div 
          className={classes.embla_viewport} 
          ref={emblaRef}
        >
          <CarouselSlide
            slides={slides}
            className={classes}
            isSlideImageActive={isSlideImageActive}
            classNameTextSlide={classesTextSlide}
          />
        </div>
        <PrevButton 
          onClick={scrollPrev}
          enabled={prevBtnEnabled}
          active={isPrevBtnEnabled} 
          rel={labelCarouselButton.rel}       
        />
        <NextButton 
          onClick={scrollNext}
          enabled={nextBtnEnabled}
          active={isNextBtnEnabled}
          rel={labelCarouselButton.rel}
        />
      </div>
      <CarouselDots 
        active={isDotsActive}
        scrollSnaps={scrollSnaps}
        selectedIndex={selectedIndex}
        scrollTo={scrollTo}
        className={classeDots}
      />
    </>
  );
}

export default Carousel;