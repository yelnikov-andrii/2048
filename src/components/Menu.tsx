import React, {Dispatch, SetStateAction} from 'react';
import { Box } from '../type';

interface Props {
  gameOver: boolean;
  setStart: Dispatch<SetStateAction<boolean>>;
  setWinner: Dispatch<SetStateAction<boolean>>;
  cells: Box[];
  winner: boolean;
  setGameOver: Dispatch<SetStateAction<boolean>>;
}

export const Menu: React.FC <Props> = ({gameOver, setStart, setWinner, cells, winner, setGameOver}) => {
  return (
    <div className='menu'>
      <button 
        className='menu__button' 
        onClick={(e) => {
          e.preventDefault()
          setStart(true);
          if (gameOver) {
            setGameOver(false)
          }

          if (winner) {
            setWinner(false)
          }
        }}
      >
        {cells.length > 0 ? 'Restart' : 'Start'}
      </button>
    </div>
  );
};

