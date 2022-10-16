import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { IHomeFields } from '../../../@types/generated/contentful';

import './home.module.scss';

interface IHomeProps {
  homeSectionProps: IHomeFields[];
}

const Home: NextPage<IHomeProps>  = ({ homeSectionProps }: IHomeProps) => {
  //console.log("home homeSection: ", homeSectionProps)
  const [contentfulHomeData, setContentfulHomeData] = useState<Array<IHomeFields>>([]);

  useEffect(() => {
    setContentfulHomeData(homeSectionProps);
  }, []);

  return (
    <>
      <section>
        home Component
      </section>
    </>
  );
}

export default Home;