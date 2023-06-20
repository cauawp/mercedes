import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Modules.css";

//IMAGES
import ModuleImgOne from "./imgs/module-img_1.png";

//ICONS
import { ReactComponent as LeftArrow } from "./imgs/module-left_arrow.svg";
import { ReactComponent as RightArrow } from "./imgs/module-right_arrow.svg";

const moduleItems = [
  {
    name: "coupes",
    title: "Coupés",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing carro 1.",
    id: 1,
    img: ModuleImgOne,
  },
  {
    name: "coupes",
    title: "Carro 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing carro 2.",
    id: 3,
    img: ModuleImgOne,
  },
  {
    name: "coupes",
    title: "Carro 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing carro 3.",
    id: 2,
    img: ModuleImgOne,
  },
  {
    name: "coupes",
    title: "Carro 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing carro 4.",
    id: 4,
    img: ModuleImgOne,
  },
];

const Modules = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [position, setPosition] = useState(0);
  const moduleItemsRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const width: any = moduleItemsRef.current?.getBoundingClientRect().width;
    setPosition(-(width * activeModule));
  }, [activeModule]);

  function prevSlide(e: any) {
    if (activeModule > 0) {
      setActiveModule(activeModule - 1);
    }
    e.preventDefault();
  }

  function nextSlide(e: any) {
    if (activeModule < moduleItems.length - 1) {
      setActiveModule(activeModule + 1);
    } else {
      setActiveModule(0);
    }
    e.preventDefault();
  }

  return (
    <>
      <section id="modules">
        <div className="moduleSlide container">
          <div className="moduleText">
            <h2>Modelos</h2>
            {moduleItems.map((el, index) => (
              <div
                className={`moduleInfo ${
                  index === activeModule ? "active" : ""
                }`}
              >
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                <Link to={el.name}>EXPLORE</Link>
              </div>
            ))}
            <div className="modulePagination">
              <button onClick={prevSlide}>
                <LeftArrow></LeftArrow>
              </button>
              <div className="moduleThumb">
                {moduleItems.map((el, index) => (
                  <div
                    className={`moduleThumbItem ${
                      index === activeModule ? "active" : ""
                    }`}
                  ></div>
                ))}
              </div>
              <button onClick={nextSlide}>
                <RightArrow></RightArrow>
              </button>
            </div>
          </div>
          <div
            className="moduleImgSlide"
            style={{ transform: `translate(${position}px)` }}
          >
            {moduleItems.map((el, index) => (
              <div
                className={`moduleImg ${
                  index === activeModule ? "active" : ""
                }`}
                key={index}
              >
                <img src={el.img} alt={el.name} ref={moduleItemsRef} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Modules;
