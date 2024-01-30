import React, { FC } from 'react'
import { HeaderCss } from './Header.styled';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <HeaderCss>
      <ul className="header-list">
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
      </ul>
    </HeaderCss>
  );
}

export default Header;