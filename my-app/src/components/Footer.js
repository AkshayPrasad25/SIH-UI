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
                        <p>Bnmit, Bangalore</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    +918888888888
                    </h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
                youremail@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Us</h4>
                <p>We are a dedicated team on a mission to revolutionize agriculture through the power of AI.
                     Our innovative technology automates irrigation, accurately gauges plant growth stages, 
                     and precisely controls water release, ensuring optimal crop health while conserving this precious resource.
                      With our user-friendly web app, we provide farmers with real-time monitoring and control, empowering them to make informed decisions.
                       Join us in shaping a greener, more sustainable future for agriculture, where every drop counts and yields thrive like never before.
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
