import * as React from "react";

type InternalStopwatchState = {
  currentTime: number;
  startTime: number;
  running: boolean;
};

type TickAction = {
  type: "TICK";
  milliseconds: number;
};
type StopAction = {
  type: "STOP";
};
type StartAction = {
  type: "START";
};
type StopwatchActions = TickAction | StopAction | StartAction;

type StopwatchReducer = (
  state: InternalStopwatchState,
  action: StopwatchActions,
) => InternalStopwatchState;

type StartFunction = () => () => void;
export type StopwatchHookResult = [number, StartFunction];

export function useStopwatch(): StopwatchHookResult {
  const timeoutInterval = 10;
  const initState = {
    currentTime,
    running: true,
  };
  const [state, dispatch] = React.useReducer<StopwatchReducer>(
    (state, action) => {
      switch (action.type) {
        case "TICK":
          return {
            ...state,
            time: state.time + action.milliseconds,
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
      const id = setTimeout(() => dispatch("TICK"), timeoutInterval);
      return () => clearTimeout(id);
    }
  });

  function start() {
    dispatch({ type: "START" });
    return function stop() {
      dispatch({ type: "STOP" });
    };
  }

  return [state.time, start];
}

function start() {
  const startTime = performance.now();
  return function stop() {
    const stopTime = performance.now();
    return stopTime - startTime;
  };
}
