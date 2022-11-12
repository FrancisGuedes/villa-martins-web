import { NextPage } from 'next';
import { LegacyRef } from 'react';
import { IStayWithUsFields } from '../../../@types/generated/contentful';

import { StayWithUsTextModule, StayWithUsImageModule } from '../../lib/interfaces/contentful/istayWithUs';
import Description from './description/description';
import ImageMedia from './image-media/imageMedia';

import './stayWithUs.module.scss';

interface IStayWithUsProps {
  stayWithUsSectionProps: IStayWithUsFields[];
  stayWithUsRef: LegacyRef<HTMLElement> | undefined;
}

const StayWithUs: NextPage<IStayWithUsProps> = ({
  stayWithUsSectionProps,
  stayWithUsRef 
}: IStayWithUsProps) => {
  // Text data
  const textContentData: StayWithUsTextModule.IFields = new Map(Object.entries(stayWithUsSectionProps))
  .values()
  .next()
  .value['stayWithUsTextContent']['fields'];
  
  // Image data
  const imageContentData: StayWithUsImageModule.IFields = new Map(Object.entries(stayWithUsSectionProps))
  .values()
  .next()
  .value['stayWithUsImageContent']['fields'];

  const imageTitle: string = imageContentData.title;

  return (
    <>
      <section id="stay-with-us" className='stay-with-us_wrapper' ref={stayWithUsRef}>
        <Description 
          textContentData={textContentData}
        />
        <ImageMedia 
          title={imageTitle} 
          imageMedia={imageContentData.imageMedia}     
        />
      </section>
    </>
  );
}

export default StayWithUs;