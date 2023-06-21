import React from "react";
import {Link} from 'react-router-dom'
import "./Lifestyle.css";

//IMAGES
import LifestyleImg1 from "./imgs/lifestyle-img_1.png";
import LifestyleImg2 from "./imgs/lifestyle-img_2.png";
import LifestyleImg3 from "./imgs/lifestyle-img_3.png";
import LifestyleImg4 from "./imgs/lifestyle-img_4.png";

//ICONS
import { ReactComponent as InstagramIcon } from './imgs/instagram-icon.svg'

const Lifestyle = () => {
  return (
    <>
      <section id="lifestyle">
        <div className="lifestyleContainer container">
          <div className="lifestyleGrid">
            <h1 className="lifestyleTitle">
              <span>Mercedes</span>
              <span>lifestyle</span>
            </h1>
            <Link to="https://www.instagram.com/mercedesbenz/" target="_blank" className="lifestyleImgContent one">
              <img src={LifestyleImg1} alt="Cuca" />
              <div className="lifestyleInfoContainer">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula quis aliquam sit velit sollicitudin.</p>
                <InstagramIcon></InstagramIcon>
              </div>
            </Link>
            <Link to="https://www.instagram.com/mercedesbenz/" target="_blank" className="lifestyleImgContent two">
              <img src={LifestyleImg2} alt="Cuca" />
              <div className="lifestyleInfoContainer">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula quis aliquam sit velit sollicitudin.</p>
                <InstagramIcon></InstagramIcon>
              </div>
            </Link>
            <Link to="https://www.instagram.com/mercedesbenz/" target="_blank" className="lifestyleImgContent three">
              <img src={LifestyleImg3} alt="Cuca" />
              <div className="lifestyleInfoContainer">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula quis aliquam sit velit sollicitudin.</p>
                <InstagramIcon></InstagramIcon>
              </div>
            </Link>
            <Link to="https://www.instagram.com/mercedesbenz/" target="_blank" className="lifestyleImgContent four">
              <img src={LifestyleImg4} alt="Cuca" />
              <div className="lifestyleInfoContainer">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula quis aliquam sit velit sollicitudin.</p>
                <InstagramIcon></InstagramIcon>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lifestyle;
