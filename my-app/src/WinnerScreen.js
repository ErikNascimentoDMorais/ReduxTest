import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetGame, startGame } from './redux/action';

function WinnerScreen() {
  const winner = useSelector(state => state.play.winner);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    dispatch(resetGame());
    dispatch(startGame());
    navigate('/tic-tac-toe');
  };

  return (
    <div className="container">
      <header className='bg-dark text-white justify-content-center'>
        <div className='container'>
          <div className='row' style={{ height: '8vh' }}>
            <h1 className='col-12'>Tic-Tac-Toe 30000</h1>
          </div>
        </div>
      </header>
      <main>
        <div className='container'>
          <div className='row justify-content-center align-items-center' style={{ height: '88vh' }}>
            <div className='col-12 d-flex justify-content-center'>
              <div className='winner-message'>
                {winner === 'Draw' ? 'Empate!' : `${winner} venceu!`}
              </div>
            </div>
            <div className='col-12 d-flex justify-content-center'>
              <button onClick={handlePlayAgain} className='btn bg-dark text-white' style={{ height: 'auto' }}>
                Play Again
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer>Writed by Erik Nascimento 11/01/2025</footer>
    </div>
  );
}

export default WinnerScreen;
