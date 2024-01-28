import styled from "styled-components";


export const ButtonCss = styled.button`
  width: 7rem;
  height: 3rem;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.03em;

  border-radius: 5px;

  border: 1px solid ${({ theme }) => theme.colors.firstColor};
  background-color: ${({ theme }) => theme.colors.secondColor};
  color: ${({ theme }) => theme.colors.firstColor};
  cursor: pointer;

  transition: background-color 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    border-radius 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275), 
    color 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.secondColor};
    background-color: ${({ theme }) => theme.colors.firstColor};
    color: ${({ theme }) => theme.colors.secondColor};
  }
`;