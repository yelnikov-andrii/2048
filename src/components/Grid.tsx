import React from 'react';
import { Box } from '../type';

interface Props {
  boxes: Box[];
}

export const Grid: React.FC <Props> = ({boxes}) => {
  return (
    <div className='grid'>
      {boxes.map(box => (
        <div key={box.id} className="grid__cell">
        </div>
      ))}
    </div>
  );
};

