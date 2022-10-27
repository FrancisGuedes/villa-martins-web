import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

import './starRating.module.scss';
import { createClassName } from "../../utils/utility";
import { functionalityAlias } from "../../utils/strings";

interface StarRatingProps {
  rating: number;
  className?: string | undefined;
}

type LabelStarRating = {
  defaultClassName: string;
  faSolidStar: string;
  faRegularStar: string;
}

const StarRating = ({
  rating,
  className
}: StarRatingProps) => {
  // Maximum amout of rating on airbnb
  let totalRatingStars: number = 5 - rating;

  const labelStarRating: LabelStarRating = {...functionalityAlias.component.starRating};
  let classes: string = createClassName(labelStarRating.defaultClassName, className);

  function renderStarRating(rating: number, icon: IconDefinition, className: string): JSX.Element[] {
    return (
      [...new Array(rating)].map((_, index: number) => (
        <span key={index}>
          <FontAwesomeIcon 
            icon={icon} 
            className={className}
          />
        </span>
      )
    ))
  };

  const renderSolidStar: JSX.Element[] = renderStarRating(rating, faStarSolid, labelStarRating.faSolidStar);
  const renderRegularStar: JSX.Element[] = renderStarRating(totalRatingStars, faStarRegular, labelStarRating.faRegularStar);

  return (
    <>
      <div className={classes}>
        {[renderSolidStar, renderRegularStar]}
      </div>
    </>
  );
}

export default StarRating;