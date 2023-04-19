import logo from 'assets/icons/logo.svg';
import * as Styled from './styled';

const Home = () => {
  return (
    <Styled.App>
      <Styled.Header>
        <Styled.Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Styled.Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Styled.Link>
      </Styled.Header>
    </Styled.App>
  );
};

export default Home;
