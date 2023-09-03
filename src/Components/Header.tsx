import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import Logo from "./imgs/mercedes-logo.png";
import { ReactComponent as LocationIcon } from "./imgs/location.svg";
import { ReactComponent as SearchIcon } from "./imgs/search.svg";
import { ReactComponent as UserIcon } from "./imgs/user.svg";

interface HeaderProps {
  headerClassScroll: string;
  headerRefProps: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div
        className={`mainHeader ${props.headerClassScroll}`}
        ref={props.headerRefProps}
      >
        <div className={`headerContainer ${menu ? "menuActive" : ""}`}>
          <div className="headerLeft">
            <Link className="headerLogo" to="/">
              <img src={Logo} alt="Logo" />
            </Link>
            <div
              onClick={() => setMenu(!menu)}
              className={`menuBtn ${menu ? "active" : ""}`}
            >
              <div className="hamburguerMenu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
            </div>
          </div>
          <div className="headerRight">
            <nav className={`navMenu ${menu ? "active" : ""}`}>
              <ul className="navLinks">
                <li className="listLinks">
                  <a href="/">Veículos</a>
                </li>
                <li className="listLinks">
                  <a href="/">Carreira</a>
                </li>
                <li className="listLinks">
                  <a href="/">Impressa</a>
                </li>
                <li className="listLinks">
                  <a href="/">Institucional</a>
                </li>
              </ul>
            </nav>
            <div className={`headerIcons ${menu ? "active" : ""}`}>
              <div>
                <SearchIcon></SearchIcon>
              </div>
              <Link to="/">
                <LocationIcon></LocationIcon>
              </Link>
              <Link to="/">
                <UserIcon></UserIcon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
