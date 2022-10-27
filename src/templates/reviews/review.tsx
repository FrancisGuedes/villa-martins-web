import { IReviewFields } from '../../../@types/generated/contentful';
import Carousel, { LabelCarouselClassName } from '../../components/carousel/carousel';
import { ReviewModule } from '../../lib/interfaces/contentful/ireview';

import './review.module.scss';

interface reviewProps {
  reviewSectionProps: IReviewFields[];
}

const Review = ({
  reviewSectionProps
}: reviewProps) => {
  const reviewData: ReviewModule.IReview = new Map(Object.entries(reviewSectionProps))
  .values()
  .next()
  .value;

  const title: string = reviewData.title;
  const cardReview: ReviewModule.ICardReview[] = reviewData['cardReviews'];

  /* const renderReviews = cardReview.map((reviewCard:any, index:any) => {
    let reviewCardFields: ReviewModule.IFields = reviewCard['fields'];
    let reviewCardDescription: ReviewModule.IContent2 = reviewCardFields['theReview']['content'][0]['content'][0];

    console.log("VALUE: ", reviewCardDescription);
    return (
      <div key={index}>
        <div className="card-header">
          <div className="card-header_title">
            {reviewCardFields.reviewer}
          </div>
          <div className="card-header_rating">
            {reviewCardFields.stars}
          </div>
          <div className="card-header_date">
            {reviewCardFields.reviewMonth} {reviewCardFields.reviewYear} / {reviewCardFields.source}
          </div>
        </div>
        <div className="card-description">
          {reviewCardDescription.value}
        </div>
      </div>
    )
  }) */
  console.log("reviewData", reviewSectionProps);

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
      <section id="review" className='review-wrapper'>
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
              slidesToScroll: 2,
              breakpoints: {
                '(min-width: 970px)': {
                  active: false, 
                  align: 'start' 
                },
                '(min-width: 0px)': { 
                  slidesToScroll: 1,
                  align: 'start',
                }, 
              },
            }}
            slides={cardReview} 
            isPrevBtnEnabled={false} 
            isNextBtnEnabled={false} 
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