import React from 'react';
import { Box, Paragraph, Heading, Image, Anchor } from 'grommet';
import Layout from '../components/layout';


const About = () => (
  <Layout title='About'>
    <Box direction='column' align='center'>
      <Heading level={2}>About bitprice</Heading>
      <Image
        src='https://bitcoin.org/img/icons/opengraph.png'
        alt='btc logo'
        width='50px'
        height='50px'
      />
      <Paragraph margin={{ top: 'medium' }}>Bitprice is an app to view the current Bitcoin price.</Paragraph>
      <Heading level={2}>Built using:</Heading>
      <Box direction='row' align='start'>
        <Anchor href='https://reactjs.org/'>
          <Image
            src='http://www.jsweet.org/wp-content/uploads/2016/04/react-logo-300x289.png'
            alt='React Logo'
            width='150px'
            height='150px'
          />
        </Anchor>
        <Anchor href='https://github.com/zeit/next.js/'>
          <Image
            src='https://i.ytimg.com/vi/Fnw3lNeH-XI/maxresdefault.jpg'
            alt='next.js Logo'
            width='225px'
            height='150px'
          />
        </Anchor>
        <Anchor href='http://grommet.io//'>
          <Image
            src='https://img.scoop.it/UzZ9-kwFjgyvqLoC30SNhTl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9'
            alt='Grommet Logo'
            width='175px'
            height='150px'
            margin={{ top: 'small' }}
          />
        </Anchor>
      </Box>
    </Box>
  </Layout>
);

export default About;
