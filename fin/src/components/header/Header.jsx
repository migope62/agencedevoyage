import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <>

            <header>
                <nav className='navi'>
                    <ul>
                        <li><img src={process.env.PUBLIC_URL + 'logoitalie6.png'} alt="logo"></img>Vacanza Tranquille</li>
                        <li><NavLink to="/nosvilles">Nos Villes</NavLink></li>
                        <li><NavLink to="/">Accueil</NavLink></li>            
                        <li><NavLink to="contact">Contact</NavLink></li>
                        <li><NavLink to="/login">Connexion</NavLink></li>
                        <li><img src={process.env.PUBLIC_URL + 'phone.png'} alt="logo"></img>0674459565</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header
