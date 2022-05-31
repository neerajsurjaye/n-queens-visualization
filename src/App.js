import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Game from './Scripts/Game';

function App() {

  let [next, setNext] = useState(0);
  let [board, setBoard] = useState(Game());
  let [fin, setFin] = useState(board.getBoard());

  let update = () => {

    if (board.next()) {
      if (board.check()) {
        board.push();
      }
    }
    let b = board.getBoard();
    console.log({ b });
    setFin(b);
    setNext(next + 1);

  }

  let run = () => {
    setInterval(update, 2000);
  }

  useEffect(() => {
    board.init(3);
  }, []);

  return (
    <div className="App">
      <h1>N Queens Visualization</h1>
      <div>

        {/* prints board */}
        {(() => {
          console.log("ran");
          let b = fin;
          let out = [];

          for (let x in b) {
            out.push(<div>{b[x]}</div>);
          }

          return out;
        })()}


      </div>
      <span onClick={update}>Click</span>
    </div>
  );
}


export default App;
