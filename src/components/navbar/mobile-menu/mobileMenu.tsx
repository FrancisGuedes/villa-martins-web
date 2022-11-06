import { ContactModule } from '../../../lib/interfaces/contentful/icontact';
import { strings } from '../../../utils/strings';
import SocialMedia, { LabelSocialMedia } from '../../social-media/socialMedia';

import './mobileMenu.module.scss';

interface MobileMenuProps {
  menuToggle: () => void;
  ariaLabel: string | undefined;
  renderNavlinks: JSX.Element[];
  contactData: ContactModule.ISocialMediaLinks[];
  isMobileMenuOpen: boolean;
}

type LabelMobileSocial = {
  title: string;
}

const MobileMenu = ({
  menuToggle,
  ariaLabel,
  renderNavlinks,
  contactData,
  isMobileMenuOpen
}: MobileMenuProps) => {
  const labelMobileSocial: LabelMobileSocial = {...strings.component.navbar.social};

  const classeMobileSocialMedia: LabelSocialMedia = {
    contactLink: "mobile-contact-link", 
    link: "mobile-link", 
    svgIcon: "mobile-svg-icon"
  };

  return (
    <>
      <span className="toggle-menu-wrapper">
        <button
          type='button'
          className='menu-button'
          onClick={() => {
            menuToggle();
          }}
          aria-label={ariaLabel}
        >
          <div
            className={`bar-parallel-one ${isMobileMenuOpen ? 'bar-crossed-one' : ''}`}
          />
          <div
            className={`bar-parallel-two ${isMobileMenuOpen ? 'bar-crossed-two' : ''}`}
          />
        </button>
        <div className={`mobile-menu-open ${isMobileMenuOpen ? '' : 'close'}`}>
          <ul className="mobile-navlink-content">
            {renderNavlinks}
          </ul>
          <div className='social-media-mobile'>
            <h3>
              {labelMobileSocial.title}
            </h3>
            <div className="social-list">
              <SocialMedia 
                socialMediaProps={contactData} 
                isTitleOfContactActive={false} 
                isSvgActive 
                isDescriptionSvgActive={false}
                className={classeMobileSocialMedia}
                svgWidth={16}
                svgHeight={16}
              />
            </div>
          </div>
        </div>
      </span>
    </>
  );
}

export default MobileMenu;