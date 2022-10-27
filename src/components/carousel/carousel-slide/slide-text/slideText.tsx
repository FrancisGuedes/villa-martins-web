import CardDescription from './card-description/cardDescription';
import CardHeader from './card-header/cardHeader';
import { ReviewModule } from '../../../../lib/interfaces/contentful/ireview';
import { LabelCarouselClassName, LabelCarouselSlideTextClassName } from '../../carousel';

import './slideText.module.scss';

interface SlideTextProps {
  toggleReviewCommentStatus: boolean[];
  handleReviewComment: (index: number) => void;
  index: number;
  reviewCardFields: ReviewModule.IFields;
  reviewCardDescription: ReviewModule.IContent2;
  className?: LabelCarouselClassName | undefined;
  classNameTextSlide?: LabelCarouselSlideTextClassName | undefined;
}

const SlideText = ({
  toggleReviewCommentStatus,
  handleReviewComment,
  index,
  reviewCardFields,
  reviewCardDescription,
  className,
  classNameTextSlide
}: SlideTextProps) => {

  return (
    <>
      <div className={className?.embla_slide_inner}>
        <CardHeader 
          reviewCardFields={reviewCardFields}
          classNameTextSlide={classNameTextSlide}
        />
        <CardDescription 
          reviewCardDescription={reviewCardDescription} 
          index={index} 
          toggleReviewCommentStatus={toggleReviewCommentStatus} 
          handleReviewComment={handleReviewComment}
          classNameTextSlide={classNameTextSlide}        
        />
      </div>
    </>
  );
}

export default SlideText;