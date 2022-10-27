import { useEffect, useState } from 'react';

import SlideImage from './slide-image/slideImage';
import SlideText from './slide-text/slideText';
import { CarouselModule } from '../../../lib/interfaces/contentful/ihome';
import { StayWithUsImageModule } from '../../../lib/interfaces/contentful/istayWithUs';
import { concatHttpsAndUrlFromContentful } from '../../../utils/utility';
import { LabelCarouselClassName, LabelCarouselSlideTextClassName } from '../carousel';
import { ReviewModule } from '../../../lib/interfaces/contentful/ireview';

import './carouselSlide.module.scss';

interface CarouselSlideProps {
  slides: React.ReactNode[] | 
    CarouselModule.IFields[] | 
    StayWithUsImageModule.IImageMedia[] |
    ReviewModule.ICardReview[];
  className?: LabelCarouselClassName | undefined;
  isSlideImageActive: boolean;
  classNameTextSlide?: LabelCarouselSlideTextClassName | undefined;
}

const CarouselSlide = ({
  slides,
  className,
  isSlideImageActive,
  classNameTextSlide
}: CarouselSlideProps) => {
  const [slideFile, setSlideFile] = useState<Array<string>>([]);
  const [toggleReviewCommentStatus, setToggleReviewCommentStatus] = useState<boolean[]>([]);

  const reviewCommentObj = [...slides];

  useEffect(() => {
    //? FAZ SENTIDO? 
    if(isSlideImageActive) {
      setSlideFile(slideFileUrl(slides));
    }
    initializeReviewCommentStatus();
  },[])
  
  function slideFileUrl(slidesMedia: React.ReactNode[] | 
    CarouselModule.IFields[] | 
    StayWithUsImageModule.IImageMedia[] |
    ReviewModule.ICardReview[]): string[] {
    let slideFile: string[] = new Array<string>();
    slidesMedia.forEach((slide: any, index: number) => {
      const slideUrl: CarouselModule.IFile = slide['fields']['media']['fields']['file'];
      const imageUrl: string = concatHttpsAndUrlFromContentful(slideUrl.url);
      slideFile.push(imageUrl);
    })
    return slideFile;
  }

  const initializeReviewCommentStatus = () => {
    /**
     * Initialize the state of the component state regarding the review comment to false
     *  */
    let tempArr: boolean[] = [...toggleReviewCommentStatus];
    reviewCommentObj.map(() => {
      tempArr.push(false);
    },
    setToggleReviewCommentStatus(tempArr))
  }; 

  const handleReviewComment = (index: number) => {
    /**
     * Normal toggle between true -> false and vice versa but for an array of booleans
     *  */
    let switchStat = [...toggleReviewCommentStatus];
    switchStat[index] = !switchStat[index];
    setToggleReviewCommentStatus(switchStat);
  };
  
  const renderSlides: JSX.Element[] = slides.map((slide: any, index: number) => {
    const mediaByIndex = (index: number) => slideFile[index % slideFile.length];
    if(isSlideImageActive) {
      // Render Image Slides
      const slideDescription: CarouselModule.IFields3 = slide['fields']['media']['fields'].description;

      return (
        <div className={className?.embla_slide} key={index}>
          <SlideImage
            className={className}
            mediaByIndex={mediaByIndex} 
            slideDescription={slideDescription.description} 
            index={index} 
          />
        </div>
      )
    } else {
      // Render Text Slides
      let reviewCardFields: ReviewModule.IFields = slide['fields'];
      let reviewCardDescription: ReviewModule.IContent2 = reviewCardFields['theReview']['content'][0]['content'][0];
      let slideId: string = slide['sys'].id;

      return (
        <div className={className?.embla_slide} key={slideId}>
          <SlideText
            toggleReviewCommentStatus={toggleReviewCommentStatus}
            handleReviewComment={handleReviewComment} 
            index={index} 
            reviewCardFields={reviewCardFields} 
            reviewCardDescription={reviewCardDescription} 
            className={className}
            classNameTextSlide={classNameTextSlide}           
          />
        </div>
      )
    }
  })

  return (
    <>
      <div className={className?.embla_container}>
        {renderSlides}  
      </div>
    </>
  );
}

export default CarouselSlide;