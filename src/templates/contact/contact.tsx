import { IContactFields } from '../../../@types/generated/contentful';
import SocialMedia from '../../components/social-media/socialMedia';

import { ContactModule } from '../../lib/interfaces/contentful/icontact';

import './contact.module.scss';

interface ContactProps {
  contactSectionProps: IContactFields[];
}

const Contact = ({
  contactSectionProps
}: ContactProps) => {
  const contactData: ContactModule.IContact = new Map(Object.entries(contactSectionProps))
  .values()
  .next()
  .value;

  const contactLinks: ContactModule.ISocialMediaLinks[] = contactData['socialMediaLinks'];

  const titleSection: string = contactData.title;

  return (
    <>
      <section id="contact" className='contact-wrapper'>
        <div className='title-wrapper'>
          <h1>
            {titleSection}
          </h1>
        </div>
        <div className="contact-links">
          <SocialMedia 
            socialMediaProps={contactLinks}
            isTitleOfContactActive 
            isSvgActive
            isDescriptionSvgActive
          />
        </div>
      </section>
    </>
  );
}

export default Contact;