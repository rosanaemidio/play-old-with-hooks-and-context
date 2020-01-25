import React, { createContext, useState } from 'react';

const [squares, setSquare] = useState(Array(9).fill(null));
const [isXNext, setIsXNext] = useState(true);
const [winner, setWinner] = useState(null);
const [history, setHistory] = useState([]);

const GameContext = createContext({
  squares,
  setSquare,
  isXNext,
  setIsXNext,
  winner,
  setWinner,
  history,
  setHistory,
});

export default GameContext;
// value={{
//   squares,
//   setSquare,
//   isXNext,
//   setIsXNext,
//   winner,
//   setWinner,
//   history,
//   setHistory,
// }}
