import * as React from "react";
import { Layout, Display, JustifyContent } from "ui";
import Stopwatch from "components/stopwatch";
import "./app.scss";

type AppProps = {
  message: string;
};

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
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
        <Stopwatch />
      </Layout>
    </Layout>
  );
};

export default App;
