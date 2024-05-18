import React, { MouseEventHandler, ReactNode, useEffect } from 'react'
import {ModalCss, BgCss, MobileIcon, NavCss, ListCss} from './Modal.styled'
import { useLocation } from 'react-router-dom';


interface Props {
  children: ReactNode;
  func: MouseEventHandler<HTMLDivElement>;
  click: boolean;
}

function Modal({children, func, click}: Props) {
  const location = useLocation();
  const modal = document.querySelector(".modal");
  const bg = document.querySelector(".bg");
  console.log(modal)

  useEffect(() => {
    if (location.pathname.includes("/hush-gallery")) {
      modal?.classList.remove("modal--risey");
      modal?.classList.add("modal--hush");
    } else if (location.pathname.includes("/risey-gallery")) {
      modal?.classList.remove("modal--hush");
      modal?.classList.add("modal--risey");
    } else {
      modal?.classList.remove("modal--risey");
      modal?.classList.remove("modal--hush");
    }
  }, [location.pathname, modal?.classList])

    return (
      <>
        <ModalCss className="modal">
          <div onClick={func}>
            <MobileIcon handleClick={func} clicked={click} />
          </div>
        </ModalCss>
        <BgCss
          clicked={click}
          className={`bg ${
            location.pathname.includes("/hush-gallery") && "bg--hush"
          } ${location.pathname.includes("/risey-gallery") && "bg--risey"}`}
        ></BgCss>
        <NavCss clicked={click}>
          <ListCss>{children}</ListCss>
        </NavCss>
      </>
    );
}

export default Modal