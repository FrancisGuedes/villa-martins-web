import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document'
import { indexHtmlStrings } from '../utils/strings'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  static labels = indexHtmlStrings;

  render() {
    return (
      <Html lang={MyDocument.labels.lang}>
        <Head />
        <meta charSet={MyDocument.labels.charSet} />
        <meta
          name={MyDocument.labels.name}
          content={MyDocument.labels.content}
        />
        <meta name={MyDocument.labels.themeColor}/>
        <meta 
          name={MyDocument.labels.descriptionName} 
          content={MyDocument.labels.description} 
        />
        {/* <meta 
          name={MyDocument.labels.nameRobots} 
          content={MyDocument.labels.contentRobots} 
        /> */}
        <link 
          rel={MyDocument.labels.relAppleTouchIcon} 
          href={MyDocument.labels.hrefAppleTouchIcon} 
        />
        <link 
          rel={MyDocument.labels.rel} 
          href={MyDocument.labels.href} 
        />
        <title>{MyDocument.labels.title}</title>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;