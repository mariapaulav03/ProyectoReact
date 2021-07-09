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
             <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
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
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
        </div>
    ) ;
}

export default Footer;