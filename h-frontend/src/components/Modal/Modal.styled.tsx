import styled from "styled-components";
import MenuIcon from "./MenuIcon";

interface Props {
    clicked: boolean;
}

export const ModalCss = styled.div`
  background-color: #b6edc8;
  position: fixed;
  top: 1rem;
  left: 1rem;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  z-index: 5;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
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
  background-image: radial-gradient(#B6EDC8, #115B4C);
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  z-index: 4;

  transform: ${({ clicked }) => (clicked ? "scale(80)" : "scale(0)")};

  transition: transform 1000ms ease-in-out, height 250ms ease-in-out, width 250ms ease-in-out;
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

