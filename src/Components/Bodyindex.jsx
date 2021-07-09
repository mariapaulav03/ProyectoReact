import React from 'react'
import '../Utils/Css/index.css'
import animal from '../Utils/images/index/animales.png'
import fund from '../Utils/images/index/Fundadora.jpg'
import tes from '../Utils/images/index/do_tes.jpg'
import hueso from '../Utils/images/index/Hueso.png'
import perro1 from '../Utils/images/index/perro1.png'

  function Index() {
    return (
    <div>
           <section className="container1">
                <div className="container">
                    <div className="carousel">
                      <div className="carousel__face"></div>
                      <div className="carousel__face"></div>
                      <div className="carousel__face"></div>
                      <div className="carousel__face"></div>
                      <div className="carousel__face"></div>
                      <div className="carousel__face"></div>
                    </div>
                  </div>
            </section>

            <section className="container2">
                <div className="img_Adop">
                    <img src={animal} alt="imagenes"/>
                </div>
                <div className="letra_Adop">
                    <h1>¿Por qué adoptar?</h1>
                    <br/>
                    <br/>
                    <h2>Porque eso haría muy feliz a los animales que día a día encontramos abandonados en las calles.</h2>
                </div>
            </section>
            <section className="container3">
                <div className="titulo_fund">
                    <h1>¿Quiénes somos?</h1>
                </div>
                <div className="img_Fund">
                    <div className="funda">
                        <img src={fund} alt="imagenes"/>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, minima.</h2>
                    </div>
                    <div className="funda">
                        <img src={fund} alt="imagenes"/>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, minima.</h2>
                    </div>
                    <div className="funda">
                        <img src={fund} alt="imagenes"/>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, minima.</h2>
                    </div>
                </div>
            </section>

            <section className="container4">
                    <div className="tit_tes">
                        <h1>Testimonios</h1>
                    </div>
                    <div className="foto_Tes">
                        <img src={tes} alt="img animal"/>
                        <img src={tes} alt="img animal"/>
                        <img src={tes} alt="img animal"/>
                    </div>
                    <div className="nom_tes">
                        <h2>Laika</h2>
                        <h2>Kuzco</h2>
                        <h2>Fiona</h2>
                    </div>


        <div className="botones_Modal">
            <button classNamee="btn" type="button" data-bs-toggle="modal" data-bs-target="#modal1"><img src={hueso} alt="hueso"/></button>
            <button className="btn" type="button" data-bs-toggle="modal" data-bs-target="#modal2"><img src={hueso} alt="hueso"/></button>
            <button className="btn" type="button" data-bs-toggle="modal" data-bs-target="#modal3"><img src={hueso} alt="hueso"/></button>
        </div>
            
            <div className="modal" tabindex="-1" id="modal1">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Laika</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="cuerpomodalparrafo">
                            <p>“Hola familia Awicha, nosotros somos inmensamente felices con nuestra bebé peluda. Nuestras vidas cambiaron totalmente, la compañía es única, lo que Laika nos ha enseñado ha sido hermoso, desde ver en sus ojos el agradecimiento, el amor nos unió más como familia, ella está donde nosotros estamos, domingos de arrunchis y pelis, día de aseo en fin... Ella es nuestra hija, mi esposo, mis hijos y yo la amamos infinitamente. Laika se convirtió en el centro de todos.”</p></div>
                            <div className="cuerpomodalimagen">
                                <img src={perro1} alt="imagenes"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal" tabindex="-1" id="modal2">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">KUZCO</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="cuerpomodalparrafo">
                            <p>“Kuzquito llegó a nuestras vidas en un momento en el que necesitábamos ese amor que solo los animalitos nos pueden dar. La historia de su adopción fue muy graciosa porque él fue quien nos eligió, él se sentó al lado de nosotros en la entrevista y no se movió, todos sus hermanitos se fueron y él se quedó con nosotros hasta que el sueño lo venció, definitivamente él quería hacer parte de la familia, como estaba en medio de un tratamiento ese día no lo pudimos llevar, pero creo que sintió que cada día teníamos más ganas de que estuviéramos juntos. En casa su camita, juguetes y cobijitas lo esperaban. El cambió nuestro estilo de vivir, es una gran responsabilidad, pero esta se hace pequeña al compararla con tanto amor y diversión. Definitivamente nuestra vida es más feliz desde que llegó con su picardía.”</p></div>
                            <div className="cuerpomodalimagen">
                                <img src={perro1} alt="imagenes"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal" tabindex="-1" id="modal3">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">FIONA</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="cuerpomodalparrafo">
                            <p>“Fionita llegó 2 años después de Kuzco, ella es una perrita tan encantadora que no logro entender como alguien quiso deshacerse de ella. Nos llena de besos, reclama cuando no es el centro de atención, hicieron una super pareja con Kuzco muy rápido y se nota que ella quiere protegernos siempre, su mirada encantadora, sus orejitas y su rabito nos alegran la vida. Hoy podemos decir que son la mejor decisión y el mejor regalo que Dios nos ha dado.” </p></div>
                            <div className="cuerpomodalimagen">
                                <img src={perro1} alt="imagenes"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    </div>
    );
}

export default Index;