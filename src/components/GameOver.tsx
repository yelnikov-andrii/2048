import React from 'react';
import classNames from 'classnames';

interface Props {
  gameOver: boolean;
}

export const GameOver: React.FC <Props> = ({gameOver}) => {
  return (
    <div className={classNames({
      'gameOver--visible': gameOver,
      'gameOver': !gameOver,
    })}>
      Game over!!! Try again!!!
    </div>
  );
};

