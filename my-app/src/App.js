import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainScreen from './MainScreen';
import GameScreen from './GameScreen';
import WinnerScreen from './WinnerScreen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/tic-tac-toe" element={<GameScreen />} />
      <Route path="/winner" element={<WinnerScreen />} />
    </Routes>
  );
}

export default App;
