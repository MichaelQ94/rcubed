import { useState, useEffect } from "react";

type StartFunction = () => void;
type StopFunction = () => void;

export type StopwatchHook = {
  elapsedTime: number;
  isRunning: boolean;
  start: StartFunction;
  stop: StopFunction;
};

/**
 * Single lap stopwatch/timer.
 * @param approxUpdateResolution interval at which to update elapsedTime
 */
function useStopwatch(
  approxUpdateResolution = 10 /** milliseconds */,
): StopwatchHook {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }

    const startTime = performance.now();
    const id = setInterval(
      () => setElapsedTime(performance.now() - startTime),
      approxUpdateResolution,
    );
    return (): void => {
      setElapsedTime(performance.now() - startTime);
      clearInterval(id);
    };
  }, [approxUpdateResolution, isRunning]);

  const stop: StopFunction = () => setRunning(false);
  const start: StartFunction = () => setRunning(true);

  return {
    elapsedTime,
    isRunning,
    start,
    stop,
  };
}

export default useStopwatch;
