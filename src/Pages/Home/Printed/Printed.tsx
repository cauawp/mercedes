import React, { useEffect, useRef, useState } from "react";
import "./Printed.css";

//ICONS
import { ReactComponent as ArrowLeftIcon } from "./imgs/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "./imgs/arrow-right.svg";

//IMAGES
import PrintedImg1 from "./imgs/printed-img_1.png";
import PrintedImg2 from "./imgs/printed-img_2.png";
import PrintedImg3 from "./imgs/printed-img_3.png";
import PrintedImg4 from "./imgs/printed-img_4.png";

interface ImpressaItem {
  id: number;
  title: string;
  description: string;
  img: string;
}

const impressaItems: ImpressaItem[] = [
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
  const [activePrinted, setActivePrinted] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const impressaItemsRef = React.useRef<HTMLDivElement>(null);

  console.log(activePrinted);

  useEffect(() => {
    const width: number | undefined =
      impressaItemsRef.current?.getBoundingClientRect().width;
    if (width !== undefined) {
      setPosition(-(width * activePrinted) + -32 * activePrinted);
    }
  }, [activePrinted]);

  function prevSlide(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (activePrinted > 0) {
      setActivePrinted(activePrinted - 1);
    }
    e.preventDefault();
  }

  function nextSlide(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
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
        <div className="impressaContainer container">
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
            style={{ transform: `translate3d(${position}px, 0, 0)` }}
          >
            {impressaItems.map((el, index) => (
              <div
                className={`impressaItem ${
                  index === activePrinted ? "active" : ""
                }`}
                ref={impressaItemsRef}
              >
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
