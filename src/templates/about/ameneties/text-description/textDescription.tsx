import AppParagraph from '../../../../components/app-paragraph/appParagraph';
import { AboutTextContentModule } from '../../../../lib/interfaces/contentful/iabout';

import './textDescription.module.scss';

interface TextDescriptionProps {
  title: string;
  textContent: AboutTextContentModule.IAboutTextContent[];
}

const TextDescription = ({
  title,
  textContent
}: TextDescriptionProps) => {

  // Paragraph text data
  const renderAmenetiesParagraphs: JSX.Element[] = textContent.map((
    textContent: AboutTextContentModule.IAboutTextContent, 
    index: number) => {
      let paragraphValue: string = textContent['fields']['paragraphContent']['content'][0]['content'][0].value;

      return (
        <div key={index}>
          <AppParagraph
            className='about-paragraph'
          >
            {paragraphValue}
          </AppParagraph>
        </div>
      )
  })

  return (
    <div className="ameneties_paragraph-container">
      <div className='title-wrapper'>
        <h1>
          {title}
        </h1>
      </div>
      <div className="ameneties_paragraph-wrapper">
        {renderAmenetiesParagraphs}
      </div>
    </div>
  );
}

export default TextDescription;