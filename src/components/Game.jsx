import { Button } from '@material-ui/core';
import React, {
  useState, useEffect
} from 'react';
import '../components/game.css'


const Square = ({ takeTurn, id, player, newState }) => {
  const [color, setColor] = useState('green');
  const [status, setStatus] = useState(null);
  const xo = ['o', 'x'];

  const pallet = ['red', 'blue', 'green'];
  const getRamdomColor = () => pallet[Math.floor(Math.random() * 3)];

  useEffect(() => {
    console.log(`Render  ${id}`)
    return () => console.log(`Unmounting  ${id}`)
  });
  return (
    <Button className='button-cell'

      onClick={(event) => {
        let col = getRamdomColor()
        setColor(col);
        let nextPlayer = newState({ id: id, color: col });
        setStatus(nextPlayer)
        event.target.style.backgroundColor = color;
            
      }}
      >
      {/* {id} */}
      <h1>{ xo[status]}</h1>
    </Button>)

  }
  
const Board = () => {
  const [player, setPlayer] = useState(1);
  const [state, setState] = useState([]);

/*     const [mounted, setMounted] = useState(true) */
/*     const toggle = () => setMounted(!mounted); */
  
  let status = `Player ${player}`;
  
  const newState = (ob) => {
    let nextPlayer = (player + 1) % 2;
    setPlayer(nextPlayer);
    setState([...state, ob]);
    console.log(`adding state ${JSON.stringify(state)}`);
    status = `Player ${nextPlayer}`;
    return nextPlayer
  }

  const takeTurn = (id) => {
    setPlayer((player + 1) % 2); // get next player
    return player;
  };

  function renderSquare (id) {
    return <Square takeTurn = {takeTurn} id={id} player={player} newState = {newState} ></Square>
  }

  return (
    <div>
      <div>
        {/*  mounted &&  */renderSquare(1)}
        {/*  mounted &&  */renderSquare(2)}
        {/*  mounted &&  */renderSquare(3)}
      </div>
      <div>
        {/*  mounted &&  */renderSquare(4)}
        {/*  mounted &&  */renderSquare(5)}
        {/*  mounted &&  */renderSquare(6)}
      </div>
      <div>
        {/*  mounted &&  */renderSquare(7)}
        {/*  mounted &&  */renderSquare(8)}
        {/*  mounted &&  */renderSquare(9)}
      </div>
      <div id='info'>
        <h1>{status}</h1>
{/*     <button onClick={toggle}>
          Show/Hide Rowb
        </button> */}
      </div>
    </div>
  )
}
  
  
function Game() {


  return (
    <div className="Game">
      <div className="Game-body">
        <Board></Board>
      </div>
    </div>
  );
}

export default Game;