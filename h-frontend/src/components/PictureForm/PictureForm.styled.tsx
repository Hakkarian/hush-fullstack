import styled from "styled-components";

export const PictureFormCss = styled.div`
  .add-image {
    z-index: 1;
    position: fixed;
    bottom: 0;
    left: 0;
    transform: translate(10%, 0%);
    display: flex;
    flex-direction: column;


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