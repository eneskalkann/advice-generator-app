import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import IconDice from '../assets/icon-dice.svg'
import DividerMobile from '../assets/pattern-divider-mobile.svg'
import DividerDesktop from '../assets/pattern-divider-desktop.svg'
import '../design/Advice.css'

function Advice() {

    const [advice , setAdvice] = useState([]);

    const fetchAdvice = async () => {
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json()

        console.log(data.slip);
        setAdvice(data.slip);
    }

    useEffect(() => {
        fetchAdvice();
    },[])

  return (
    <div className='container'>
        <h4>Advice # {advice.id}</h4>
        <p>"{advice.advice}"</p>
        <button className='container-button' onClick={fetchAdvice}>
            <img src={IconDice} alt="" />
        </button>
    </div>
  )
}

export default Advice