import React, { useState } from 'react';
import './Header.css';

const slides = [
  {
    text: 'Texto de la diapositiva 1:  Lorem ipsum dolor sit amet consectetur adipisicing elit... ',
    image: 'image1.jpg',
  },
  {
    text: 'Texto de la diapositiva 2: Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    image: 'image2.jpg',
  },
  {
    text: 'Texto de la diapositiva 3: Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    image: 'image3.jpg',
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
        <div className="slide">
          <img src={slides[currentSlide].image} alt={`Slide ${currentSlide}`} />
          <p>{slides[currentSlide].text}</p>
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
