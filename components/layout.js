import React from 'react';
import { Grommet } from 'grommet';
import { materiallight } from 'grommet-controls/themes';
import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';

const Layout = props => (
  <Grommet theme={materiallight}>
    <Head>
      <title>{props.title}</title>
    </Head>
    <Navbar title={props.title} />
    {props.children}
    <Footer />
  </Grommet>
);

export default Layout;
