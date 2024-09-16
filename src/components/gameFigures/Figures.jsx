/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const importAllImages = (glob) => {
  return Object.values(glob).map((image) => image)
}

const Figures = ({ onFigureClick }) => {
  const [figures, setFigures] = useState(null);
  
  const set1 = [
    "/src/assets/figures/Set1/Backend_bakgrunn.png",
    "/src/assets/figures/Set1/Backend_bakgrunn.png",
    "/src/assets/figures/Set1/Backend_bakgrunn.png",
    "/src/assets/figures/Set1/Backend_bakgrunn.png"
  ]
  
  const set2 = [
    "/src/assets/figures/Set2/beatriz-camaleao-Idfaz9INph8-unsplash.jpg",
    "/src/assets/figures/Set2/getty-images-67Pcljp4Nzc-unsplash.jpg",
    "/src/assets/figures/Set2/masantocreative-YY2rVoFPJ5g-unsplash.jpg"
  ]

useEffect(() => {
  const randomImage = () => {
    const randomize = Math.random() < 0.5 ? set1 : set2;
    const randomId = Math.floor(Math.random() * randomize.length);
    const isPositive = randomize === set1;
    
    setFigures({
      src: randomize[randomId],
      isPositive: isPositive,
      x: Math.random() * 80,
      y: Math.random() * 80
    });
  };

  randomImage();

  const intervalId = setInterval(randomImage, 2000);

  return () => clearInterval(intervalId);
}, []);

const handleClicking = () => {
  if(figures) {
    onFigureClick(figures.isPositive);
    setFigures(null);
  }
};

  return (
    <div>
      {figures && (
        <img 
          src={figures.src}
          alt="figure"
          className='clickableFigure'
          style={{
            position: "absolute",
            top: `${figures.y}%`,
            left: `${figures.x}%`
          }}
          onClick={handleClicking}
        />
      )}
    </div>
  )
}

export default Figures