import styled from "styled-components";
import MenuIcon from "./MenuIcon";

interface Props {
    clicked: boolean;
}

export const ModalCss = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  z-index: 5;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  background-color: "grey";

  transition: background-color 500ms ease-in-out;

  &.modal--hush {
    background-color: ${({ theme }) => theme.colors.hush.secondColor};
  }
  &.modal--risey {
    background-color: ${({ theme }) => theme.colors.risey.secondColor};
  }
`;

export const MobileIcon = styled(MenuIcon)`
    position: absolute;
    padding: 1rem;
    top: 3rem;
    left: 0;
    z-index: 3;
`

export const BgCss = styled.div<Props>`
  position: fixed;
  top: 1rem;
  left: 1rem;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  z-index: 4;
  transform: ${({ clicked }) => (clicked ? "scale(80)" : "scale(0)")};
  background-image: radial-gradient(#989898, #212121);

  transition: transform 2000ms ease-in-out,
    height 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    width 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &.bg--hush {
    background-image: radial-gradient(#b6edc8, #115b4c);
  }
  &.bg--risey {
    background-image: radial-gradient(#f9c04d, #976d04);
  }
`;

export const NavCss = styled.nav<Props>`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;

  z-index: 4;
  opacity: ${({ clicked }) => (clicked ? "1" : "0")};
  width: ${({ clicked }) => (clicked ? "100%" : "0")};
  pointer-events: ${({ clicked }) => (!clicked && "none")};
  transition: opacity 800ms, width 800ms;
`;

export const ListCss = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  width: 15rem;

  transform: translate(-50%, -50%);
  text-align: center;
  
`;

