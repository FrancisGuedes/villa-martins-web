import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { IHomeFields } from '../../../@types/generated/contentful';
import AppButton from '../../components/app-button/appButton';
import Carousel from '../../components/carousel/carousel';
import { CarouselModule, HomeButtonModule } from '../../lib/interfaces/contentful/ihome';

import './home.module.scss';


interface IHomeProps {
  homeSectionProps: IHomeFields[];
}

const Home: NextPage<IHomeProps>  = ({ 
  homeSectionProps 
}: IHomeProps) => {
  const [contentfulHomeData, setContentfulHomeData] = useState<Array<IHomeFields>>([]);
  
  // button data
  const buttonDataFields: HomeButtonModule.IFields2 = new Map(Object.entries(homeSectionProps))
  .values()
  .next()
  .value['buttonData']['fields']['href']['fields'];
  const buttonLinkFields: HomeButtonModule.IFields3 = buttonDataFields.href.fields;

  // carousel data
  const carouselMedia: CarouselModule.IFields[] = new Map(Object.entries(homeSectionProps))
  .values()
  .next()
  .value['carouselData']['fields']['carouselMedia'];
  
  useEffect(() => {
    setContentfulHomeData(homeSectionProps);
  }, []);

  return (
    <>
      <section id="home" className='home-wrapper'>
        <div className='carousel-wrapper'>
          <Carousel
            slides={carouselMedia}
            autoplayOptions={{ 
              delay: 3000, 
              stopOnInteraction: false 
            }}
            emblaOptions={{
              loop: true,
              skipSnaps: false
            }}
            isPrevBtnEnabled
            isNextBtnEnabled
            isDotsActive
          />
        </div>
        <AppButton
          type='button'
          className='home-button'
          ariaLabel={buttonDataFields.ariaLabel}
          rel={buttonLinkFields.rel}
          href={buttonLinkFields.href}
          target='_blank'
        >
          {buttonLinkFields.title}
        </AppButton>
      </section>
    </>
  );
}

export default Home;