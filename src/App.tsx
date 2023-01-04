import React, { useState } from 'react';
import { Game } from './components/Game';
import { GameOver } from './components/GameOver';
import { Menu } from './components/Menu';
import { Winner } from './components/Winner';
import { generateDigit, addNewDigit } from './functions/addNewDigit';
import { initialBoxes } from './initialBoxes';
import { moveUp } from './functions/moveUp';
import { moveDown } from './functions/moveDown';
import { moveRight } from './functions/moveRight';
import { moveLeft } from './functions/moveLeft';
import { checkTheGame } from './functions/checkTheGame';

function App() {
  const [boxes, setBoxes] = useState(initialBoxes);
  const [start, setStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);

  React.useEffect(() => {
    if (start) {
    const digit = generateDigit();
    const copy = JSON.parse(JSON.stringify(initialBoxes));
    copy[digit].value = 2;
    addNewDigit(copy);
    setBoxes(copy);
    setStart(false);
    }
  }, [start]);

  React.useEffect(() => {
    document.addEventListener("keydown", press);
    return () => document.removeEventListener("keydown", press);
  });

  const cells = boxes.filter((box: any) => box.value > 0);

  function press(e: any) {
    const arr = JSON.parse(JSON.stringify(boxes));

    switch(e.key) {
      case 'ArrowUp':
        const res1 = moveUp(arr);
        setWinner(res1[1]);
        setBoxes(res1[0]);
        break;
      case 'ArrowDown':
        const res2 = moveDown(arr);
        setWinner(res2[1]);
        setBoxes(res2[0]);
        break;
        case 'ArrowLeft':
          const res3 = moveLeft(arr);
          setWinner(res3[1]);
          setBoxes(res3[0]);
        break;
        case 'ArrowRight':
          const res4 = moveRight(arr);
          setWinner(res4[1]);
          setBoxes(res4[0]);
        break;
      default:
        return;
    }
      setGameOver(checkTheGame(boxes, cells));
  }

  return (
    <div className="App">
      <Game 
        gameOver={gameOver}
        cells={cells}
        boxes={boxes}
      />
      <Menu 
        gameOver={gameOver}
        cells={cells}
        setStart={setStart}
        setWinner={setWinner}
        winner={winner}
        setGameOver={setGameOver}
      />
      <GameOver 
        gameOver={gameOver}
      />
      <Winner 
        winner={winner}
      />
    </div>
  );
}

export default App;
