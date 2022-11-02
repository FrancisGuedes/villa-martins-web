import { ReviewModule } from '../../../../../lib/interfaces/contentful/ireview';
import { functionalityAlias } from '../../../../../utils/strings';
import AppButton from '../../../../app-button/appButton';
import { LabelButton, LabelCarouselSlideTextClassName } from '../../../carousel';
import './cardDescription.module.scss';

interface CardDescriptionProps {
  classNameTextSlide?: LabelCarouselSlideTextClassName | undefined; 
  reviewCardDescription: ReviewModule.IContent2;
  index: number;
  toggleReviewCommentStatus: boolean[];
  handleReviewComment: (index: number) => void;
}

type LabelButtonName = {
  more: string;
  less: string;
}

const CardDescription = ({
  toggleReviewCommentStatus,
  index,
  reviewCardDescription,
  classNameTextSlide,
  handleReviewComment
}: CardDescriptionProps) => {
  const labelRel: LabelButton = {...functionalityAlias.component.carousel.button};
  const labelButtonName: LabelButtonName = {...functionalityAlias.component.carousel.cardReviewButtonName};
  
  const validateTextLength = (text: string, numberOfCharacters: number): string => {
    return text.length <= numberOfCharacters ? text : text.substring(0, numberOfCharacters).concat('...');
  }

  return (
    <>
      <div className={classNameTextSlide?.description} key={index}>
        {
          toggleReviewCommentStatus[index] && (reviewCardDescription.value.length > 185) ?
            reviewCardDescription.value :
            validateTextLength(reviewCardDescription.value, 185)
        }
        { 
          reviewCardDescription.value.length > 185 ?
          <AppButton
            type='button'
            onClick={() => handleReviewComment(index)}
            className='expandable-comment_button'
            ariaLabel='expandable comment button' 
            rel={labelRel.rel}                
          >
            {toggleReviewCommentStatus[index] ? labelButtonName.less : labelButtonName.more}
          </AppButton> :
          null 
        }
      </div>
    </>
  );
}

export default CardDescription;