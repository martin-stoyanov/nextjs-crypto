import { Box, Paragraph } from 'grommet';
import { Card, Select } from 'grommet-controls';
import { CardTitle, CardContent } from 'grommet-controls/components/Card';
import SinglePrice from './singlePrice';
import HistoricalPrices from './historicalprices';

const currencies=["USD","EUR","GBP"];
class Prices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: props.currency,
    };
  }

  render() {
    const { currency } = this.state;
    return (
      <div>
        <Card size={{ width: 'xlarge' }}>
          <CardTitle border='bottom'>Welcome to BitPrice!</CardTitle>
          <CardContent pad='small'>
            <SinglePrice currency={currency} bpi={this.props.bpi} />
            <Box direction='row' justify='left'>
              <Paragraph>Currency: &nbsp;&nbsp;</Paragraph>
              <Select 
                options={currencies}
                value={currency}  
                onChange={event => this.setState({
                  currency: event.value,
                })}/>
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
      </div>
    );
  }
}
export default Prices;
