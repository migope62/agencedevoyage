import React from 'react'
import './login.css'
import Header from '../components/header/Header'
import Loginform from '../components/formulaire/Loginform'
import Footer from '../components/footer/Footer'
import Ariane from '../components/ariane/Ariane'
function Login() {
  return (<>
    <Header />
    <Ariane/>
    <img class="background" src={process.env.PUBLIC_URL + 'rue.jpg'} alt="plage"></img>
    <Loginform />
    <Footer/></>
  )
}

export default Login