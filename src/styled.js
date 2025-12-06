import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  text-decoration: none;
  color: white;
  padding: 15px;
  font-size: large;

  &.${activeClassName} {
    font-weight: bold;
  }
`;
export const NavigationItem = styled.li`
  list-style: none;
`;

export const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Navigation = styled.nav`
  background-color: teal;
  padding: 1px;
`;

export const Main = styled.main`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;
