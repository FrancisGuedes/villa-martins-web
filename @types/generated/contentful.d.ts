// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface IAboutFields {
  /** name */
  name: string;

  /** id */
  id: string;

  /** title */
  title?: string | undefined;

  /** text_content */
  textContent?: Entry<{ [fieldId: string]: unknown }>[] | undefined;

  /** utilities_title */
  utilitiesTitle?: string | undefined;

  /** utilities */
  utilities: string[];

  /** image_content */
  imageContent?: Entry<{ [fieldId: string]: unknown }> | undefined;

  /** about_button */
  aboutButton?: Entry<{ [fieldId: string]: unknown }> | undefined;
}

/** About section */

export interface IAbout extends Entry<IAboutFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'about';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IButtonFields {
  /** name */
  name: string;

  /** id */
  id: string;

  /** href */
  href?: Entry<{ [fieldId: string]: unknown }> | undefined;
}

/** Button component */

export interface IButton extends Entry<IButtonFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'button';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ICardFields {
  /** name */
  name: string;

  /** id */
  id: string;

  /** reviewer */
  reviewer: string;

  /** stars */
  stars: number;

  /** review_month */
  reviewMonth: string;

  /** review_year */
  reviewYear: number;

  /** source */
  source: string;

  /** the_review */
  theReview: Document;
}

/** Card component for reviews */

export interface ICard extends Entry<ICardFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'card';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ICarouselFields {
  /** name */
  name: string;

  /** id */
  id: string;

  /** carousel_media */
  carouselMedia?: Entry<{ [fieldId: string]: unknown }>[] | undefined;
}

/** Carousel component for several images */

export interface ICarousel extends Entry<ICarouselFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'carousel';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IContactFields {
  /** name */
  name: string;

  /** id */
  id: string;

  /** title */
  title?: string | undefined;

  /** social_media_links */
  socialMediaLinks: Entry<{ [fieldId: string]: unknown }>[];
}

/** Contact section page */

export interface IContact extends Entry<IContactFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'contact';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IFooterFields {
  /** name */
  name: string;

  /** id */
  id: string;

  /** description */
  description: string;

  /** crafted_title */
  craftedTitle: string;

  /** crafted_person_name */
  craftedPersonName: string;

  /** crafted_person_container_link */
  craftedPersonContainerLink: Entry<{ [fieldId: string]: unknown }>;
}

/** Footer component section */

export interface IFooter extends Entry<IFooterFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'footer';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IHomeFields {
  /** home */
  home: string;

  /** id */
  id: string;

  /** carousel_data */
  carouselData?: Entry<{ [fieldId: string]: unknown }> | undefined;

  /** button_data */
  buttonData?: Entry<{ [fieldId: string]: unknown }> | undefined;
}

/** Home component section */

export interface IHome extends Entry<IHomeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'home';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IImageSectionFields {
  /** name */
  name: string;

  /** id */
  id: string;

  /** title */
  title?: string | undefined;

  /** image_media */
  imageMedia?: Entry<{ [fieldId: string]: unknown }>[] | undefined;
}

/** Component for an image section with a title */

export interface IImageSection extends Entry<IImageSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'imageSection';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ILinkFields {
  /** name */
  name: string;

  /** id */
  id: string;

  /** rel */
  rel: string;

  /** href */
  href?: string | undefined;
}

/** Link component for any reutilization needed */

export interface ILink extends Entry<ILinkFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'link';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IMultiImageFields {
  /** name */
  name: string;

  /** id */
  id: string;

  /** href */
  href?: string | undefined;

  /** alt */
  alt?: string | undefined;

  /** media */
  media?: Asset[] | undefined;
}

/** Multi image component for carousels or grids */

export interface IMultiImage extends Entry<IMultiImageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'multiImage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface INavbarFields {
  /** name */
  name: string;

  /** id */
  id: string;

  /** navlinks */
  navlinks: Entry<{ [fieldId: string]: unknown }>[];

  /** logo_image */
  logoImage?: Entry<{ [fieldId: string]: unknown }> | undefined;
}

/** Navbar component */

export interface INavbar extends Entry<INavbarFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'navbar';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IParagraphFields {
  /** name */
  name: string;

  /** id */
  id: string;

  /** paragraph-content */
  paragraphContent: Document;
}

/** Paragraph component */

export interface IParagraph extends Entry<IParagraphFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'paragraph';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IReviewFields {
  /** name */
  name: string;

  /** id */
  id: string;

  /** title */
  title?: string | undefined;

  /** card_reviews */
  cardReviews: Entry<{ [fieldId: string]: unknown }>[];
}

/** Review Section */

export interface IReview extends Entry<IReviewFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'review';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISingleImageFields {
  /** name */
  name: string;

  /** id */
  id: string;

  /** href */
  href?: string | undefined;

  /** media */
  media: Asset;

  /** alt */
  alt?: string | undefined;
}

/** Single image component */

export interface ISingleImage extends Entry<ISingleImageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'singleImage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IStayWithUsFields {
  /** name */
  name: string;

  /** id */
  id: string;

  /** stay_with_us-text_content */
  stayWithUsTextContent?: Entry<{ [fieldId: string]: unknown }> | undefined;

  /** stay_with_us-image_content */
  stayWithUsImageContent?: Entry<{ [fieldId: string]: unknown }> | undefined;
}

/** Stay with us component section */

export interface IStayWithUs extends Entry<IStayWithUsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'stayWithUs';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ITextDescriptionFields {
  /** name */
  name: string;

  /** id */
  id: string;

  /** title */
  title?: string | undefined;

  /** sub-title */
  subTitle?: string | undefined;

  /** paragraphs */
  paragraphs?: Entry<{ [fieldId: string]: unknown }>[] | undefined;
}

/** A component for text */

export interface ITextDescription extends Entry<ITextDescriptionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'textDescription';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE =
  | 'about'
  | 'button'
  | 'card'
  | 'carousel'
  | 'contact'
  | 'footer'
  | 'home'
  | 'imageSection'
  | 'link'
  | 'multiImage'
  | 'navbar'
  | 'paragraph'
  | 'review'
  | 'singleImage'
  | 'stayWithUs'
  | 'textDescription';

export type LOCALE_CODE = 'en-US';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';