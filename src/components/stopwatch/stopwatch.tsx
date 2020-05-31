import React, { FunctionComponent } from "react";
import useStopwatch from "hooks/use-stopwatch";
import { Layout, Box } from "ui";
import "./style.scss";

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
      <Box>
        <span className="elapsedTime">{elapsedSeconds}</span>
      </Box>
    </Layout>
  );
};

export default Stopwatch;
