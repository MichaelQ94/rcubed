import * as React from "react";
import { useStopwatch } from "../hooks/stopwatch"; // TODO: absolute paths

type AppProps = {
  message: string;
};

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
  const [time, start, stop] = useStopwatch(0);
  const seconds = time / 1000;

  return (
    <div>
      <h1>{props.message}</h1>
      <div>Time: {seconds}</div>
      <button onClick={() => start()}>Start</button>
      <button onClick={() => stop()}>Stop</button>
    </div>
  );
};

export default App;
