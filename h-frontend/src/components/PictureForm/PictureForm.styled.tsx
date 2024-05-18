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

    padding: 1rem;
    padding-left: 4rem;

    border-radius: 1rem 3rem;
    transition: transform 500ms ease-in-out;

    &.open {
      transform: translateX(10rem);
    }
    &.add-image--hush {
      background-color: ${({ theme }) => theme.colors.hush.secondColor};
    }
    &.add-image--risey {
      background-color: ${({ theme }) => theme.colors.risey.secondColor};
    }
  }

  .button--similarity-off {
    &.similarity-off--hush {
      border: 1px solid ${({ theme }) => theme.colors.hush.secondColor};
      background-color: ${({ theme }) => theme.colors.hush.text};
      color: ${({ theme }) => theme.colors.hush.secondColor};
      &:hover,
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.hush.text};
        background-color: ${({ theme }) => theme.colors.hush.secondColor};
        color: ${({ theme }) => theme.colors.hush.text};
      }
    }
    &.similarity-off--risey {
      border: 1px solid ${({ theme }) => theme.colors.risey.secondColor};
      background-color: ${({ theme }) => theme.colors.risey.text};
      color: ${({ theme }) => theme.colors.risey.secondColor};
      &:hover,
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.risey.text};
        background-color: ${({ theme }) => theme.colors.risey.secondColor};
        color: ${({ theme }) => theme.colors.risey.text};
      }
    }
  }
`;