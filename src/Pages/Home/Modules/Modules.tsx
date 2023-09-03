import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Modules.css";

// IMAGES
import ModuleImgOne from "./imgs/module-img_1.png";
import ModuleImgTwo from "./imgs/module-img_2.png";
import ModuleImgThree from "./imgs/module-img_3.png";
import ModuleImgFour from "./imgs/module-img_4.png";

// ICONS
import { ReactComponent as LeftArrow } from "./imgs/module-left_arrow.svg";
import { ReactComponent as RightArrow } from "./imgs/module-right_arrow.svg";

interface ModuleItem {
  name: string;
  title: string;
  description: string;
  id: number;
  img: string;
}

const moduleItems: ModuleItem[] = [
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
    img: ModuleImgTwo,
  },
  {
    name: "coupes",
    title: "Carro 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing carro 3.",
    id: 2,
    img: ModuleImgThree,
  },
  {
    name: "coupes",
    title: "Carro 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing carro 4.",
    id: 4,
    img: ModuleImgFour,
  },
];

const Modules: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const moduleItemsRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const width: number | undefined =
      moduleItemsRef.current?.getBoundingClientRect().width;
    if (width !== undefined) {
      setPosition(-(width * activeModule));
    }
  }, [activeModule]);

  function prevSlide(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (activeModule > 0) {
      setActiveModule(activeModule - 1);
    }
    e.preventDefault();
  }

  function nextSlide(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
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
                key={el.id}
              >
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                <Link to={el.name}>EXPLORE</Link>
              </div>
            ))}
            <div className="modulePagination">
              <button onClick={prevSlide}>
                <LeftArrow />
              </button>
              <div className="moduleThumb">
                {moduleItems.map((el, index) => (
                  <div
                    className={`moduleThumbItem ${
                      index === activeModule ? "active" : ""
                    }`}
                    key={el.id}
                  ></div>
                ))}
              </div>
              <button onClick={nextSlide}>
                <RightArrow />
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
                key={el.id}
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
