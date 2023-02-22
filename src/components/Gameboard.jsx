import '../styles/Gameboard.css';
import IMAGES from '../img/index';
import { useEffect, useState } from 'react';

function Gameboard({ incrementScore, resetScore }) {
  const [cards, setCards] = useState([...IMAGES]);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    shuffle();
  }, []);

  function shuffle() {
    setCards((prevCards) => {
      const newCards = [...prevCards];

      for (let i = 0; i < newCards.length; i++) {
        const index = Math.floor(Math.random() * newCards.length);
        [newCards[i], newCards[index]] = [newCards[index], newCards[i]];
      }

      return newCards;
    });
  }

  function handleClick(id) {
    shuffle();

    if (clicked.includes(id)) {
      setClicked([]);
      resetScore();
    } else {
      setClicked((prevClicked) => [...prevClicked, id]);
      incrementScore();
    }
  }

  return (
    <div className='gameboard'>
      {cards.map((image) => (
        <img
          key={image.id}
          src={image.img}
          alt=''
          onClick={() => handleClick(image.id)}
        />
      ))}
    </div>
  );
}

export default Gameboard;
