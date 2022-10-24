import { NextPage } from 'next';
import { IStayWithUsFields } from '../../../@types/generated/contentful';

import { StayWithUsTextModule, StayWithUsImageModule } from '../../lib/interfaces/contentful/istayWithUs';
import Description from './description/description';
import ImageMedia from './image-media/imagemedia';

import './stayWithUs.module.scss';

interface IStayWithUsProps {
  stayWithUsSectionProps: IStayWithUsFields[];
}

const StayWithUs: NextPage<IStayWithUsProps> = ({
  stayWithUsSectionProps 
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
      <section id="stay-with-us" className='stay-with-us_wrapper'>
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