import { ContactModule } from '../../lib/interfaces/contentful/icontact';
import { functionalityAlias } from '../../utils/strings';
import { combineObjects } from '../../utils/utility';
import MediaLink from './media-link/mediaLink';

import './socialMedia.module.scss';

interface SocialMediaProps {
  socialMediaProps: ContactModule.ISocialMediaLinks[];
  isTitleOfContactActive: boolean;
  isSvgActive: boolean;
  isDescriptionSvgActive: boolean;
  className?: LabelSocialMedia | undefined;
}

export type LabelSocialMedia = {
  [key: string]: string | number,
  contactLink: string,
  link: string,
  svgIcon: string
}

const SocialMedia = ({
  socialMediaProps,
  isSvgActive,
  isDescriptionSvgActive,
  isTitleOfContactActive,
  className
}: SocialMediaProps) => {
  const labelSocialMedia: LabelSocialMedia = {...functionalityAlias.component.socialMedia};
  const classes: LabelSocialMedia = combineObjects(labelSocialMedia, className);

  const renderContactLinksData = socialMediaProps.map((contactLinks: ContactModule.ISocialMediaLinks, index: number) => {
    const contactLinkID: string = contactLinks['fields'].id;
    const contactTittleLink: string = contactLinks['fields'].name;
    
    // MAPPER FOR RENDERING MEDIA LINKS
    const renderContactLinks = contactLinks['fields']['links'].map((link: ContactModule.ILink, index: number) => {
      const linkMediaFile: ContactModule.File = link.fields.media.fields.file;
      const svgClassName: string = link.fields.media.fields.title;
      const linkFields: ContactModule.IFields2 = link.fields;
      
      return (
        <> 
          <div key={index}>
            <MediaLink 
              linkMediaFile={linkMediaFile}
              linkFields={linkFields}
              svgClassName={svgClassName}
              isSvgActive={isSvgActive}
              isDescriptionSvgActive={isDescriptionSvgActive}
              className={classes}
            />
          </div>
        </>
      );
    });

    return (
      <> 
        <span className="top-line"/>
        <div className={`${contactLinkID} ${classes.contactLink}`} key={index}>
          { isTitleOfContactActive 
            ? 
              <h3>
                {contactTittleLink}
              </h3> 
            : 
              null
          }
          {renderContactLinks}
        </div>
      </>
    )
  })

  return (
    <>
      {renderContactLinksData}
    </>
  );
}

export default SocialMedia;