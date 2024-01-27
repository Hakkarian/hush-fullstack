import styled from "styled-components";

export const GalleryCss = styled.div`
  .gallery-list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .gallery-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .gallery-item__image {
    position: relative;

    transition: transform 250ms ease-in-out;

    &:hover {
      transform: scale(1.015);
    }
  }

  .gallery-item__button {

    position: sticky;
    bottom: 0;
  }

  .gallery-item__button--delete {
  }
`;