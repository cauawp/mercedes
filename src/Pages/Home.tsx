import React from "react";
import { useState, useRef } from "react";
import Header from "../Components/Header";

const Home = () => {
  const [headerClass, setHeaderClass] = useState(true);

  return (
    <>
      <div id="home">
        <Header headerClassActive={!headerClass ? "active" : ""}></Header>
      </div>
    </>
  );
};

export default Home;
