import { NavigationList } from 'components/NavigationList';
import * as Styled from './styled';

export function Header() {
  return (
    <Styled.Header>
      <Styled.Nav>
        <NavigationList />
      </Styled.Nav>
    </Styled.Header>
  );
}

export default Header;
