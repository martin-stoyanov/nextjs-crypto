import { Paragraph, Box } from 'grommet';
import React from 'react';

// make into a react component- then put timer
// make componentdidmount with timer, when data received, put in state
// if new currency, stop new timer, start newcomponent
class SinglePrice extends React.Component {
  constructor(props) {
    super(props);
    const { bpi, currency } = props;
    this.state = {
      price: bpi.bpi[currency].rate,
      time: bpi.time.updated,
    };
  }

  componentDidMount() {
    setInterval(this.getPrice, 60000);
  }

  getPrice = async () => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    const price = data.bpi[this.props.currency].rate;
    const time = data.time.updated;
    this.setState({
      price,
      time,
    });
  }
  render() {
    const { currency } = this.props;
    const { price, time } = this.state;
    return (
      <Box>
        <Paragraph>{`BTC price for ${currency}: `}
          <b>{price}</b>
        </Paragraph>
        <Paragraph>Updated on: <b>{time}</b></Paragraph>
      </Box>
    );
  }
}
export default SinglePrice;
