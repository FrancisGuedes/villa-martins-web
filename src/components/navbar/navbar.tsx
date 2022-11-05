import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Link from 'next/link'
import { IContactFields, INavbarFields } from '../../../@types/generated/contentful';

import Logo from '../logo/logo';
import AppLink from '../app-link/appLink';
import Modal from '../modal/modal';
import SocialMedia, { LabelSocialMedia } from '../social-media/socialMedia';
import { NavbarModule } from '../../lib/interfaces/contentful/inavbar';
import { LogoModule } from '../../lib/interfaces/contentful/ilogo';
import { ContactModule } from '../../lib/interfaces/contentful/icontact';
import { getWindowSize, IWindowSize } from '../../utils/utility';
import { strings } from '../../utils/strings';

import './navbar.module.scss';
import tabletSizeWindow from './navbar.module.scss';
interface INavbarProps {
  navbarSectionProps: INavbarFields[];
  contactSectionProps: IContactFields[];
  handleModal: () => void;
  isModalActive: boolean;
}

type LabelMobileSocial = {
  title: string;
}

const Navbar: NextPage<INavbarProps> = ({ 
  navbarSectionProps,
  contactSectionProps,
  handleModal,
  isModalActive 
}: INavbarProps) => {
  const [contentfulNavbarData, setContentfulNavbarData] = useState<NavbarModule.INavbar>();
  const [isNavbarActive, setIsNavbarActive] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState<IWindowSize | undefined>(getWindowSize());
  
  const windowWidthTablet: number = +tabletSizeWindow.tabletSizeWindow.slice(0, 3);
  const windowWidth: number | undefined = windowSize?.innerWidth;

  const logoData: LogoModule.ILogoData = new Map(Object.entries(navbarSectionProps))
  .values()
  .next()
  .value['logoImage']['fields'];

  const navbarData: NavbarModule.INavbar = new Map(Object.entries(navbarSectionProps))
  .values()
  .next()
  .value;

  const navlinksData: NavbarModule.INavlink[] = new Map(Object.entries(navbarSectionProps))
  .values()
  .next()
  .value['navlinks'];
  
  useEffect(() => {
    setContentfulNavbarData(navbarData);
    toggleBodyOverflow();

    handleWindowResize();
    handleDomWindowResize();

    handleDomNavbarActivity();

  }, [contentfulNavbarData, lastScrollY, mobileNavOpen]);

  const renderNavlinks: JSX.Element[] = navlinksData.map((navlinkInfo) => {

    return (
        <li className={`${navlinkInfo.fields.name}-title`} key={navlinkInfo.sys.id}>
          <Link
            rel={navlinkInfo.fields.rel} 
            className={`${navlinkInfo.fields.name}-link`}
            href={`#${navlinkInfo.fields.href}`}
          >
              <a onClick={() => {
                  windowWidth! <= windowWidthTablet ? menuToggle() : '';
                  // Modal will be triggered only on contact navlink
                  if(navlinkInfo.fields.href === 'contact') {
                    handleModal();
                  };
                }}>
                  {navlinkInfo.fields.title}
              </a>
          </Link>
        </li>
    );
  })

  const controlNavbarOverflow = (): void => {
    if (typeof window !== 'undefined') {
      if(window.scrollY > 250) { // set min heigth to hide
        if (window.scrollY < lastScrollY) { // if scroll down, hide the navbar
          setIsNavbarActive(false); 
        } else { // if scroll up, show the navbar
          setIsNavbarActive(true);  
        }
      }
      // set current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  const menuToggle = (): void => {
    setMobileNavOpen((mobileNavOpen) => !mobileNavOpen);
  };

  const toggleBodyOverflow = (): void => {
    mobileNavOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';
  }

  function handleWindowResize(): void {
    setWindowSize(getWindowSize());
  }

  function handleDomWindowResize(): (() => void) | undefined {
    if (typeof window !== "undefined") {
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }
  }

  function handleDomNavbarActivity(): (() => void) | undefined {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbarOverflow);
      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbarOverflow);
      };
    }
  }

  const contactData: ContactModule.ISocialMediaLinks[] = new Map(Object.entries(contactSectionProps))
  .values()
  .next()
  .value['socialMediaLinks'];

  const classeSocialMedia: LabelSocialMedia = {
    contactLink: "modal-contact-link", 
    link: "modal-link", 
    svgIcon: "modal-svg-icon"
  };

  const classeMobileSocialMedia: LabelSocialMedia = {
    contactLink: "mobile-contact-link", 
    link: "mobile-link", 
    svgIcon: "mobile-svg-icon"
  };

  const labelModalContent = {...strings.component.navbar.modalContent};

  const labelMobileSocial: LabelMobileSocial = {...strings.component.navbar.social};

  return (
    <header className={`header-navbar-active ${isNavbarActive ? 'hidden' : ''}`}>
      <Logo 
        logoImageProps={logoData} 
        width={150} 
        height={150} 
        className='navbar-logo'
      />

      {/* BEGIN MOBILE MENU */}
      <span className="toggle-menu-wrapper">
        <button
          type='button'
          className='menu-button'
          onClick={() => {
            menuToggle();
          }}
          aria-label={contentfulNavbarData?.name}
        >
          <div
            className={`bar-parallel-one ${mobileNavOpen ? 'bar-crossed-one' : ''}`}
          />
          <div
            className={`bar-parallel-two ${mobileNavOpen ? 'bar-crossed-two' : ''}`}
          />
        </button>
        <div className={`mobile-menu-open ${mobileNavOpen ? '' : 'close'}`}>
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
      {/* END MOBILE MENU */}

      {/* BEGIN DESKTOP MENU */}
      <nav className='navlink-wrapper'>
        <ul className="navlink-content">
          {renderNavlinks}
        </ul>
      </nav>
      {/* END DESKTOP MENU */}

      {/* BEGIN MODAL */}
      { isModalActive 
          ?
            <Modal
              isModalBakgroundActive 
              isSocialMediaActive 
              classNameSocialMedia={classeSocialMedia}
              socialMediaProps={contactData}
              handleModal={handleModal}
              svgWidthForSocial={16}
              svgHeightForSocial={16}
            >
              <div className="contact-modal-content">
                <h1>{labelModalContent.title}</h1>
                <AppLink 
                  href={`mailto:${labelModalContent.mail}`}
                  className='huge-text'
                >
                  <span>{labelModalContent.mail}</span>
                </AppLink>
              </div>
            </Modal>
          :
            null
      }
      {/* END MODAL */}
    </header>
  );
}

export default Navbar;