import * as React from "react";
import { Layout, Display, JustifyContent } from "ui";
import { useStopwatch } from "hooks/stopwatch";
import "./app.scss";

type AppProps = {
  message: string;
};

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
  const { elapsedTime, start, stop, isRunning } = useStopwatch();
  const elapsedSeconds = React.useMemo(() => (elapsedTime / 1000).toFixed(2), [
    elapsedTime,
  ]);
  const toggle = React.useCallback(() => (isRunning ? stop() : start()), [
    isRunning,
  ]);

  return (
    <Layout
      display={Display.Flex}
      justifyContent={JustifyContent.Center}
      className="container"
    >
      <Layout
        margin={{ x: 1, y: 1 }}
        padding={{ x: 1, y: 1 }}
        className="header"
      >
        <h1 className="shifting-rainbow-text">{props.message}</h1>
        <h2 className="shifting-rainbow-text">{elapsedSeconds}</h2>
        <button onClick={() => toggle()}>{isRunning ? "Stop" : "Start"}</button>
      </Layout>
    </Layout>
  );
};

export default App;
