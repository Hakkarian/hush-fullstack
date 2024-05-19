import React, { FC, HTMLAttributes } from 'react'
import { ButtonCss } from './Button.styled';


interface IButton extends HTMLAttributes<HTMLDivElement> {
  text: string;
  similarMode?: 'similar' | 'normal' | '';
  mainTheme: 'Ocean' | 'Minecraft';
  branchTheme?: "Coral" | "Debris" | "Grave";
  func?: Function;
}

const DeleteButton: FC<IButton> = ({ text, similarMode, className, mainTheme, branchTheme, func }) => {
    return (
      <ButtonCss>
        <div className={mainTheme}>
          <div className={`${branchTheme} button--main`}>
            <button
              type="button"
              onClick={async () => await (func ? func() : null)}
              style={{ width: `${branchTheme === "Coral" ? "100%" : "200px"}` }}
            >
              {branchTheme === "Debris" && (
                <>
                  <span className="one" style={{}}></span>
                  {similarMode === "normal" ? (
                    <>
                      <ul className="vertical-text__list1">
                        {text.split(" ").map((tex) => (
                          <li>
                            <ul className="vertical-text__list2">
                              {tex.split("").map((t) => (
                                <li className="vertical-text__item">
                                  <p>{t}</p>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      {text} <span className="one"></span>
                    </>
                  )}
                </>
              )}
              {branchTheme === "Coral" && (
                <>
                  <ul className="vertical-text__list1">
                    {text.split(" ").map((tex, index) => (
                      <li key={index}>
                        <ul className="vertical-text__list2">
                          {tex.split("").map((t, index) => (
                            <li
                              className="vertical-text__item"
                              style={{
                                color: `${
                                  similarMode === "normal" ? "white" : "black"
                                }`,
                              }}
                              key={index}
                            >
                              <p>{t}</p>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                  <span className="Coralwave1"></span>
                  <span className="Coralwave2"></span>
                  <span className="Coralwave3"></span>
                </>
              )}
              {branchTheme === "Grave" && (
                <>
                  <span className='Grave__text'>{text}</span>
                  <div className="skeleton">
                    <div className="face"></div>
                    <div className="eye"></div>
                    <div className="mouth"></div>
                  </div>
                </>
              )}
            </button>
          </div>
        </div>
      </ButtonCss>
    );
}

export default DeleteButton