import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startGame } from './redux/action';

function MainScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStartGame = () => {
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
              <button onClick={handleStartGame} className='btn bg-dark text-white' style={{ height: 'auto' }}>
                Start Game
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer>Writed by Erik Nascimento 11/01/2025</footer>
    </div>
  );
}

export default MainScreen;
