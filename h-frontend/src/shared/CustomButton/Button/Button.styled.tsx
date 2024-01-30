import styled from "styled-components";

export const ButtonCss = styled.div`
  .button-main {
    padding: 0;
    margin: 0;

    .btn-bg {
      ${({ theme }) => theme.utils.flexStyle("column", "center", "")};

      &.Ocean {
        .btn-group {
          .Debris {
            button {
              color: red;
              overflow: hidden;
              position: relative;
              border-radius: 5px;
              border: 5px solid red;
              background: transparent;
              transition: all 2s ease;

              span {
                position: absolute;
                content: "";
                top: calc(2em - 0.5px);
                left: 50%;
                width: 20em;
                height: 20em;
                opacity: 0.5;
                background: ${({ theme }) => theme.button.roseBg};
                margin-left: -10em;
                border-radius: 42.5%;
                transform-origin: 50% 50%;
                animation: wave 5s infinite linear;
                transition: all 2s ease, top 1.5s ease;
              }

              &:hover {
                color: black;
                border-color: black;
                transition: all 2s ease;

                span {
                  opacity: 1;
                  top: 0.5em;
                  background-color: black;
                  transition: all 2s ease, top 1.5s ease;
                }
              }
            }
          }

          .Coral {
            button {
              padding: 15px 10px;
              color: ${({ theme }) => theme.colors.firstColor};
              overflow: hidden;
              position: relative;
              border-radius: 5px;
              border: 5px solid black;
              background: transparent;
              transition: all 1s ease;

              span {
                position: absolute;
                content: "";
                top: 80%;
                right: -180%;
                width: 10em;
                height: 10em;
                border-radius: 42.5%;
                transform-origin: 50% 50%;
                transition: all 1s ease, top 1.5s ease;
                background: ${({ theme }) => theme.button.waterBg};

                &.Coralwave1 {
                  background: ${({ theme }) => theme.button.thirdColor};
                  animation: smallwave 3s infinite linear;
                }

                &.Coralwave2 {
                  background: ${({ theme }) => theme.button.roseBg};
                  animation: smallwave 4s infinite linear;
                }

                &.Coralwave3 {
                  background: ${({ theme }) => theme.colors.fColor};
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

    button {
      cursor: pointer;
      overflow: visible;
      outline: none;
      color: #fff;
      position: relative;
      letter-spacing: 0.1em;
      font-weight: 400;
      padding: 1rem 3rem 1rem 3rem;
      text-transform: uppercase;
      font-family: "Lato";
      font-size: 1.5em;

      a {
        text-decoration: none;
      }
    }
  }

  .vertical-text__list1 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .vertical-text__item {
    color: black;

    p {
      font-size: 16px;
    }
  }
`;