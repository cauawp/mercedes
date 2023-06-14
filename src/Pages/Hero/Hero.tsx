import React from "react";
import { useState, useRef } from "react";
import './Hero.css'

import HeroBgOne from './imgs/hero-bg_1.png'
import HeroBgTwo from './imgs/hero-bg_2.png'
import HeroBgThree from './imgs/hero-bg_3.png'
import HeroBgFour from './imgs/hero-bg_4.png'

const Home = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    console.log(activeSlide)

    function prevSlide(e: any) {
        e.preventDefault()
        setActiveSlide(activeSlide - 1)
    }
 
    function nextSlide(e: any) {
        e.preventDefault()
        setActiveSlide(activeSlide + 1)
    }

    const slideItems = [
        {
            name: 'CarroUm',
            title: 'Uma nova era com a nova Sls Amg elétrica',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue a vel tortor placerat.',
            id: 1,
            img: HeroBgOne
        },
        {
            name: 'CarroDois',
            title: 'Mercedes Benz nunca te abandona, nem na neve',
            paragraph: 'Conheça a nova Mercedes AMG, pronta para qualquer desafio, seja na neve ou na pista, ela nunca te abandona',
            id: 2,
            img: HeroBgTwo
        },
        {
            name: 'CarroTres',
            title: 'Bem-vindo a sua zona de conforto',
            paragraph: 'Descubra o que a por trás de todo o conforto e qualidade que a Mercedes Benz lhe proporciona',
            id: 3,
            img: HeroBgThree
        },
        {
            name: 'CarroQuatro',
            title: 'Lorem impsum dolor sit amet, dolor sit amet dolor',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue a vel tortor placerat.',
            id: 4,
            img: HeroBgFour
        }
    ]

  return (
    <>
        <section id="hero">
            <div className="slide">
                <div className="slideItems">
                    {slideItems.map((slide, index) => (
                        <div className={`slideItem ${index === activeSlide ? 'active' : ''}`} key={index}>
                            <h1>{slide.title}</h1>
                            <img src={slide.img} alt="" />
                        </div>
                    ))}
                </div>
                <div className="slideControll">
                    <button onClick={prevSlide}>Anterior</button>
                    <button onClick={nextSlide}>Próximo</button>
                </div>
                <div className="slideThumb">
                    {slideItems.map((slide, index) => (
                        <div className={`thumbItem ${index === activeSlide ? 'active' : ''  }`} 
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    </>
  );
};

export default Home;
