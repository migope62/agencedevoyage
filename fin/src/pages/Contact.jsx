import React from 'react'
import './contact.css'
import Header from '../components/header/Header'
import Form from '../components/formulaire/Form'
import Footer from '../components/footer/Footer'
import Ariane from '../components/ariane/Ariane'
function Contact() {
  return (<>
    <Header/>
    <Ariane/>
      <img className="background" src={process.env.PUBLIC_URL + 'fiat500.jpg'} alt="plage"></img>
      <Form/>
      <Footer/>
   </>
  )
}

export default Contact