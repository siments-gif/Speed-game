import { useEffect, useState } from 'react'

const Figures = ({ onFigureClick }) => {
  const [figures, setFigures] = useState(null);
  const [appearTime, setAppearTime] = useState(null);
  
  const set1 = [
    "/src/assets/figures/Set1/Backend_bakgrunn.png",
    "/src/assets/figures/Set1/Frontend_bakgrunn.png",
    "/src/assets/figures/Set1/Forretningsutvikler_bakgrunn.png",
    "/src/assets/figures/Set1/Cybersikkerhet_bakgrunn.png"
  ]
  
  const set2 = [
    "/src/assets/figures/Set2/beatriz-camaleao-Idfaz9INph8-unsplash.jpg",
    "/src/assets/figures/Set2/getty-images-67Pcljp4Nzc-unsplash.jpg",
    "/src/assets/figures/Set2/masantocreative-YY2rVoFPJ5g-unsplash.jpg"
  ]

useEffect(() => {
  const randomImage = () => {
    const randomize = Math.random() < 0.25 ? set2 : set1;
    const randomId = Math.floor(Math.random() * randomize.length);
    const isPositive = randomize === set1;
    
    setFigures({
      src: randomize[randomId],
      isPositive: isPositive,
      x: Math.random() * 80,
      y: Math.random() * 80
    });
    setAppearTime(Date.now());
  };

  randomImage();

  const intervalId = setInterval(randomImage, 2000);

  return () => clearInterval(intervalId);
}, []);

const handleClicking = () => {
  if(figures) {
    const presentTime = Date.now();
    const timeDiff = (presentTime - appearTime) / 1000;

    let adjustScore;
    if(figures.isPositive) {
      adjustScore = Math.max(0, 100 - timeDiff * 50);
    } else {
      adjustScore = -50;
    }

    adjustScore = Math.round(adjustScore);

    onFigureClick(adjustScore);
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