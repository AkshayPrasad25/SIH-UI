import React from 'react'
import wifi from '../assets/wifi.jpg'
import "./Form.css"

const Form = () => {
  return (
    <div className="form">
        <form>
            <img className='image' src={wifi} alt='wifi'></img><br></br>
            <label>SSID</label>
            <input type="text" name="ssid"></input>
            <label>Password</label>
            <input type="text" name="password"></input>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form