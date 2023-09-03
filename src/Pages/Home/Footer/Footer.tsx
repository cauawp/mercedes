import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// IMAGES
import MercedesLogo from "./imgs/mercedes-logo.png";

// ICONS
import { ReactComponent as FacebookIcon } from "./imgs/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "./imgs/instagram-icon.svg";
import { ReactComponent as TwitterIcon } from "./imgs/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "./imgs/youtube-icon.svg";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="footerContainer">
          <div className="footerTop">
            <nav className="footerNav">
              <ul className="footerList">
                <h3>Lorem impsum</h3>
                <li className="footerLinks">
                  <Link to="#">Dictum hendrerit integer.</Link>
                </li>
                <li className="footerLinks">
                  <Link to="#">Hendrerit integer.</Link>
                </li>
                <li className="footerLinks">
                  <Link to="#">Mollis mi.</Link>
                </li>
                <li className="footerLinks">
                  <Link to="#">Et ac et risus et.</Link>
                </li>
                <li className="footerLinks">
                  <Link to="#">Dignissim amet.</Link>
                </li>
              </ul>
              <ul className="footerList">
                <h3>Lorem impsum</h3>
                <li className="footerLinks">
                  <Link to="#">Eget malesuada nec.</Link>
                </li>
                <li className="footerLinks">
                  <Link to="#">Pretium nec et tortor.</Link>
                </li>
                <li className="footerLinks">
                  <Link to="#">Lorem</Link>
                </li>
                <li className="footerLinks">
                  <Link to="#">Congue enim habitant.</Link>
                </li>
              </ul>
              <ul className="footerList">
                <h3>Lorem impsum</h3>
                <li className="footerLinks">
                  <Link to="#">Eget malesuada nec.</Link>
                </li>
                <li className="footerLinks">
                  <Link to="#">Mollis mi.</Link>
                </li>
                <li className="footerLinks">
                  <Link to="#">Congue enim habitant.</Link>
                </li>
              </ul>
              <ul className="footerList">
                <h3>Lorem impsum</h3>
                <li className="footerLinks">
                  <Link to="#">Eget malesuada nec.</Link>
                </li>
                <li className="footerLinks">
                  <Link to="#">Mollis mi.</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footerCenter">
            <div className="socialNet">
              <h3>Social</h3>
              <div className="socialIcons">
                <a
                  href="https://www.facebook.com/MercedesBenz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://twitter.com/MercedesBenz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="https://www.instagram.com/mercedesbenz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.youtube.com/@MercedesBenz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YoutubeIcon />
                </a>
              </div>
            </div>
            <div className="mercedesLogo">
              <img src={MercedesLogo} alt="" />
            </div>
          </div>
          <hr />
          <div className="footerBottom">
            <h4>© 2022. Mercedes-Benz & Vans Brasil</h4>
            <h4>
              <Link to="#">Central de Privacidade</Link>
            </h4>
            <h4>
              <Link to="#">Aviso de Privacidade</Link>
            </h4>
            <h4>
              <Link to="#">Notificações Legais</Link>
            </h4>
            <h4>
              <Link to="#">Consultar Recall</Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
