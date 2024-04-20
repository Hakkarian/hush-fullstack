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

    &:hover {
      cursor: pointer;
      &.demo-overlay {
        opacity: 1;
      }
    }
  }

  .gallery-item__image {
    position: relative;

    border-radius: 1rem;

    width: calc(100% - 2rem);
  }

  .gallery-item__button {
    position: sticky;
    bottom: 0;
  }

  .gallery-item__button--delete {
  }
`;