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
                left: 120%;
                width: 10em;
                height: 10em;
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
              padding: 15px 10px;
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
                top: 50%;
                right: -100%;
                width: 10em;
                height: 10em;
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
    flex-wrap: wrap;
    align-content: center;
  }

  .vertical-text__item {
    p {
      font-size: 16px;
    }
  }
`;