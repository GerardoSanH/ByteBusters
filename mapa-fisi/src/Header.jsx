import React, { useState } from 'react';
import './Header.css';

const slides = [
  {
    textLeft: 'Texto de la diapositiva 1:  Lorem ipsum dolor sit amet consectetur adipisicing elit... ',
    textRight: 'Contenido adicional 1: Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    image: 'logo-fisi.png',
  },
  {
    textLeft: 'Texto de la diapositiva 2: Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    textRight: 'Contenido adicional 2: Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    image: 'logo-fisi.png',
  },
  {
    textLeft: 'Texto de la diapositiva 3: Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    textRight: 'Contenido adicional 3: Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    image: 'logo-fisi.png',
  },
  // Agrega más diapositivas aquí si lo deseas
];

function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <header>
      <div className="slideshow">
        <div className="slide" style={{ backgroundColor: '#621518' }}>
          <div className="slide-content">
            <div className="img-container slide-column">
              <img src={slides[currentSlide].image} alt={`Slide ${currentSlide}`} />
            </div>
            <div className="slide-column">
              <div className="slide-text">{slides[currentSlide].textLeft}</div>
              <div className="slide-text">{slides[currentSlide].textRight}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-buttons">
        <button onClick={goToPrevSlide}>Anterior</button>
        <button onClick={goToNextSlide}>Siguiente</button>
      </div>
    </header>
  );
}

export default Header;
