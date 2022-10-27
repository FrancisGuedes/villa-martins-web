import Carousel, { LabelCarouselClassName } from '../../../components/carousel/carousel';
import { StayWithUsImageModule } from '../../../lib/interfaces/contentful/istayWithUs';

import './imageMedia.module.scss';

interface ImageMediaProps {
  title: string;
  imageMedia: StayWithUsImageModule.IImageMedia[];
}

const ImageMedia = ({
  title,
  imageMedia
}: ImageMediaProps) => {

  // Label object with classNames for carousel
  const classNames: LabelCarouselClassName = {
    embla: 'stay-with-us_embla',
    embla_viewport: 'stay-with-us_embla_viewport',
    embla_container: "stay-with-us_embla__container",
    embla_slide: 'stay-with-us_embla__slide',
    embla_slide_inner: 'stay-with-us_embla__slide__inner',
    embla_slide_img: 'stay-with-us_embla__slide__img',
  }

  return (
    <div className="image-container">
      <h1>
        {title}
      </h1>
      <div className="image-content">
        <Carousel
          slides={imageMedia}
          autoplayOptions={{ 
            active: false 
          }}
          emblaOptions={{
            loop: false,
            skipSnaps: false,
            slidesToScroll: 2,
            breakpoints: {
              '(min-width: 970px)': { 
                active: false, 
                align: 'start' 
              },
              '(min-width: 30px)': { 
                slidesToScroll: 1,
                align: 'start',
              },
            },
          }}
          isPrevBtnEnabled={false}
          isNextBtnEnabled={false}
          isDotsActive={false}
          className={classNames}
          isSlideImageActive
        />
      </div>
    </div>
  );
}

export default ImageMedia;