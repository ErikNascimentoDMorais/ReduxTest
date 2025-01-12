import { combineReducers } from 'redux';
import { SET_PLAY, START_GAME, RESET_GAME, SET_WINNER } from './action';

const initialPlayState = {
  squares: Array(9).fill(null),
  actualPlayer: 'X',
  actualPlay: 0,
  winner: null,
};

const initialPageState = {
  page: 'MAIN',
  currentPlayer: 'X',
};

const squaresReducer = (state = initialPlayState, action) => {
  switch (action.type) {
    case SET_PLAY:
      const { id } = action.payload;
      const newSquares = [...state.squares];
      newSquares[id] = state.actualPlayer;
      return {
        ...state,
        squares: newSquares,
        actualPlayer: state.actualPlayer === 'X' ? 'O' : 'X',
        actualPlay: state.actualPlay + 1,
      };
    case RESET_GAME:
      return initialPlayState;
    case SET_WINNER:
      return {
        ...state,
        winner: action.payload,
      };
    default:
      return state;
  }
};

const pageReducer = (state = initialPageState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        page: 'GAME_STARTED',
      };
    case RESET_GAME:
      return initialPageState;
    case 'SET_NEXT_PLAYER':
      return {
        ...state,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  page: pageReducer,
  play: squaresReducer,
});

export default rootReducer;
