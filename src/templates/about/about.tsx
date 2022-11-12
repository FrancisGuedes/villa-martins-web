import { IAboutFields } from '../../../@types/generated/contentful';

import { LegacyRef } from 'react';
import AppButton from '../../components/app-button/appButton';
import { AboutImageContentModule, AboutModule } from '../../lib/interfaces/contentful/iabout';
import { concatHttpsAndUrlFromContentful } from '../../utils/utility';
import Ameneties from './ameneties/ameneties';

import './about.module.scss';

interface AboutProps {
  aboutSectionProps: IAboutFields[];
  aboutRef: any;
}

const About = ({
  aboutSectionProps,
  aboutRef
}: AboutProps) => {
  const aboutData: AboutModule.IAbout = new Map(Object.entries(aboutSectionProps))
  .values()
  .next()
  .value;

  const imageDescription: string = aboutData['imageContent']['fields']['media']['fields'].description;
  const imageFile:  AboutImageContentModule.IFile = aboutData['imageContent']['fields']['media']['fields']['file'];
  const imageUrl: string = concatHttpsAndUrlFromContentful(imageFile.url);
  const buttonName = aboutData['aboutButton']['fields'].name;
  const buttonHrefData = aboutData['aboutButton']['fields']['href']['fields'];


  return (
    <>
      <section id="about" className='about-wrapper' ref={aboutRef}>
        <div className="about-container">
          <Ameneties aboutData={aboutData} />
          <span className="about-image_wrapper">
            <img
              alt={imageDescription}
              src={imageUrl}
            />
          </span>
        </div>
        <div className="about-button-wrapper">
          <AppButton
            type='button'
            className='about-button'
            ariaLabel={buttonName}
            rel={buttonHrefData.rel}
            href={buttonHrefData.href}
            target='_blank'
          >
            {buttonName}
          </AppButton>
        </div>
      </section>
    </>
  );
}

export default About;