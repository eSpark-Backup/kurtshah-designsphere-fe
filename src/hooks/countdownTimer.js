import { useState, useEffect } from "react";

const useCountdownTimer = (initialTime) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          setTimerFinished(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;

  return { timerFinished, formattedTime };
};

export default useCountdownTimer;
