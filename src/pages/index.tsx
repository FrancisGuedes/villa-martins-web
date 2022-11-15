import type { NextPage, GetStaticProps } from 'next';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { IAboutFields, IContactFields, IHomeFields, INavbarFields, IReviewFields, IStayWithUsFields, IFooterFields } from '../../@types/generated/contentful';

import ContentService from '../utils/contentful/content-service';
import { MainContentTypeId } from '../utils/contentful/content-type-id';
import Layout from '../components/layout/layout';
import Navbar from '../components/navbar/navbar';
import Home from '../templates/home/home';
import StayWithUs from '../templates/stay-with-us/stayWithUs';
import About from '../templates/about/about';
import Review from '../templates/reviews/review';
import Footer from '../templates/footer/footer';
import Contact from '../templates/contact/contact';

interface IIndexProps {
  navbarSectionProps: INavbarFields[];
  homeSectionProps: IHomeFields[];
  stayWithUsSectionProps: IStayWithUsFields[];
  aboutSectionProps: IAboutFields[];
  reviewSectionProps: IReviewFields[];
  contactSectionProps: IContactFields[];
  footerSectionProps: IFooterFields[];
}

export type NavSectionRefs = {
  headerRef: RefObject<number>;
}

const Index: NextPage<IIndexProps> = ({
  navbarSectionProps, 
  homeSectionProps,
  stayWithUsSectionProps,
  aboutSectionProps,
  reviewSectionProps,
  contactSectionProps,
  footerSectionProps
}: IIndexProps) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [navbarDataFetched, setNavbarDataFetched] = useState<INavbarFields[]>(navbarSectionProps);

  const handleModal = useCallback(() => setModalOpen((modalOpen: boolean) => !modalOpen), []);

  const homeRef = useRef() as RefObject<number>;
  const stayWithUsRef = useRef() as RefObject<number>;
  const aboutRef = useRef() as RefObject<number>;
  const reviewRef = useRef() as RefObject<number>;
  const contactRef = useRef() as RefObject<number>;

  const validateNavbarData = () => {
    console.info("START validateNavbarData", navbarDataFetched);
    if(typeof navbarSectionProps != 'undefined') {
      setNavbarDataFetched(navbarSectionProps);
    } else {
      throw new Error("ERROR getting navbar data. It's undefined: ", navbarSectionProps);
    }
    console.info("END validateNavbarData", navbarDataFetched);
  }

  const navSectionRefs = [
    { headerRef: homeRef },
    { headerRef: stayWithUsRef },
    { headerRef: aboutRef },
    { headerRef: reviewRef },
    { headerRef: contactRef },
  ];

  useEffect(() => {
    if(typeof navbarDataFetched === 'undefined') {
      validateNavbarData();
    }
  }, [navbarDataFetched]);
  
  return (
    <>
      <Navbar
      navbarSectionProps={navbarSectionProps}
      contactSectionProps={contactSectionProps}
      handleModal={handleModal}
      isModalActive={isModalOpen}
      navSectionRefs={navSectionRefs} />
      <Layout>
        <Home
          homeSectionProps={homeSectionProps}
          homeRef={homeRef} />
        <StayWithUs
          stayWithUsSectionProps={stayWithUsSectionProps}
          stayWithUsRef={stayWithUsRef} />
        <About
          aboutSectionProps={aboutSectionProps}
          aboutRef={aboutRef} />
        <Review
          reviewSectionProps={reviewSectionProps}
          reviewRef={reviewRef} />
      </Layout>
      <Contact
        contactSectionProps={contactSectionProps}
        contactRef={contactRef} />
      <Footer footerSectionProps={footerSectionProps} />
    </>
  )
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  console.info("START fetching PROPS");

  const navbarSectionProps = (
    await ContentService.instance.getEntriesByType<INavbarFields>(MainContentTypeId.NAVBAR)
  ).map((entry) => entry.fields);

  const homeSectionProps = (
    await ContentService.instance.getEntriesByType<IHomeFields>(MainContentTypeId.HOME)
  ).map((entry) => entry.fields);

  const stayWithUsSectionProps = (
    await ContentService.instance.getEntriesByType<IStayWithUsFields>(MainContentTypeId.STAY_WITH_US)
  ).map((entry) => entry.fields);

  const aboutSectionProps = (
    await ContentService.instance.getEntriesByType<IAboutFields>(MainContentTypeId.ABOUT)
  ).map((entry) => entry.fields);

  const reviewSectionProps = (
    await ContentService.instance.getEntriesByType<IReviewFields>(MainContentTypeId.REVIEW)
  ).map((entry) => entry.fields);

  const contactSectionProps = (
    await ContentService.instance.getEntriesByType<IContactFields>(MainContentTypeId.CONTACT)
  ).map((entry) => entry.fields);

  const footerSectionProps = (
    await ContentService.instance.getEntriesByType<IFooterFields>(MainContentTypeId.FOOTER)
  ).map((entry) => entry.fields);

  console.info("END fetching PROPS");
  return {
    props: {
      navbarSectionProps,
      homeSectionProps,
      stayWithUsSectionProps,
      aboutSectionProps,
      reviewSectionProps,
      contactSectionProps,
      footerSectionProps
    },
  };
};