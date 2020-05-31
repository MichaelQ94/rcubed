import React, { FunctionComponent } from "react";
import useStopwatch from "components/stopwatch/use-stopwatch";
import { Layout, Box } from "ui";
import "./style.scss";

const Stopwatch: FunctionComponent = () => {
  const [elapsedTime, isRunning, start, stop] = useStopwatch();
  const clickHandler = React.useCallback(() => (isRunning ? stop() : start()), [
    start,
    stop,
    isRunning,
  ]);

  const toTimeString = (time: number): string => (time / 1000).toFixed(2);

  const textToDisplay = React.useMemo(
    () => (isRunning || elapsedTime > 0 ? toTimeString(elapsedTime) : "Start"),
    [isRunning, elapsedTime],
  );

  return (
    <Layout onClick={clickHandler} className="boxContainer">
      <Box className={"stopwatchBox"}>
        <span className="elapsedTime">{textToDisplay}</span>
      </Box>
    </Layout>
  );
};

export default Stopwatch;
