import { useState, useEffect } from "react";
import "./App.css";

export default function Timer({ startTime }) {
  const [time, setTime] = useState(startTime);
  const [isPaused, setIsPaused] = useState(false);

  const pauseTimer = () => {
    setIsPaused(true);
  };

  const continueTimer = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    if (!isPaused) {
      const intervalId = setInterval(() => {
        if (time === 0) {
          clearInterval(intervalId);
        } else {
          setTime((t) => t - 1);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isPaused, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return (
    <div className="timerContainer">
      {minutes}:{seconds}
      <button onClick={pauseTimer}>Pause timer
      </button>
      <button onClick={continueTimer}>Continue timer</button>
    </div>
  );
}
