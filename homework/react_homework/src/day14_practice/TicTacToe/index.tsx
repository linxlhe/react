<<<<<<< HEAD
import React, {useState} from 'react'

type Player = 'X' | 'O';
type SquareValue = Player | null;
=======
import React from "react";
import Solution from "./Solution";
>>>>>>> ca451d1 (tic tac toe)

export default function TicTacToe() {
  const [board, setBoard] = useState(initBoard);

  // change between the player
  const [curPlayer, setCurPlayer] = useState<Player>("X");

  const handleClickCell = (id: number) => {
    // copy the board, only set the cell for the id chosen
    setBoard((prev) =>
      prev.map((cell) => {
        if (cell.id === id) {
          if (cell.player !== null) {
            
          }
        }
      return cell;
        // return cell.id === id
        //   ? ({
        //       ...cell,
        //       player: curPlayer,
        //     } as CellType)
        //   : cell;
      })
    );
    setCurPlayer(curPlayer === "X" ? "O" : "X");
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div>Current Player: {curPlayer}</div>
      <div className="board">
        {board.map((cell) => {
          return (
            <div
              key={cell.id}
              className="cell"
              onClick={() => handleClickCell(cell.id)}
            >
              {cell.player}
            </div>
          );
        })}
      </div>
    </div>
  );
}
