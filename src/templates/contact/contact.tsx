import { IContactFields } from '../../../@types/generated/contentful';

import { ContactModule } from '../../lib/interfaces/contentful/icontact';
import ContactLink from './contact-link/contactLink';

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

  const renderContactLinksData = contactLinks.map((contactLinks: ContactModule.ISocialMediaLinks, index: number) => {
    const contactLinkID: string = contactLinks['fields'].id;
    const contactTittleLink: string = contactLinks['fields'].name;
    
    const renderAppLinks = contactLinks['fields']['links'].map((link: ContactModule.ILink, index: number) => {
      const linkMediaFile: ContactModule.File = link.fields.media.fields.file;
      const svgClassName: string = link.fields.media.fields.title;
      const linkFields: ContactModule.IFields2 = link.fields;
      
      return (
        <>
          <div key={index}>
            <ContactLink 
              linkMediaFile={linkMediaFile}
              linkFields={linkFields}
              svgClassName={svgClassName} 
            />
          </div>
        </>
      );
    });

    return (
      <div className={`${contactLinkID} contact-link`} key={index}>
        <h3>
          {contactTittleLink}
        </h3>
        {renderAppLinks}
      </div>
    )
  })

  return (
    <>
      <section id="contact" className='contact-wrapper'>
        <div className='title-wrapper'>
          <h1>
            {titleSection}
          </h1>
        </div>
        <div className="contact-links">
          {renderContactLinksData}
        </div>
      </section>
    </>
  );
}

export default Contact;