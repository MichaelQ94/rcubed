import React, { FunctionComponent } from "react";
import useStopwatch from "hooks/use-stopwatch";
import { Layout } from "ui";

const Stopwatch: FunctionComponent = () => {
  const { elapsedTime, start, stop, isRunning } = useStopwatch();
  const buttonLabel = React.useMemo(() => (isRunning ? "Stop" : "Start"), [
    isRunning,
  ]);
  const clickHandler = React.useCallback(() => (isRunning ? stop() : start()), [
    start,
    stop,
    isRunning,
  ]);
  const elapsedSeconds = (elapsedTime / 1000).toFixed(2);

  return (
    <Layout>
      <h2 className="shifting-rainbow-text">{elapsedSeconds}</h2>
      <button onClick={clickHandler}>{buttonLabel}</button>
    </Layout>
  );
};

export default Stopwatch;
