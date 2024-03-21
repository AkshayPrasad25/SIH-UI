import { Link } from "react-router-dom"
import "./Navbar.css"
import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import {FaGear} from 'react-icons/fa6'

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY>=100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>AquaAI</h1>
        </Link>
        <ul className={click ? ("NavMenu active") : ("NavMenu")}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/settings">Settings</Link></li>
        </ul>
        <div className="dropdown" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}} />) : (<FaGear size={20} style={{color: "#fff"}} />)}
            
        </div>
    </div>
  )
}

export default Navbar