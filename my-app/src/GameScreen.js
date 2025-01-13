import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SquareDiv from './square_div';
import { resetGame } from './redux/action';
import { useNavigate } from 'react-router-dom';

function GameScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const winner = useSelector(state => state.play.winner);
  const currentPlayer = useSelector(state => state.page.currentPlayer);
  const actualPlay = useSelector(state => state.play.actualPlay);

  React.useEffect(() => {
    if (winner) {
      navigate('/winner');
    }
  }, [winner, navigate]);

  const handleResetGame = () => {
    dispatch(resetGame());
  };

  return (
    <div className="App">
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
              <div className='game-info'>
                <p>Jogador atual: {currentPlayer}</p>
                <p>Número da jogada: {actualPlay}</p>
              </div>
            </div>
            <div id='tic-tac-toe' className='col-12'>
              <div id='row1' className='row justify-content-center'>
                {[0, 1, 2].map(id => <SquareDiv key={id} row={1} id={id} />)}
              </div>
              <div id='row2' className='row justify-content-center'>
                {[3, 4, 5].map(id => <SquareDiv key={id} row={2} id={id} />)}
              </div>
              <div id='row3' className='row justify-content-center'>
                {[6, 7, 8].map(id => <SquareDiv key={id} row={3} id={id} />)}
              </div>
            </div>
            <div className='col-12 d-flex justify-content-center'>
              <div className='d-flex align-items-center'>
                <button onClick={handleResetGame} className='btn bg-dark text-white' style={{ height: 'auto' }}>
                  Reset Game
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GameScreen;
