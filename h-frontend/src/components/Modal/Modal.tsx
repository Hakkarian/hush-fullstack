import React, { useState } from 'react'
import {ModalCss, BgCss} from './Modal.styled'
import MenuIcon from './MenuIcon'

function Modal() {
    const [click, setClick] = useState(false);
    console.log("🚀 ~ Modal ~ click:", click)

    const handleClick = () => setClick(!click);

    return (
      <>
        <ModalCss>
          <div onClick={handleClick}>
            <MenuIcon />
          </div>
        </ModalCss>
        <BgCss clicked={click}>&nbsp;</BgCss>
      </>
    );
}

export default Modal