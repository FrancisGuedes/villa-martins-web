import type { NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ContentfulClientApi, createClient, EntryCollection } from 'contentful'
import { useEffect, useState } from 'react'

import ContentService from '../utils/contentful/content-service'
import { MainContentTypeId } from '../utils/contentful/content-type-id'
import { IAboutFields, IHomeFields, INavbarFields, IReviewFields, IStayWithUsFields } from '../../@types/generated/contentful'
import Layout from '../components/layout/layout'
import Navbar from '../components/navbar/navbar'
import Home from '../templates/home/home'
import StayWithUs from '../templates/stay-with-us/stayWithUs'
import About from '../templates/about/about'
import Review from '../templates/reviews/review'

interface IIndexProps {
  navbarSectionProps: INavbarFields[];
  homeSectionProps: IHomeFields[];
  stayWithUsSectionProps: IStayWithUsFields[];
  aboutSectionProps: IAboutFields[];
  reviewSectionProps: IReviewFields[];
}

const Index: NextPage<IIndexProps> = ({
  navbarSectionProps, 
  homeSectionProps,
  stayWithUsSectionProps,
  aboutSectionProps,
  reviewSectionProps
}: IIndexProps) => {
  //console.log("INDEX navbarProps",navbarSectionProps)

  return (
    <>
      <Navbar navbarSectionProps={navbarSectionProps}/>
      <Layout>
        <Home homeSectionProps={homeSectionProps}/>
        <StayWithUs stayWithUsSectionProps={stayWithUsSectionProps} />
        <About aboutSectionProps={aboutSectionProps}/>
        <Review reviewSectionProps={reviewSectionProps}/>
      </Layout>
    </>
  )
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
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

  return {
    props: {
      navbarSectionProps,
      homeSectionProps,
      stayWithUsSectionProps,
      aboutSectionProps,
      reviewSectionProps,
    },
  };
};