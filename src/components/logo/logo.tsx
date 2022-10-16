import { NextPage } from 'next';
import Image from 'next/image'
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { urlHome } from '../../lib/endpoints';

import { LogoModule } from '../../lib/interfaces/contentful';
import { checkUrlContentfulData, concatHttpsAndUrlFromContentful, errorHandler } from '../../utils/utility';

import './logo.module.scss';

interface LogoProps {
  logoImageProps: LogoModule.ILogoData;
}

const Logo: NextPage<LogoProps> = ({logoImageProps}: LogoProps) => {
  const [logoImageData, setLogoImageData] = useState<LogoModule.ILogoData>();

  useEffect(() => {
      setLogoImageData(logoImageProps)
  }, []);

  /* function validateLogoImageProps(dataFields: LogoModule.ILogoData): LogoModule.ILogoData | null {
    try {
      const dataFieldsn = dataFields.media
      if(dataFields != null || dataFields != undefined) {
        if(dataFields?.length === 0) {
          return null;
        } else if(dataFields.length > 0 ) {
          return new Map(Object.entries(dataFields))
          ?.values()
          .next()
          .value['fields'];
        }
      } else {
        console.error(`LOGO_IMAGE error while getting logoImageProps: ${dataFields}`);
        throw new Error('NOT FOUND logoImageProps: ', dataFields);
      }
    } catch (error) {
      console.error('LOGO_IMAGE error exception: ', error);
    }
    return null;
  } */
  
  const checkMediaFields = (
    mediaField: LogoModule.IFields | undefined | null
    ): LogoModule.IFields => {
    if(mediaField === null || mediaField === undefined || !!mediaField) {
      mediaField = logoImageProps.media.fields;
    } else {
      console.error("[NOT FOUND] mediaField", mediaField);
    }
    return mediaField;
  }

  const urlContentfulData: string = checkUrlContentfulData(logoImageData?.href, urlHome);
  const mediaFields: LogoModule.IFields = checkMediaFields(logoImageData?.media.fields)
  const imageUrl: string = concatHttpsAndUrlFromContentful(mediaFields.file.url);

  //console.log("mediaFields: ", mediaFields);

  return (
    <>
      <Link
        aria-label={mediaFields.description}
        href={urlContentfulData}
        rel="canonical"
        className='logo-wrapper'
      >
        <Image
          src={imageUrl}
          alt={mediaFields.description}
          className='logo-image'
          width={30}
          height={30}
        />
    </Link>
    </>
  );
}

export default Logo;