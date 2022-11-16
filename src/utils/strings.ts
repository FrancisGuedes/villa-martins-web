/* export const strings = {
  header: {
    navbar: {
      logo: {
        id: "#logo",
        name: "logo",
        href: "url file"
      },
      navlinks: [
        {
          home: {
            id: "#home ou /",
            name: "home"
          }
        },
        {
          stay_with_us: {
            id: "#stay-with-us",
            name: "name"
          }
        },
        {
          about: {
            id: "#about",
            name: "about"
          }
        },
        {
          contact: {
            id: "#contact",
            name: "contact"
          }
        },
        {
          reviews: {
            id: "#reviews",
            name: "reviews"
          }
        }
      ]
    }
  },
  home: {
    id: "#home",
    name: "home",
    carousel: {
      id: "carouselId",
      name: "carousel",
      image: [{
        id: "imageId",
        name: "image ${id}",
        href: "url file",
        alt: "description"
      }]
    },
    button: {
      id: "buttonId",
      name: "button",
      href: "url",
      alt: "description",
      onClick: "event"
    }
  },
  stay_with_us: {
    id: "#stay-with-us",
    name: "stay with us",
    content: {
      text_description: {
        id: "text_description",
        name: "text description",
        content: {
          title: "lorem",
          first_description: "lorem",
          second_description: "lorem"
        }
      },
      image_section: {
        id: "image-section-id",
        name: "image section",
        title: "lorem",
        image: [{
          id: "imageId",
          name: "image ${id}",
          href: "url file",
          alt: "description"
        }]
      }
    }
  },
  about: {
    id: "#about",
    name: "about",
    content: {
      first_paragraph: "lorem",
      second_paragraph: "lorem",
      utilities: {
        title: "lorem",
        elements: [
          {name: "lorem"}
        ]
      }
    },
    image: {
      id: "imageId",
      name: "image ${id}",
      href: "url file",
      alt: "description"
    }
  },
  reviews: {
    id: "#reviews",
    name: "reviews",
    card: [{
      id: "cardId",
      name: "card",
      info: {
        id: "infoId",
        name: "info",
        reviewer: "person name",
        stars: "1-5",
        date: {
          month: "month",
          year: "yyyy",
          source: "domain.extension"
        },
        description: "lorem"
      }
      }]
  },
  contact: {
    id: "#contact",
    name: "contact",
    type: [{
      id: "typeId",
      name: "email adress",
      description: "example@example.com"
    }]
  },
  footer: {
    id: "#footer",
    name: "footer",
    description: "Villa Martins c 2022",
    crafted_by: {
      id: "craftedId",
      name: "crafted by",
      person: {
        name: "john doe",
        href: "url foo bar"
      }
    }
  } 
}; */

export const functionalityAlias = {
  component: {
    appLink: {
      defaultClassName: "app-link"
    },
    logo: {
      defaultClassName: "logo-image"
    },
    appButton: {
      defaultClassName: "app-button"
    },
    carousel: {
      main: {
        embla: 'embla',
        embla_viewport: 'embla_viewport',
        embla_container: "embla__container",
        embla_slide: 'embla__slide',
        embla_slide_inner: 'embla__slide__inner',
        embla_slide_img: 'embla__slide__img',
      },
      carouselDots: {
        defaultClassName: "embla_dots"
      },
      button: {
        rel: 'canonical'
      },
      cardReview: {
        header: "card-header",
        title: "card-header_title",
        rating: "card-header_rating",
        date: "card-header_date",
        description: "card-description"
      },
      cardReviewButtonName: {
        more: 'Show more',
        less: 'Show less'
      }
    },
    appParagraph: {
      defaultClassName: "app-paragraph",
      lang: 'en'
    },
    starRating: {
      defaultClassName: "star-rating",
      faSolidStar: 'fa-solid star',
      faRegularStar: 'fa-regular star'
    },
    socialMedia: {
      contactLink: "contact-link",
      link: 'link',
      svgIcon: 'svg-icon'
    },
    modal: {
      id: 'modal',
    }
  }
}

export const strings = {
  rel: 'canonical',
  component: {
    contact: {
      title: 'Get in touch with us'
    },
    modal: {
      social: {
        title: 'get in touch'
      }
    },
    navbar: {
      modalContent: {
        title: 'Contact us',
        mail: 'villamartinspt@gmail.com'
      },
      social: {
        title: 'get in touch'
      }
    }
  }
}

export const indexHtmlStrings = {
  title: "Villa Martins",
  lang: 'en',
  charSet: "UTF-8",
  name: "viewport",
  content: "width=device-width, initial-scale=1, shrink-to-fit=no",
  rel: "manifest",
  href: "/manifest.json",
  themeColor: "#ffeee3",
} 