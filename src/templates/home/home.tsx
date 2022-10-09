import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { IHomeFields } from '../../../@types/generated/contentful';

import './home.module.scss';

interface IhomeProps {
  homeSectionProps: IHomeFields[];
}

const Home: NextPage<IhomeProps>  = ({ homeSectionProps }: IhomeProps) => {
  console.log("home homeSection: ", homeSectionProps)
  const [data, setData] = useState<Array<IHomeFields>>([]);

  useEffect(() => {
    setData(homeSectionProps);
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