import { Box, Table, TableHeader, TableCell, TableBody, TableRow } from 'grommet';

class HistoricalPrices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: props.currency,
      sortedBpi: props.btcHist.bpi
    };
  }

  //load history prices after componenent mounted
  componentDidMount() {
    this.loadHistory(this.props.currency);
  }
  //after currency changed, reload data
  componentWillReceiveProps(newProps) {
    if (newProps.currency !== this.props.currency) {
      this.loadHistory(newProps.currency);
    } 
  }
  loadHistory = async (currency) => {
    //embed currency as string template
    const getData = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`);
    const unsortedBpi = await getData.json();
    const sortedBpi = Object.entries(unsortedBpi.bpi).sort((date1, date2) => {
      if (date1[0] > date2[0]) {
        return -1;
      }
      if (date1[0] < date2[0]) {
        return 1;
      }
      return 0;
    });
    this.setState({
      sortedBpi: sortedBpi,
    })
  }

  render() {
    const { currency } = this.props;
    let { sortedBpi } = this.state;
    return (
      <Box>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell size='xxsmall' scope='col' border='bottom' key='Date'><b>Date</b></TableCell>
              <TableCell size='xxsmall' scope='col' border='bottom' key='Price'><b>Price</b></TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.keys(sortedBpi).map((key, index) => (
              <TableRow key={`hist_${currency}_${index}`}>
                <TableCell size='xxsmall' scope='row'>{sortedBpi[key][0]}</TableCell>
                <TableCell size='xxsmall' scope='row'>{sortedBpi[key][1]}</TableCell>
              </TableRow>
          ))}
          </TableBody>
        </Table>
      </Box>
    );
  }
}
export default HistoricalPrices;
