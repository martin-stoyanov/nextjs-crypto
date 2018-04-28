import { Paragraph, Box } from 'grommet';
import React from 'react';

const SinglePrice = props => (
  <Box direction='column'>
    <Paragraph>BTC price for {props.bpi.bpi[props.currency].code}:
      <b> {props.bpi.bpi[props.currency].rate}</b>
    </Paragraph>
    <Paragraph>Updated on: <b>{props.bpi.time.updated}</b></Paragraph>
  </Box>
);
export default SinglePrice;
