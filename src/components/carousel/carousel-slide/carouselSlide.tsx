import Image from 'next/image'

import { CarouselModule } from '../../../lib/interfaces/contentful/ihome';
import { concatHttpsAndUrlFromContentful } from '../../../utils/utility';

import './carouselSlide.module.scss';

interface CarouselSlideProps {
  slides: React.ReactNode[] | CarouselModule.IFields[];
}

const CarouselSlide = ({
  slides,
}: CarouselSlideProps) => {
  const slidesMediaTitle: CarouselModule.IFields3 = new Map(Object.entries(slides))
  .values()
  .next()
  .value['fields']['media']['fields']['file'].url;

  /* console.log('slides slides: ', slides)
  console.log('slidesMedia: ', slidesMediaTitle) */
  
  function slideFileUrl(slidesMedia: React.ReactNode[] | CarouselModule.IFields[]): string[] {
    let slideFile: string[] = new Array<string>();
    slidesMedia.forEach((slide: any, index: number) => {
      const slideUrl: CarouselModule.IFile = slide['fields']['media']['fields']['file'];
      const imageUrl: string = concatHttpsAndUrlFromContentful(slideUrl.url);
      slideFile.push(imageUrl);
    })
    return slideFile;
  }
  
  let slideFile = slideFileUrl(slides);

  const renderSlides: JSX.Element[] = slides.map((slide: any, index: number) => {
    const mediaByIndex = (index: number) => slideFile[index % slideFile.length];

    const slideTitle: CarouselModule.IFields3 = slide['fields']['media']['fields'].title;
    const slideDescription: CarouselModule.IFields3 = slide['fields']['media']['fields'].description;

    return (
        <div className="embla__slide" key={index}>
          <div className="embla__slide__inner">
            <img
              className="embla__slide__img"
              src={mediaByIndex(index)}
              alt={slideDescription.description}
            />
            {/* <Image
              src={mediaByIndex(index)}
              alt={slideDescription.description}
              className='embla__slide__img'
              layout="responsive"
              height={200}
              width={300}
            /> */}
          </div>
        </div>
    );
  })

  return (
    <>
      <div className="embla__container">
        {renderSlides}  
      </div>
    </>
  );
}

export default CarouselSlide;