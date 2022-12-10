import React, { useState } from 'react';
import styles from './TicTacToe.module.css';
import { Alert,AlertTitle } from '@mui/material';

const TicTacToe = () => {
  const [board, setBoard] = useState(['','','','','','','','','']);
  const [player, setPlayer] = useState('X');

  const play = (index: number) => {
    if (board[index] === '') {
      board[index] = player;
      setBoard(board);
      setPlayer(player === 'X' ? 'O' : 'X');
    }
  };

  const getWinner = () => {
    let winPositions = [
      [0,1,2],
      [3,4,5], 
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [6,4,2]
    ];

    for (let positions of winPositions) {
      if (board[positions[0]] == board[positions[1]] && board[positions[1]] == board[positions[2]]) {
        return board[positions[0]]
      }
    }
  }

  return (
    <div
      className={styles.container}
    >
      {board.map((element, index) =>
          <div
            key={index}
            onClick={() => play(index)}
            className={styles.cell}
          >
            {element}
          </div>
      )}
      {getWinner() && <Alert severity="info" style={{width:'270px',marginTop:'1rem'}}>
            {getWinner()} wins!
                    </Alert>}
             </div>
  );
};


export default TicTacToe;