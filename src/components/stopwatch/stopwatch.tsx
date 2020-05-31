import React, { FunctionComponent } from "react";
import useStopwatch from "hooks/use-stopwatch";
import { Layout } from "ui";

const Stopwatch: FunctionComponent = () => {
  const { elapsedTime, start, stop, isRunning } = useStopwatch();
  const clickHandler = React.useCallback(() => (isRunning ? stop() : start()), [
    start,
    stop,
    isRunning,
  ]);
  const elapsedSeconds = (elapsedTime / 1000).toFixed(2);

  return (
    <Layout onClick={clickHandler}>
      <span>{elapsedSeconds}</span>
    </Layout>
  );
};

export default Stopwatch;
