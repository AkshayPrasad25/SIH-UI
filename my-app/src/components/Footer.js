import "./Footer.css"
import React from 'react'
import {FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Bangalore</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    phone here
                    </h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
                dummy@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Us</h4>
                <p>proj desc
                </p>
                <div className="social">
                    <Link to={"#"} ><FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} /></Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer
