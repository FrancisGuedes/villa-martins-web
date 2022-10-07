import type { NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ContentfulClientApi, createClient, EntryCollection } from 'contentful'

import styles from '../styles/Test.module.scss'

import Head from 'next/head'
import Image from 'next/image'
import { ISectionFields, ISectionMetadataFields } from '../../@types/generated/contentful'
import { useEffect, useState } from 'react'
import ContentService from '../utils/contentful/content-service'
import { ContentTypeId } from '../utils/contentful/content-type-id'

interface IHomeProps {
  reviewsSection: ISectionFields[];
}

const Home: NextPage<IHomeProps> = ({reviewsSection}) => {
  const [data, setData] = useState<Array<ISectionFields>>([]);

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

  return (
    <>
      <p>
        item name: {data.map(item => item.name)}
      </p>
      <span>
        {p}
      </span>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum sapiente a unde nulla placeat debitis, reprehenderit cupiditate voluptas voluptates, architecto nam porro deleniti soluta quidem nesciunt vel magni necessitatibus beatae!</p>
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const reviewsSection = (
    await ContentService.instance.getEntriesByType<ISectionFields>(ContentTypeId.SECTION)
  ).map((entry) => entry.fields);

  return {
    props: {
      reviewsSection,
    },
  };
};