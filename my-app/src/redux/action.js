// src/redux/actions.js

export const SET_PLAY = 'SET_PLAY';
export const START_GAME = 'START_GAME';
export const RESET_GAME = 'RESET_GAME';
export const SET_WINNER = 'SET_WINNER';

export const startGame = () => ({
  type: START_GAME,
});

export const resetGame = () => ({
  type: RESET_GAME,
});

export const setWinner = (winner) => ({
  type: SET_WINNER,
  payload: winner,
});

export const setPlay = (id) => ({
  type: SET_PLAY,
  payload: { id },
});
