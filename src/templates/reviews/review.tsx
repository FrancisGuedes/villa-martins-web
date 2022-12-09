import { IReviewFields } from '../../../@types/generated/contentful';
import Carousel, { LabelCarouselClassName } from '../../components/carousel/carousel';
import { ReviewModule } from '../../lib/interfaces/contentful/ireview';

import './review.module.scss';

interface reviewProps {
  reviewSectionProps: IReviewFields[];
  reviewRef: any;
}

const Review = ({
  reviewSectionProps,
  reviewRef
}: reviewProps) => {
  const reviewData: ReviewModule.IReview = new Map(Object.entries(reviewSectionProps))
  .values()
  .next()
  .value;

  const title: string = reviewData.title;
  const cardReview: ReviewModule.ICardReview[] = reviewData['cardReviews'];

  const classNames: LabelCarouselClassName = {
    embla: 'review_embla',
    embla_viewport: 'review_embla_viewport',
    embla_container: "review_embla__container",
    embla_slide: 'review_embla__slide',
    embla_slide_inner: 'review_embla__slide__inner',
    embla_slide_img: 'review_embla__slide__img',
  }

  return (
    <>
      <section id="reviews" className='review-wrapper' ref={reviewRef}>
        <div className='title-wrapper'>
          <h1>
            {title}
          </h1>
        </div>
        <div className="review-carousel_wrapper">
          <Carousel
            autoplayOptions={{ 
              active: false
            }}
            emblaOptions={{
              loop: false,
              skipSnaps: false,
              breakpoints: {
                '(max-width: 971px)': { 
                  slidesToScroll: 1,
                  align: 'start',
                }, 
                '(min-width: 970px)': { 
                  slidesToScroll: 3,
                  align: 'start',
                }, 
              },
            }}
            slides={cardReview} 
            isPrevBtnEnabled 
            isNextBtnEnabled 
            isDotsActive={false}
            className={classNames} 
            isSlideImageActive={false}          
          />
        </div>
      </section>
    </>
  );
}

export default Review;