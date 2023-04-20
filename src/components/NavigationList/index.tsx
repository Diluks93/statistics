import * as UI from 'components/ui/Link';
import { Router } from 'router';
import * as Styled from './styled';

const router = Object.entries(Router);

export const NavigationList = () => {
  return (
    <Styled.List>
      {router.map(([key, value]) => (
        <Styled.ListItem key={key}>
          <UI.LinkStyled to={value}>{key}</UI.LinkStyled>
        </Styled.ListItem>
      ))}
    </Styled.List>
  );
};
