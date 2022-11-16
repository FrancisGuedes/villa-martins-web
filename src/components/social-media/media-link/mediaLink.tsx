import Image from 'next/image';

import AppLink from '../../app-link/appLink';
import { ContactModule } from '../../../lib/interfaces/contentful/icontact';
import { concatHttpsAndUrlFromContentful } from '../../../utils/utility';

import './mediaLink.module.scss';
import { LabelSocialMedia } from '../socialMedia';

interface MediaLinkProps {
  linkMediaFile: ContactModule.File;
  linkFields: ContactModule.IFields2
  svgClassName: string;
  isSvgActive: boolean;
  isDescriptionSvgActive: boolean;
  className?: LabelSocialMedia | undefined;
  svgHeight?: number | undefined;
  svgWidth?: number | undefined;
}

const MediaLink = ({
  linkMediaFile,
  linkFields,
  svgClassName,
  isSvgActive,
  isDescriptionSvgActive,
  className,
  svgHeight,
  svgWidth
}: MediaLinkProps) => {
  const svgUrl: string = concatHttpsAndUrlFromContentful(linkMediaFile.url);
  
  return (
    <>
      <AppLink 
        href={linkFields.href}
        className={`${linkFields.id} ${className?.link}`}
        target='_blank'
      >
        { isSvgActive 
          ? 
            <Image 
              src={svgUrl} 
              height={svgHeight ? svgHeight : 16 }
              width={svgWidth ? svgWidth : 16}
              className={`${svgClassName} ${className?.svgIcon}`}
              alt={`Icon for social media: ${svgClassName}`}
            /> 
          : 
            null
        }
        { isDescriptionSvgActive && isSvgActive 
          ? 
            <>&nbsp;{linkFields.name}</> 
          : 
            isDescriptionSvgActive ? <>{linkFields.name}</> : null 
        }
      </AppLink>
    </>
  );
}

export default MediaLink;