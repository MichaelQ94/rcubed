import { useState, useEffect, useMemo } from "react";

type StartFunction = () => StopFunction;
type StopFunction = () => void;

export type StopwatchHook = {
  elapsedTime: number;
  isRunning: boolean;
  start: StartFunction;
  stop: StopFunction;
};

export function useStopwatch(): StopwatchHook {
  const checkWindow = 10; // milliseconds
  const [startTime, setStartTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setRunning] = useState(false);

  const elapsedTime = useMemo(() => currentTime - startTime, [
    startTime,
    currentTime,
  ]);

  useEffect(() => {
    if (isRunning) {
      setStartTime(performance.now());
      const id = setInterval(
        () => setCurrentTime(performance.now()),
        checkWindow,
      );
      return () => {
        setCurrentTime(performance.now());
        clearInterval(id);
      };
    }
    return undefined;
  }, [isRunning]);

  const stop = () => setRunning(false);
  const start = () => {
    setRunning(true);
    return stop;
  };

  return {
    elapsedTime,
    isRunning,
    start,
    stop,
  };
}
