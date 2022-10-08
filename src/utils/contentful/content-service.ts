import { createClient } from 'contentful'

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

export interface IProcessEnv {
  CONTENTFUL_SPACE_ID: string;
  CONTENTFUL_ACCESS_TOKEN: string;
}

export default class ContentService {
  static get instance() {
    return new ContentService();
  }

  client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  async getEntriesByType<T>(type: string) {
    return (
      await this.client.getEntries<T>({
        content_type: type,
      })
    ).items;
  }
}