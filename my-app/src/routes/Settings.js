import React from 'react'
import Mainimage1 from '../components/Mainimage1'
import Form from '../components/Form'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Settings = () => {
  return (
    <div>
      <Navbar />
      <Mainimage1 heading="SETTINGS"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Settings