import React from "react";
import { useState, useRef } from "react";
import Header from "../../Components/Header";
import Hero from "./Hero/Hero";
import Modules from "./Modules/Modules";
import Career from "./Career/Career";
import Lifestyle from "./Lifestyle/Lifestyle";

const Home = () => {
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
      </div>
    </>
  );
};

export default Home;
