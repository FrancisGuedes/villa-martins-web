import Image from 'next/image';
import { IContactFields } from '../../../@types/generated/contentful';

import AppLink from '../../components/app-link/appLink';
import { ContactModule } from '../../lib/interfaces/contentful/icontact';
import { concatHttpsAndUrlFromContentful } from '../../utils/utility';

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
      const svgUrl: string = concatHttpsAndUrlFromContentful(linkMediaFile.url);
      const svgClassName: string = link.fields.media.fields.title;

      return (
        <>
          <div key={index}>
            <AppLink 
              href={link.fields.href} 
              rel={link.fields.alt}
              className={`${link.fields.id} link`}
              target='_blank'
            >
              <Image 
                src={svgUrl} 
                height={20}
                width={20}
                className={`${svgClassName} svg-icon`}
              /> 
              &nbsp;{link.fields.name}
            </AppLink>
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