import React from 'react';
import Link from 'next/link';
import { Box, Button, Heading } from 'grommet';

const Footer = () => (
  <Box direction='row' pad='small' align='center' justify='center' background={{ color: 'brand' }}>
    <Link href='https://www.coindesk.com/api/'><Button>Coindesk</Button></Link>
    &nbsp;&nbsp;
    <Link href='https://grommet.io/'><Button>Grommet</Button></Link>
  </Box>
);

export default Footer;