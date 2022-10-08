import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { IHomeFields } from '../../../@types/generated/contentful';

import './Hero.module.scss';

interface IHeroProps {
  heroSection: IHomeFields[];
}

const Hero: NextPage<IHeroProps>  = ({ heroSection }: IHeroProps) => {
  console.log("HERO heroSection: ", heroSection)
  const [data, setData] = useState<Array<IHomeFields>>([]);

  useEffect(() => {
    setData(heroSection);
  }, []);

  return (
    <>
      <section>
        Hero Component
      </section>
    </>
  );
}

export default Hero;