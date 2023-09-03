import React from "react";
import "./Career.css";

import CareerImgOne from "./imgs/career-img_1.png";
import CareerImgTwo from "./imgs/career-img_2.png";

const Career: React.FC = () => {
  return (
    <>
      <section id="career">
        <div className="careerContainer container">
          <div className="careerLeft">
            <div className="careerTextContainer">
              <h1>Por que a Mercedes?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula
                quis aliquam sit velit sollicitudin.
              </p>
              <p>
                Tortor, curabitur est massa vel viverra bibendum at. Justo
                ullamcorper sit ac turpis ultricies faucibus sem vivamus.
              </p>
            </div>
            <img src={CareerImgOne} alt="" />
          </div>
          <div className="careerRight">
            <img src={CareerImgTwo} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
