import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &.active {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;
