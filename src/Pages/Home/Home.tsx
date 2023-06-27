import React from "react";
import { useState, useRef, useEffect } from "react";
import Header from "../../Components/Header";
import Hero from "./Hero/Hero";
import Modules from "./Modules/Modules";
import Career from "./Career/Career";
import Lifestyle from "./Lifestyle/Lifestyle";
import Printed from "./Printed/Printed";
import Footer from "./Footer/Footer";

const Home: React.FC = () => {
  const [homeScrolledActive, setHomeScrolledActive] = useState(false);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const heroRef = React.useRef<HTMLDivElement>(null);

  console.log(homeScrolledActive);

  React.useEffect(() => {
    const heroHeight: any = heroRef.current?.getBoundingClientRect().height;
    window.addEventListener("scroll", () => {
      if (window.scrollY >= heroHeight) {
        setHomeScrolledActive(true);
      } else {
        setHomeScrolledActive(false);
      }
    });
  }, [homeScrolledActive]);

  /////////////////////////////////

  const printedRef = React.useRef<HTMLDivElement>(null);

  /*React.useEffect(() => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let printedTop: any = printedRef.current?.offsetTop;
    let printedLeft: any = printedRef.current?.scrollLeft;

    function scrollLock() {
      console.log("Scroll bloqueado");
      document.documentElement.style.overflowY = "hidden";
    }

    window.addEventListener("scroll", () => {
      if (scrollTop >= printedTop || printedLeft == 0) {
        scrollLock();
      } else if (printedLeft >= ) {

      } else {

      }
    });
  });
  */

  ////

  return (
    <>
      <div id="home">
        <Header
          headerRefProps={headerRef}
          headerClassScroll={homeScrolledActive ? "scroll" : ""}
        ></Header>
        <Hero heroRefProps={heroRef}></Hero>
        <Modules></Modules>
        <Career></Career>
        <Lifestyle></Lifestyle>
        <Printed></Printed>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
