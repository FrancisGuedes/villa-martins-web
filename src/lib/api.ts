import type { GetStaticProps } from 'next'
import { ContentfulClientApi, createClient, EntryCollection } from 'contentful'

/* export const getStaticProps: GetStaticProps = async () => {

  const client: ContentfulClientApi = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  })

  const responseReviews: EntryCollection<ISectionFields> = await client.getEntries<ISectionFields>({ content_type: "section" })

  return {
    props: {
      reviews: responseReviews.items,
    }
  }
} */