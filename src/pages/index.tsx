import type { NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ContentfulClientApi, createClient, EntryCollection } from 'contentful'
import { useEffect, useState } from 'react'

import ContentService from '../utils/contentful/content-service'
import { MainContentTypeId } from '../utils/contentful/content-type-id'
import { IHomeFields, INavbarFields, IStayWithUsFields } from '../../@types/generated/contentful'
import Layout from '../components/layout/layout'
import Navbar from '../components/navbar/navbar'
import Home from '../templates/home/home'
import StayWithUs from '../templates/stay-with-us/stayWithUs'

interface IIndexProps {
  navbarSectionProps: INavbarFields[];
  homeSectionProps: IHomeFields[];
  stayWithUsSectionProps: IStayWithUsFields[];
}

const Index: NextPage<IIndexProps> = ({
  navbarSectionProps, 
  homeSectionProps,
  stayWithUsSectionProps
}: IIndexProps) => {
  //console.log("INDEX navbarProps",navbarSectionProps)
  //console.log("INDEX homeProps",homeSectionProps)
  console.log("INDEX stayWithUsSectionProps", stayWithUsSectionProps)

  return (
    <>
      <Navbar navbarSectionProps={navbarSectionProps}/>
      <Layout>
        <Home homeSectionProps={homeSectionProps}/>
        <StayWithUs stayWithUsSectionProps={stayWithUsSectionProps} />
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
    await ContentService.instance.getEntriesByType<IHomeFields>(MainContentTypeId.STAY_WITH_US)
  ).map((entry) => entry.fields);

  return {
    props: {
      navbarSectionProps,
      homeSectionProps,
      stayWithUsSectionProps
    },
  };
};