import * as React from "react";
import "./app.scss";

type AppProps = {
  message: string;
};

/**
 * Sample App
 */
const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
  return (
    <div className={"container"}>
      <h1 className={"header shifting-rainbow-text"}>{props.message}</h1>
    </div>
  );
};

export default App;
