import React from 'react'
import '../Utils/Css/footer.css'
import inst from '../Utils/images/Footer/inst.png'
import twi from '../Utils/images/Footer/twit.png'
import wha from '../Utils/images/Footer/whats.png'
import fac from '../Utils/images/Footer/face.png'
import awi from '../Utils/images/Footer/awi.png'

function Footer() {
    return (
        <div>
           <div className="pie_pagiana">
                <div className="contFot">
                    <a className="icon" href="https://www.instagram.com/awichafamilia/ ">
                        <img src={inst} alt="link github" />
                    </a>
                    <a className="icon" href="https://twitter.com/AwichaFamilia">
                    <img src={twi} alt="link github" />
                    </a>
                    <a className="icon" href="https://api.whatsapp.com/send/?phone=3058182425&text&app_absent=0">
                    <img src={wha} alt="link github" />
                    </a>
                    <a className="icon" href=" https://www.facebook.com/pages/category/Charity-Organization/Awicha-Familia-107264501059338/">
                    <img src={fac} alt="link github" />
                    </a>
                    <h1>#Amigosconpatitas</h1>
                </div>
                <div className="contFot2">
                    <img src={awi} alt="awi"/>
                </div>
            </div>
                <div className="fotr">
                    <h3>HECHO POR AKP DEVELOPERS</h3>
                </div>
        </div>
    ) ;
}

export default Footer;