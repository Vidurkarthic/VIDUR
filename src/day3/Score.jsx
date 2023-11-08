import React from "react";
import { setState } from "react";
const Score = () => {
  const [score, setScore] = setState(0);
  const [wicket, setWicket] = setState(0);
  return (
    <div>
      <h1>Runs {score}</h1>
      <h2>Wicket {wicket}</h2>
      <button
        onClick={() => {
          setScore(score + 1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setScore(score + 2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setScore(score + 4);
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          setScore(score + 6);
        }}
      >
        6
      </button>
      <button
        onClick={() => {
          setWicket(wicket + 1);
        }}
      >
        Wicket
      </button>
    </div>
  );
};

export default Score;
