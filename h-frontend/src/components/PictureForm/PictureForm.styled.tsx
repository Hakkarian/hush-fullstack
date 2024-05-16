import styled from "styled-components";

export const PictureFormCss = styled.div`
position: absolute;
  width: 50%;
  height: 100%;
  .add-image {
    z-index: 1;
    position: fixed;
    bottom: 0;
    left: -12rem;
    transform: translate(10%, 0%);
    display: flex;
    flex-direction: column;
    width: 10rem;

    background-color: ${({ theme }) => theme.colors.secondColor};
    padding: 1rem;
    padding-left: 4rem;
    transition: transform 500ms ease-in-out;

    &.open {
      transform: translateX(10rem);
    }
  }

  .button--similarity-off {
    border: 1px solid ${({ theme }) => theme.colors.secondColor};
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.secondColor};

    &:hover,
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.text};
      background-color: ${({ theme }) => theme.colors.secondColor};
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;