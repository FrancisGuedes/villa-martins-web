import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Link from 'next/link'

import { INavbarFields } from '../../../@types/generated/contentful';

import Logo from '../logo/logo';
import { LogoModule, NavbarModule } from '../../lib/interfaces/contentful';
import { getWindowSize, IWindowSize } from '../../utils/utility';

import './navbar.module.scss';
import tabletSizeWindow from './navbar.module.scss';


interface INavbarProps {
  navbarSectionProps: INavbarFields[];
}

const Navbar: NextPage<INavbarProps> = (
  { navbarSectionProps }: INavbarProps) => {
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
                  windowWidth! <= windowWidthTablet ? menuToggle() : ''
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

  return (
    <header className={`header-navbar-active ${isNavbarActive ? 'hidden' : ''}`}>
      <Logo 
        logoImageProps={logoData}
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
    </header>
  );
}

export default Navbar;