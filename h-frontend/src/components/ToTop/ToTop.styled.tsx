import styled from "styled-components";

export const ToTopCss = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;

  .center-con {
    display: flex;

    transition: transform 250ms ease-in-out;

    transform: scaleX(0);

    &.scrolled {
      transform: scaleX(1);
    }
  }

  .round {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 0.3rem;

    transform: rotate(-90deg);

    &.round--hush {
      background-color: ${({ theme }) => theme.colors.hush.secondColor};
    }
    &.round--risey {
      background-color: ${({ theme }) => theme.colors.risey.secondColor};
    }
  }

  #cta {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  #arrowAnim {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arrow {
    width: 10vw;
    height: 10vw;
    @media screen and (min-width: 768px) {
      width: 1vw;
      height: 1vw;
    }
    border: 1vw solid;
    border-radius: 0.3rem;
    transform: rotate(135deg);

    &.arrow--hush {
      border-color: ${({ theme }) => theme.colors.hush.firstColor} transparent
        transparent black;
    }
    &.arrow--risey {
      border-color: ${({ theme }) => theme.colors.risey.firstColor} transparent
        transparent black;
    }
  }

  .arrowSliding {
    position: absolute;
    -webkit-animation: slide 4s linear infinite;
    animation: slide 4s linear infinite;
  }

  .delay1 {
    -webkit-animation-delay: 1s;
    animation-delay: 0.5s;
  }
  .delay2 {
    -webkit-animation-delay: 2s;
    animation-delay: 0.5s;
  }
  .delay3 {
    -webkit-animation-delay: 3s;
    animation-delay: 0.5s;
  }

  @-webkit-keyframes slide {
    0% {
      opacity: 0;
      transform: translateX(-15vw);
    }
    20% {
      opacity: 1;
      transform: translateX(-9vw);
    }
    80% {
      opacity: 1;
      transform: translateX(9vw);
    }
    100% {
      opacity: 0;
      transform: translateX(5vw);
    }
  }
  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateX(5vw);
    }
    20% {
      opacity: 1;
      transform: translateX(-3vw);
    }
    80% {
      opacity: 1;
      transform: translateX(3vw);
    }
    100% {
      opacity: 0;
      transform: translateX(5vw);
    }
  }
`;