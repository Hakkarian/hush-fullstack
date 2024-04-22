import React, { MouseEventHandler, ReactNode, useState } from 'react'
import {ModalCss, BgCss, MobileIcon, NavCss, ListCss} from './Modal.styled'


interface Props {
  children: ReactNode;
  func: MouseEventHandler<HTMLDivElement>;
  click: boolean;
}

function Modal({children, func, click}: Props) {


    return (
      <>
        <ModalCss>
          <div onClick={func}>
            <MobileIcon handleClick={func} clicked={click} />
          </div>
        </ModalCss>
        <BgCss clicked={click}></BgCss>
        <NavCss clicked={click}>
          <ListCss>{children}</ListCss>
        </NavCss>
      </>
    );
}

export default Modal