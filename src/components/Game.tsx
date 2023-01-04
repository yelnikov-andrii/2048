import React from 'react';
import classNames from 'classnames';
import { Box } from '../type';
import { Grid } from './Grid';
import { Cell } from './Cell';

interface Props {
  gameOver: boolean;
  cells: Box[];
  boxes: Box[];
}

export const Game: React.FC <Props> = ({gameOver, cells, boxes}) => {
  return (
    <div 
      className={classNames('game', {
      'game--over': gameOver
      })}
    >
      {cells.map(box => (
        <Cell
          box={box}
          key={box.id}
        />
      ))}
        <Grid boxes={boxes}/>
    </div>
  );
};

