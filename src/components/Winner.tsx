import React from 'react';
import classNames from 'classnames';

interface Props {
  winner: boolean;
}

export const Winner: React.FC <Props> = ({winner}) => {
  return (
    <div className={classNames({
      'winner': !winner,
      'winner--visible': winner
    })}>
      You are the winner!!! The end!!!
    </div>
  );
};

