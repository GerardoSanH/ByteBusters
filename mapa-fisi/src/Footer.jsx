import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
            <div className='lug-frec'><p>Lugares frecuentes:</p></div>
            <div className="contenedor1">

            <div className="lug-frec-item">
            <a href="#"><button className="boton-lugares">
              <div className="boton-lugares-texto">
              <span className="nombre-boton">Auditorio </span>
              </div>
              <div className="boton-lugares-img">
              <img className="logotipo" src="public/img-auditorio.png" alt="Auditorio" />
              </div>
              </button></a>
            </div>
            <div className="lug-frec-item">
            <a href="#"><button className="boton-lugares">
              <div className="boton-lugares-texto">
              <span className="nombre-boton">Capilla </span>
              </div>
              <div className="boton-lugares-img">
              <img className="logotipo" src="public/img-capilla.png" alt="Capilla" />
              </div>
              
              
              </button></a>
            </div>
            <div className="lug-frec-item">
            <a href="#"><button className="boton-lugares">
            <div className="boton-lugares-texto">
            <span className="nombre-boton">Aula Magna </span>
</div>
<div className="boton-lugares-img">
<img className="logotipo" src="public/img-aula-magna.png" alt="Aula Magna" />
</div>
              </button></a>
            </div>
            <div className="lug-frec-item">
            <a href="#">
                        <button className="boton-lugares">
                          
                        <div className="boton-lugares-texto">
                        <span className="nombre-boton">Losa Deportiva </span>
</div>
<div className="boton-lugares-img">
<img className="logotipo" src="public/img-losa-deportiva.png" alt="Losa Deportiva" />
</div>
                          </button>
                    </a>
            </div>
            <div className="lug-frec-item">
            <a href="#">
                        <button className="boton-lugares">
                          
                        <div className="boton-lugares-texto">
                        <span className="nombre-boton">UNAYOE </span>
</div>
<div className="boton-lugares-img">
<img className="logotipo" src="public/img-unayoe.png" alt="" />
</div>
                          </button>
                    </a>
            </div>
            <div className="lug-frec-item">
            <a href="#">
                        <button className="boton-lugares">
                          
                        <div className="boton-lugares-texto">
                                <span className="nombre-boton" id="soporte">Soporte </span>
                      </div>
                      <div className="boton-lugares-img">
                      <img className="logotipo" src="public/img-soporte.png" alt="" />
                      </div>
                                  
                                  </button>
                    </a>
            </div>

               
                    

                    

                   
                
    
                
                    
                   
                    
                
            </div>

            <div className="contenedor2">
                <a href="https://www.facebook.com/profile.php?id=100083181944289" target="_blank"><span className="nombre-red-social">Facebook: FISI </span><img className="red-social" src="public/Facebook.png" alt="Facebook FISI" /></a>
            </div>
            
            <div className="contenedor3">
                <img id="logo-san-marcos" src="public/logo-san-marcos.png" alt="Logo San Marcos" /><br />
                <span>Universidad Nacional Mayor de San Marcos</span><br /><br />
                <span>Facultad de Ingeniería de Sistemas e Informática</span>
            </div>
        </footer>
  );
}

export default Footer;