import React, { useEffect } from 'react'
import "./Maindash.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Maindash = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
    <div className='main1'>
        
        <h1>Status</h1>
        <div className='hidden'>
            <div className='box' data-aos="zoom-in">

            </div>
            <div className='box' data-aos="zoom-in">

            </div>
        </div><br></br><br></br>
        <div className='hidden'>
            <div className='box' data-aos="zoom-in">

            </div>
            <div className='box' data-aos="zoom-in">

            </div>
        </div>
        
    </div>
    
  )
}

export default Maindash