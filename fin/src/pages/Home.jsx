import React from 'react'
import './home.css'
import Header from '../components/header/Header'
import Carrousel from '../components/carrousel/Carrousel'
import Milan1 from '../components/ville/Milan1'
import Rome1 from '../components/ville/Rome1'
import Naples1 from '../components/ville/Naples1'
import Footer from '../components/footer/Footer'
import Ariane from '../components/ariane/Ariane'
import Btnscroll from '../components/btnscroll/Btnscroll'
import Firstvideo from '../components/video/Firstvideo'
function Home() {
    return (
        <>
            
            <Header />
            <Ariane />
            <h1>Vacanza Tranquille</h1>
           <Firstvideo />
            <Carrousel />          
            <h2>Nos voyages coups de coeurs</h2>
            <div className='section'>  
            <Milan1/>
                <Rome1 />
                <Naples1 /></div>
            <Footer /><Btnscroll />
        </>
    )
}




export default Home