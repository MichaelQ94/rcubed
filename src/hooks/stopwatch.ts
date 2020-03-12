import * as React from "react";

type StopwatchState = {
  time: number;
  stopped: boolean;
};
type StopwatchActions = "TICK" | "STOP" | "START";
type StopwatchReducer = (
  state: StopwatchState,
  action: StopwatchActions,
) => StopwatchState;

export type VoidFunction = () => void;
export type StopwatchHook = [number, VoidFunction, VoidFunction];

export function useStopwatch(startTime: number): StopwatchHook {
  const tickSize = 10;
  const initState = {
    time: startTime,
    stopped: true,
  };
  const [state, dispatch] = React.useReducer<StopwatchReducer>(
    (state, action) => {
      switch (action) {
        case "TICK":
          return {
            ...state,
            time: state.time + tickSize,
          };
        case "STOP":
          return {
            ...state,
            stopped: true,
          };
        case "START":
          return {
            ...state,
            stopped: false,
          };
        default:
          return state;
      }
    },
    initState,
  );

  React.useEffect(() => {
    if (!state.stopped) {
      const id = setTimeout(() => dispatch("TICK"), tickSize);
      return () => clearTimeout(id);
    }
  });

  function start() {
    return dispatch("START");
  }

  function stop() {
    return dispatch("STOP");
  }

  return [state.time, start, stop];
}
