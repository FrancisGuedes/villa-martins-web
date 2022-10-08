import type { NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ContentfulClientApi, createClient, EntryCollection } from 'contentful'
import { useEffect, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import ContentService from '../utils/contentful/content-service'
import { MainContentTypeId } from '../utils/contentful/content-type-id'
import Hero from '../templates/hero/hero'
import { IHomeFields } from '../../@types/generated/contentful'
import Layout from '../components/layout/layout'

interface IIndexProps {
  heroSection: IHomeFields[];
}

const Index: NextPage<IIndexProps> = ({heroSection}: IIndexProps) => {
  console.log("INDEX heroProps",heroSection)
/*   const [data, setData] = useState<Array<ISectionFields>>([]);

  useEffect(() => {
    setData(reviewsSection);
  }, []);

  console.log("reviews:", reviewsSection)
  console.log("data:", data)

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
        <Hero heroSection={heroSection} />
      </Layout>
    </>
  )
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const heroSection = (
    await ContentService.instance.getEntriesByType<IHomeFields>(MainContentTypeId.HOME)
  ).map((entry) => entry.fields);

  return {
    props: {
      heroSection,
    },
  };
};