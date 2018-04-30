import React from 'react';
import Link from 'next/link';
import { Box, Button, Heading, Image } from 'grommet';

const Navbar = props => (
  <Box direction='row' pad='small' align='center' justify='between' background={{ color: 'brand' }}>
    <Box direction='row' justify='left'>
      <Image
        src='https://bitcoin.org/img/icons/opengraph.png'
        alt='btc logo'
        width='45px'
        height='45px'
      />&nbsp;&nbsp;
      <Heading margin='none'>{props.title}</Heading>
    </Box>
    <Box direction='row' gap='small'>
      <Link href='/'><Button>Home</Button></Link>
      <Link href='/about'><Button>About</Button></Link>
    </Box>
  </Box>
);

export default Navbar;
