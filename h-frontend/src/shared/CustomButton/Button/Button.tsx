import React, { FC, HTMLAttributes } from 'react'
import { ButtonCss } from './Button.styled';


interface IButton extends HTMLAttributes<HTMLDivElement> {
  text: string;
  mainTheme: 'Ocean';
  branchTheme: "Coral" | "Debris";
  onSimilarDeletion: Function;
}

const DeleteButton: FC<IButton> = ({text, className, mainTheme, branchTheme, onSimilarDeletion}) => {
    return (
      <ButtonCss>
        <div className="button-main" style={{width: `${branchTheme === 'Coral' && '80px'}`}}>
          <div className={`btn-bg ${mainTheme}`}>
            <div className="btn-group">
              <div className={`btn-bg ${branchTheme}`}>
                <button type='button' onClick={async () => await onSimilarDeletion()}>
                  {branchTheme === "Debris" && (
                    <>
                      {text} <span className="one"></span>
                    </>
                  )}
                  {branchTheme === "Coral" && (
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
                      <span className="Coralwave1"></span>
                      <span className="Coralwave2"></span>
                      <span className="Coralwave3"></span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </ButtonCss>
    );
}

export default DeleteButton