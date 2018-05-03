import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Box } from 'grommet';
import Layout from '../components/layout';

const Index = () => (
  <Layout title='Bitprice'>
    <Box direction='column' align='center'>
      <p>hi</p>
    </Box>
  </Layout>
);
Index.getInitialProps = async () => {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  const res1 = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json');
  const histData = await res1.json();
  return {
    btc: data,
    btcHist: histData,
    currency: 'USD',
  };
};

export default Index;
