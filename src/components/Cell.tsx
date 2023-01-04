import React from 'react';
import classNames from 'classnames';
import { Box } from '../type';

interface Props {
  box: Box;
}

export const Cell: React.FC <Props> = ({box}) => {
  return (
    <div 
      className={classNames('box', 
        `box--${box.value}`, {
        'box--eightAndMore': box.value >= 8,
      })}
      style={{top: box.y * 100 + 18 + box.y * 10, left: box.x * 100 + 18 + box.x * 10}}
    >
      {box.value !== 0 && box.value}
    </div>
  );
};

