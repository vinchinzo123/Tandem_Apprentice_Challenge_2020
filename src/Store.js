import React, { useState, createContext, useEffect } from "react";

export const GameContext = createContext({
  questions: [],
  count: 1,
});

const Store = ({ children }) => {
  const [gameState, setGameState] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("gameState"));
    } catch {
      return {
        questions: [],
        count: 1,
      };
    }
  });

  useEffect(() => {
    localStorage.setItem("gameState", JSON.stringify(gameState));
  }, [gameState]);

  return (
    <GameContext.Provider value={[gameState, setGameState]}>
      {children}
    </GameContext.Provider>
  );
};

export default Store;
