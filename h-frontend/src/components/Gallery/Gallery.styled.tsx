import styled from "styled-components";

export const GalleryCss = styled.div`
  transition: background-color 500ms linear;
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
    text-align: center;
    gap: 0.5rem;

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

  .image--risey {
    filter: drop-shadow(0px 0px 10px rgba(277 87 51 / 30%));
  }

  .gallery-item__button--delete {
  }
`;