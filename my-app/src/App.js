import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SquareDiv from './square_div.js';
import { startGame, resetGame } from './redux/action';

function App() {
  const dispatch = useDispatch();
  const page = useSelector(state => state.page.page);
  const winner = useSelector(state => state.play.winner);

  const handleStartResetGame = () => {
    if (page === 'GAME_STARTED') {
      dispatch(resetGame());
    } else {
      dispatch(startGame());
    }
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
            <div id='tic-tac-toe' className='col-12'>
              {winner && <div className='winner-message'>{winner === 'Draw' ? 'Empate!' : `${winner} venceu!`}</div>}
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
                <button onClick={handleStartResetGame} className='btn bg-dark text-white' style={{ height: 'auto' }}>
                  {page === 'GAME_STARTED' ? 'Reset Game' : 'Start Game'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>Writed by Erik Nascimento 11/01/2025</footer>
    </div>
  );
}

export default App;
