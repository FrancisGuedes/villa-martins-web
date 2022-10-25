import { AboutModule, AboutTextContentModule } from '../../../lib/interfaces/contentful/iabout';
import './ameneties.module.scss';
import TextDescription from './text-description/textDescription';
import Utilities from './utilities/utilities';

interface AmenetiesProps {
  aboutData: AboutModule.IAbout;
}

const Ameneties = ({
  aboutData
}: AmenetiesProps) => {
  const textContent: AboutTextContentModule.IAboutTextContent[] = aboutData['textContent'];

  return (
    <div className="ameneties-container">
      <TextDescription
        title={aboutData.title}
        textContent={textContent}
      />
      <Utilities
        title={aboutData.utilitiesTitle}
        utilities={aboutData.utilities}
      />
    </div>
  );
}

export default Ameneties;