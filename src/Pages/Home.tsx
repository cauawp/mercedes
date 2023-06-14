import React from "react";
import { useState, useRef } from "react";
import Header from "../Components/Header";
import Hero from './Hero/Hero'

const Home = () => {
  const [headerClass, setHeaderClass] = useState(true);

  return (
    <>
      <div id="home">
        <Header headerClassActive={!headerClass ? "active" : ""}></Header>
        <Hero></Hero>
      </div>
    </>
  );
};

export default Home;
