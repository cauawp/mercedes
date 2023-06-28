import React, { useEffect, useRef, useState } from "react";
import "./Printed.css";

//ICONS
import {ReactComponent as ArrowLeftIcon} from './imgs/arrow-left.svg'
import {ReactComponent as ArrowRightIcon} from './imgs/arrow-right.svg'

//IMAGES
import PrintedImg1 from "./imgs/printed-img_1.png";
import PrintedImg2 from "./imgs/printed-img_2.png";
import PrintedImg3 from "./imgs/printed-img_3.png";
import PrintedImg4 from "./imgs/printed-img_4.png";

const impressaItems = [
  {
    id: 1,
    title: "Vantagens da nova Mercedes Sls Amg",
    description:
      "Tortor, curabitur est massa vel viverra bibendum at. Justo ullamcorper sit ac turpis ultricies faucibus sem vivamus sit",
    img: PrintedImg1,
  },
  {
    id: 2,
    title: "Mercedes-Benz GLB 200 conquista o Prêmio Carsughi L'Auto Preferita",
    description:
      "Tortor, curabitur est massa vel viverra bibendum at. Justo ullamcorper sit ac turpis ultricies faucibus sem vivamus sit",
    img: PrintedImg2,
  },
  {
    id: 3,
    title:
      "Mercedes-Benz é destaque na maior feira indoor de barcos da América Latina",
    description:
      "Tortor, curabitur est massa vel viverra bibendum at. Justo ullamcorper sit ac turpis ultricies faucibus sem vivamus sit",
    img: PrintedImg3,
  },
  {
    id: 4,
    title:
      "Mercedes-Benz faz campanha para promover a igualdade de oportunidades no Dia da Mulher",
    description:
      "Tortor, curabitur est massa vel viverra bibendum at. Justo ullamcorper sit ac turpis ultricies faucibus sem vivamus sit",
    img: PrintedImg4,
  },
];

const Printed = (props: any) => {

  const [activePrinted, setActivePrinted] = useState(0);
  const [position, setPosition] = useState(0);
  const impressaItemsRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const width: any = impressaItemsRef.current?.getBoundingClientRect().width;
    setPosition(-(width * activePrinted));
  }, [activePrinted]);

  function prevSlide(e: any) {
    if (activePrinted > 0) {
      setActivePrinted(activePrinted - 1);
    }
    e.preventDefault();
  }
  
  function nextSlide(e: any) {
    if (activePrinted < impressaItems.length - 1) {
      setActivePrinted(activePrinted + 1);
    } else {
      setActivePrinted(0);
    }
    e.preventDefault();
  }

  return (
    <>
      <section id="impressa">
        <div className="impressaContainer">
          <div className="impressaInfo">
          <h1>Impressa Mercedes</h1>
          <div className="impressaBtns">
              <button className="impressaPrev" onClick={prevSlide}>
                <ArrowLeftIcon></ArrowLeftIcon>
              </button>
              <button className="impressaNext" onClick={nextSlide}>
                <ArrowRightIcon></ArrowRightIcon>
              </button>
          </div>
          </div>
          <div 
          className="impressaSlide"
          style={{ transform: `translate(${position}px)` }}
          >
            {impressaItems.map((el, index) => (
              <div 
              className={`impressaItem ${index === activePrinted ? 'active' : ''}`} 
              ref={impressaItemsRef}>
                <div className="imgContent">
                  <img src={el.img} alt="" />
                </div>
                <h1 className="impressaItemTitle">{el.title}</h1>
                <p className="impressaItemDesc">{el.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Printed;
