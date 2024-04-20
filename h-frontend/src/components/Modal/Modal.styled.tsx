import styled from "styled-components";
import MenuIcon from "./MenuIcon";

interface Props {
    clicked: boolean;
}

export const ModalCss = styled.div`

    position: fixed;
    top: 0;
    right: 0;
    border-radius: 50%;
    height: 7rem;
    width: 7rem;
    cursor: pointer;
    z-index: 1;
    box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
`

export const MobileIcon = styled(MenuIcon)`
    
`

export const BgCss = styled.div<Props>`
  position: fixed;
  top: 1rem;
  left: 1rem;
  background-image: radial-gradient(
    ${({ theme }) => theme.colors.firstColor},
    ${({ theme }) => theme.colors.secondColor}
  );
  height: 6rem;
  width: 6rem;
  border-radius: 50%;

  transform: ${({clicked}) => (clicked ? "scale(80)" : "scale(0)")};
`;

