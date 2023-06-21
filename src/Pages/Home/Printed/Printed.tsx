import React, { useEffect } from "react";
import './Printed.css'

//IMAGES
import PrintedImg1 from './imgs/printed-img_1.png'
import PrintedImg2 from './imgs/printed-img_2.png'
import PrintedImg3 from './imgs/printed-img_3.png'
import PrintedImg4 from './imgs/printed-img_4.png'

const impressaItems = [
    {
        id: 1,
        title: 'Vantagens da nova Mercedes Sls Amg',
        description: 'Tortor, curabitur est massa vel viverra bibendum at. Justo ullamcorper sit ac turpis ultricies faucibus sem vivamus sit',
        img: PrintedImg1
    },
    {
        id: 2,
        title: "Mercedes-Benz GLB 200 conquista o Prêmio Carsughi L'Auto Preferita",
        description: 'Tortor, curabitur est massa vel viverra bibendum at. Justo ullamcorper sit ac turpis ultricies faucibus sem vivamus sit',
        img: PrintedImg2
    },
    {
        id: 3,
        title: 'Mercedes-Benz é destaque na maior feira indoor de barcos da América Latina',
        description: 'Tortor, curabitur est massa vel viverra bibendum at. Justo ullamcorper sit ac turpis ultricies faucibus sem vivamus sit',
        img: PrintedImg3
    },
    {
        id: 4,
        title: 'Mercedes-Benz faz campanha para promover a igualdade de oportunidades no Dia da Mulher',
        description: 'Tortor, curabitur est massa vel viverra bibendum at. Justo ullamcorper sit ac turpis ultricies faucibus sem vivamus sit',
        img: PrintedImg4
    }
]

const Printed = (props: any) => {
    const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
        <section id="impressa">
            <div className="impressaContainer" ref={containerRef}>
                <h1>Impressa Mercedes</h1>
                <div className="impressaSlide">
                    {impressaItems.map((el, index) => (
                        <div className="impressaItem">
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
