import "./land.css"
import React, { useState } from 'react'
import Potato from "../assets/potato.jpg"
import tomato from "../assets/tomato.jpg"
import onion from "../assets/onion.jpg"
import brinjal from "../assets/brinjal.jpg"
import bg from "../assets/farm.jpg"

const Land = (props) => {
  const options = [
    { value: "Potato", text: "Potato", image: Potato },
    { value: "Onion", text: "Onion", image: onion },
    { value: "Brinjal", text: "Brinjal", image: brinjal },
    { value: "Tomato", text: "Tomato", image: tomato }
  ];

  const [selected, setSelected] = useState(0);
  const mainHandleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="main">
      <div className="mask">
        <img className="into-img" src={bg} alt="bg"></img>
      </div>
      <div className="content">
        <div className="container">
          <select value={selected} onChange={mainHandleChange} className='setimg'>
        {options.map((option, index) => (
        <option key={option.value} value={index}>
          {option.text}
        </option>
        ))}
      </select>
      <h1 className="stage">Stage: </h1>
      <img src={options[selected].image} className="Img-1"/>
    </div>
    </div>
        </div>
      
    
  )
}

export default Land