import styled from "styled-components";

export const ButtonCss = styled.div`
  font-family: "Lato";

.vertical-text__list1 {
      display: flex;
      flex-direction: column;
      gap: 10px;
      flex-wrap: wrap;
      align-content: center;

    }

    .vertical-text__item {
      p {
        font-size: 16px;
      }
    }
.button--main {
        cursor: pointer;
        overflow: visible;
        outline: none;
        color: #fff;
        position: relative;
        letter-spacing: 0.1em;
        font-weight: 400;
        text-transform: uppercase;
        font-family: "Lato";
        font-size: 1.5em;

        a {
          text-decoration: none;
        }
      }
    }
  .Minecraft {
    .Grave button {
      font-family: "Roboto";
      font-size: 30px;
      height: 5rem;
      color: ${({ theme }) => theme.colors.risey.firstColor};
      border-radius: 5px;
      border: 3px solid ${({ theme }) => theme.colors.risey.firstColor};
      overflow: hidden;
      position: relative;
      padding: 20px 20px;
      background: linear-gradient(45deg, #787878 7.5px, transparent 5px) 0px
          10px,
        linear-gradient(225deg, #787878 7.5px, transparent 5px) 10px 0px,
        linear-gradient(45deg, #565656 7.5px, transparent 5px) 0px 20px,
        linear-gradient(225deg, #565656 7.5px, transparent 5px) 10px 10px,
        linear-gradient(45deg, #121212 7.5px, transparent 5px) 0px 30px,
        linear-gradient(225deg, #121212 7.5px, transparent 5px) 10px 20px,
        linear-gradient(90deg, #343434 10px, transparent 10px),
        linear-gradient(
          #121212 25%,
          #343434 25%,
          #343434 50%,
          transparent 50%,
          transparent 75%,
          #565656 75%,
          #565656
        );
      background-color: transparent;
      background-size: 0px 0px;
      transition: all 0.35s ease;

      .skeleton {
        position: absolute;
        content: "";
        top: calc(50% - 30px);
        left: calc(50% - 34px);
        width: 60px;
        height: 60px;
        display: flex;
        flex-direction: column;
        transform: scale(0.1);
        opacity: 0;
        transition: all 0.25s ease;
        .face {
          height: 20px;
          width: 70px;
          position: relative;
          z-index: 1;
          &:before,
          &:after {
            width: 50px;
            height: 60px;
            position: absolute;
            content: "";
            background: #fff;
            top: 0px;
            left: 10px;
            z-index: 1;
          }
          &:after {
            width: 70px;
            height: 30px;
            top: 10px;
            left: 0;
            right: 0;
          }
        }
        .eye {
          height: 20px;
          width: 70px;
          position: relative;
          &:before,
          &:after {
            width: 20px;
            height: 10px;
            position: absolute;
            content: "";
            background: #000;
            left: 10px;
            z-index: 999;
          }
          &:after {
            left: inherit;
            right: 10px;
          }
        }
        .mouth {
          width: 70px;
          height: 20px;
          position: relative;
          &:before,
          &:after {
            position: absolute;
            content: "";
            background: #000;
            width: 10px;
            height: 10px;
            bottom: 0;
            left: 20px;
            z-index: 999;
          }
          &:after {
            left: inherit;
            right: 20px;
          }
        }
      }
      &:hover {
        color: transparent;
        border-color: transparent;
        background-color: #000;
        background-size: 20px 40px;
        transition: all 0.35s ease;
        .skeleton {
          transform: scale(1);
          opacity: 1;
          transition: all 0.25s ease;
        }
      }
    }
  }

      .Ocean {
          .Debris {
            button {
              overflow: hidden;
              position: relative;
              border-radius: 10px 50px;
              border: 2px solid black;
              background: transparent;
              transition: all 0.5s ease-in-out;
              color: black;
              width: 7rem;
              height: 3rem;

              font-size: 1rem;

              span {
                position: absolute;
                content: "";
                top: 25%;
                left: 50%;
                width: 20em;
                height: 20em;
                opacity: 0.5;
                background: ${({ theme }) => theme.button.hush.roseBg};
                margin-left: -10em;
                border-radius: 42.5%;
                transform-origin: 50% 50%;
                animation: wave 5s infinite linear;
                transition: all 2s ease, top 1.5s ease;
              }

              &:hover {
                color: crimzon;
                border-radius: 50px 10px;
                border-color: black;
                transition: all 2s ease-in-out;

                span {
                  opacity: 1;
                  top: 10%;
                  background-color: ${({ theme }) => theme.button.hush.black};
                  transition: all 2s ease, top 1.5s ease;
                }
              }
            }
          }

          .Coral {
            button {
              font-family: "Lato";
              font-size: 16;
              padding: 10px 5px;
              color: ${({ theme }) => theme.colors.hush.firstColor};
              overflow: hidden;
              position: relative;
              border-radius: 5px;
              border: 2px solid black;
              background: transparent;
              transition: all 1s ease;

              span {
                position: absolute;
                content: "";
                top: 70%;
                right: -110%;
                width: 20em;
                height: 20em;
                border-radius: 42.5%;
                transform-origin: 50% 50%;
                transition: all 1s ease, top 1.5s ease;
                background: ${({ theme }) => theme.button.hush.waterBg};

                &.Coralwave1 {
                  background: ${({ theme }) => theme.button.hush.thirdColor};
                  animation: smallwave 3s infinite linear;
                }

                &.Coralwave2 {
                  background: ${({ theme }) => theme.button.hush.roseBg};
                  animation: smallwave 4s infinite linear;
                }

                &.Coralwave3 {
                  background: ${({ theme }) => theme.colors.hush.firstColor};
                  animation: smallwave 5s infinite linear;
                }
              }

              &:hover {
                transition: all 1s ease;

                span {
                  top: 1em;
                  width: 20em;
                  height: 20em;
                  transition: all 1s ease, top 1.5s ease;
                }
              }
            }
        }

    @keyframes wave {
      0% {
        transform: rotate(0deg) scale(1);
      }
      50% {
        transform: rotate(180deg) scale(0.975);
      }
      100% {
        transform: rotate(360deg) scale(1);
      }
    }

    @keyframes smallwave {
      0% {
        transform: rotate(0deg) scale(1);
        opacity: 0.8;
      }
      50% {
        transform: rotate(180deg) scale(0.95);
        opacity: 0.25;
      }
      100% {
        transform: rotate(360deg) scale(1);
        opacity: 0.8;
      }
    }

    .btn-group {
      @include flex-style(row, space-between, center);

      @media screen and (max-width: 480px) {
        @include flex-style(column, space-between, center);
      }

      .btn {
        display: block;
      }

      .btn-info {
        margin-bottom: 10px;
        text-align: center;
        font-family: "Lato";
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-weight: 600;
        font-size: 3.5em;
        color: white;
      }

      .btn-mention {
        margin-bottom: 70px;
        text-align: center;
        font-family: "Lato";
        letter-spacing: 0.1em;
        font-size: 1.1em;
        color: white;

        span {
          font-size: 1.2em;
          font-weight: 600;
        }
      }
  }
`;