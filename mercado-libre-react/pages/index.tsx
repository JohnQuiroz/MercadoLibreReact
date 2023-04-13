import { Layout } from 'layouts/Layout';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Mercado Libre</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <Layout />
    </>
  );
};

export default IndexPage;
