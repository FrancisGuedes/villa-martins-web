import StarRating from '../../../../star-rating/starRating';
import { ReviewModule } from '../../../../../lib/interfaces/contentful/ireview';
import { LabelCarouselSlideTextClassName } from '../../../carousel';

import './cardHeader.module.scss';
import { functionalityAlias } from '../../../../../utils/strings';

interface CardHeaderProps {
  reviewCardFields: ReviewModule.IFields;
  classNameTextSlide?: LabelCarouselSlideTextClassName | undefined;
}

const CardHeader = ({
  reviewCardFields,
  classNameTextSlide
}: CardHeaderProps) => {
  const labelLink = {...functionalityAlias.component.carousel.cardHeaderLink}
  return (
    <>
      <a 
        href={labelLink.href}
        rel={labelLink.rel}
        target={labelLink.target}
        >
        <div className={classNameTextSlide?.header}>
          <h3 className={classNameTextSlide?.title}>
            {reviewCardFields.reviewer}
          </h3>
          <div className={classNameTextSlide?.rating}>
            <StarRating
              rating={reviewCardFields.stars}
            />
          </div>
          <h5 className={classNameTextSlide?.date}>
            {reviewCardFields.reviewMonth}&nbsp;{reviewCardFields.reviewYear}&nbsp;/&nbsp;{reviewCardFields.source}
          </h5>
        </div>
      </a>
    </>
  );
}

export default CardHeader;