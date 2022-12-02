import { useCallback, useState } from 'react';
import { LabelCarouselClassName } from '../../carousel';

import './slideImage.module.scss';

interface SlideImageProps {
  mediaByIndex: (index: number) => string;
  className?: LabelCarouselClassName | undefined;
  slideDescription: string;
  index: number;
  inView: any;
}

const SlideImage = ({
  mediaByIndex,
  className,
  slideDescription,
  index,
  inView
}: SlideImageProps) => {
  const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`;
  const [hasLoaded, setHasLoaded] = useState(false);

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true);
  }, [inView, setHasLoaded]);

  return (
    <>
      <div className={className?.embla_slide_inner}>
        <img
          className={`${className?.embla_slide_img} ${hasLoaded ? "has-loaded" : ""}`}
          //src={mediaByIndex(index)}
          src={inView ? mediaByIndex(index) : PLACEHOLDER_SRC}
          onLoad={setLoaded}
          alt={`Carousel image ${index}: ${slideDescription}`}
        />
      </div>
    </>
  );
}

export default SlideImage;