import React, { FC, useState } from 'react'
import { HeaderCss, NavLinkCss } from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import Modal from 'components/Modal';
import { NavLink } from 'react-router-dom';

const Header: FC = () => {
  const [click, setClick] = useState(false);
  console.log("🚀 ~ Modal ~ click:", click);

  const handleClick = () => setClick(!click);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1224px)'
  })
  return (
    <HeaderCss>
      {isTabletOrMobile && (
        <Modal func={handleClick} click={click}>
          <ul className="header-list">
            <li className="header-list__item">
              <NavLinkCss onClick={handleClick} to="/">
                Home
              </NavLinkCss>
            </li>
            <li className="header-list__item">
              <NavLinkCss onClick={handleClick} to="/hush-gallery">
                Hush's Gallery
              </NavLinkCss>
            </li>
            <li className="header-list__item">
              <NavLinkCss onClick={handleClick} to="/sign-in">
                Sign in
              </NavLinkCss>
            </li>
            <li className="header-list__item">
              <NavLinkCss onClick={handleClick} to="/sign-up">
                Sign up
              </NavLinkCss>
            </li>
            {/* <li className="header-list__item">
          <Link to="/risey-gallery">Risey's Gallery</Link>
        </li>
        <li className="header-list__item">
          <Link to="/teo-gallery">Teo's Gallery</Link>
        </li> */}
          </ul>
        </Modal>
      )}
      {isDesktopOrLaptop && (
        <ul className="header-list">
          <li className="header-list__item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="header-list__item">
            <NavLink to="/hush-gallery">Hush's Gallery</NavLink>
          </li>
          {/* <li className="header-list__item">
          <Link to="/risey-gallery">Risey's Gallery</Link>
        </li>
        <li className="header-list__item">
          <Link to="/teo-gallery">Teo's Gallery</Link>
        </li> */}
        </ul>
      )}
    </HeaderCss>
  );
}

export default Header;