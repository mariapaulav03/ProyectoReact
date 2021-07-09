import React from 'react'
import '../Utils/Css/adopciones.css'
import nieve from '../Utils/images/Adopciones/Nieve 4.png'
import negro from '../Utils/images/Adopciones/Negra 3.png'
import geme1 from '../Utils/images/Adopciones/hermanas-2.png'
import geme2 from '../Utils/images/Adopciones/hermanas.png'
import luther from '../Utils/images/Adopciones/Luther.png'
import gato from '../Utils/images/Adopciones/gato.png'

  function Adop() {
    return (
    <div>
        
        <div className="principal">
		    	<h1 >PELUDITOS</h1>
		    	<p>SOMOS UNA FAMILIA QUE HA DECIDIDO ENTREGAR PARTE DE SU TIEMPO PARA CUIDAR ANIMALES QUE HAN TENIDO LA DESDICHA DE HABER SIDO ABANDONADOS Y NECESITAN ATENCIÓN Y TIEMPO. 
		    	TODOS NUESTROS PELUDITOS SE ENCUENTRAN CON SUS VACUNAS AL DÍA.</p>
		    </div>
	
			<div className="container">
	            <div className="caja1">
                    <div className="info">
	                    <h1>NIEVE</h1>
						<h2>Edad: 1 año (aprox)
							<br/>
	                    	Tamaño: grande</h2>
                        <a href="https://www.instagram.com/p/CDxWhUFptat/?utm_source=ig_web_copy_link">Mas información</a>
                    </div>
	            	<figure className="img_Info">
	                    <img src={nieve} alt="Perro"/>
	                    <div className="capa">
	                        <p>🐾💙 Nuestra hermosa labradora criollita está más que lista para encontrar a su familia ideal. Su historia hace parte de una larga lista de peludos que han sufrido a cargo de personas irresponsables y crueles. La dejaron tirada a su suerte en el pueblo ☹️(estando en celo y con más de 5 perros detrás de ella), corriendo con miedo, desespero y angustia (su "dueño" la abandonó)😡 Por suerte una persona vió la terrible situación y decidió ayudarla. Ahora queremos que Nieve nuevamente sienta que es tener una familia, esta vez para siempre.</p>                    
	                    </div>
	                </figure>
				</div>
				<div className="caja2">
	                <figure className="img_Info2">
	                    <img src={negro} alt="Perrito"/>
	                    <div className="capa">
	                        <p>Negra, como muchos de nuestros rescatados, sufrió el abandono de su "familia" 😔 Estuvo desnutrida y parecía un saquito de huesos 💔 Hoy es una perrita saludable, amorosa y llena de energía 💙 lista para encontrar una familia que la llene de aventuras. <br/>
                            🐛 Desparasitada. <br/>
                            ✂️ Esterilizada. <br/>
                            🥣 Concentrado. <br/>
                            💉 Vacunada contra la rabia. <br/>
                            ⚽ Es una perrita muy activa, le encanta jugar y dar paseos largos, es aventurera y una gran compañía 🐶.</p>
	                    </div>
	                </figure>
	                <div className="info2">
	                    <h1>Negra</h1>
	                    <h2>Edad: 1 año (aprox)
							<br/>
	                    	Tamaño: grande</h2>
                        <a href="https://www.instagram.com/p/CDxWhUFptat/?utm_source=ig_web_copy_link">Mas información</a>
                    </div>
	            </div>

				<div className="caja1">
					<div className="info">
						<h1>ANNIE</h1>
						<h2>Edad: años 1/2 (aprox.)
							<br/>
							Tamaño: Medianas-grandes</h2>
						<a href="https://www.instagram.com/p/CHtj095AhuE/?utm_source=ig_web_copy_link ">Mas información</a>
					</div>
					<figure>
						<img src={geme2} alt="Perrito"/>
						<div className="capa">
							<p>🐾💙 Dúo dinámico 💙🐾
								Annie y Hally son nuestras gemelas estrella 🤩 Están más que listas para encontrar a su familia ideal. Nuestras dos hermanitas llegaron al Centro de Bienestar Animal de Guasca cuando tenían apenas 3 meses de vida. De su historia antes de eso, no sabemos mucho.
								Hacen parte de la larga lista de cachorros que son abandonados por "dueños" irresponsables, por falta de conciencia frente a la esterilización oportuna y al compromiso con la vida de los peludos.
							</p>
						</div>
					</figure>
				</div>

				<div class="caja2">
					<figure>
						<img src={geme1} alt="Perrito"/>
						<div className="capa">
							<p>🐾💙 Dúo dinámico 💙🐾 <br/>
								🐶🐶 Quisiéramos que se fueran juntas pero si estas dispuesta/o a llevarte a una de ellas también puedes empezar el proceso.
								⚽ Son super consentidas, juguetonas y activas. Les encanta dar besos y ser el centro de atención. Necesitan muuuucho amor y muuuucho ejercicio. <br/>

                                🐛 Desparasitadas <br/>
                                ✂️ Esterilizadas <br/>
                                🥫 Concentrado <br/>
                                💉 Vacunadas contra la rabia.
                            </p>
	                    </div>
	                </figure>
	                <div className="info2">
						<h1>HALLY</h1>
					    <h2>Edad: años 1/2 (aprox.)
							<br/>
						    Tamaño: Medianas-grandes</h2>
					    <a href="https://www.instagram.com/p/CHtj095AhuE/?utm_source=ig_web_copy_link ">Mas información</a>
					</div>
	            </div>
	            <div className="caja1">
	                <div className="info">
	                    <h1>LUTHER</h1>
	                    <h2>Edad: 2 años aprox.
							<br/>
							Tamaño: Grande</h2>
	                    <a href="https://www.instagram.com/p/CNAHF_ppqi7/?utm_source=ig_web_copy_link">Mas información</a> 
                    </div>
	                <figure>
	                    <img src={luther} alt="perro"/>
	                    <div className="capa">
	                        <p>Nuestro simpático Luther está más que listo
	                           para encontrar a su familia ideal 💙 Luther es un sobreviviente más de la crueldad humana. El año pasado recibimos un llamado en el que nos pedían ayuda para un perrito herido (este caso fue una de nuestras primeras publicaciones). Cuando llegamos al lugar, no podíamos creer quién había podido lastimar a este chiquitín así 💔(tenía una herida causada, muy probablemente, por un machete en su costado). Después de muchas visitas al veterinario, muchos cuidados y sobre todo amor, Luther se recuperó y ahora es un perro sano y feliz.
	                       </p>
	                    </div>
	                </figure>
	            </div>
				<div className="form">
					<button className="btn"><h3>Formulario adopta</h3><a href="https://docs.google.com/forms/d/1YMkFjdIitAXAQIsVx7NkVk1X6jXuTZQSiOVElG4jZZc/viewform?edit_requested=true" title="adopcion"><img src={gato} alt="gato"/></a> </button>
				</div>
			</div>
    </div>
    );
}

export default Adop;