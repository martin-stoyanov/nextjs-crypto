import { Box, Paragraph } from 'grommet';
import { Card, Select } from 'grommet-controls';
import { CardTitle, CardContent } from 'grommet-controls/components/Card';
import fetch from 'isomorphic-unfetch';
import SinglePrice from '../components/singlePrice';
import HistoricalPrices from '../components/historicalprices';
import Layout from '../components/layout';

const currencies = ['USD', 'EUR', 'GBP'];
class Prices extends React.Component {
  static async getInitialProps({ query: { currency } }) {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    const res1 = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json');
    const histData = await res1.json();
    return {
      btc: data,
      btcHist: histData,
      currency: currency.toUpperCase(),
    };
  }
  render() {
    const { currency } = this.props;
    console.log(this.props);
    return (
      <Layout title='Bitprice'>
        <Card size={{ width: 'xlarge' }}>
          <CardTitle border='bottom'>Welcome to BitPrice!</CardTitle>
          <CardContent pad='small'>
            <SinglePrice currency={currency} bpi={this.props.btc} />
            <Box direction='row' justify='left'>
              <Paragraph>Currency: &nbsp;&nbsp;</Paragraph>
              <Select
                options={currencies}
                value={currency}
                onChange={this.onChangeCurrency}
              />
            </Box>
          </CardContent>
        </Card>
        <Box direction='column' align='center'>
          <Card size={{ width: 'xlarge' }}>
            <CardTitle border='bottom'>Historical Prices</CardTitle>
            <CardContent pad='small'>
              <HistoricalPrices btcHist={this.props.btcHist} currency={currency} />
            </CardContent>
          </Card>
        </Box>
      </Layout>
    );
  }
}
export default Prices;
