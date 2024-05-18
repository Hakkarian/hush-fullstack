import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderCss = styled.header`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
`

export const NavLinkCss = styled(NavLink)`
  display: inline-block;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.07em;

  padding: 1rem 2rem;

  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 235%;
  transition: background-position 400ms linear, transform 400ms linear,
    color 400ms linear;

  &.nav-link--hush {
    &:hover,
    &:active {
      background-position: 100%;
      color: ${({ theme }) => theme.colors.hush.firstColor};
      transform: translateX(0.3rem);
    }
  }
  &.nav-link--risey {
    &:hover,
    &:active {
      background-position: 100%;
      color: ${({ theme }) => theme.colors.risey.firstColor};
      transform: translateX(0.3rem);
    }
  }
`;