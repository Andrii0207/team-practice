import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: orange;
  }
`;

export { StyledLink };
