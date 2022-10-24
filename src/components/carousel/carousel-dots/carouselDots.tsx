import { functionalityAlias } from '../../../utils/strings';
import { createClassName } from '../../../utils/utility';
import { DotButton } from '../carousel-buttons/carouselButtons';

import './carouselDots.module.scss';

interface CarouselDotsProps {
  scrollSnaps: number[];
  active: boolean;
  className?: string | undefined;
  selectedIndex: number;
  scrollTo?: (index: number) => void | undefined;
}

const CarouselDots = ({
  scrollSnaps,
  active,
  className,
  selectedIndex,
  scrollTo
}: CarouselDotsProps) => {
  
  return (
    <>
      { active ? (
        <div className={className}>
          {scrollSnaps.map((_: number, index: number) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo!(index)}
            /> 
          ))}
        </div>
        ) : (
          ''
        )
      }
    </>
  );
}

export default CarouselDots;