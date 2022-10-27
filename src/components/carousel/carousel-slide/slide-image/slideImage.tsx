import { LabelCarouselClassName } from '../../carousel';

import './slideImage.module.scss';

interface SlideImageProps {
  mediaByIndex: (index: number) => string;
  className?: LabelCarouselClassName | undefined;
  slideDescription: string;
  index: number;
}

const SlideImage = ({
  mediaByIndex,
  className,
  slideDescription,
  index
}: SlideImageProps) => {

  return (
    <>
      <div className={className?.embla_slide_inner}>
        <img
          className={className?.embla_slide_img}
          src={mediaByIndex(index)}
          alt={slideDescription}
        />
      </div>
    </>
  );
}

export default SlideImage;