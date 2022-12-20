import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Head from 'next/head';
import type { NextPage } from 'next';
import { Typography } from '@mui/material';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Card>
        <CardContent>
          <Typography variant='h5' component='h2'>
            Hello World
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Home;
