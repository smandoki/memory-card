import '../styles/Scoreboard.css';

function Scoreboard(props) {
  return (
    <div className='scoreboard'>
      <h2>Score: {props.score}</h2>
      <h2>Best: {props.best}</h2>
    </div>
  );
}

export default Scoreboard;
