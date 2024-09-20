import React from "react";
import "./Navbar.css"
import logo from '../images/logotipo.png';

function Navbar  () {
    return (
        <nav className="navbar">
            <a className="navbar-logo" href="#home"> 
                <img src={logo} alt="Logo" />
            </a>
            <ul className="navbar-links">
                <li><a href="#home">Início</a></li>
                <li><a href="#About">Sobre</a></li>
                <li><a href="#donate">Doar</a></li>
                <li><a href="#Contact">Contato</a></li>
            </ul>
        </nav>
    )

}

export default Navbar;