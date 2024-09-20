import { useEffect, useState } from 'react'

const Figures = ({ onFigureClick }) => {
  const [figures, setFigures] = useState(null);
  const [appearTime, setAppearTime] = useState(null);
  const [intervalTime, setIntervalTime] = useState(2000); // Setter intervaltid på 2s
  
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
    const randomize = Math.random() < 0.75 ? set1 : set2;
    const randomId = Math.floor(Math.random() * randomize.length);
    const isPositive = randomize === set1; // Ser om bilde som vises er fra set 1
    
    setFigures({
      src: randomize[randomId],
      isPositive: isPositive,
      x: Math.random() * 80, // Bruker bare 80 % av brettet sin x akse
      y: Math.random() * 80 // Bruker bare 80 % av brettet sin y akse
    });
    setAppearTime(Date.now()); // Setter tiden figuren vises
  };

  randomImage();

  const intervalId = setInterval(randomImage, intervalTime);

  return () => clearInterval(intervalId);
}, [intervalTime]);

const handleClicking = () => {
  if(figures) {
    const presentTime = Date.now(); // Dokumenterer tiden
    const timeDiff = (presentTime - appearTime) / 1000;

    let adjustScore = figures.isPositive
    ? Math.max(0, 100 - timeDiff * 50)
    : -50;

    if(figures.isPositive) {
      setIntervalTime(prevInterval => Math.max(500, prevInterval * 0.95)); // Reduserer intervaltiden med minimum grense på 500ms
    }

    adjustScore = Math.round(adjustScore); // Runder av poengsummen
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