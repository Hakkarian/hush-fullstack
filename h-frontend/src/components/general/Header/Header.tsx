import { FC, useState } from 'react'
import { HeaderCss, NavLinkCss } from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import Modal from 'components/Modal';
import { NavLink, useLocation } from 'react-router-dom';


const Header: FC = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();
  const header = document.querySelector(".header")

  console.log(location.pathname)

  const handleClick = () => setClick(!click);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1224px)'
  })

  if (location.pathname.includes("/hush-gallery")) {
    header?.classList.add("header--hush");
  } else if (location.pathname.includes("/risey-gallery")) {
    header?.classList.add("header--risey");
  }
  return (
    <HeaderCss className="header">
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
              <NavLinkCss onClick={handleClick} to="/risey-gallery">
                Risey's Gallery
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