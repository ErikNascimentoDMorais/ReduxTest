import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlay, setWinner } from './redux/action';
import checkWinner from './checkWinner';

const squareStyle = { 
  border: '1vh solid black', 
  width: '7vh', 
  height: '7vh', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  fontSize: '5vh' 
};

const SquareDiv = ({ row = 1, id }) => {
  const dispatch = useDispatch();
  const condition = useSelector(state => state.page.page);
  const currentPlayer = useSelector(state => state.page.currentPlayer);
  const squareValue = useSelector(state => state.play.squares[id]);
  const squares = useSelector(state => state.play.squares);
  const winner = useSelector(state => state.play.winner);

  const handleClick = () => {
    if (condition === 'GAME_STARTED' && !squareValue && !winner) {
      const newSquares = [...squares];
      newSquares[id] = currentPlayer;
      const gameResult = checkWinner(newSquares);
      if (gameResult) {
        dispatch(setWinner(gameResult));
      } else {
        dispatch(setPlay(id));
        dispatch({ type: 'SET_NEXT_PLAYER' });
      }
    }
  };

  return (
    <div
      id={`square${id}`}
      style={squareStyle}
      onClick={handleClick}
    >
      {squareValue}
    </div>
  );
};

export default SquareDiv;
