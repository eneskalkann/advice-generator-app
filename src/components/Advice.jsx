import React from "react";
import { useState,useEffect } from "react";
import IconDice from "../assets/icon-dice.svg";
import DividerMobile from "../assets/pattern-divider-mobile.svg";
import DividerDesktop from "../assets/pattern-divider-desktop.svg";
import "../design/Advice.css";
import ReactTextTransition from "react-text-transition";


function Advice() {
  const [advice, setAdvice] = useState([]);

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setAdvice(data.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="container">
      <div className="container-advice">
        <ReactTextTransition className="container-advice-content">
        <h4>Advice # {advice.id}</h4>
        <p>"{advice.advice}"</p>
        </ReactTextTransition>
        <div className="container-advice-divider">
          <img
            src={DividerDesktop}
            alt=""
            className="container-advice-divider-desktop"
          />
          <img
            src={DividerMobile}
            alt=""
            className="container-advice-divider-mobile"
          />
        </div>
        <button className="container-advice-button" onClick={fetchAdvice}>
          <img src={IconDice} alt="dice" />
        </button>
      </div>
    </div>
  );
}

export default Advice;
