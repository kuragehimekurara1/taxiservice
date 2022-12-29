import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Head from 'next/head';
import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import { LanguageContext } from '../components/context/LanguageContext';
import { useContext } from 'react';

const Home: NextPage = () => {

  const { language } = useContext(LanguageContext);
  const { homePage } = language;

  return (
    <>
      <Head>
        <title>{homePage.title}</title>
      </Head>
      <Card>
        <CardContent>
          <Typography variant='h5' component='h2'>
            {homePage.title}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Home;
