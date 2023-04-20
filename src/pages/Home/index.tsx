import highchart from 'assets/icons/highchart.svg';
import logo from 'assets/icons/logo.svg';
import * as UI from 'components/ui/Stack';
import * as Styled from './styled';

const Home = () => {
  return (
    <UI.Stack>
      <Styled.Block>
        <Styled.Logo src={logo} alt="logo" />
        <Styled.Logo src={highchart} alt="highchart" />
      </Styled.Block>
      <h1>Statistics GitHub</h1>
      <p>This application about statistics from GitHub with Highcharts</p>
      <Styled.Link
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Styled.Link>
      <Styled.Link
        href="https://www.highcharts.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Highcharts
      </Styled.Link>
    </UI.Stack>
  );
};

export default Home;
