import React from 'react'
import '../Utils/Css/menu.css'
import logo from '../Utils/images/Logo awicha.png'
import {
    Link
  } from "react-router-dom";

  function Nav() {
    return (
    <div>
        
           <header className="container">
                <div className="containerletra col-sm-12 col-lg-12">
                    <h1>Awicha Familia</h1>
                    <br/>
                    <h3>Donde Familia, cobra significado</h3>
                </div>
                <div className="containerlogo col-sm-12 col-lg-12">
                    <img src={logo} alt="Logo" />
                </div>
            </header>
            <nav>
                <ul className="menu aw">
                    <li>
                        <Link to="/">
                                Inicio
                        </Link>
                    </li>
                    <li><Link to="/">
                                Conocenos
                        </Link>
                        </li>
                    <li>
                    <Link to="/adop">
                                Adóptanos
                            </Link>
                    </li>
                    <li>
                    <Link to="/">
                                Donaciones
                        </Link>
                        <ul className="submenu">
                            <li><Link to="/">
                                Donacion
                        </Link></li>
                            <li><Link to="/">
                                Asociaciones
                        </Link></li>
                        </ul>
                    </li>
                    <li>
                    <Link to="/">
                                Contáctanos
                        </Link>
                        <ul className="submenu">
                            <li><Link to="/">
                                Contacto
                        </Link></li>
                            <li>
                            <Link to="/">
                                Productos
                        </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
    </div>
    );
}

export default Nav;