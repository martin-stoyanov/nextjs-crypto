import { Box, Paragraph } from 'grommet';
import { Card, Select } from 'grommet-controls';
import { CardTitle, CardContent } from 'grommet-controls/components/Card';
import Router from 'next/router';
import SinglePrice from '../components/singlePrice';
import HistoricalPrices from '../components/historicalprices';
import Layout from '../components/layout';

const currencies = ['USD', 'EUR', 'GBP'];
class Prices extends React.Component {
  static async getInitialProps({ query: { currency } }) {
    return {
      currency,
    };
  }
  onChangeCurrency = (event) => {
    // link to prices/currency
    Router.push(`/prices/${event.value}`);
  }
  render() {
    const { currency } = this.props;
    return (
      <Layout title='Bitprice'>
        <Box direction='column' align='center'>
          <Card size={{ width: 'xlarge' }}>
            <CardTitle border='bottom'>Welcome to BitPrice!</CardTitle>
            <CardContent pad='small'>
              <SinglePrice currency={currency} />
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
        </Box>
        <Box direction='column' align='center'>
          <Card size={{ width: 'xlarge' }}>
            <CardTitle border='bottom'>Historical Prices</CardTitle>
            <CardContent pad='small'>
              <HistoricalPrices currency={currency} />
            </CardContent>
          </Card>
        </Box>
      </Layout>
    );
  }
}
export default Prices;
