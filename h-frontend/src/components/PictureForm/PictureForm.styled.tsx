import styled from "styled-components";

export const PictureFormCss = styled.div`
  .add-image {
    z-index: 1;
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;

    transform: translate(-240%, 80%);
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