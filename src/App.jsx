import { useState } from 'react';
import './styles/App.css';
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';

function App() {
  const [score, setScore] = useState({
    score: 0,
    best: 0,
  });

  function incrementScore() {
    setScore((prevScore) => {
      const score = prevScore.score + 1;
      const best = score > prevScore.best ? score : prevScore.best;

      return { score, best };
    });
  }

  function resetScore() {
    setScore((prevScore) => ({ ...prevScore, score: 0 }));
  }

  return (
    <div className='app'>
      <header>
        <h1>Memory Game</h1>
      </header>
      <Scoreboard {...score} />
      <Gameboard incrementScore={incrementScore} resetScore={resetScore} />
    </div>
  );
}

export default App;
