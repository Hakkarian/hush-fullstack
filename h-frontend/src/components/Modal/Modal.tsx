import React, { MouseEventHandler, ReactNode, useState } from 'react'
import {ModalCss, BgCss, MobileIcon, NavCss, ListCss} from './Modal.styled'
import MenuIcon from './MenuIcon'

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
            <MobileIcon />
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