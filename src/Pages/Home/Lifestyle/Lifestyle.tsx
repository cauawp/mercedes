import React from "react";
import "./Lifestyle.css";

//IMAGES
import LifestyleImg1 from "./imgs/lifestyle-img_1.png";
import LifestyleImg2 from "./imgs/lifestyle-img_2.png";
import LifestyleImg3 from "./imgs/lifestyle-img_3.png";
import LifestyleImg4 from "./imgs/lifestyle-img_4.png";

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
            <div className="lifestyleImgContent one">
              <img src={LifestyleImg1} alt="Cuca" />
            </div>
            <div className="lifestyleImgContent two">
              <img src={LifestyleImg2} alt="Cuca" />
            </div>
            <div className="lifestyleImgContent three">
              <img src={LifestyleImg3} alt="Cuca" />
            </div>
            <div className="lifestyleImgContent four">
              <img src={LifestyleImg4} alt="Cuca" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lifestyle;
