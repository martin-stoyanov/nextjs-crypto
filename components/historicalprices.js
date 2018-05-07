import { Box, Table } from 'grommet';
import { TableHeader, TableCell, TableBody, TableRow } from 'grommet/components/Table';
import { Line } from 'react-chartjs-2';

class HistoricalPrices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedPrices: [],
      chartData: {},
    };
  }

  // load history prices after componenent mounted
  componentDidMount() {
    this.loadHistory(this.props.currency);
  }
  // after currency changed, reload data
  componentWillReceiveProps(newProps) {
    if (newProps.currency !== this.props.currency) {
      this.loadHistory(newProps.currency);
    }
  }
  loadHistory = async (currency) => {
    // embed currency as string template
    const getHistoricalPrices = await fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`);
    const unsortedPrices = await getHistoricalPrices.json();
    const sortedPrices = Object.entries(unsortedPrices.bpi).sort((date1, date2) => {
      if (date1[0] > date2[0]) {
        return -1;
      }
      if (date1[0] < date2[0]) {
        return 1;
      }
      return 0;
    });
    this.setState({
      sortedPrices,
      chartData: this.loadChart(unsortedPrices.bpi),
    });
  }

  loadChart = (Bpi) => {
    const data = {
      labels: Object.keys(Bpi),
      datasets: [
        {
          label: 'BTC Price',
          backgroundColor: 'rgba(0, 169, 255, 0.5)',
          data: Object.values(Bpi),
        },
      ],
    };
    return data;
  }

  render() {
    const { currency } = this.props;
    const { sortedPrices } = this.state;
    const { chartData } = this.state;
    return (
      <Box>
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: true,
            animation: {

          },
          }
        }
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell size='xxsmall' scope='col' border='bottom' key='Date'><b>Date</b></TableCell>
              <TableCell size='xxsmall' scope='col' border='bottom' key='Price'><b>Price</b></TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.keys(sortedPrices).map((key, index) => (
              <TableRow key={`hist_${currency}_${index}`}>
                <TableCell size='xxsmall' scope='row'>{sortedPrices[key][0]}</TableCell>
                <TableCell size='xxsmall' scope='row'>{sortedPrices[key][1]}</TableCell>
              </TableRow>
          ))}
          </TableBody>
        </Table>
      </Box>
    );
  }
}
export default HistoricalPrices;
