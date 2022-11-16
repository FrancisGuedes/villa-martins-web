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