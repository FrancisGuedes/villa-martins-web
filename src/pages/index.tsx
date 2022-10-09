import type { NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ContentfulClientApi, createClient, EntryCollection } from 'contentful'
import { useEffect, useState } from 'react'

import ContentService from '../utils/contentful/content-service'
import { MainContentTypeId } from '../utils/contentful/content-type-id'
import { IHomeFields, INavbarFields } from '../../@types/generated/contentful'
import Layout from '../components/layout/layout'
import Navbar from '../components/navbar/navbar'
import Home from '../templates/home/home'

interface IIndexProps {
  navbarSectionProps: INavbarFields[];
  homeSectionProps: IHomeFields[];
}

const Index: NextPage<IIndexProps> = ({
  navbarSectionProps, 
  homeSectionProps
}: IIndexProps) => {
  console.log("INDEX navbarProps",navbarSectionProps)
  console.log("INDEX homeProps",homeSectionProps)
/* 
  const p = data?.map((el) => {
    return el.metadata?.map(i => 
      {
        return(
          <p>{i.sys.id}</p>
        )
      }
    )
  })
 */
  return (
    <>
      {/* <p>
        item name: {data.map(item => item.name)}
      </p>
      <span>
        {p}
      </span> */}
      <Layout>
        <Navbar />
        <Home homeSectionProps={homeSectionProps} />
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

  return {
    props: {
      navbarSectionProps,
      homeSectionProps,
    },
  };
};