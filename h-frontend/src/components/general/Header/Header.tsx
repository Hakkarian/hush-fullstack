import React, { FC } from 'react'
import { HeaderCss } from './Header.styled';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Modal from 'components/Modal';

const Header: FC = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1224px)'
  })
  return (
    <HeaderCss>
      {isTabletOrMobile && <Modal />}
      {isDesktopOrLaptop && <ul className="header-list">
        <li className="header-list__item">
          <Link to="/">Home</Link>
        </li>
        <li className="header-list__item">
          <Link to="/hush-gallery">Hush's Gallery</Link>
        </li>
        {/* <li className="header-list__item">
          <Link to="/risey-gallery">Risey's Gallery</Link>
        </li>
        <li className="header-list__item">
          <Link to="/teo-gallery">Teo's Gallery</Link>
        </li> */}
      </ul>}
    </HeaderCss>
  );
}

export default Header;