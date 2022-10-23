import AppParagraph from '../../../components/app-paragraph/appParagraph';
import { StayWithUsTextModule } from '../../../lib/interfaces/contentful/istayWithUs';
import './description.module.scss';

interface DescriptionProps {
  textContentData: StayWithUsTextModule.IFields;
}

const Description = ({
  textContentData
}: DescriptionProps) => {

  const title: string = textContentData.title;

  const renderParagraphs: JSX.Element[] = textContentData.paragraphs.map((
    paragraph: StayWithUsTextModule.IParagraph, 
    index: number) => {
      let paragraphValue: string = paragraph['fields']['paragraphContent']['content'][0]['content'][0].value;

      let paragraphName: string = paragraph['fields'].name;

      return (
        <div key={index}>
          <AppParagraph
            className={`${paragraphName}`}
          >
            {paragraphValue}
          </AppParagraph>
        </div>
      )
  })

  return (
    <>
      <div className='paragraph-container'>
        <h1>
          {title}
        </h1>
        <div className="paragraph-wrapper">
          {renderParagraphs}
        </div>
      </div>
    </>
  );
}

export default Description;