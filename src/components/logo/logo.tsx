import { NextPage } from 'next';
import Image from 'next/image'
import Link from 'next/link';

import { useState, useEffect } from 'react';

import { urlHome } from '../../lib/endpoints';
import { LogoModule } from '../../lib/interfaces/contentful';
import { functionalityAlias } from '../../utils/strings';
import { checkUrlContentfulData, concatHttpsAndUrlFromContentful, createClassName } from '../../utils/utility';

import './logo.module.scss';

interface LogoProps {
  logoImageProps: LogoModule.ILogoData;
  width: number,
  height: number,
  className?: string | undefined
}

type LabelLogo = {
  defaultClassName: string;
}

const Logo: NextPage<LogoProps> = ({
    logoImageProps,
    width,
    height,
    className
  }: LogoProps) => {
  const [logoImageData, setLogoImageData] = useState<LogoModule.ILogoData>();
  
  const labelLogo: LabelLogo = {...functionalityAlias.component.logo};
  const classes: string = createClassName(labelLogo.defaultClassName, className);

  useEffect(() => {
      setLogoImageData(logoImageProps)
  }, []);
  
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
          className={classes}
          width={width}
          height={height}
        />
    </Link>
    </>
  );
}

export default Logo;