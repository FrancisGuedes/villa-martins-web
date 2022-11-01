import Image from 'next/image';

import AppLink from '../../../components/app-link/appLink';
import { ContactModule } from '../../../lib/interfaces/contentful/icontact';
import { concatHttpsAndUrlFromContentful } from '../../../utils/utility';

import './contactLink.module.scss';

interface ContactLinkProps {
  linkMediaFile: ContactModule.File;
  linkFields: ContactModule.IFields2
  svgClassName: string;
}

const ContactLink = ({
  linkMediaFile,
  linkFields,
  svgClassName,
}: ContactLinkProps) => {
  const svgUrl: string = concatHttpsAndUrlFromContentful(linkMediaFile.url);
  
  return (
    <>
      <AppLink 
        href={linkFields.href} 
        rel={linkFields.alt}
        className={`${linkFields.id} link`}
        target='_blank'
      >
        <Image 
          src={svgUrl} 
          height={20}
          width={20}
          className={`${svgClassName} svg-icon`}
        /> 
        &nbsp;{linkFields.name}
      </AppLink>
    </>
  );
}

export default ContactLink;